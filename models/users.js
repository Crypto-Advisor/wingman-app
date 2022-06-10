const pool = require('./database');


//users

const create_user = (req, res, next) =>{

}

const get_user = (req, res, next) =>{
  const id = req.params.id;
}

const update_user = (req, res, next) =>{
  const id = req.params.id;
}

const delete_user = (req, res, next) =>{

}

const create = (description) =>
  pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [
    description,
  ]);

const get = () => pool.query('SELECT * FROM todo');

const remove = (id) => pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);

module.exports = { create_user, get_user, update_user, delete_user };