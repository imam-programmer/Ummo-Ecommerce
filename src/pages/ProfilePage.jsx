import { useEffect, useState } from "react";
import { CiMail, CiPhone, CiLocationOn } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { GoXCircle } from "react-icons/go";
import { LogOut } from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.config";
import toast, { Toaster } from "react-hot-toast";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }

      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // logout functionality================
  function handleLogOut() {
    signOut(auth).then(() => {
   
    })
      .catch((error) => {
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

  
  const joinedDate = user?.metadata?.creationTime
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
        <div className="h-28 bg-linear-to-r from-indigo-500 to-purple-500" />

        {/* Profile content */}
        <div className="px-6 pb-6">
          {/* Avatar Image*/}
          <div className="flex items-end justify-between -mt-12 mb-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center overflow-hidden shadow-sm">
                {user?.photoURL &&
                  <img
                    src={user?.photoURL}
                    alt={user?.displayName}
                    className="w-full h-full object-cover"
                  />

                }
              </div>
            </div>
          </div>

          {/* Name + Logout */}
          <div className="flex justify-between items-start gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-xl font-semibold text-gray-900">
                  {user?.displayName}
                </h1>

                {user?.emailVerified ? (
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
            {user == null ?

              <button onClick={() => navigate("/login")}

                className="flex cursor-pointer bg-primary text-white hover:bg-[#333] items-center gap-1.5 text-sm font-medium border border-gray-300 rounded-lg px-3 py-1.5 transition-colors"
              >
                Log In

              </button>
              :

              <button onClick={handleLogOut}

                className="flex cursor-pointer hover:bg-gray-100 items-center gap-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg px-3 py-1.5 transition-colors"
              >
                Log Out
                <LogOut size={14} />
              </button>
            }
          </div>

          {/* User Information */}
          <div className="space-y-4 border-t border-gray-100 pt-6 mt-6">
            <InfoRow
              icon={<CiMail size={20} />}
              label="Email"
              value={user?.email || "Not available"}
            />

            <InfoRow
              icon={<CiPhone size={20} />}
              label="Phone"
              value={user?.phoneNumber || "Not available"}
            />

            <InfoRow
              icon={<CiLocationOn size={20} />}
              label="Location"
              value="Not available"
            />

            <InfoRow
              icon={<span className="text-sm font-semibold">ID</span>}
              label="User ID"
              value={user?.uid}
            />

            <InfoRow
              icon={<span className="text-sm font-semibold">🔐</span>}
              label="Login Provider"
              value={
                user?.providerData?.[0]?.providerId
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
