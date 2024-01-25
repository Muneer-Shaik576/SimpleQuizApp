import { Outlet, Link, NavLink } from "react-router-dom";

 const Home=()=>{
  return (
    <>
      <nav>
        <ul className="route">
          <li>
            <NavLink to="/Java Test"  id="button">Java</NavLink>
          </li>
          <li>
            <Link to="/Python Test" id="button">Python</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Home;
