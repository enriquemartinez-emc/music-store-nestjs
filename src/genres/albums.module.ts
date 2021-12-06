import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { CreateAlbumHandler } from './create';
import { GetAlbumsQuery } from './list';

const AlbumCommandHandlers = [CreateAlbumHandler];
const AlbumQueryHandlers = [GetAlbumsQuery];

@Module({
  controllers: [AlbumsController],
  providers: [...AlbumCommandHandlers, ...AlbumQueryHandlers],
})
export class AlbumsModule {}
