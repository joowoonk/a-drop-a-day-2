const db = require("../database/db");

module.exports = {
  getUserById,
  getPostsByUserId,
  findBy,
  addNewUser,
  editUser,
  deleteUser,
  getAllUsers,
};

function getUserById(id) {
  return db("users").where({ id }).first();
}
function getPostsByUserId(id) {
  return db("to_do_list").where({ user_id: id });
}
function getAllUsers() {
  return db("users").orderBy("users.id", "asc");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function addNewUser(user) {
  const [id] = await db("users").insert(user, "id");
  // console.log([id]);

  return getUserById(id);
}

async function editUser(id, changes) {
  await db("users").where({ id }).update(changes);

  return getUserById(id);
}

function deleteUser(id) {
  return db("users").where({ id }).del();
}
