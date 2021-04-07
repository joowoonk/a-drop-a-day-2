exports.up = function (knex) {
  return knex.schema.createTable("notes", (notes) => {
    notes.increments();

    notes.specificType("note", "text ARRAY");
    notes.timestamp("note_date").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("notes");
};
