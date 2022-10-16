import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GqlModule } from './graphql/gql.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // make sure it's imporeted before modules reading env variables
    GqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
