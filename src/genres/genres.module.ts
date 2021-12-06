import { Module } from '@nestjs/common';
import { GenresController } from './genres.controller';
import { GetGenresHandler } from './list';

@Module({
  controllers: [GenresController],
  providers: [GetGenresHandler],
})
export class GenresModule {}
