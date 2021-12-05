import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Album as AlbumModel } from '@prisma/client';
import { CreateAlbumCommand, CreateAlbumDTO } from './create';
import { GetAlbumsQuery } from './list';

@Controller('albums')
export class AlbumsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async getAlbums(): Promise<AlbumModel[]> {
    return this.queryBus.execute(new GetAlbumsQuery());
  }

  @Post()
  async createAlbum(@Body() albumData: CreateAlbumDTO): Promise<AlbumModel> {
    return this.commandBus.execute(new CreateAlbumCommand(albumData));
  }
}
