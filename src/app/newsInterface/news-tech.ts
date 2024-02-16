export interface NewsTech {
    source: {
        id: string;
        name: string;
      };
      author: string;
      title: string;
      description: string;
      url: string;
      urlToImage: string;
      publishedAt: string;
      content: string;

}

export interface ArticlesResponse {
    status: string;
    totalResults: number;
    articles: NewsTech[];
  }