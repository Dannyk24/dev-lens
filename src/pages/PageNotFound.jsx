import Navbar from "../components/Navbar";
import { Link } from "react-router";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <>
      <Navbar />
      <div className="profile-page">
        <span>Page Not Found </span>
        <Link className="cta primary-cta back-to-home-cta" to="/">
          Back to Home
        </Link>
      </div>
    </>
  );
}

export default PageNotFound;
