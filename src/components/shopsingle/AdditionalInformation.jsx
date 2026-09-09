const productInfo = [
  {
    label: "Weight",
    value: "0.8 kg",
  },
  {
    label: "Dimensions",
    value: "68 × 52 × 8 cm",
  },
  {
    label: "Material",
    value: "100% Polyester",
  },
  {
    label: "Lining",
    value: "100% Polyester",
  },
  {
    label: "Color",
    value: "Black",
  },
  {
    label: "Size",
    value: "S, M, L, XL, XXL",
  },
  {
    label: "Fit",
    value: "Regular Fit",
  },
  {
    label: "Hood",
    value: "Attached Hood",
  },
  {
    label: "Closure",
    value: "Full Zip",
  },
  {
    label: "Care Instructions",
    value: "Machine Wash Cold",
  },
  {
    label: "Country of Origin",
    value: "Bangladesh",
  },
];

export default function AdditionalInformation() {
  return (
    <section className="w-full font-jost">
      <div className="overflow-hidden">
        {productInfo.map((item, index) => (
          <div
            key={item.label}
            className={`grid grid-cols-1 border-gray-200 py-4 sm:grid-cols-[220px_1fr] ${
              index !== productInfo.length - 1 ? "border-b" : ""
            }`}
          >
            {/* Label */}
            <div className="mb-1 text-sm font-medium text-primary sm:mb-0">
              {item.label}
            </div>

            {/* Value */}
            <div className="text-sm leading-6 text-gray">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
