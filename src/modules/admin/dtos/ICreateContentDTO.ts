import { Content } from '@prisma/client';

export type IContent = Omit<Content, 'id'>;

export interface ICreateContentDTO {
  trailId: string;
  content: IContent;
}
