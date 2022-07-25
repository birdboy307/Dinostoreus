import { CreditCard, GiftCard } from "react-square-web-payments-sdk";

function console() {
    console.log("Done!")
}

export default function Test(){
  return (
    <div className='h-screen'>
        <div className="w-1/3">
            <div className="my-5">
                <CreditCard onClick={console} />
            </div>
            <div className="my-5">
                <GiftCard />
            </div>
        </div>
    </div>
  );
}