exports.up = function (knex) {
  return knex.schema.createTable("users", (users) => {
    users.increments();

    users.varchar("username", 128).notNullable().unique();
    users.varchar("password", 128).notNullable();
    users.varchar("first_name", 128).notNullable();
    users.varchar("last_name", 128).notNullable();
    users.varchar("email", 128).notNullable().unique();
    users.varchar("country_time_zone", 128).notNullable();
    users.timestamp("user_date").defaultTo(knex.fn.now());
    users.varchar("music_link", 1000).defaultTo("5qap5aO4i9A");
    users.varchar("goals", 550).defaultTo("My goal is...");
    users.boolean("ring_bell_on").defaultTo(1);
    users.boolean("darkmode_on").defaultTo(0);
    users.varchar("twitter_account", 128);
    users.boolean("is_admin").defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};

// {
//     "username": ,
//     "passowrd": ,
//     "first_name": ,
//     "last_name": ,
//     "email": ,
//     "country_time_zone":,
// }