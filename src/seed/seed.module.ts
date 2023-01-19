import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { Medabot } from '../medabot/entities/medabot.entity';
import { MedabotModule } from '../medabot/medabot.module';
import { CommonModule } from '../common/common.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[ 
    MedabotModule,
    CommonModule
  ]
})
export class SeedModule {}
