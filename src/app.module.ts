import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MedabotModule } from './medabot/medabot.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
    }),
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public'),

  }),
  
  MongooseModule.forRoot( process.env.MONGODB ),

  MedabotModule,

  CommonModule,


  ],

}
)
export class AppModule { 
  constructor(){
     
  }
}