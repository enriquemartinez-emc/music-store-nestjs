import { Module } from '@nestjs/common';
import { ArtistsController } from './artists.controller';
import { GetArtistsQuery } from './list';

@Module({
  controllers: [ArtistsController],
  providers: [GetArtistsQuery],
})
export class ArtistsModule {}
