import React, { useState } from "react";

function useAPI() {
  const transaction = async (
    address = "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae"
  ) => {
    try {
      const resp = await fetch(
        `http://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${process.env.ETHERSCAN_API_KEY}`,
        { method: "GET" }
      );
      const { result = [] } = await resp.json();
      return result;
    } catch (e: any) {
      console.log({ error: e.toString() });
    }
  };

  const latestBlock = async () => {
    try {
      const resp = await fetch(`https://api.blockcypher.com/v1/eth/main`, {
        method: "GET",
      });
      const { height }: { height: number } = await resp.json();
      return height;
    } catch (e: any) {
      console.log({ error: e.toString() });
    }
    return 0;
  };

  const calenderLogin = () => {};

  const API = {
    transaction,
    latestBlock,
  };
  return [API];
}

export default useAPI;
