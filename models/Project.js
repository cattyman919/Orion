const db = require("../config/db");

class Project {
  constructor(title, description, status, repo) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.repo = repo;
  }
}
