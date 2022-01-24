import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentService from "../services/StudentService";

class ListStudents extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }
  componentDidMount() {
    StudentService.getStudents().then((res) => {
      this.setState({ students: res.data });
    });
  }
  render() {
    return (
      <div className="container">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              {this.state.students.map((student) => (
                <tr key={student}>
                  <td>{student.id}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.emailId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    );
  }
}

export default ListStudents;
