import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { Genre as genreModel } from '@prisma/client';
import { GetGenresQuery } from './list';

@Controller('genres')
export class GenresController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async getGenres(): Promise<genreModel[]> {
    return this.queryBus.execute(new GetGenresQuery());
  }
}
