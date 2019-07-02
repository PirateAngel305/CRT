import React, { Component } from "react";
import Table from "../projects/Table";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Interns extends Component {
  render() {
    const { interns, auth } = this.props;
    console.log(this.props);
    if (!auth.uid) return <Redirect to="/home" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <Table interns={interns} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    interns: state.firestore.ordered.interns,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "interns" }])
)(Interns);
