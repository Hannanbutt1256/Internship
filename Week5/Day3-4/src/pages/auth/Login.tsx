import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInterface } from "../../types/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validation/authSchema";
const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInterface>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<LoginInterface> = (data) => {
    console.log("Login Submitted Data", data);
  };
  return (
    <div className="flex justify-center items-center font-mont h-screen">
      <div className=" rounded-xl p-6 md:px-20 w-fit bg-gradient-to-br from-mintGreen to-softBlue ">
        <h2 className="text-center p-3 text-2xl font-bold text-lightBeige ">
          Login
        </h2>
        <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <input
              {...register("email")}
              type="email"
              className=" border-2 border-blue-300 focus:border-blue-700 focus:outline-none p-2 pr-16 rounded-xl m-2 "
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="">
            <input
              {...register("password")}
              type="password"
              className=" border-2 border-blue-300 focus:border-blue-700 focus:outline-none p-2 pr-16 rounded-xl m-2 "
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="p-2 px-4 rounded-full m-2 bg-blue-700 text-white text-lg font-medium"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
