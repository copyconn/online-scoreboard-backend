import {
  Cascade,
  Entity,
  OneToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { TeamEntity } from './team.entity';

@Entity({ tableName: 'match' })
export class MatchEntity {
  @PrimaryKey({ autoincrement: true })
  id: number;
  @Property()
  period: number;
  @OneToOne({ entity: () => TeamEntity, cascade: [Cascade.REMOVE] })
  leftTeam: TeamEntity;
  @OneToOne({ entity: () => TeamEntity, cascade: [Cascade.REMOVE] })
  rightTeam: TeamEntity;
  @Property()
  date: Date = new Date();
  @Property()
  current: boolean;
}
