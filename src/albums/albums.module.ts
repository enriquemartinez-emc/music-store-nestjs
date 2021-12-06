import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { CreateAlbumHandler } from './create';
import { GetAlbumsHandler } from './list';

const AlbumCommandHandlers = [CreateAlbumHandler];
const AlbumQueryHandlers = [GetAlbumsHandler];

@Module({
  controllers: [AlbumsController],
  providers: [...AlbumCommandHandlers, ...AlbumQueryHandlers],
})
export class AlbumsModule {}
