import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { MatchEntity } from '../entities/match.entity';
import { EntityRepository } from '@mikro-orm/postgresql';
import { TeamEntity } from '../entities/team.entity';

@Injectable()
export class ScoreService {
  constructor(
    @InjectRepository(MatchEntity)
    private matchRepository: EntityRepository<MatchEntity>,
    @InjectRepository(TeamEntity)
    private teamRepository: EntityRepository<TeamEntity>,
  ) {}

  async getSummary() {
    const result = await this.matchRepository.find(
      { current: false },
      { populate: ['leftTeam', 'rightTeam'] },
    );
    return result;
  }

  async getCurrent() {
    const match = await this.matchRepository.findOne(
      { current: true },
      { populate: ['leftTeam', 'rightTeam'] },
    );
    return match;
  }

  async createMatch(leftTeamName: string, rightTeamName: string) {
    const leftTeam = new TeamEntity();
    leftTeam.name = leftTeamName;
    leftTeam.score = 0;

    const rightTeam = new TeamEntity();
    rightTeam.name = rightTeamName;
    rightTeam.score = 0;

    const match = new MatchEntity();
    match.period = 0;
    match.leftTeam = leftTeam;
    match.rightTeam = rightTeam;
    match.date = new Date();
    match.current = true;

    await this.matchRepository.persistAndFlush(match);
  }

  async updatePeriod(matchId: number) {
    const match = await this.matchRepository.findOne({ id: matchId });
    match.period += 1;
    await this.matchRepository.persistAndFlush(match);
  }

  async updateScore(teamId: number, score: number) {
    const team = await this.teamRepository.findOne({ id: teamId });
    team.score = score;
    await this.teamRepository.persistAndFlush(team);
  }

  async finishCurrent(matchId: number) {
    const match = await this.matchRepository.findOne({ id: matchId });
    match.current = false;
    await this.matchRepository.persistAndFlush(match);
  }

  async deleteMatch(matchId: number) {
    const match = await this.matchRepository.findOne({ id: matchId });
    await this.matchRepository.removeAndFlush(match);
  }
}
