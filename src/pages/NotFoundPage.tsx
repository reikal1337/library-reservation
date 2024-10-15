import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col gap-10 justify-center items-center">
      <div className="text-4xl font-bold">404 Page Not found!</div>
      <Link to="/"> Go Home</Link>
    </main>
  );
};

export default NotFoundPage;
