import { useState } from "react";

import iconCheck from "../images/icon-check.svg";

export default function PricingCard() {
  const [price, setPrice] = useState<number>(16.0);
  const [monthlyBilling, setMonthlyBilling] = useState<boolean>(true);

  return (
    <div className="bg-white rounded-lg py-9 flex flex-col items-center shadow-xl">
      <h2 className="tracking-widest text-xs mb-6">100K PAGEVIEWS</h2>
      <div className="mb-6">
        <input className="slider" style={{}} type="range" />
      </div>
      <p className="font-bold text-[2rem] flex items-center text-dkDesaturatedBlue mb-7">
        {`$${price.toFixed(2)}`}
        <span className="text-sm tracking-normal text-grayishBlue">
          &nbsp;/ month
        </span>
      </p>
      <div className="flex items-center gap-2 mb-8">
        <p className="">Monthly Billing</p>
        <label
          htmlFor="tf-toggle"
          className="relative w-11 h-6 rounded-full bg-ltGrayishBlue2"
        >
          <input
            className="invisible"
            onChange={() => {
              setMonthlyBilling((prev) => !prev);
            }}
            checked={monthlyBilling}
            type="checkbox"
            id="tf-toggle"
          />
          <span
            className={
              monthlyBilling
                ? "absolute left-[4px] top-[4px] rounded-full w-4 h-4 bg-white transition-transform duration-200"
                : "absolute top-[4px] rounded-full w-4 h-4 bg-white translate-x-[11px] transition-transform duration-200"
            }
          ></span>
        </label>
        <p className="">Yearly Billing</p>
      </div>
      <hr className="self-stretch mb-6" />
      <div className="flex flex-col items-center gap-3 py-2 mb-6">
        <div className="flex items-center gap-2">
          <img src={iconCheck} alt="" />
          <p className="">Unlimited Websites</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={iconCheck} alt="" />
          <p className="">100% data ownership</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={iconCheck} alt="" />
          <p className="">Email reports</p>
        </div>
      </div>
      <button className="bg-dkDesaturatedBlue text-paleBlue py-3 px-10 rounded-full">
        Start my trial
      </button>
    </div>
  );
}
