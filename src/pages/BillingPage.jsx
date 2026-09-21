import { useState } from "react";
import { ChevronDown } from "lucide-react";

const COUNTRIES = ["Turkey", "United States", "United Kingdom", "Germany", "France", "Bangladesh"];

const ORDER_ITEMS = [
  { name: "Zessi Dresses x2", subtotal: 32.5 },
  { name: "Kirby T-Shirt", subtotal: 29.9 },
];

const PAYMENT_METHODS = [
  {
    id: "bank-transfer",
    label: "Direct bank transfer",
    description:
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
  },
  { id: "check", label: "Check payments" },
  { id: "cod", label: "Cash on delivery" },
  { id: "paypal", label: "PayPal" },
];

export default function BillingPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "Turkey",
    streetAddress: "",
    apartment: "",
    city: "",
    postcode: "",
    province: "",
    phone: "",
    email: "",
    orderNotes: "",
  });

  const [createAccount, setCreateAccount] = useState(false);
  const [shipDifferent, setShipDifferent] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("bank-transfer");
  const [submitting, setSubmitting] = useState(false);

  const subtotal = ORDER_ITEMS.reduce((sum, item) => sum + item.subtotal, 0);
  const vat = 19;
  const total = subtotal + vat;

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handlePlaceOrder(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Replace with your real order submission logic, e.g.:
      // await fetch("/api/orders", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ ...form, paymentMethod }),
      // });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Order placed!");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-10 py-10">
      <form
        onSubmit={handlePlaceOrder}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
      >
        {/* ---------------- Billing details ---------------- */}
        <div>
          <h2 className="text-base font-medium font-jost   text-gray-900 mb-6">
            BILLING DETAILS
          </h2>

          <div className="space-y-4">
            {/* First / Last name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="First Name"
                value={form.firstName}
                onChange={(v) => updateField("firstName", v)}
                required
              />
              <Input
                placeholder="Last Name"
                value={form.lastName}
                onChange={(v) => updateField("lastName", v)}
                required
              />
            </div>

            <Input
              placeholder="Company Name (optional)"
              value={form.company}
              onChange={(v) => updateField("company", v)}
            />

            {/* Country select */}
            <div className="relative">
              <label className="block text-xs text-primary px-1 mb-1 absolute left-5 -top-1.5 z-10 bg-white">
                Country / Region *
              </label>
              <div className="relative">
                <select
                  value={form.country}
                  onChange={(e) => updateField("country", e.target.value)}
                  required
                  className="w-full appearance-none border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 bg-white"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            <Input
              placeholder="Street Address *"
              value={form.streetAddress}
              onChange={(v) => updateField("streetAddress", v)}
              required
            />
            <Input
              placeholder="Apartment, suite, unit, etc. (optional)"
              value={form.apartment}
              onChange={(v) => updateField("apartment", v)}
            />
            <Input
              placeholder="Town / City *"
              value={form.city}
              onChange={(v) => updateField("city", v)}
              required
            />
            <Input
              placeholder="Postcode / ZIP *"
              value={form.postcode}
              onChange={(v) => updateField("postcode", v)}
              required
            />
            <Input
              placeholder="Province *"
              value={form.province}
              onChange={(v) => updateField("province", v)}
              required
            />
            <Input
              type="tel"
              placeholder="Phone *"
              value={form.phone}
              onChange={(v) => updateField("phone", v)}
              required
            />
            <Input
              type="email"
              placeholder="Your Mail *"
              value={form.email}
              onChange={(v) => updateField("email", v)}
              required
            />

            {/* Checkboxes */}
            <div className="space-y-3 pt-2">
              <Checkbox
                label="CREATE AN ACCOUNT?"
                checked={createAccount}
                onChange={setCreateAccount}
              />
              <Checkbox
                label="SHIP TO A DIFFERENT ADDRESS?"
                checked={shipDifferent}
                onChange={setShipDifferent}
              />
            </div>

            <textarea
              placeholder="Order Notes (optional)"
              value={form.orderNotes}
              onChange={(e) => updateField("orderNotes", e.target.value)}
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 resize-none"
            />
          </div>
        </div>

        {/* ---------------- Order summary ---------------- */}
        <div>
          <div className="border border-primary  p-6">
            <h2 className="text-xs sm:text-base font-medium font-jost text-gray-900 mb-5">
              YOUR ORDER
            </h2>

            <div className="flex justify-between text-xs sm:text-sm font-medium  text-gray-900 border-b border-gray-200 pb-3 mb-3">
              <span>PRODUCT</span>
              <span>SUBTOTAL</span>
            </div>

            <div className="space-y-2.5 mb-3">
              {ORDER_ITEMS.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between text-sm text-gray-600"
                >
                  <span>{item.name}</span>
                  <span>${item.subtotal.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <SummaryRow
              label="SUBTOTAL"
              value={`$${subtotal.toFixed(2)}`}
              bold
              border
            />
            <SummaryRow label="SHIPPING" value="Free shipping" border />
            <SummaryRow label="VAT" value={`$${vat}`} border />
            <SummaryRow
              label="TOTAL"
              value={`$${total.toFixed(2)}`}
              bold
              large
            />

     
          </div>
            {/* Payment methods */}
            <div className=" border  border-gray-200  p-6 mt-5">
                
                 <div className="mt-6 space-y-4">
              {PAYMENT_METHODS.map((method) => (
                <div key={method.id}>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === method.id}
                      onChange={() => setPaymentMethod(method.id)}
                      className="w-4 h-4 accent-gray-900 shrink-0"
                    />
                    <span className="text-sm text-gray-800">
                      {method.label}
                    </span>
                  </label>
                  {method.description && paymentMethod === method.id && (
                    <p className="text-xs text-gray-500 leading-relaxed mt-2 ml-7">
                      {method.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 leading-relaxed mt-6">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <a href="/privacy-policy" className="text-gray-900 underline">
                privacy policy
              </a>
              .
            </p>

            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gray-900 text-white text-sm font-medium cursor-pointer  py-4 mt-6 rounded-md hover:bg-gray-800 transition-colors disabled:opacity-60"
            >
              {submitting ? "PLACING ORDER..." : "PLACE ORDER"}
            </button>

        </div>
      </form>
    </div>
  );
}

/* ---------- Reusable pieces ---------- */

function Input({ type = "text", placeholder, value, onChange, required }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
    />
  );
}

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 accent-gray-900"
      />
      <span className="text-xs font-medium tracking-wide text-gray-700">
        {label}
      </span>
    </label>
  );
}

function SummaryRow({ label, value, bold, border, large }) {
  return (
    <div
      className={`flex justify-between items-center py-3 ${
        border ? "border-b border-gray-200" : ""
      }`}
    >
      <span
        className={`${
          bold ? "font-medium" : "font-medium"
        } text-sm  text-primary`}
      >
        {label}
      </span>
      <span
        className={`${
          large ? "text-base font-medium" : "text-base font-medium"
        } text-primary`}
      >
        {value}
      </span>
    </div>
  );
}