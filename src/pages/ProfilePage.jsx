import { useEffect, useState } from "react";
import { CiMail, CiPhone, CiLocationOn } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { GoXCircle } from "react-icons/go";
import { LogOut } from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.config";
import toast, { Toaster } from "react-hot-toast";
import {signOut } from "firebase/auth";
import { useNavigate } from "react-router";
export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
const navigate=useNavigate()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    // component unmount হলে listener বন্ধ হবে
    return () => unsubscribe();
  }, []);

// logout functionality================
function handleLogOut(){
    signOut(auth).then(() => {
   toast.success('Log out Successfully!')
}).catch((error) => {
  toast.error(error)
});
}

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">Loading profile...</div>
      </div>
    );
  }

  if (!user) {
    return (

    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-indigo-50 flex items-center justify-center px-4">
  <div className="w-full max-w-md">
    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-xl shadow-gray-200/50 text-center">
      {/* Icon */}
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50">
        <svg
          className="h-8 w-8 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>

      {/* Content */}
      <h2 className="text-2xl font-bold text-gray-900">
        Welcome back
      </h2>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        You need to be logged in to access this page.
      </p>

      {/* Button */}
      <button onClick={()=>navigate('/login')}
        className="mt-6 w-full rounded-xl bg-indigo-600 px-5 py-3
                   text-sm font-semibold text-white
                   shadow-lg shadow-indigo-200
                   transition-all duration-200
                   hover:bg-indigo-700 hover:shadow-indigo-300
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Log in
      </button>

      <p className="mt-4 text-xs text-gray-400">
        Don't have an account?{" "}
        <span className="font-medium text-indigo-600 cursor-pointer hover:text-indigo-700" onClick={()=>navigate("/register")}>
          Sign up
        </span>
      </p>
    </div>
  </div>
</div>

    );
  }

  // Firebase থেকে displayName না থাকলে email থেকে নাম
  const displayName =
    user.displayName ||
    user.email?.split("@")[0] ||
    "User";

  const initials = displayName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // Firebase account create করার date
  const joinedDate = user.metadata?.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown";

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Cover */}
        <div className="h-28 bg-gradient-to-r from-indigo-500 to-purple-500" />

        {/* Profile content */}
        <div className="px-6 pb-6">
          {/* Avatar */}
          <div className="flex items-end justify-between -mt-12 mb-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center overflow-hidden shadow-sm">
                {user.photoURL ? (
                  <img
                    src={user?.photoURL}
                    alt={displayName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-2xl font-semibold text-gray-500">
                    {initials}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Name + Logout */}
          <div className="flex justify-between items-start gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-xl font-semibold text-gray-900">
                  {displayName}
                </h1>

                {user.emailVerified ? (
                  <span className="flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded-full px-2 py-0.5">
                    <FaRegCheckCircle size={12} />
                    Verified
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded-full px-2 py-0.5">
                    <GoXCircle size={12} />
                    Not Verified
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-500">
                Member since {joinedDate}
              </p>
            </div>

            <button onClick={handleLogOut}
              
              className="flex cursor-pointer hover:bg-gray-100 items-center gap-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg px-3 py-1.5 transition-colors"
            >
              Log Out
              <LogOut size={14} />
            </button>
          </div>

          {/* User Information */}
          <div className="space-y-4 border-t border-gray-100 pt-6 mt-6">
            <InfoRow
              icon={<CiMail size={20} />}
              label="Email"
              value={user.email || "Not available"}
            />

            <InfoRow
              icon={<CiPhone size={20} />}
              label="Phone"
              value={user.phoneNumber || "Not available"}
            />

            <InfoRow
              icon={<CiLocationOn size={20} />}
              label="Location"
              value="Not available"
            />

            <InfoRow
              icon={<span className="text-sm font-semibold">ID</span>}
              label="User ID"
              value={user.uid}
            />

            <InfoRow
              icon={<span className="text-sm font-semibold">🔐</span>}
              label="Login Provider"
              value={
                user.providerData?.[0]?.providerId
                  ?.replace(".com", "")
                  .replace("password", "Email & Password") ||
                "Unknown"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs text-gray-500">{label}</p>

        <p className="text-sm font-medium text-gray-900 break-all">
          {value}
        </p>
      </div>
    </div>
  );
}
