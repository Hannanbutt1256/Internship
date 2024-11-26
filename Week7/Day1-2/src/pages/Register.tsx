import React, { useState } from "react";
import { auth } from "../utils/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterInterface } from "../types/auth";
import { registerSchema } from "../validation/authSchema";
const SignUp: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInterface>({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  // Firebase SignUp handler
  const onSubmitHandler: SubmitHandler<RegisterInterface> = async (data) => {
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate("/");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className=" p-20 rounded-md shadow-2xl flex flex-col justify-center items-center ">
        <h1 className="text-2xl mb-5 ">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
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
          onClick={handleSubmit(onSubmitHandler)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mb-5"
        >
          Sign Up
        </button>
        {errors.email && <p>{errors.email.message}</p>}
        {errors.password && <p>{errors.password.message}</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;
