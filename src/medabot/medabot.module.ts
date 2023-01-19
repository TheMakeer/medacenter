import { Module } from '@nestjs/common';
import { MedabotService } from './medabot.service';
import { MedabotController } from './medabot.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Medabot, MedabotSchema } from './entities/medabot.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [MedabotController],
  providers: [MedabotService],
  imports:[
    MongooseModule.forFeature([
      {
        name:Medabot.name,
        schema:MedabotSchema,
      },
    ]),
    ConfigModule
  ]
})
export class MedabotModule {}
