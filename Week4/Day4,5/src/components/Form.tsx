import { useState } from "react";
import { useTheme } from "../common/ThemeContext";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
interface validateErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

//* Validation
const validateUser = (user: User): validateErrors => {
  const errors: validateErrors = {};
  //* Name Validation
  const nameREGEX = /^[a-zA-Z]+([ \-']{0,1}[a-zA-Z]+){0,2}[.]{0,1}$/;
  if (!user.firstName) {
    errors.firstName = "First Name is required *";
  } else if (!nameREGEX.test(user.firstName)) {
    errors.firstName = "First Name is not Valid *";
  }
  if (!user.lastName) {
    errors.lastName = "Last Name is required *";
  } else if (!nameREGEX.test(user.lastName)) {
    errors.lastName = "Last Name is not Valid *";
  }
  //* Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!user.email) {
    errors.email = "Email is required *";
  } else if (!emailRegex.test(user.email)) {
    errors.email = "Email is not valid *";
  }
  //* Password Validation
  const hasUppercase = /[A-Z]/;
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
  const hasNumber = /\d/;

  if (!user.password) {
    errors.password = "Password is required *";
  } else if (user.password.length < 8) {
    errors.password = "Password must be at least 8 characters *";
  } else if (!hasUppercase.test(user.password)) {
    errors.password = "Password must contain at least one uppercase letter *";
  } else if (!hasSpecialCharacter.test(user.password)) {
    errors.password = "Password must contain at least one special character *";
  } else if (!hasNumber.test(user.password)) {
    errors.password = "Password must contain at least one number *";
  }
  return errors;
};

const Form = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<validateErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateErrors = validateUser(user);
    setError(validateErrors);
    if (Object.keys(validateErrors).length === 0) {
      try {
        console.log("user", user);
        const url = "http://192.168.31.77:5000/api/register"; //!when testing the website on mobile use laptop ip address as mobile device has no clue what is local host
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const data = await response.json();
        console.log("Response data:", data);
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center font-mont h-screen">
      <div>
        <img
          className="hover:cursor-pointer max-w-6 pb-2 absolute top-5 right-5"
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
        <div className=" rounded-xl p-6 md:px-20 w-fit bg-gradient-to-br from-white to-blue-300 dark:bg-gradient-to-br dark:from-blue-400 dark:to-blue-950">
          <h2 className="text-center p-3 text-2xl font-bold dark:text-white">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="text-center">
            {/* First Name */}
            <div className="">
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={user.firstName}
                onChange={handleChange}
                className=" border-2 border-black focus:border-blue-700 focus:outline-none p-2 pr-16 rounded-xl m-2 "
                placeholder="Enter your First name"
              />
              {error.firstName && <p className="">{error.firstName}</p>}
            </div>

            {/* Last Name */}
            <div className="">
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={user.lastName}
                onChange={handleChange}
                className=" border-2 border-black focus:border-blue-700 focus:outline-none p-2 pr-16 rounded-xl m-2 "
                placeholder="Enter your last name"
              />
            </div>
            {error.lastName && <p className="">{error.lastName}</p>}

            {/* Email */}
            <div className="">
              <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={handleChange}
                className=" border-2 border-black focus:border-blue-700 focus:outline-none p-2 pr-16 rounded-xl m-2 "
                placeholder="Enter your email"
              />
            </div>
            {error.email && <p className="">{error.email}</p>}
            {/* Password */}
            <div className="">
              <input
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={handleChange}
                className=" border-2 border-black focus:border-blue-700 focus:outline-none p-2 pr-16 rounded-xl m-2 "
                placeholder="Enter your password"
              />
            </div>
            {error.password && <p className="">{error.password}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="p-2 px-4 rounded-full m-2 bg-blue-400 text-white text-lg font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
