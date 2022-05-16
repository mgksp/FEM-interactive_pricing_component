import { useState } from "react";

import iconCheck from "../images/icon-check.svg";

export default function PricingCard() {
  const [pageViews, setPageViews] = useState(100);
  const [price, setPrice] = useState<number>(16.0);
  const [monthlyBilling, setMonthlyBilling] = useState<boolean>(true);

  return (
    <div className="bg-white rounded-lg py-9 px-6 md:px-12 md:py-8 flex flex-col items-center shadow-xl max-w-[33.75rem] mx-auto">
      <div className="w-full grid place-items-center md:grid-cols-2 md:pt-4 md:place-items-start">
        <h2 className="tracking-widest text-xs mb-6 md:text-sm md:tracking-[2px]">
          {pageViews}K PAGEVIEWS
        </h2>
        <div className="relative mb-9 w-full md:col-span-2 md:mb-12">
          <div
            className={`absolute top-0 left-0 z-10 bg-blue-600 h-[0.5rem] w-[10%]`}
          ></div>
          <input
            className="slider"
            min={50}
            max={150}
            step={1}
            value={pageViews}
            onChange={(evt) => {
              setPrice(evt.target.valueAsNumber * 0.16);
              setPageViews(evt.target.valueAsNumber);
            }}
            type="range"
          />
        </div>
        <p className="font-bold text-[2rem] flex items-center text-dkDesaturatedBlue mb-7 md:mb-11 md:col-start-2 md:row-start-1 md:ml-auto md:text-[2.5rem]">
          {`$${price.toFixed(2)}`}
          <span className="text-sm md:text-base tracking-normal text-grayishBlue">
            &nbsp;/ month
          </span>
        </p>
      </div>
      <div className="relative flex items-center gap-3 md:gap-4 mb-8 md:mb-10">
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
        <p className="pr-2">Yearly Billing</p>
        <div className="absolute left-full px-2 w-fit text-[0.625rem] rounded-full bg-ltGrayishRed text-ltRed">
          -25% discount
        </div>
      </div>
      <hr className="self-stretch mb-6" />
      <div className="md:flex items-center justify-between w-full">
        <div className="flex flex-col items-center md:items-start gap-3 py-2 mb-6 md:mb-0">
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
    </div>
  );
}
