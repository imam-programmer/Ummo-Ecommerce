import React from 'react'

export default function LocationCard({ store, isActive, onSelect }) {
  return (
    <div className="border-b border-gray-200 py-6 first:pt-0">
      <h3 className="font-jost text-[17px] font-semibold text-primary">
        Store in {store.city}
      </h3>

      <div className="mt-3 space-y-1 font-jost text-[13px] leading-relaxed text-gray">
        <p>{store.address}</p>
        <p>{store.country}</p>
        <p>{store.phone}</p>
        <p>{store.hours}</p>
      </div>

      <button
        type="button"
        onClick={onSelect}
        className={`mt-4 inline-block font-jost text-[12px] font-semibold tracking-wide text-primary underline decoration-primary underline-offset-4 ${
          isActive ? "decoration-2" : "decoration-1"
        }`}
      >
        SEE ON THE MAP
      </button>
    </div>
  );
}