import { Entity,PrimaryColumn, Column } from "typeorm";


@Entity()
export class ChapterInfo{
  @PrimaryColumn()
  id!: string;

  @PrimaryColumn()
  mangaId!: string;

  @Column()
  chapterName!: string;

  @Column()
  sourceUrl!: string;

  @Column()
  s3Url!: string;

}

@Entity()
export class MangaInfo{
    @PrimaryColumn()
    id!: string;
    
    @Column()
    title!: string;
    
    @Column()
    description!: string;
    
    @Column()
    author!: string;
    
    @Column()
    status!: string;
    
    @Column()
    coverUrl!: string;
    
    @Column()
    chapterCount!: number;
    
    @Column()
    chapters!: ChapterInfo[];
}

@Entity()
export class HasChapter{
    @PrimaryColumn()
    chapterId!: string;

    @PrimaryColumn()
    mangaId!: string;
}