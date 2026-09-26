import React, { useEffect } from 'react'
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import Image from '../layout/common/Image';
import { useNavigate } from 'react-router';
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from '../../../firebase.config';
import { push, ref, set } from 'firebase/database';
import toast, { Toaster } from "react-hot-toast";
import { EmptyCart } from '../../slices/cartSlice';


const COUNTRIES = ["Turkey", "United States", "United Kingdom", "Germany", "France", "Bangladesh"];
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
const BillingInformation = () => {
    const ORDER_ITEMS = useSelector((state) => state.cart.products); // get data from cart slice =======
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //the following states are used to store the form data=================================
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [company, setcompany] = useState("")
    const [country, setcountry] = useState("Bangladesh")
    const [streetAddress, setstreetAddress] = useState("")
    const [apartment, setapartment] = useState("")
    const [city, setcity] = useState("")
    const [postcode, setpostcode] = useState("")
    const [province, setprovince] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")
    const [orderNotes, setorderNotes] = useState("")


    const [user, setuser] = useState(null) //the following state is used to get current user from Firebase storage=========

    //the following states are used to store the payment method and the submitting state==========
    const [paymentMethod, setPaymentMethod] = useState("bank-transfer");
    const [submitting, setSubmitting] = useState(false);

    //the following states are used to store the order data=================================
    const subtotal = ORDER_ITEMS.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const vat = 19;
    const total = subtotal + vat;


    //the following useEffect is used to get the current user from Firebase storage=========
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
            }
        });
        return () => unsubscribe();
    }, []);

    console.log(user);


    //the following function is used to handle the form submission=========================
    async function handlePlaceOrder(e) {
        e.preventDefault();
        dispatch(EmptyCart()) // Clear the cart after placing the order

        if (!user) {
            toast.error("Please log in before placing your order.");
            return;
        }
        setSubmitting(true);
        try {
            const orderRef = push(ref(db, `orders/${user.uid}`));
            await set(orderRef, {
                username: `${firstName} ${lastName}`.trim(),
                firstName,
                lastName,
                email: email,
                id: user.uid,
                OrderItems: ORDER_ITEMS,
                subtotal,
                shipping: 0,
                vat: vat,
                total: total,
                paymentMethod: paymentMethod,
                date: new Date().toISOString(),
                billing: {
                    company,
                    country,
                    streetAddress,
                    apartment,
                    city,
                    postcode,
                    province,
                    phone,
                    orderNotes,
                },
            })
            toast.success("Order placed successfully!");
            navigate(`/ordercomplete?orderId=${orderRef.key}`);
        } catch (error) {
            console.error("Error placing order: ", error);
            toast.error("Could not place your order. Please try again.");
        } finally {
            setSubmitting(false);
        }
    }



    //the following function is used to render the summary row=========================
    function SummaryRow({ label, value, bold, border, large }) {
        return (
            <div
                className={`flex justify-between items-center py-3 ${border ? "border-b border-gray-200" : ""
                    }`}
            >
                <span
                    className={`${bold ? "font-medium" : "font-medium"
                        } text-sm  text-primary`}
                >
                    {label}
                </span>
                <span
                    className={`${large ? "text-base font-medium" : "text-base font-medium"
                        } text-primary`}
                >
                    {value}
                </span>
            </div>
        );
    }



    return (
        <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-10 py-10">
            <Toaster position="top-center" reverseOrder={false} />
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
                            <input className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900" placeholder="First Name"
                                value={firstName} type="text" onChange={(v) => setfirstName(v.target.value)}
                                required />
                            <input type="text" required value={lastName} onChange={(v) => setlastName(v.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900" placeholder="Last Name" />
                        </div>

                        <input type="text" placeholder="Company Name (optional)" value={company} onChange={(v) => setcompany(v.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900" />
                        {/* Country select */}
                        <div className="relative">
                            <label className="block text-xs text-primary px-1 mb-1 absolute left-5 -top-1.5 z-10 bg-white">
                                Country / Region *
                            </label>
                            <div className="relative">
                                <select
                                    value={country}
                                    onChange={(e) => setcountry(e.target.value)}
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


                        <input type="text" placeholder='Street Address *' className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900" value={streetAddress} onChange={(v) => setstreetAddress(v.target.value)} />

                        <input type="text" placeholder='Apartment, suite, unit, etc. (optional)' className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900" value={apartment} onChange={(v) => setapartment(v.target.value)} />

                        <input type="text" placeholder='Town / City *' className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900" value={city} onChange={(v) => setcity(v.target.value)} />

                        <input type="text" placeholder='Postcode / ZIP *' className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900" value={postcode} onChange={(v) => setpostcode(v.target.value)} />

                        <input type="text" placeholder='Province *' className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900" value={province} onChange={(v) => setprovince(v.target.value)} />

                        <input type="tel" placeholder='Phone *' className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900" value={phone} onChange={(v) => setphone(v.target.value)} />

                        <input type="email" placeholder='Your E-mail *' className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900" value={email} onChange={(v) => setemail(v.target.value)} />


                        {/* Checkboxes */}


                        <textarea
                            placeholder="Order Notes (optional)"
                            value={orderNotes}
                            onChange={(e) => setorderNotes(e.target.value)}
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
                                    key={item.id}
                                    className="flex justify-between text-sm text-gray-600 items-center "
                                >
                                    <div className="flex items-center gap-3">

                                        <Image src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                                        <span>{item.title}</span>
                                    </div>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
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
    )
}

export default BillingInformation