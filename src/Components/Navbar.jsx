import userIcon from "/User-icon.svg";
import searchIcon from "/Search-icon.svg";

export default function Navbar() {
  return (
    <>
      <div className="container mx-auto lg:px-24">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="p-2 mr-2 btn btn-ghost btn-md bg-customPrimary lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-8 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <a className="font-bold md:text-2xl">Recipe Calories</a>
          </div>
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 menu menu-horizontal">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <div className="gap-2 navbar-end">
            <div className="max-md:btn max-md:btn-circle max-sm:bg-customPrimary flex justify-between items-center p-2 bg-white rounded-3xl bg-[#150B2B0D]">
              <img src={searchIcon} alt="User Icon" />
              <input
                type="text"
                className="flex-1 w-2/3 ml-2 rounded-3xl md:w-full bg-[#150B2B0D] hidden md:block"
                placeholder="Search"
              />
            </div>
            <a className="btn btn-circle md:btn-md bg-customPrimary">
              <img src={userIcon} alt="User Icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
