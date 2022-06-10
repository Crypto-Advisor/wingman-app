CREATE DATABASE wingman;

CREATE TABLE users (
    user_id INT PRIMARY KEY,
    like_weight FLOAT8 NOT NULL,
    viewing_credits INT NOT NULL
);

CREATE TABLE images(
  	id integer PRIMARY KEY,
    user_id integer NOT NULL,
    image_url varchar(512) NOT NULL,
    likes float8 NOT NULL,
    view_weight float8 NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_userid
        FOREIGN KEY(user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE
);



