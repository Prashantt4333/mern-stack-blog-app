import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 ">
      <Link to="/" className="w-[35%]">
        <img className=" " src="../../public/logo-transparent-png.png" alt="" />
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search"
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-16 lg:hidden h-10 rounded-full " color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className=" flex gap-2 md:order-2">
        <Button
          className=" h-10  rounded-full hidden sm:inline px-1"
          color="gray"
          pill
        >
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button
            gradientDuoTone="purpleToBlue"
            className="h-10  rounded-full px-1"
            
          >
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
