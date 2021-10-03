export interface Post {
    postId: number;
    username: string;
    base64image: string;
    description: string;
}

interface IComment{
    username: string;
    comment: string;
    createAt: Date;
}
