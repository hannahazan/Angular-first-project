export interface Article{
    id:number;
    title:string;
    author:string,
    content:string;
    image:string;
    isPublished:boolean;
    comment:string;
    likeCount: number;
    isLiked:boolean
  }