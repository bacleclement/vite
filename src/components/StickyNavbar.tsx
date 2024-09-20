import {
  Navbar,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
 
export function StickyNavbar() {
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavLink to="/movies"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          🍿 Films
      </NavLink>
      <NavLink to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          😍 A propos
      </NavLink>
    </ul>
  );
 
  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <NavLink to="/movies"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
            <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-lg">React Movies Application</h1>
          </NavLink>
          
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
          </div>
        </div>
     </Navbar>
    </>
  );
}