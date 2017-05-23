DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(500),
  username VARCHAR(500),
  password VARCHAR(500),
  avatar VARCHAR(500)
);

DROP TABLE IF EXISTS Chats;

CREATE TABLE Chats (
  id SERIAL PRIMARY KEY,
  name VARCHAR(500)
);

DROP TABLE IF EXISTS user_chats;

CREATE TABLE user_chats (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  chat_id INTEGER
);

-- INSERT INTO `Users` (`id`,`email`,`username`,`password`,`avatar`) VALUES
-- ('','','','','');
-- INSERT INTO `Chats` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `user_chats` (`id`,`user_id`,`chat_id`) VALUES
-- ('','','');