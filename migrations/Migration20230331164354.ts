import { Migration } from '@mikro-orm/migrations';

export class Migration20230331164354 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "team" ("id" serial primary key, "name" varchar(255) not null, "score" int not null);');

    this.addSql('create table "match" ("id" serial primary key, "period" int not null, "left_team_id" int not null, "right_team_id" int not null, "date" timestamptz(0) not null, "current" boolean not null);');
    this.addSql('alter table "match" add constraint "match_left_team_id_unique" unique ("left_team_id");');
    this.addSql('alter table "match" add constraint "match_right_team_id_unique" unique ("right_team_id");');

    this.addSql('alter table "match" add constraint "match_left_team_id_foreign" foreign key ("left_team_id") references "team" ("id") on update cascade;');
    this.addSql('alter table "match" add constraint "match_right_team_id_foreign" foreign key ("right_team_id") references "team" ("id") on update cascade;');
  }

}
