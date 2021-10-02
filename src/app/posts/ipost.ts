export interface IPost {
    postId: number;
    username: string;
    base64image: string;
    description: string;
    createAt: Date;
    comments?:IComment[]
}

interface IComment{
    username: string;
    comment: string;
    createAt: Date;
}
