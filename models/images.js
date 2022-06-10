const pool = require('./database');

//images

const create_images = async (req, res, next) =>{
    const {id, user_id, image_url, likes, view_weight} = req.body;
    try{
        let result = await pool.query('INSERT INTO images (id, user_id, image_url, likes, view_weight, DEFAULT) VALUES ($1, $2, $3, $4, $5)', [id, user_id, image_url, likes, view_weight]);
        res.json({success: true, result});
    }
    catch(err){
        res.json({success: false, err});
    }
}

const get_images = async (req, res, next) =>{
    try{
        let result = await pool.query('SELECT * FROM images');
        res.json({success: true, result});
    }
    catch(err){
        res.json({success: false, err});
    }
}

const get_user_images = async (req, res, next) =>{
    const {id} = req.params;
    try{
        let result = await pool.query('SELECT * FROM images WHERE user_id=$1', [id]);
        res.json({success: true, result});
    }
    catch(err){
        res.json({success: false, err});
    }
}

const update_images = async (req, res, next) =>{
    const {id, likes, view_weight} = req.body;
    try{
        let result = pool.query('UPDATE images SET likes=$1, view_weight=$2 WHERE id=$3', [likes, view_weight, id]);
        res.json({success: true, result});
      }
      catch(err){
        res.json({success: false, err});
      }
}

const delete_images = async (req, res, next) =>{
    const {id} = req.params;
    try{
        let result = pool.query('DELETE FROM images WHERE id=$1', [id]);
        res.json({success: true, result});
      }
      catch(err){
        res.json({success: false, err});
      }
}


module.exports = { create_images, get_images, get_user_images, update_images, delete_images };