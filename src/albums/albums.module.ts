import { Module } from '@nestjs/common';
import { AlbumCommandHandlers, AlbumQueryHandlers } from '.';
import { AlbumsController } from './albums.controller';

@Module({
  controllers: [AlbumsController],
  providers: [...AlbumCommandHandlers, ...AlbumQueryHandlers],
})
export class AlbumsModule {}
