import { Module } from '@nestjs/common';
import { ArtistsController } from './artists.controller';
import { GetArtistsHandler } from './list';

@Module({
  controllers: [ArtistsController],
  providers: [GetArtistsHandler],
})
export class ArtistsModule {}
