import { Migration } from '@mikro-orm/migrations';

export class Migration20230402164047 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "match" drop constraint "match_left_team_id_foreign";');
    this.addSql('alter table "match" drop constraint "match_right_team_id_foreign";');

    this.addSql('alter table "match" alter column "left_team_id" type int using ("left_team_id"::int);');
    this.addSql('alter table "match" alter column "left_team_id" drop not null;');
    this.addSql('alter table "match" alter column "right_team_id" type int using ("right_team_id"::int);');
    this.addSql('alter table "match" alter column "right_team_id" drop not null;');
    this.addSql('alter table "match" add constraint "match_left_team_id_foreign" foreign key ("left_team_id") references "team" ("id") on delete cascade;');
    this.addSql('alter table "match" add constraint "match_right_team_id_foreign" foreign key ("right_team_id") references "team" ("id") on delete cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "match" drop constraint "match_left_team_id_foreign";');
    this.addSql('alter table "match" drop constraint "match_right_team_id_foreign";');

    this.addSql('alter table "match" alter column "left_team_id" type int using ("left_team_id"::int);');
    this.addSql('alter table "match" alter column "left_team_id" set not null;');
    this.addSql('alter table "match" alter column "right_team_id" type int using ("right_team_id"::int);');
    this.addSql('alter table "match" alter column "right_team_id" set not null;');
    this.addSql('alter table "match" add constraint "match_left_team_id_foreign" foreign key ("left_team_id") references "team" ("id") on update cascade;');
    this.addSql('alter table "match" add constraint "match_right_team_id_foreign" foreign key ("right_team_id") references "team" ("id") on update cascade;');
  }

}
