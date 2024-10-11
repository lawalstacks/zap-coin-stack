export const Item = ({
  title,
  content,
  className,
}: {
  title: string;
  content: string;
  className: string;
}) => {
  return (
    <>
      <div className={`${className} min-w-[350px] w-[350px] max-sm:min-w-[320px] text-[#602B0D] border-[4px] p-10 border-black rounded-3xl bg-[#C7FFFE]`}>
        <h1 className="text-[26px] max-sm:text-[22px] font-semibold pb-2">{title}</h1>
        <p className="text-[21px] max-sm:text-[18px]">{content}</p>
      </div>
    </>
  );
};
