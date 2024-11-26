import React, { useState } from "react";
import { auth, googleProvider } from "../utils/firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validation/authSchema";
import { LoginInterface } from "../types/auth";

const SignIn: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInterface>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  // Firebase email/password login handler
  const onSubmit: SubmitHandler<LoginInterface> = async (data) => {
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  // Firebase Google Sign-In handler
  const handleGoogleSignIn = async () => {
    setError(null);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className=" p-20 rounded-md shadow-2xl flex flex-col justify-center items-center">
        <h1 className="text-2xl mb-5">Sign In</h1>
        <form>
          <div>
            <input
              className="mb-5 outline-none p-2 rounded-lg"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <div>
            <input
              className="mb-5 outline-none p-2 rounded-lg"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </div>
        </form>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mb-5"
          onClick={handleSubmit(onSubmit)}
        >
          Sign In
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
          onClick={handleGoogleSignIn}
        >
          Sign In with Google
        </button>
        {errors.email && <p>{errors.email.message}</p>}
        {errors.password && <p>{errors.password.message}</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default SignIn;
