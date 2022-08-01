import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useAPI from "../../hooks/useAPI";

function Index() {
  const [API] = useAPI();
  const [list, setList] = useState<
    { to: string; from: string; value: string }[]
  >([]);
  const [latestHeight, setHeight] = useState<number>(0);
  const { walletId } = useSelector(
    (state: { auth: { walletId: string } }) => state.auth
  );

  const getLists = async (add?: string) => setList(await API.transaction(add));

  const getLatestBlockHeight = async () => setHeight(await API.latestBlock());

  useEffect(() => {
    getLists(walletId);
    getLatestBlockHeight();
  }, []);
  return (
    <div className="relative h-screen">
      <div className="absolute top-4 left-4 bg-indigo-400 rounded p-4  text-left flex-col gap-4 overflow-auto h-36 w-2/6">
        <div>Recent TransAction List</div>
        {list.length === 0 && <span>No Transactions</span>}
        <div className="text-lg">
          {Array.isArray(list) &&
            list?.map(({ to, from, value }) => (
              <div className="flex justify-between w-full">
                <div>{to}</div>
                <div>{value}</div>
              </div>
            ))}
        </div>
      </div>
      <div className="absolute right-4 bottom-4 bg-indigo-400 rounded p-4  text-center flex-col gap-4">
        <div>Latest Ethereum Block Height</div>
        <div className="text-lg">{latestHeight}</div>
      </div>
    </div>
  );
}

export default Index;
