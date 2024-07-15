
interface IChapterInfo {
    id: string;
    seriesId: string;
    chapterName: string;
    sourceUrl: string;
    s3Url: string;
}

interface ISeriesInfo {
    id: string;
    title: string;
    description: string;
    author: string;
    status: string;
    coverUrl: string;
    chapterCount: number;
    chapters: IChapterInfo[];
}

interface IHasGenre {
    genre: string;
    seriesId: string;
}