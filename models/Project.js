const db = require("../config/db");

class Project {
  constructor(title, description, status, repo) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.repo = repo;
  }

  save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    let createdAtDate = `${yyyy}-${mm}-${dd}`;

    let sql = `
        INSERT INTO projects(
            title,
            description,
            status,
            created_at
        )
        VALUES(
            '${this.title}',
            '${this.description}',
            '${this.status}',
            '${this.repo},
           '${createdAtDate}'
        )
    `;

    return db.execute(sql);
  }

  static findAll() {
    let sql = `SELECT projects.id, projects.title, projects.description, projects.status,
    GROUP_CONCAT(languages.language SEPARATOR ',') AS languages, projects.repo 
    FROM projects JOIN languages 
    ON projects.id = languages.project_ID
    GROUP BY projects.id;`;

    return db.execute(sql);
  }
}

module.exports = Project;
