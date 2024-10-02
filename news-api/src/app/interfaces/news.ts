export interface NewsResp {
    status: string;
    totalResults: number;
    articles: Article[];
  }
  
  export interface Article {
    source: Source;
    title: string;
    description: string;
    urlToImage: string;
    content: string;
  }
  
  export interface Source {
    id: string;
    name: string;
  }
  