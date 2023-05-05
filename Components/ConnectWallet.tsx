"use client";
import React, { useMemo, useState } from 'react';
import { getZeroDevSigner } from "@zerodevapp/sdk";

declare global {
    interface Window {
        ethereum: any;
    }
};

const ConnectWallet = () => {

    const [address, setAddress] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);

    const [contract, setContract] = useState<undefined>();

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <button className="bg-blue-800 py-3 px-4 font-semibold rounded-md">
                Connect Wallet
            </button>
        </div>
    )
};

export default ConnectWallet;