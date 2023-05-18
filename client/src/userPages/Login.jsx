/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { useCookies } from "react-cookie";
import axios from "axios";
import swal from "sweetalert";
import validator from 'validator'

function Login() {
  // function for add class to the image on signin page
  window.addEventListener("resize", function () {
    setWidth(window.innerWidth);
  });

  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const [cookies, setCookies, removeCookie] = useCookies();

  const [loginDetails, setDetails] = useState({
    email: "",
    password: "",
  });

  const [validationErr, setValidationErr] = useState({
    email: '',
    password: '',
  })

  const generateError = (err) => {
    swal(err);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validator.isEmail(loginDetails.email) && validationErr.email === '' && validationErr.password === '' && loginDetails.password !== "") {

      try {
        const { data } = await axios.post(
          "http://localhost:3000/user/login",
          { ...loginDetails },
          { withCredentials: true }
        );
        if (data.status) {
          navigate("/");
        }
      } catch (error) {
        generateError(error.response.data.message);
      }

    } else {
      if (loginDetails.email == '' || !validator.isEmail(loginDetails.email)) {
        setValidationErr({ ...validationErr, email: 'Enter a valid Email' })
      }
      else if (loginDetails.password === '' || loginDetails.password.length < 5) {
        setValidationErr({ ...validationErr, password: 'Password should be 5 letters or more' })
      }
    }
};
  const verifyUser = async () => {
    const jwt = cookies;
    if (jwt.user_jwt) {
      try {
        const { data } = await axios.get("http://localhost:3000/user", {
          withCredentials: true,
        });
        if (data.status) {
          navigate("/");
        } else {
          removeCookie("user_jwt");
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className={width <= 1200 ? "hidden" : " flex w-2/6 dark:hidden"} >
          <img
            src="/loginSignup.png"
            className="loginImg dark:bg-gray-600 rounded-lg"
            alt=""
          />
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-600 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login Account
            </h1>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black-600 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={loginDetails.email}
                  onChange={(e) => {
                    setDetails({
                      ...loginDetails,
                      [e.target.name]: e.target.value,
                    })
                    setValidationErr({ ...validationErr, email: '' })
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@mail.com"
                />
                <span className="text-red-600">{validationErr.email}</span>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={loginDetails.password}
                  onChange={(e) => {
                    setDetails({
                      ...loginDetails,
                      [e.target.name]: e.target.value,
                    })
                    setValidationErr({ ...validationErr, password: '' })
                  }
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <span className="text-red-600">{validationErr.password}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start"></div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-gray-100"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full submit-btn text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-sky-800"
              >
                Login
              </button>
              <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don`t have an account yet ? </span>
                <Link
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  to={"/register"}
                >
                  Register
                </Link>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
