"use client";
import React from "react";
import JotaiProvider from './jotaiProvider'
import WalletProvider from './walletProvider'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from '@/utils/initQueryClient.jsx'

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <JotaiProvider>
        <WalletProvider>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WalletProvider>
    </JotaiProvider>
  )
};

export default Provider;