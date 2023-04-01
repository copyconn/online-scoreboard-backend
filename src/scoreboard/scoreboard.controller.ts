import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ScoreService } from './scoreboard.service';

@Controller('scores')
export class ScoreController {
  constructor(private scoreService: ScoreService) {}
  @Get()
  async getResults() {
    const result = await this.scoreService.getResults();
    return result;
  }
  @Post()
  async createMatch(@Body() body) {
    await this.scoreService.createMatch(body.leftTeamName, body.rightTeamName);
  }
  @Put(':id')
  async updatePeriod(@Param('id') id: number) {
    await this.scoreService.updatePeriod(id);
  }
  @Put('team/:id')
  async updateScore(@Param('id') id: number, @Body() body) {
    await this.scoreService.updateScore(id, body.score);
  }
  @Put('match/:id')
  async updateCurrent(@Param('id') id: number) {
    await this.scoreService.updateCurrent(id);
  }
  @Delete(':id')
  async deleteMatch(@Param('id') id: number) {
    await this.scoreService.deleteMatch(id);
  }
}