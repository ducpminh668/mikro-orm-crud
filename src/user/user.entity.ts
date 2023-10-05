import { Entity, EntityDTO, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  id: number;
}

export interface ArticleDTO extends EntityDTO<User> {
  favorited?: boolean;
}
