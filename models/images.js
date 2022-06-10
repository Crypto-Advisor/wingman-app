const pool = require('./database');

//images

const create_images = () =>{

}

const get_images = () =>{
    const id = req.params.id;
}

const update_images = () =>{
    const id = req.params.id;
}

const delete_images = () =>{
    const id = req.params.id;
}

const create = (description) =>
  pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [
    description,
  ]);

const get = () => pool.query('SELECT * FROM todo');

const remove = (id) => pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);

module.exports = { create_images, get_images, update_images, delete_images };