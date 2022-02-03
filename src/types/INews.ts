import { INewsDetail } from './INewsDetail';

export interface INews {
    status: number;
    total_hits: number;
    page: number;
    total_pages: number;
    page_size: number;
    articles: INewsDetail[];
}