import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase.config";
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router";
import Google from "../assets/images/Google.png"
import Image from "../components/layout/common/Image";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ref, set } from "firebase/database";

function EyeIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
        </svg>
    );
}

function EyeOffIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="M3 3l18 18M10.6 10.7a3 3 0 0 0 4.2 4.2M6.5 6.6C3.9 8.2 2 12 2 12s4 7 10 7c1.9 0 3.6-.6 5-1.6M17.4 17.4C19.6 15.8 22 12 22 12s-4-7-10-7c-.7 0-1.4.1-2.1.2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default function LoginPage() {
    const [loading, setloading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();

    const handleLogin = (e) => {
        setEmail("")
        setPassword("")
        setRememberMe(false)
        setloading(true)
        e.preventDefault()
        signInWithEmailAndPassword(auth, email)
            .then((userCredential) => {
                const user = userCredential.user;

                console.log(user)
                setloading(false)
                navigate('/')
                toast.success("Login Successfully")

            })
            .catch((error) => {
                setloading(false)
                const errorCode = error.code;
                toast.error(`${errorCode} (No match)`)
                navigate('/register')
            });

    }

    function handleGooleLogin() {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                set(ref(db,"user/"+user.uid),{
                    email:user.email,
                    image:"https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
                    name:user.displayName

                }).then(()=>{
                    toast.success("Login Successfully")
                    navigate("/")
                })

            }).catch((error) => {

                const errorCode = error.code;
                console.log(errorCode)
            });
    }

    return (
        <div className="min-h-screen w-full flex  justify-center bg-white px-4 py-12 font-jost">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="w-full max-w-md">
                {/* Tabs */}
                <div className="flex items-center justify-center gap-8 sm:gap-10 mb-8 sm:mb-10">
                    <button
                        type="button"

                        className={`relative font-medium text-primary text-sm sm:text-base  `}
                    >
                        LOGIN
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary" />
                    </button>

                </div>


                <button onClick={handleGooleLogin} className="w-full flex bg-[#bebebe38] cursor-pointer justify-center h-13.75 inset-shadow-2xs shadow-md border-primary  mb-5   transition-colors">

                    <Image className="h-full" src={Google} alt="Google Logo" />
                </button>

                <form
                    onSubmit={handleLogin}
                    className="flex flex-col gap-6"
                >
                    {/* email */}
                    <div className="border-2 border-[#e4e4e4]">
                        <input value={email} onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter your email address *"
                            required
                            className="w-full border-none  px-4.25 h-13.75 text-sm text-primary placeholder:text-gray focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>

                    {/* Password with notched label */}
                    <div className="relative pt-2.5">
                        <span className="absolute top-0 left-3 bg-white z-10 px-1.5 text-xs text-primary">
                            Password *
                        </span>
                        <div className="relative border-2 border-primary">
                            <input value={password} onChange={(e) => setPassword(e.target.value)}
                                type={showPassword ? "text" : "password"}
                                required
                                className={`w-full px-4.25  h-13.75 ${!showPassword ? "text-[20px]" : "text-sm"} pr-12   text-primary focus:outline-none border-2`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((v) => !v)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray hover:text-primary transition-colors"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? (
                                    <EyeIcon />
                                ) : (
                                    <EyeOffIcon />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Remember me / Lost password */}
                    <div className="flex items-center justify-between flex-wrap gap-3">
                        <label className="flex items-center gap-2 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-4 h-4 border border-gray/50 accent-primary cursor-pointer"
                            />
                            <span className="text-sm text-primary">Remember me</span>
                        </label>
                        <Link
                            to="/forgot"
                            className="text-sm text-primary underline underline-offset-2 hover:text-gray transition-colors"
                        >
                            Lost password?
                        </Link>
                    </div>

                    {/* Submit */}
                    {loading ?
                        <button type="button" className="bg-indigo-500 justify-center flex py-4 ..." disabled>
                            <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">

                            </svg>
                            Processing…
                        </button> :
                        <button
                            type="submit"
                            className="w-full cursor-pointer uppercase bg-primary text-white text-sm tracking-wide py-4 hover:opacity-90 transition-opacity"
                        >
                            Log In
                        </button>
                    }

                    {/* Footer link */}
                    <p className="text-center text-sm text-gray">
                        No account yet?{" "}
                        <Link to="/register"

                            className="text-primary underline underline-offset-2 hover:text-gray transition-colors"
                        >
                            Create Account
                        </Link>
                    </p>
                </form>



            </div>
        </div>
    );
}

