import { Check } from "lucide-react";

const ORDER_ITEMS = [
  { name: "Zessi Dresses x2", subtotal: 32.5 },
  { name: "Kirby T-Shirt", subtotal: 29.9 },
];

export default function OrderComplete() {
  const order = {
    number: "13119",
    date: "27/11/2020",
    total: "$40.10",
    paymentMethod: "Direct Bank Transfer",
  };

  const subtotal = ORDER_ITEMS.reduce((sum, item) => sum + item.subtotal, 0);
  const vat = 19;
  const grandTotal = subtotal + vat;

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto">
        {/* Check icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-[#B9A16B] flex items-center justify-center">
            <Check size={26} strokeWidth={3} className="text-white" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1.5">
            Your order is completed!
          </h1>
          <p className="text-sm text-gray-500">
            Thank you. Your order has been received.
          </p>
        </div>

        {/* Dashed order info box */}
        <div className="border-2 border-dashed border-gray-300 rounded-md px-6 py-5 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-4">
            <OrderMeta label="Order Number" value={order.number} />
            <OrderMeta label="Date" value={order.date} />
            <OrderMeta label="Total" value={order.total} />
            <OrderMeta label="Payment Method" value={order.paymentMethod} />
          </div>
        </div>

        {/* Order details card */}
        <div className="border border-gray-200 rounded-md px-6 py-6">
          <h2 className="text-xs font-semibold  text-primary mb-5">
            ORDER DETAILS
          </h2>

          {/* Product header */}
          <div className="flex justify-between text-xs font-semibold  text-primary border-b border-gray-200 pb-3 mb-3">
            <span>PRODUCT</span>
            <span>SUBTOTAL</span>
          </div>

          {/* Line items */}
          <div className="space-y-2.5 pb-3 mb-1 border-b border-gray-200">
            {ORDER_ITEMS.map((item) => (
              <div
                key={item.name}
                className="flex justify-between text-sm text-gray"
              >
                <span>{item.name}</span>
                <span>${item.subtotal.toFixed(2)}</span>
              </div>
            ))}
          </div>

          <SummaryRow label="SUBTOTAL" value={`$${subtotal.toFixed(2)}`} />
          <SummaryRow label="SHIPPING" value="Free shipping" />
          <SummaryRow label="VAT" value={`$${vat}`} />
          <SummaryRow
            label="PAYMENT METHOD"
            value={order.paymentMethod === "Direct Bank Transfer" ? "Direct bank transfer" : order.paymentMethod}
          />
          <SummaryRow
            label="TOTAL"
            value={`$${grandTotal.toFixed(2)}`}
            bold
            noBorder
          />
        </div>

        {/* Optional: continue shopping button */}
        <div className="flex justify-center mt-10">
          <a
            href="/"
            className="inline-block bg-gray-900 text-white text-sm font-semibold tracking-widest px-8 py-3.5 rounded-md hover:bg-gray-800 transition-colors"
          >
            CONTINUE SHOPPING
          </a>
        </div>
      </div>
    </div>
  );
}

function OrderMeta({ label, value }) {
  return (
    <div>
      <p className="text-[11px] text-gray-400 mb-1">{label}</p>
      <p className="text-sm font-medium text-gray-900">{value}</p>
    </div>
  );
}

function SummaryRow({ label, value, bold, noBorder }) {
  return (
    <div
      className={`flex justify-between items-center py-3 ${
        noBorder ? "" : "border-b border-gray-200"
      }`}
    >
      <span
        className={`text-xs font-semibold  text-primary  ${
          bold ? "font-semibold" : "font-normal"
        }`}
      >
        {label}
      </span>
      <span
        className={`text-gray ${
          bold ? "text-base font-semibold" : "text-sm"
        }`}
      >
        {value}
      </span>
    </div>
  );
}