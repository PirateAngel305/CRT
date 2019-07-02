import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import StudentLinks from "./StudentLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    profile.category == "company" ? (
      <SignedInLinks profile={profile} />
    ) : (
      <StudentLinks profile={profile} />
    )
  ) : (
    <SignedOutLinks />
  );

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Campus Recruitment
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);