import mysql from 'mysql/promise';

export class UserApi {
  
  async connect() {
    return await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });
  }

  async create(identifiants) {
    // debugger;
    try {
      const connection = await this.connect();
      const [result] = await connection.execute(
        'INSERT INTO utilisateurs (email, motDePasse) VALUES (?, ?)',
        [
          identifiants.email,
          identifiants.motDePasse,
        ]
      );
      connection.end();
      return result;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }

  async existe(email) {
    // debugger;
    try {
      const connection = await this.connect();
      const [result] = await connection.execute('SELECT * FROM utilisateurs WHERE email = ?', [email]);
      connection.end();
      return result.length === 0 ? false : true;
    } catch (ex) {
      console.log(ex);
      return false;
    }
  }

  async get(email) {
    // debugger;
    try {
      const connection = await this.connect();
      const [result] = await connection.execute('SELECT * FROM utilisateurs WHERE email = ?', [email]);
      connection.end();
      return result[0];
    } catch (ex) {
      console.log(ex);
      return null;
    }   
  }
}
