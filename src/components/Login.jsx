import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleNavOpen = () => {
    setOpen(!open);
  };

  const login = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill all fields");
      return;
    }
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const users = localStorage.setItem('user', JSON.stringify(user)); 
      alert("Login Successful");
      navigate('/');
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <header className="w-full h-14 z-10 fixed bg-opacity-50 bg-slate-900 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-[roboto] text-slate-100 font-bold">
            Smart City Connect
          </h1>
          {/* <ul className="hidden md:flex uppercase font-semibold text-slate-100 cursor-pointer space-x-6">
            <li>
              <NavLink to="/">
                <div className="mr-10">home</div>
              </NavLink>
            </li>
          </ul> */}
          <div
            onClick={handleNavOpen}
            className="md:hidden text-slate-100 cursor-pointer"
          >
            {!open ? (
              <AiOutlineMenuFold size={25} />
            ) : (
              <AiOutlineClose size={25} />
            )}
            <ul
              className={
                !open
                  ? "hidden"
                  : "absolute top-14 left-0 w-full h-screen bg-slate-900 px-10 uppercase text-center font-medium bg-opacity-50 py-10"
              }
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <li className="border-b py-2 hover:bg-blue-500/40 rounded duration-300">
                  Home
                </li>
              </Link>
              {/* Add other menu items here */}
            </ul>
          </div>
        </header>
      </div>

      {/* login */}

      <section className="bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl  text-white font-bold leading-tight tracking-tight  md:text-2xl dark:text-white">
                Log in to your account
              </h1>
              {error && <p className="text-red-500">{error}</p>}
              <form className="space-y-4 md:space-y-6" onSubmit={login}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    id="email"
                    className="bg-gray-700 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-700 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                {/* <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-blue-700 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                >
                  {loading ? "Logging in..." : "Log in"}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <NavLink
                    to="/signup"
                    className="font-medium text-blue-700 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
