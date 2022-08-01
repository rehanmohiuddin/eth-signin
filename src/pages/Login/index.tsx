import { ethers } from "ethers";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SiweMessage } from "siwe";
import { signInSuccess } from "../../actions/auth";

function Index() {
  const [signerAddress, setSignerAddress] = useState<string>("");
  const { ethereum }: any = window;
  const provider = new ethers.providers.Web3Provider(ethereum);
  const domain = window.location.host;
  const origin = window.location.origin;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function createSiweMessage(address: string, statement: string) {
    const message = new SiweMessage({
      domain,
      address,
      statement,
      uri: origin,
      version: "1",
      chainId: 1,
    });
    return message.prepareMessage();
  }
  const connectWalletHandler = async () => {
    try {
      provider.send("eth_requestAccounts", []);
      console.log(provider.getSigner());
      const signer = provider.getSigner();
      setSignerAddress(await signer.getAddress());
    } catch (e) {
      console.log(e);
    }
  };

  const signInWithEthereum = async () => {
    const message = createSiweMessage(
      signerAddress,
      "Sign in with Ethereum to the app."
    );
    const network: string = (await provider.getNetwork()).name;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    dispatch(
      signInSuccess({
        walletId: accounts[0],
        network: network,
        blockchain: "ethereum",
      })
    );
    navigate("/");
  };

  return (
    <div className="h-96">
      <div className="flex flex-col w-screen h-full w-screen m-auto justify-center p-2 box-border items-center gap-2">
        {/* <button
          className="p-2 outline-none border-1 border-solid border-slate-200 w-1/6 cursor-pointer"
          onClick={connectWalletHandler}
        >
          Connect Wallet
        </button> */}
        <div className="text-5xl font-bold">Eth Sign In</div>
        <div>Please Sign in Below</div>
        <button
          className="p-2 outline-none border-1 border-solid border-slate-200 w-1/6 cursor-pointer"
          onClick={signInWithEthereum}
        >
          Sign In With Ethereum
        </button>
      </div>
    </div>
  );
}

export default Index;
