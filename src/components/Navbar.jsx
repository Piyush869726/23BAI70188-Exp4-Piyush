import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>My Website</h2>

      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/analytics">Analytics</Link>
    </nav>
  );
}

export default Navbar;