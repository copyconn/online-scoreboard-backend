import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'team' })
export class TeamEntity {
  @PrimaryKey({ autoincrement: true })
  id: number;
  @Property()
  name: string;
  @Property()
  score: number;
}
