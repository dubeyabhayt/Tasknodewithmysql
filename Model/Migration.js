import con  from  '../Database.js';
class MigrationModel {


  static async setupDatabase() {
    try {
      const connection = await con.getConnection();
      await connection.query(`
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          username  VARCHAR(255) NOT NULL,
          password  VARCHAR(255) NOT NULL
         
        )
      `);
      connection.release();
      console.log('Database setup successful!');
    } catch (error) {
      console.error('Error setting up database:', error.message);
    }
  }


  static async Story_Model() {
    try {
      const connection = await con.getConnection();
      await connection.query(`
        CREATE TABLE IF NOT EXISTS story_model  (
            id INT AUTO_INCREMENT PRIMARY KEY,
            Desc_data  VARCHAR(255) NOT NULL,
            Date  VARCHAR(255) NOT NULL,

            Location  VARCHAR(255) NOT NULL
           
          
         
        )
      `);
      connection.release();
      console.log('Database setup successful!');
    } catch (error) {
      console.error('Error setting up database:', error.message);
    }
  }





  
  static async addStory_Model() {
    try {
      const connection = await con.getConnection();
      await connection.query(`
        CREATE TABLE IF NOT EXISTS story  (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title  VARCHAR(255) NOT NULL,
            description  VARCHAR(255) NOT NULL,
            date  VARCHAR(255) NOT NULL,
            location  VARCHAR(255) NOT NULL,
            createdBy  VARCHAR(255) NOT NULL
        )
      `);
      connection.release();
      console.log('Database setup successful!');
    } catch (error) {
      console.error('Error setting up database:', error.message);
    }
  }

  


}

export default MigrationModel;
