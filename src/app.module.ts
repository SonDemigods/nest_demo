import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
