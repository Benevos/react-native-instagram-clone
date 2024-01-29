export interface Comment{
    id: number,
    username: string,
    body: string,
    reactions: number,
}

export interface Post {
    id: number,
    username: string,
    body: string,
    reactions: number
    content: string[]
    comments: Comments[],
}