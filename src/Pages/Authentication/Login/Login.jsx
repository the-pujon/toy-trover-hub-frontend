import React, { useContext, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import login1 from "../../../assets/Auth/login2.svg";

import { useUser } from "../../../Hooks/useUser";
import useApi from "../../../Hooks/useApi";

const Login = () => {
  const { loginWithEmail, loginWithGoogle, loginWithGithub } = useUser();

  //const location = useLocation();

  const {get, put} = useApi()


  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.email.value;

    //login with email
    loginWithEmail(email, password)
      .then((result) => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  };

  //registration by google
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        const { displayName, email, photoURL } = res.user;

        get(`users/${email}`)
          .then((data) => {
            console.log(data);
            if (data) {
              navigate("/");
            } else {
              put("users",  {
                  name: displayName,
                  email,
                  image: photoURL,
                }, 'createUser')
                .then((data) => {
                  console.log(data);
                  navigate("/");
                })
                .catch((err) => console.error(err));
            }
          });
      })
      .catch((err) => console.log(err));
  };

  //login with github
  const handleGithubLogin = () => {
    loginWithGithub()
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-none backdrop-blur-sm">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={login1} alt="" className="w-full" />

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent ">
            <form onSubmit={handleLogin} className="card-body bg-transparent">
              <div className="text-3xl text-center  font-semibold text-secondary ">
                Please Login
              </div>
              <div className="form-control relative my-6">
                <input
                  autoComplete="off"
                  id="email"
                  name="email"
                  type="email"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                  placeholder="email"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
                >
                  Email
                </label>
              </div>
              <div className="form-control relative ">
                <input
                  autoComplete="off"
                  id="password"
                  name="password"
                  type="password"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                  placeholder="Password"
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
              <div className="text-xs text-secondary">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="hover:text-gray-400 hover:underline"
                >
                  Register
                </Link>
              </div>
              {error && (
                <div className="text-xs text-warning">There is an error</div>
              )}
              <div className="form-control mt-6">
                <button type="submit" className="toyButton  ">
                  Login
                </button>
              </div>

              <div className="divider text-secondary">OR</div>
              <div className="form-control flex flex-row justify-center gap-4 ">
                {/* login with github button */}
                <div
                  className="btn btn-circle border-secondary text-secondary "
                  onClick={handleGithubLogin}
                >
                  <FaGithub className="text-3xl" />
                </div>
                <div
                  //login with google button

                  className="btn btn-circle border-secondary "
                  onClick={handleGoogleLogin}
                >
                  <FcGoogle className="text-3xl" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
