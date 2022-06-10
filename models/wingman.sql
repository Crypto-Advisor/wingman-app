CREATE DATABASE wingman;

CREATE TABLE users (
    user_id INT PRIMARY KEY,
    like_weight FLOAT8 NOT NULL
);

CREATE TABLE images(
  	id integer PRIMARY KEY,
    user_id integer NOT NULL,
    image_url varchar(512) NOT NULL,
    likes float8 NOT NULL,
    CONSTRAINT fk_userid
        FOREIGN KEY(user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE
);



