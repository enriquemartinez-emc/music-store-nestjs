import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GenresController } from './genres.controller';
import { GetGenresHandler } from './list';

@Module({
  imports: [CqrsModule],
  controllers: [GenresController],
  providers: [GetGenresHandler],
})
export class GenresModule {}
