export interface Comments {
    id: number
    body: string
    postId: number
    user: User
  }
  
  export interface User {
    id: number
    username: string
  }

export interface DummyJsonComments {
    comments: Comments[],
    total: number,
    skip: number,
    limit: number,
}