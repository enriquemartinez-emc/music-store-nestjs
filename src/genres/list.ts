import { Genre as GenreModel } from '.prisma/client';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../prisma/prisma.service';

export class GetGenresQuery {}

@QueryHandler(GetGenresQuery)
export class GetGenresHandler implements IQueryHandler<GetGenresQuery> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(): Promise<GenreModel[]> {
    return this.prismaService.genre.findMany();
  }
}
