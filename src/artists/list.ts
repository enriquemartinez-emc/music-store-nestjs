import { Artist as ArtistModel } from '.prisma/client';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../prisma/prisma.service';

export class GetArtistsQuery {}

@QueryHandler(GetArtistsQuery)
export class GetArtistsHandler implements IQueryHandler<GetArtistsQuery> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(): Promise<ArtistModel[]> {
    return this.prismaService.artist.findMany();
  }
}
