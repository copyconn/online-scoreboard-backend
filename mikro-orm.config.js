module.exports = {
  entities: ['./dist/entities/*.entity.js'],
  entitiesTs: ['./src/entities/*.entity.ts'],
  dbName: 'scoreboard',
  type: 'postgresql',
  baseDir: process.cwd(),
  debug: true,
  clientUrl: 'postgres://postgres:postgrespw@localhost:32768',
  migrations: {
    tableName: 'mikro_orm_migrations', // migrations table name
    path: process.cwd() + '/migrations', // path to folder with migration files
    glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
    transactional: true, // run each migration inside transaction
    disableForeignKeys: true, // try to disable foreign_key_checks (or equivalent)
    allOrNothing: true, // run all migrations in current batch in master transaction
    emit: 'ts', // migration generation mode
  },
};
