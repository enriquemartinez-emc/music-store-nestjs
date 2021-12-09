import { Module } from '@nestjs/common';
import { AlbumsModule } from './albums/albums.module';
import { ArtistsModule } from './artists/artists.module';
import { GenresModule } from './genres/genres.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, AlbumsModule, ArtistsModule, GenresModule],
})
export class AppModule {}
