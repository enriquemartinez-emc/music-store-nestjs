// Commands
import { CreateAlbumHandler } from './create';
// Queries
import { GetAlbumsQuery } from './list';

export const AlbumCommandHandlers = [CreateAlbumHandler];

export const AlbumQueryHandlers = [GetAlbumsQuery];
