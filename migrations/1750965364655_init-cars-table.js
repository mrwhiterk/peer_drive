


/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */

    /**
     * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
     */
    exports.shorthands = undefined;
    exports.up = (pgm) => {
        pgm.createTable('cars', {
            id: 'id',
            make: { type: 'text', notNull: true },
            model: { type: 'text', notNull: true },
            year: { type: 'integer', notNull: true },
            price_per_day: { type: 'numeric', notNull: false, default: 0 },
            created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp')}
        })
    };
    /**
     * @param pgm {import('node-pg-migrate').MigrationBuilder}
     * @param run {() => void | undefined}
     * @returns {Promise<void> | void}
     */
    exports.down = (pgm) => {
        pgm.dropTable('cars');
    }





