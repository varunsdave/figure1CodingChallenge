
export interface Feed {
  nextUrl: string;
  data: FeedData[];
}

export interface FeedData {
  id: string;
  username: string;
  caption: string;
  image: {
    post: string;
    profile: string;
  };
  stats: {
    follow: number;
    views: number;
    star: number;
  };
  comments: Comment[]
}

export interface Comment {
  profile: UiProfile;
  id: string;
  text: string;
}

export interface UiProfile {
  username: string;
  profileImageUrl: string;
}


export interface ServerResponseFeedData  {
  skip: number;
  count: number;
  _links: {
    next: {
      url: string;
    }
  }
  feed: any[]
}
