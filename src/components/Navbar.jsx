import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

import React from "react";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="w-full bg-green-300 pt-[20px] px-[10px] box-border">
      <ul className="flex mt-0 mx-auto max-w-[960px] items-center">
        <li className="mr-auto font-bold tracking-wider text-lg">myMoney</li>

        {!user && (
          <>
            <li className="mx-[16px]">
              <Link to="/login">Login</Link>
            </li>
            <li className="mx-[16px]">
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
          <li>hello, {user.displayName}</li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
