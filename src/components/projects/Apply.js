import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { intern } from "../../store/actions/applyActions";
class Apply extends Component {
  state = {
    companyName: "",
    job: ""
  };
  handleLoad = e => {
    this.setState({
      companyName: this.props.project.companyname,
      job: this.props.project.job
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.intern(this.state);
    this.props.history.push("/");
  };
  render() {
    const { project, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    if (project) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <form className="white" onSubmit={this.handleSubmit}>
              <div className="card-content">
                <div>
                  <label id="companyName" onLoad={this.handleLoad}>
                    {project.companyname}
                  </label>
                </div>
                <div>
                  <label id="job" onLoad={this.handleLoad}>
                    {project.job}
                  </label>
                </div>

                <div>
                  <button
                    className="btn pink lighten-1 z-depth-0"
                    onClick={this.handleLoad}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading project...</p>
        </div>
      );
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    intern: apply => dispatch(intern(apply))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    {
      collection: "projects"
    }
  ])
)(Apply);
