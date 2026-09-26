import { Check } from "lucide-react";
import { Link, useSearchParams } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { auth, db } from "../../../firebase.config";
import { useEffect, useState } from "react";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function OrderComplete() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let unsubscribeOrder;
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setError("Please log in to view your order.");
        setLoading(false);
        return;
      }
      if (!orderId) {
        setError("No order was selected.");
        setLoading(false);
        return;
      }

      unsubscribeOrder = onValue(
        ref(db, `orders/${user.uid}/${orderId}`),
        (snapshot) => {
          if (snapshot.exists()) {
            setOrder(snapshot.val());
            setError("");
          } else {
            setError("We could not find this order.");
          }
          setLoading(false);
        },
        () => {
          setError("We could not load your order. Please try again.");
          setLoading(false);
        },
      );
    });

    return () => {
      unsubscribeAuth();
      unsubscribeOrder?.();
    };
  }, [orderId]);

  if (loading || error || !order) {
    return (
      <div className="min-h-64 flex flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-sm text-gray-600">
          {loading ? "Loading your order..." : error || "Order unavailable."}
        </p>
        {!loading && (
          <Link to="/shop" className="text-sm font-semibold underline">
            Continue shopping
          </Link>
        )}
      </div>
    );
  }

  const items = Array.isArray(order.OrderItems)
    ? order.OrderItems
    : Object.values(order.OrderItems || {});
  const subtotal = Number(
    order.subtotal ?? items.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1), 0),
  );
  const shipping = Number(order.shipping || 0);
  const vat = Number(order.vat || 0);
  const total = Number(order.total ?? subtotal + shipping + vat);
  const billing = order.billing || {};
  const formattedDate = order.date
    ? new Date(order.date).toLocaleString()
    : "Not available";
  const paymentMethod = {
    "bank-transfer": "Direct bank transfer",
    check: "Check payments",
    cod: "Cash on delivery",
    paypal: "PayPal",
  }[order.paymentMethod] || order.paymentMethod || "Not available";



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
            <OrderMeta label="Order Number" value={orderId} />
            <OrderMeta label="Date" value={formattedDate} />
            <OrderMeta label="Total" value={currency.format(total)} />
            <OrderMeta label="Payment Method" value={paymentMethod} />
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
            {items.map((item, index) => (
              <div
                key={item.id || `${item.title || item.name}-${index}`}
                className="flex justify-between text-sm text-gray"
              >
                <span>{item.title || item.name} x{item.quantity || 1}</span>
                <span>{currency.format(Number(item.price || 0) * Number(item.quantity || 1))}</span>
              </div>
            ))}
          </div>

          <SummaryRow label="SUBTOTAL" value={currency.format(subtotal)} />
          <SummaryRow label="SHIPPING" value={shipping ? currency.format(shipping) : "Free shipping"} />
          <SummaryRow label="VAT" value={currency.format(vat)} />
          <SummaryRow label="PAYMENT METHOD" value={paymentMethod} />
          <SummaryRow
            label="TOTAL"
            value={currency.format(total)}
            bold
            noBorder
          />
        </div>

        <div className="mt-6 border border-gray-200 rounded-md px-6 py-6">
          <h2 className="text-xs font-semibold text-primary mb-5">BILLING DETAILS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
            <OrderMeta label="Name" value={order.username || "Not provided"} />
            <OrderMeta label="Email" value={order.email || "Not provided"} />
            <OrderMeta label="Company" value={billing.company || "Not provided"} />
            <OrderMeta label="Phone" value={billing.phone || "Not provided"} />
            <OrderMeta label="Address" value={[billing.streetAddress, billing.apartment].filter(Boolean).join(", ") || "Not provided"} />
            <OrderMeta label="City / Province" value={[billing.city, billing.province].filter(Boolean).join(", ") || "Not provided"} />
            <OrderMeta label="Country" value={billing.country || "Not provided"} />
            <OrderMeta label="Postcode" value={billing.postcode || "Not provided"} />
            {billing.orderNotes && <OrderMeta label="Order Notes" value={billing.orderNotes} />}
          </div>
        </div>

        {/* Optional: continue shopping button */}
        <div className="flex justify-center mt-10">
          <Link
            to="/shop"
            className="inline-block bg-gray-900 text-white text-sm font-semibold  px-8 py-3.5 rounded-md hover:bg-gray-800 transition-colors"
          >
            CONTINUE SHOPPING
          </Link>
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
      className={`flex justify-between items-center py-3 ${noBorder ? "" : "border-b border-gray-200"
        }`}
    >
      <span
        className={`text-xs font-semibold  text-primary  ${bold ? "font-semibold" : "font-normal"
          }`}
      >
        {label}
      </span>
      <span
        className={`text-gray ${bold ? "text-base font-semibold" : "text-sm"
          }`}
      >
        {value}
      </span>
    </div>
  );
}