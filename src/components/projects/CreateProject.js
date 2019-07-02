import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    companyname: "",
    job: "",
    duration: "",
    location: "",
    stipend: "",
    startdate: "",
    postedon: "",
    applyby: "",
    aboutcompany: "",
    aboutinternship: "",
    skillrequired: "",
    whocanapply: "",
    internshipsavailable: "",
    perk: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id="companyname" onChange={this.handleChange} />
            <label htmlFor="companyname">Company Name</label>
          </div>
          <div className="input-field">
            <input type="text" id="job" onChange={this.handleChange} />
            <label htmlFor="job">Job</label>
          </div>
          <div className="input-field">
            <input type="text" id="duration" onChange={this.handleChange} />
            <label htmlFor="duration">Duration</label>
          </div>
          <div className="input-field">
            <input type="text" id="location" onChange={this.handleChange} />
            <label htmlFor="location">Location</label>
          </div>
          <div className="input-field">
            <input type="text" id="stipend" onChange={this.handleChange} />
            <label htmlFor="stipend">Stipend</label>
          </div>
          <div className="input-field">
            <input type="text" id="startdate" onChange={this.handleChange} />
            <label htmlFor="startdate">Start Date</label>
          </div>
          <div className="input-field">
            <input type="text" id="postedon" onChange={this.handleChange} />
            <label htmlFor="postedon">Posted On</label>
          </div>
          <div className="input-field">
            <input type="text" id="applyby" onChange={this.handleChange} />
            <label htmlFor="applyby">Apply By</label>
          </div>
          <div className="input-field">
            <textarea
              id="aboutcompany"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="aboutcompany">About Company</label>
          </div>
          <div className="input-field">
            <textarea
              id="aboutinternship"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="aboutinternship">About Internship</label>
          </div>
          <div className="input-field">
            <textarea
              id="skillrequired"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="skillrequired">Skill Required</label>
          </div>
          <div className="input-field">
            <textarea
              id="whocanapply"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="whocanapply">Who can Apply</label>
          </div>
          <div className="input-field">
            <textarea
              id="internshipsavailable"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="internshipsavailable">Internships Available</label>
          </div>
          <div className="input-field">
            <textarea
              id="perk"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="perk">Perk</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
