import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { Link } from "react-router-dom";
import { intern } from "../../store/actions/applyActions";
class ProjectDetails extends Component {
  render() {
    const { project, auth, id, profile } = this.props;
    const links =
      profile.category == "company" ? (
        <div />
      ) : (
        <div className="input-field">
          <Link to={"/apply/" + id}>
            <button className="btn pink lighten-1 z-depth-0">Apply</button>
          </Link>
        </div>
      );

    if (!auth.uid) return <Redirect to="/signin" />;
    if (project) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{project.companyname}</span>
              <p>{project.job}</p>
              <p>{project.duration}</p>
              <p>{project.location}</p>
              <p>{project.stipend}</p>
              <p>{project.startdate}</p>
              <p>{project.postedon}</p>
              <p>{project.applyby}</p>
              <p>{project.aboutcompany}</p>
              <p>{project.aboutinternship}</p>
              <p>{project.skillrequired}</p>
              <p>{project.whocanapply}</p>
              <p>{project.internshipsavailable}</p>
              <p>{project.perk}</p>
              {links}
            </div>

            <div className="card-action grey lighten-4 grey-text">
              <div>Posted by {project.authorFirstName}</div>
              <div>{moment(project.createdAt.toDate()).calendar()}</div>
            </div>
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
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    id: id
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
)(ProjectDetails);
