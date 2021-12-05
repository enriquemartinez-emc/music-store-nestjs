import { Album as AlbumModel } from '.prisma/client';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from 'src/prisma/prisma.service';

export class GetAlbumsQuery {}

@QueryHandler(GetAlbumsQuery)
export class GetAlbumsHandler implements IQueryHandler<GetAlbumsQuery> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(): Promise<AlbumModel[]> {
    return this.prismaService.album.findMany();
  }
}
