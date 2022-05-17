import React, { useEffect, useState } from "react";

import iconCheck from "../images/icon-check.svg";

export default function PricingCard() {
  const [pageViews, setPageViews] = useState(100);
  const [price, setPrice] = useState<number>(16.0);
  const [monthlyBilling, setMonthlyBilling] = useState<boolean>(true);

  const handleRangeChange = (rangeVal?: number) => {
    if (monthlyBilling === true) {
      setPrice((rangeVal || pageViews) * 0.16);
      setPageViews(rangeVal || pageViews);
    }
    if (monthlyBilling === false) {
      setPrice(
        (rangeVal || pageViews) * 0.16 * 12 -
          ((rangeVal || pageViews) * 0.16 * 12 * 25) / 100
      );
      setPageViews(rangeVal || pageViews);
    }
  };

  useEffect(() => {
    handleRangeChange();
  }, [monthlyBilling]);

  return (
    <div className="bg-white rounded-lg shadow-xl max-w-[33.75rem] mx-auto">
      <div className="border-b-1 px-6 py-8 flex flex-col items-center md:px-12 md:py-10">
        <div className="w-full grid place-items-center md:grid-cols-[min-content 1fr] md:pt-4 md:place-items-start">
          <h2 className="tracking-widest text-xs mb-6 md:text-sm md:tracking-[2px]">
            {pageViews}K PAGEVIEWS
          </h2>

          <div className="relative h-5 grid place-items-center mb-9 w-full md:col-span-2 md:mb-12">
            <div
              style={{ width: pageViews - 50 + "%" }}
              className="absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-softCyan rounded-l-full h-[0.5rem]"
            ></div>
            <div className="absolute top-1/2 -translate-y-1/2 left-0 z-0 bg-ltGrayishBlue1 rounded-full h-[0.5rem] w-full"></div>
            <input
              className="slider"
              min={50}
              max={150}
              step={1}
              value={pageViews}
              onChange={(evt) => handleRangeChange(evt.target.valueAsNumber)}
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
        <div className="relative flex items-center gap-3 md:gap-4">
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
          <p className="pr-1">Yearly Billing</p>
          <div className="absolute left-full px-2 w-fit text-[0.625rem] rounded-full bg-ltGrayishRed text-ltRed">
            -25% <span className="hidden md:inline">discount</span>
          </div>
        </div>
      </div>

      <div className="py-6 px-12 flex flex-col items-center gap-6 md:flex-row md:justify-between w-full md:py-8">
        <div className="flex flex-col items-center md:items-start gap-3">
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
