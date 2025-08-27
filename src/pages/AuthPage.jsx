import { useEffect, useState } from "react";
import { checkValidate } from "../utils/formValidate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice.js";

const AuthPage = () => {
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [inputValidateError, setinputValidateError] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const name = userData.name.trim();
    const email = userData.email.trim();
    const password = userData.password.trim();

    const validatedError = checkValidate(
      isSignIn ? null : name,
      email,
      password
    );
    console.log("validatedError: ", validatedError);
    setinputValidateError(validatedError);
    if (validatedError) return;

    //! Signup
    if (!isSignIn) {
      try {
        setIsAuthLoading(true);
        // Signup new user
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredentials.user;
        toast.success("User created");

        try {
          await updateProfile(user, {
            displayName: name,
            photoURL:
              "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          });

          // Get latest user data
          const { displayName, uid, email, photoURL } = auth.currentUser;

          // Save user in redux
          dispatch(addUser({ displayName, uid, email, photoURL }));
        } catch (error) {
          setinputValidateError(error.message);
        }
      } catch (error) {
        const errorCode = error.code;
        setinputValidateError(`${errorCode}`);
        toast.error(`${errorCode}`);
        return;
      } finally {
        setIsAuthLoading(false);
      }
    } else {
      try {
        setIsAuthLoading(true);
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredentials.user;
        // console.log("logged In user:", user);
        toast.success("Sign-In success");
      } catch (error) {
        const errorCode = error.code;
        setinputValidateError(`${errorCode}`);
        toast.error("Sign-In failed");
        return;
      } finally {
        setIsAuthLoading(false);
      }
    }
    setUserData({ name: "", email: "", password: "" });
  };

  const handleToggleAuth = () => {
    setIsSignIn(!isSignIn);
  };

  useEffect(() => {
    setUserData({ name: "", email: "", password: "" });
    setinputValidateError("");
  }, [isSignIn]);

  return (
    <div className="w-full min-h-screen -mt-20  background-image">
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="w-3/12 bg-black/60 min-h-40 flex flex-col gap-5 p-15 rounded-2xl *:transition-all *:duration-500 ">
          <h1 className="text-3xl font-bold text-white ">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          <form className="flex flex-col w-full gap-5 *:transition-all *:duration-500 flex-wrap">
            {!isSignIn && (
              <input
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className="bg-gray-100/10 text-white border-none border-1 outline-none ring-0 focus:ring-2 ring-transparent focus:ring-sky-500/50 px-4 py-3 rounded-md"
                type="text"
                placeholder="Enter name"
              />
            )}
            <input
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="bg-gray-100/10 text-white border-none border-1 outline-none ring-0 focus:ring-2 ring-transparent focus:ring-sky-500/50 px-4 py-3 rounded-md"
              type="email"
              placeholder="Enter email"
            />
            <input
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className="bg-gray-100/10 text-white border-none border-1 outline-none ring-0 focus:ring-2 ring-transparent focus:ring-sky-500/50 px-4 py-3 rounded-md"
              type="password"
              autoComplete="false"
              placeholder="Enter password"
            />
            {inputValidateError && (
              <p className="text-sm font-bold text-red-500 text-center">
                *{inputValidateError}
              </p>
            )}
            <button
              disabled={isAuthLoading ? true : false}
              onClick={(e) => handleFormSubmit(e)}
              className="bg-red-500/50 text-xl disabled:cursor-not-allowed disabled:bg-gray-800/50 font-semibold cursor-pointer hover:bg-red-500/60 text-white  px-4 py-3 rounded-md"
            >
              {isSignIn
                ? `${isAuthLoading ? "Signing in..." : "Sign In"}`
                : `${isAuthLoading ? "Creating account..." : "Sign Up"}`}
            </button>
          </form>
          <button
            disabled={isAuthLoading ? true : false}
            onClick={handleToggleAuth}
            className={`text-gray-400 hover:text-gray-200 cursor-pointer disabled:cursor-not-allowed pb-5`}
          >
            {isSignIn
              ? "Don't have an account? Sign Up"
              : "Already have account? Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
