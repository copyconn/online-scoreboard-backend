import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { TeamEntity } from './team.entity';

@Entity({ tableName: 'match' })
export class MatchEntity {
  @PrimaryKey({ autoincrement: true })
  id: number;
  @Property()
  period: number;
  @OneToOne(() => TeamEntity)
  leftTeam: TeamEntity;
  @OneToOne(() => TeamEntity)
  rightTeam: TeamEntity;
  @Property()
  date: Date = new Date();
  @Property()
  current: boolean;
}
