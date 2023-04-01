import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { ScoreModule } from './scoreboard/scoreboard.module';

@Module({
  imports: [MikroOrmModule.forRoot(), ScoreModule],
})
export class AppModule {}
