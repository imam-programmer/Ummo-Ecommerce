import React, { useState } from "react";

const SHIPPING_OPTIONS = [
  { id: "free", label: "Free shipping", price: null },
  { id: "flat", label: "Flat rate: $49", price: 49 },
  { id: "pickup", label: "Local pickup: $8", price: 8 },
];

export default function CartFirstTotalBox() {
  const [shipping, setShipping] = useState("free");

  const subtotal = 1300;
  const vat = 19;
  const shippingCost =
    SHIPPING_OPTIONS.find((o) => o.id === shipping)?.price || 0;
  const total = subtotal + vat + shippingCost;

  return (
    <div className="font-jost  md:w-105 w-full!">
      <div className="border  mb-5 ">
        <div className="pt-9.5 px-10.25 ">
          {/* Heading */}
          <h2 className="text-primary text-sm   uppercase md:text-base font-medium pb-8">
            Cart totals
          </h2>

          {/* Subtotal */}
          <div className="grid grid-cols-2 gap-4 pb-3.25">
            <span className="text-primary text-sm font-medium leading-6  uppercase ">
              Subtotal
            </span>
            <span className="text-primary text-sm font-medium leading-6">${subtotal}</span>
          </div>

          {/* Shipping */}
          <div className="grid grid-cols-2 gap-4 py-4 border-t border-primary/10">
            <span className="text-primary  text-sm font-medium leading-6 uppercase">
              Shipping
            </span>
            <div className="flex flex-col gap-3">
              {SHIPPING_OPTIONS.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center gap-3 cursor-pointer text-primary  font-normal leading-6 text-sm"
                >
                  <input
                    type="checkbox"
                    checked={shipping === option.id}
                    
                    onChange={()=>setShipping(option.id)}
                    className="h-4 w-4 rounded-none border border-primary/40 text-primary accent-primary cursor-pointer"
                  />
                  {option.label}
                </label>
              ))}

              <p className="text-primary font-normal leading-6 text-sm">Shipping to AL.</p>

              <button
                type="button"
                className="text-primary text-sm font-medium  uppercase  border-b-2 cursor-pointer leading-6  w-fit"
              >
                Change address
              </button>
            </div>
          </div>

          {/* VAT */}
          <div className="grid grid-cols-2 gap-4 py-3.5 border-t border-primary/10">
            <span className="text-primary text-sm font-medium  uppercase">
              Vat
            </span>
            <span className="text-primary font-medium leading-6 text-sm">${vat}</span>
          </div>

          {/* Total */}
          <div className="grid grid-cols-2 gap-4 py-4 border-t border-primary/10">
            <span className="text-primary text-sm font-medium leading-6  uppercase">
              Total
            </span>
            <span className="text-primary leading-6 font-medium text-sm">${total}</span>
          </div>
        </div>

        {/* CTA */}
      </div>
      <button
        type="button"
        className="w-full bg-primary cursor-pointer text-white text-sm font-medium  uppercase py-5 hover:bg-primary/90 transition-colors"
      >
        Proceed to checkout
      </button>
    </div>
  );
}