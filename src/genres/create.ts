import { Album as AlbumModel } from '.prisma/client';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { PrismaService } from '../prisma/prisma.service';

export interface CreateAlbumDTO {
  title: string;
  price: number;
  albumArtUrl?: string;
  artistId: string;
  genreId: string;
}

export class CreateAlbumCommand {
  constructor(public readonly album: CreateAlbumDTO) {}
}

@CommandHandler(CreateAlbumCommand)
export class CreateAlbumHandler implements ICommandHandler<CreateAlbumCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: CreateAlbumCommand): Promise<AlbumModel> {
    return this.prismaService.album.create({
      data: { ...command.album },
    });
  }
}
