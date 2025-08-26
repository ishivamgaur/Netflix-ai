import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./store/slices/userSlice";

const toastOptions = {
  duration: 4000,
  style: {
    background: "#333",
    color: "#fff",
  },
  success: {
    duration: 3000,
    style: {
      background: "#016630 ",
    },
  },
  error: {
    duration: 5000,
    style: {
      background: "#9f0712",
    },
  },
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, uid, email } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="w-full min-h-screen relative bg-black">
      <Header />
      <Outlet /> {/* page content goes here */}
      <Toaster position="top-right" toastOptions={toastOptions} />
    </div>
  );
}

export default App;
