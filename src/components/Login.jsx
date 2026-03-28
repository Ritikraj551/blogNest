import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { set, useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin({ userData }));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-180px)] flex items-center justify-center px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-lg rounded-4xl border border-slate-800 bg-slate-900/95 p-10 shadow-2xl shadow-slate-950/30">
        <div className="mb-6 flex justify-center">
          <span className="inline-flex w-full max-w-25 rounded-3xl bg-slate-100/90 p-3 shadow-lg shadow-slate-950/15">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-100">
          Sign in to your account
        </h2>
        <p className="mt-3 text-center text-sm text-slate-400">
          Don&apos;t have an account?&nbsp;
          <Link
            to="/signup"
            className="font-semibold text-cyan-400 transition hover:text-cyan-200"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-rose-400 mt-6 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-10 space-y-6">
          <div className="space-y-5">
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                      value,
                    ) || "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              {...register("password", { required: true })}
            />
            <Button type="submit" className="W-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
