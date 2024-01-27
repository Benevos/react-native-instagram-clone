export interface Post {
    id: number
    title: string
    body: string
    userId: number
    tags: string[]
    reactions: number
}

export interface DummyJsonPosts {
    posts: Post[],
    total: number,
    skip: number,
    limit: number,
}