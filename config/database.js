require('dotenv').config();

module.exports = {
  username:process.env.DB_USERNAME||'root',
  password:process.env.DB_PASSWORD||null,
  database:process.env.DB_DATABASE||'fastatsk',
  host:process.env.DB_HOST||'127.0.0.1',
  dialect: process.env.DB_DIALECT ,
  define: {
    timestamps: true,
    // Genera claves foraneas de este tipo user_id en vez de userId
    underscored: true
  }
}