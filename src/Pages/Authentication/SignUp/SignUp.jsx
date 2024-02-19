import React, { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import signup1 from "../../../assets/Auth/login2.svg";

import { updateProfile } from "firebase/auth";
import { useUser } from "../../../Hooks/useUser";
import { auth } from "../../../Firebase/firebase.init";
import useApi from "../../../Hooks/useApi";

const SignUp = () => {
  const { registrationWithEmail, loginWithGoogle, loginWithGithub } = useUser();

  const navigate = useNavigate();

  const {get, put} = useApi()

  //registration by email
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.email.value;
    const photoURL = form.photoURL.value;

    registrationWithEmail(email, password)
      .then((res) => {
        console.log(res.user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then((res) => {
            put("users",  { name, email, password, image: photoURL }, 'createUser')
              .then((data) => {
                console.log(data);
                navigate("/");
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
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

  //registration by github
  const handleGithubLogin = () => {
    loginWithGithub()
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="hero min-h-screen bg-none backdrop-blur-sm text-secondary">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={signup1} alt="" className="w-full" />

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent ">
            <form onSubmit={handleSubmit} className="card-body bg-transparent">
              <div className="text-3xl text-center  font-semibold">
                Please Register
              </div>
              <div className="form-control relative mt-5">
                <input
                  autoComplete="off"
                  id="name"
                  name="name"
                  type="name"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600  border-b-secondary/50 border-b-2"
                  placeholder="name"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
                >
                  Name
                </label>
              </div>
              <div className="form-control relative my-5">
                <input
                  autoComplete="off"
                  id="email"
                  name="email"
                  type="email"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600  border-b-secondary/50 border-b-2"
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
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600  border-b-secondary/50 border-b-2"
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
              <div className="form-control relative mt-5">
                <input
                  autoComplete="off"
                  id="photoURL"
                  name="photoURL"
                  type="url"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600  border-b-secondary/50 border-b-2"
                  placeholder="photoURL"
                  required
                />
                <label
                  htmlFor="photoURL"
                  className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
                >
                  PhotoURL
                </label>
              </div>
              <div className="text-xs text-secondary mt-2 ">
                Already have an account?
                <Link
                  to="/login"
                  className="hover:text-gray-400 hover:underline"
                >
                  Login
                </Link>
              </div>
              {/*{error && <div className="text-xs text-warning">{error}</div>}*/}
              <div className="form-control mt-6">
                <button type="submit" className="btn  toyButton ">
                  Register
                </button>
              </div>

              <div className="divider">OR</div>
              <div className="form-control flex flex-row justify-center gap-4 ">
                {/* login with github button */}
                <div
                  className="btn btn-circle  "
                  style={{ background: "#263238" }}
                  onClick={handleGithubLogin}
                >
                  <FaGithub className="text-3xl" />
                </div>
                <div
                  //login with google button

                  className="btn btn-circle  "
                  style={{ background: "#263238" }}
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

export default SignUp;
