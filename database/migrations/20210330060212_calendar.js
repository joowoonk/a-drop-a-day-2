exports.up = function (knex) {
  return knex.schema.createTable("calendar", (calendar) => {
    calendar.increments();
    calendar
      .integer("user_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    calendar
      .integer("to_do_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("to_do_list")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("calendar");
};
