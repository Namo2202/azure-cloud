import mysql from 'mysql/promise';

export default class ArticleApi {
  static async connect() {
    return await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });
  }

  async getAll() {
    try {
      const connection = await this.connect();
      const [result] = await connection.execute('SELECT * FROM articles');
      connection.end();
      return result;
    } catch (ex) {
      console.log(ex);
      return [];
    }
  }

  async getOne(id) {
    // debugger;
    try {
      const connection = await this.connect();
      const [result] = await connection.execute('SELECT * FROM articles WHERE id = ?', [id]);
      connection.end();
      return result[0];
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }

  async create(detailsArticle) {
    try {
      const connection = await this.connect();
      const [result] = await connection.execute(
        'INSERT INTO articles (pseudo, contenu, urlImgArticle, `like`, urlImgProfil, date) VALUES (?, ?, ?, ?, ?, ?)',
        [
          detailsArticle.pseudo,
          detailsArticle.contenu,
          detailsArticle.urlImgArticle,
          detailsArticle.like,
          detailsArticle.urlImgProfil,
          detailsArticle.date
        ]
      );
      connection.end();
      return result;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }

  async update(id, detailsArticle) {
    try {
      const connection = await this.connect();
      const [result] = await connection.execute(
        'UPDATE articles SET pseudo=?, contenu=?, urlImgArticle=?, `like`=?, urlImgProfil=?, date=? WHERE id = ?',
        [
          detailsArticle.pseudo,
          detailsArticle.contenu,
          detailsArticle.urlImgArticle,
          detailsArticle.like,
          detailsArticle.urlImgProfil,
          detailsArticle.date,
          id
        ]
      );
      connection.end();
      return result;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }
}
