exports.up = function (knex) {
  return knex.schema.createTable("to_do_list", (to_do_list) => {
    to_do_list.increments();

    to_do_list.varchar("to_do_name", 128).notNullable();
    to_do_list.specificType("tomatoes", "text ARRAY");
    to_do_list.specificType("descriptions", "text ARRAY");
    to_do_list.integer("priority").notNullable();
    to_do_list.integer("rate_yourself");
    to_do_list.timestamp("starting_date").defaultTo(knex.fn.now());
    to_do_list.timestamp("due_date");
    to_do_list
      .integer("user_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("to_do_list");
};
