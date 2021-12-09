import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ArtistsController } from './artists.controller';
import { GetArtistsHandler } from './list';

@Module({
  imports: [CqrsModule],
  controllers: [ArtistsController],
  providers: [GetArtistsHandler],
})
export class ArtistsModule {}
