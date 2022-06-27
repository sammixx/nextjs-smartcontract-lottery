import { ConnectButton } from "web3uikit";

export default function Header() {
  return (
    <nav className=" bg-gray-900 p-2 my-5 border-b-2 border-t-2 flex flex-row  ">
      <h1 className="py-4 px-4 font-bold text-3xl text-white">
        Decentralized Lottery
      </h1>
      <div className="ml-auto py-2 px-4">
        <ConnectButton moralisAuth={false} />
      </div>
    </nav>

    // <div>
    //   Decentralized Lottery
    //   <ConnectButton moralisAuth={false} />
    // </div>
  );
}
