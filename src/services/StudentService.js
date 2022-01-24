import http from "../http-common";

class StudentService {
  getStudents() {
    return http.get("/students");
  }
  getById(id) {
    return http.get(`/students/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(data) {
    return http.put("/students", data);
  }
  
  delete(id) {
    return http.delete(`/students/${id}`);
  }
}
export default new StudentService();
