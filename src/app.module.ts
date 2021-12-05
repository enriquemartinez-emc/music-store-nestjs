import { Module } from '@nestjs/common';
import { AlbumsModule } from './albums/albums.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, AlbumsModule],
})
export class AppModule {}
