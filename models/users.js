const pool = require('./database');


//users

const create_user = async (req, res, next) =>{
  const {user_id} = req.body;
  try{
    let result = await pool.query('INSERT INTO users (user_id, like_weight, total_votes, viewing_credits) VALUES ($1, $2, $3, $4)', [user_id, 0, 0, 0]);
    res.json({success: true, result});
  }
  catch(err){
    res.json({success: false, err});
    console.log(err)
  }
}

const get_user = async (req, res, next) =>{
  const {id} = req.params;
  if(req.user.user_id !== id){
    res.json({success: false, error: "invalid user"});
  }
  try{
    let result = await pool.query('SELECT like_weight, total_votes, viewing_credits FROM users WHERE user_id=$1', [id]);
    res.json({success: true, result});
  }
  catch(err){
    res.json({success: false, err});
  }
}

const update_user = async (req, res, next) =>{
  const {user_id, like_weight, total_votes, viewing_credits} = req.body;
  try{
    let result = pool.query('UPDATE users SET like_weight=$1, total_votes=$2,viewing_credits=$3 WHERE user_id=$4', [like_weight, total_votes, viewing_credits, user_id]);
    res.json({success: true, result});
  }
  catch(err){
    res.json({success: false, err});
  }
}

const delete_user = async (req, res, next) =>{
  const {id} = req.params;
  try{
    let result = pool.query('DELETE FROM users WHERE user_id=$1', [id]);
    res.json({success: true, result});
  }
  catch(err){
    res.json({success: false, err});
  }
}


module.exports = { create_user, get_user, update_user, delete_user };