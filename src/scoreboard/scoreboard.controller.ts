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
  async getSummary() {
    const result = await this.scoreService.getSummary();
    return result;
  }
  @Get('current')
  async getCurrent() {
    const current = await this.scoreService.getCurrent();
    return current;
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
  async finishCurrent(@Param('id') id: number) {
    await this.scoreService.finishCurrent(id);
  }
  @Delete(':id')
  async deleteMatch(@Param('id') id: number) {
    await this.scoreService.deleteMatch(id);
  }
}
