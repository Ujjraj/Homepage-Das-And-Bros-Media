import React, { useState } from "react";
import Header from "../components/Header";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Header />
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-4">Login / Register</h1>
        <p>Login or register to access exclusive content...</p>
      </div>
      <section className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {isLogin ? "Login" : "Register"}
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500"
            >
              {isLogin ? "Create an account" : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginRegister; 