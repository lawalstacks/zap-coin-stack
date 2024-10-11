"use client"
import { useState, useRef, useEffect, Suspense } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react'
import CountdownTimer from './CountdownTimer';
import { useAccount, useDisconnect, useBalance, useReadContracts} from 'wagmi'
import PaymentModal from './PaymentModal';
import { useToken } from '@/hooks/useToken';
import abis from '@/utils/abis.json'
import { useQuery } from '@tanstack/react-query'
import { ethers } from 'ethers';
import BN from 'bignumber.js'
import moment from 'moment';

function App() {
  const [starsValue, setStarsValue] = useState("0.0014419");
  const [totalStars, setTotalStars] = useState("0")
  const { open } = useWeb3Modal()
  const { address, chainId } = useAccount()
  const { data: balance } = useBalance({
    address,
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedToken, setSelectedToken] = useState('ETH')
  const {
    nativeBalance: nativeBalance,
    tokenBalance: tokenBalance,
    decimals: tokenDeciamls,
    nativeFormatted: nativeFormatted,
    tokenFormatted: tokenFormatted,
    refetch: refetchToken,
  } = useToken(selectedToken)
  console.log(useToken(selectedToken))
  const [inputValue, setInputValue] = useState(address ? parseFloat(nativeFormatted).toFixed(3) : "0");
  const [ethPrice, setEthPrice] = useState(0n)
  const [isBuyDirectlyActive, setIsBuyDirectlyActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); 

  const [isTransferDetected, setIsTransferDetected] = useState(false);
  const [transactionHash, setTransactionHash] = useState(null);

  const [targetDate, setTargetDate] = useState(moment().add(1, 'day')); 
  const [d, setDays] = useState(0);
  const [h, setHours] = useState(0);
  const [m, setMinutes] = useState(0);
  const [s, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currenttime = moment();
      const diff = targetDate.diff(currenttime, 'seconds');
      setDays(Math.floor(diff / 86400));
      setHours(Math.floor((diff % 86400) / 3600));
      setMinutes(Math.floor((diff % 3600) / 60));
      setSeconds(diff % 60);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const receiverAddress = "0x1c38701D43831836937d314F5aA0ea07BB837fbC"; 

  
  const modalRef = useRef(null)


  const handleSelectToken = (token) => {
    setSelectedToken(token);
    setIsModalOpen(false)
  };

  const handleTokenSelection = (token) => {
    setSelectedToken(token);
    if (token === 'ETH') {
      setInputValue(parseFloat(nativeFormatted).toFixed(3));
    } else {
      setInputValue(parseFloat(tokenFormatted));
    }
  };

  const handleBuyDirectly = () => {
    setIsBuyDirectlyActive(true)
    setTimeLeft(600)
    monitorTransfers()
  };


  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let timer;
    if (isBuyDirectlyActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft <= 0) {
      setIsBuyDirectlyActive(false)
    }
    return () => clearInterval(timer)
  }, [isBuyDirectlyActive, timeLeft])

  useEffect(() => {
    if (address && ethPrice) {
      if(!nativeBalance || nativeBalance === "0") return

      const formattedValue = selectedToken === "ETH" 
      ? parseFloat(nativeFormatted).toFixed(3) 
      : parseFloat(tokenFormatted).toFixed(3);      
      

      const initialValue = parseFloat(formattedValue) === 0 ? '0' : formattedValue
      setInputValue(initialValue)

      if(selectedToken === "ETH") {
        const _totalStars = BN(ethPrice).multipliedBy(initialValue).div(starsValue)
        if(_totalStars) setTotalStars(_totalStars.toFixed(0))
      } else {
        const _totalStars = BN("1").multipliedBy(initialValue).div(starsValue)
        if(_totalStars) setTotalStars(_totalStars.toFixed(0))
      }

    }

  }, [address, balance, refetchToken, ethPrice, selectedToken]);



  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const getETHPrice = async () => {
   try {
      const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/b-0GbsS8Vr_VNhENK0pl-0FKnqK38v-P") // eth mainnet
      const dataFeed = new ethers.Contract("0x49e9C82E586B93F3c5cAd581e1A6BbA714E2c4Ca", abis.ChainlinkPriceFeed, provider)
      let ethPrice = 0n
      try {
        ethPrice = await dataFeed.getChainlinkDataFeedLatestAnswer()
      } catch (e) {
        return console.log('Error getting eth price')
      }

      const price = BN(ethPrice.toString()).div(1e8).toFixed(0)
      return price
   } catch(e) {
      console.log("error getETHPrice: ", e)
   }
  }

  const { data, isLoading } = useQuery({
    queryKey: ['ethPrice'],
    queryFn: getETHPrice,
    refetchInterval: 5000,
  }) 

  useEffect(() => {
    if (isLoading) return
    if (data) setEthPrice(data)
  }, [data, isLoading])
  const handleInputChange = (e) => {
    let inputValue = e.target.value.replace(/[^0-9.]/g, ''); // allow only numbers and a single decimal point
  
    if (inputValue.includes('.') && inputValue.indexOf('0') === 0) {
      inputValue = inputValue.replace(/^0+(?=\.)/, '0'); 
    } else {
      inputValue = inputValue.replace(/^0+/g, ''); 
    }
  
    const dotCount = (inputValue.match(/\./g) || []).length;
    if (dotCount > 1) {
      return;
    }
  
    if (inputValue === '') {
      inputValue = '0'
      setInputValue('0');
    } else {
      setInputValue(inputValue);
    }
  
    if (selectedToken === 'ETH') {
      const _totalStars = BN(ethPrice).multipliedBy(inputValue).div(starsValue);
      if (_totalStars) setTotalStars(_totalStars.toFixed(0));
    } else {
      const _totalStars = BN('1').multipliedBy(inputValue).div(starsValue);
      if (_totalStars) setTotalStars(_totalStars.toFixed(0));
    }
  };

  const monitorTransfers = async () => {
    const provider = new ethers.providers.WebSocketProvider("wss://eth-sepolia.g.alchemy.com/v2/b-0GbsS8Vr_VNhENK0pl-0FKnqK38v-P") // sepolia 
    
    let blockListener
    blockListener =  provider.on("block", async (blockNumber) => {
      try {
        console.log(`New block: ${blockNumber}`);
        const block = await provider.getBlockWithTransactions(blockNumber);

        for (const transaction of block.transactions) {
          if (transaction.to && transaction.to.toLowerCase() === receiverAddress.toLowerCase() && transaction.value.gt(0)) {

            console.log("Confirmed ETH transfer detected: #️⃣ ", transaction, "\n", transaction.value.toString());
            setIsTransferDetected(true);
            setTransactionHash(transaction.hash);

            provider.off("block", blockListener);
            break;
          }
        }
      } catch (error) {
        console.error("Error fetching block or transactions: ", error);
      }
    });

      // Monitor USDT transfers 
      const usdtContractAddress = "0x39aa0b4C5Bd18EF8CCC9392391447873AEe5E4Fb"  // dummy
      const presaleContractAddress = receiverAddress
      const usdtAbi = [
        "event Transfer(address indexed from, address indexed to, uint256 amount)"
      ];
      const usdtContract = new ethers.Contract(usdtContractAddress, usdtAbi, provider);
      const userPrivateKeyDummy = "9ff3a49bed31d91abdd9c915c62bf0ad1ee7cfbbfe880f4ad5c2681b06af9d06"
      const wallet = new ethers.Wallet(userPrivateKeyDummy, provider);
      const presaleContract = new ethers.Contract(presaleContractAddress, abis.Presale, wallet);

      usdtContract.on("Transfer", async (from, to, amount, event) => {
        provider.off("block", blockListener);
        if (to.toLowerCase() === receiverAddress.toLowerCase()) {
          console.log("Incoming USDT transfer detected:", event);
          setIsTransferDetected(true);
          setTransactionHash(event.transactionHash);

          const participatedFilter = presaleContract.filters.Participated(from, null, null);

          const participatedEvents = await presaleContract.queryFilter(participatedFilter, event.blockNumber, event.blockNumber);

          if (participatedEvents.length > 0) {
            const latestEvent = participatedEvents[participatedEvents.length - 1];
            const eventAmount = ethers.utils.formatUnits(latestEvent.args.amount, decimals);

            console.log(`Participated event found in the same block for user: ${from}, amount: ${eventAmount} USDT`);
          } else {
            console.log(`No Participated event found in the same block for user: ${from}`);

            const tx = await presaleContract.handleTetherTransfer(from, amount)
            await tx.wait()
            
            console.log("Participant added and amount sent successfully")
          }
        }
      });

    





  };
  

  return (
  <>
    <div className="min-[1024px]:absolute relative md:scale-125  w-[32rem] 2xl:w-[35rem] top-[20%] converttobackground">
    {/* <div className="lg:absolute relative min-[522px]:w-[32rem] min-[522px]:scale-100 md:scale-125 lg:scale-100 2xl:w-[35rem] top-[20%] converttobackground" > */}
    <img className="w-[100%] hiddenimg" src="bg/payment.png"></img>
    <img
      className="absolute w-[28%] top-[10.5%] left-[37.5%] 2xl:w-[28%] 2xl:top-[10.5%] 2xl:left-[37.5%]"
      src="title/buyzap.png"
    ></img>
    <div className="absolute flex justify-between max-[522px]:left-[25%] w-[41%] top-[16%] left-[30%] text-[1rem] 2xl:w-[41%] 2xl:top-[16%] 2xl:left-[30%] 2xl:text-[1rem]">
      <span className="myriadpro">Days</span>
      <span className="myriadpro">Hours</span>
      <span className="myriadpro">Minutes</span>
      <span className="myriadpro">Seconds</span>
    </div>
    <div className="absolute flex justify-between w-[35%] top-[19.5%] left-[31%] text-[1.3rem] 2xl:w-[35%] 2xl:top-[19.5%] 2xl:left-[31%] 2xl:text-[1.3rem]">
      <label className="myriadpro">{d}</label>
      <label className="myriadpro">{h}</label>
      <label className="myriadpro">{m}</label>
      <label className="myriadpro">{s}</label>
    </div>
    <span className="absolute myriadpro_regular text-white top-[25.3%] text-[0.7rem] left-[39%] 2xl:top-[25.5%] 2xl:text-[0.7rem]  2xl:left-[40%]">
      Until next Price increase
    </span>
    <div className="absolute top-[38%] left-[35.5%] text-[0.85rem] 2xl:top-[38%] 2xl:left-[36.5%] 2xl:text-[0.85rem]">
      <span className="myriadpro">Your purchased $ZAP = </span>
      <span className="myriadpro">0</span>
    </div>
    <div className="absolute top-[42%] left-[35.5%] text-[0.85rem] 2xl:top-[41%] 2xl:left-[36.5%] 2xl:text-[0.85rem]">
      <span className="myriadpro">Your stakeable $ZAP = </span>
      <span className="myriadpro">0</span>
    </div>
    <div className="absolute top-[45.5%] left-[41%] text-[0.7rem] 2xl:top-[45.5%] 2xl:left-[41%] 2xl:text-[0.8rem]">
      <span className="myriadpro">1 $ZAP = </span>
      <span className="myriadpro">${starsValue}</span>
    </div>
    <div className="absolute flex justify-between w-[30%] top-[52%] left-[35%] 2xl:w-[30%] 2xl:top-[52%] 2xl:left-[35%]">
      <img
        onClick={() => handleTokenSelection('ETH')}
        className="cursor-pointer rounded-[3rem] w-[47%] 2xl:w-[47%] hover:shadow-3xl"
        src="button/ETH.png"
      ></img>
      <img
        onClick={() => handleTokenSelection('USDT')}
        className="cursor-pointer rounded-[3rem] w-[47%] 2xl:w-[47%] hover:shadow-3xl"
        src="button/USDT.png"
      ></img>
    </div>
    <div className="absolute max-[522px]:w-[65%] top-[62%] left-[26.5%] text-[0.8rem] 2xl:top-[62%] 2xl:left-[26.5%] 2xl:text-[0.9rem]">
      <span className="myriadpro max-[522px]:mr-[15%] mr-[4.5rem] 2xl:mr-[5rem]">
        Pay with ETH
      </span>
      <span className="myriadpro">$ZAP You receive</span>
    </div>
    <div className="absolute flex justify-between w-[52%] top-[66%] left-[24%] 2xl:w-[52%] 2xl:top-[66%] 2xl:left-[24%] 2xl:text-[3rem]">
      <img src="button/input1.png" className="w-[45%]"></img>
      <img src="button/input2.png" className="w-[45%]"></img>
    </div>
    <div className="absolute flex justify-between w-[46%] max-[522px]:top-[65.5%] top-[66.4%] left-[27%] 2xl:w-[46%] 2xl:top-[66.25%] 2xl:left-[27%]">
      <input
        onChange={handleInputChange}
        value={inputValue}
        type="number"
        placeholder="0"
        className="myriadpro outline-none bg-transparent border-0 text-[1.1rem] w-[30%] 2xl:text-[1.2rem] p-0 2xl:w-[30%]"
      ></input>

{isModalOpen && (
              <div className="absolute top-full w-full" ref={modalRef}>
                <PaymentModal 
                  onSelectToken={handleSelectToken} 
                  nativeFormatted={parseFloat(nativeFormatted).toFixed(3)} 
                  tokenFormatted={parseFloat(tokenFormatted).toFixed(3)} 
                />
              </div>
            )}

      <input
        type="number"
        value={totalStars}
        readOnly
        className=" outline-none bg-transparent border-0 myriadpro p-0 text-[1.1rem] w-[38%] 2xl:text-[1.2rem] 2xl:w-[38%]"
      ></input>
    </div>

        {address ? (
            <>
              {/* when the user is connected */}
              <div className="flex flex-col items-center space-y-4">
                
                <div className="w-full">
                  {/* Buy Directly Button */}
                    <button
                      className="w-full rounded-full border-4 border-black bg-[rgb(111,234,255)] p-3 font-bold text-black text-xl"
                      onClick={handleBuyDirectly}
                    >
                      Buy Directly
                    </button>

                    {isBuyDirectlyActive && (
                      <div className="mb-4 bg-[rgb(111,234,255)] p-4 text-gray-900 rounded-lg">
                        <p className="mb-2 text-lg font-bold">Send ETH or Tether to the following address:</p>
                        <p className="mb-2 text-base">{receiverAddress}</p>
                        <p className="mb-2 text-red-600 font-bold">Only send ETH mainnet or Tether on Ethereum!</p>
                        <p className="mb-4 text-lg font-bold text-[rgb(111,234,255)]">Time left: {formatTime(timeLeft)}</p>
                      </div>
                    )}
                </div>
              </div>

                  {/* Show Transfer Detected */}
                  {isTransferDetected && (
                    <div className="mt-6">
                      <p className="text-sm font-semibold text-green-400">Transfer detected!</p>
                      <div className="flex items-center">
                        <p className="text-sm" style={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>
                          Transaction Hash: {transactionHash}
                        </p>
                        <button
                          className="ml-2 text-sm text-gray-500 hover:text-gray-700"
                          onClick={(e) => {
                            navigator.clipboard.writeText(transactionHash)
                          }}
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  )}
            </>
          ) : (

    <div className="absolute flex justify-between max-[522px]:text-[0.6rem] w-[52%] top-[74%] left-[24%] text-[0.76rem] 2xl:w-[52%] 2xl:top-[74%] 2xl:left-[24%] 2xl:text-[0.8rem]">
      <div className="myriadpro relative rounded-[1rem] w-[45%]" onClick={() => open()}>
        <img src="button/button1.png"></img>
        <span className="absolute cursor-pointer hover:bg-[#1a82ab] top-[9%] left-[2%] px-[14%] py-[2.7%] 2xl:top-[10%] 2xl:left-[2%] 2xl:px-[15%] 2xl:py-[3%]  rounded-[2rem]">
          Connect Wallet
        </span>
      </div>
      <div className="myriadpro relative rounded-[1rem] w-[45%]" onClick={() => alert('Redirecting to wallet creation options...')}>
        <img src="button/button1.png"></img>
        <span className="absolute top-[9%] left-[2%] px-[7.7%] py-[2.6%] 2xl:top-[10%] 2xl:left-[2%] rounded-[2rem] 2xl:px-[9.5%] 2xl:py-[3%] cursor-pointer hover:bg-[#1a82ab]">
          Don't Have Wallet
        </span>
      </div>
    </div>
    )}
  </div>








     
      
      </>
  );
}

export default App;
