import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { Album as AlbumModel } from '@prisma/client';
import { GetArtistsQuery } from './list';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async getArtists(): Promise<AlbumModel[]> {
    return this.queryBus.execute(new GetArtistsQuery());
  }
}
