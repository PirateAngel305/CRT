import React, { Component } from "react";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className="white">
          <h5 className="grey-text text-darken-3">Home</h5>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Home);
