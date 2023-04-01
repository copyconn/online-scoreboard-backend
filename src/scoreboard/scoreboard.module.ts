import { Module } from '@nestjs/common';
import { ScoreController } from './scoreboard.controller';
import { ScoreService } from './scoreboard.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MatchEntity } from '../entities/match.entity';
import { TeamEntity } from '../entities/team.entity';

@Module({
  controllers: [ScoreController],
  providers: [ScoreService],
  imports: [MikroOrmModule.forFeature([MatchEntity, TeamEntity])],
})
export class ScoreModule {}
