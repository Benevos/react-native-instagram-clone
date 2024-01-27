import { createContext, useContext } from "react";
import { Post } from "../types/post";



interface PostContextProviderProps extends Post {
    children: React.ReactNode,
}

export const PostContext = createContext<Post | undefined>(undefined);

export const usePostContext = () => {
    const context = useContext(PostContext);

    if (!context) {
      throw new Error('usePostContext debe utilizarse dentro de un proveedor PostContext');
    }
  
    return context;
};

const PostProvider: React.FC<PostContextProviderProps> = (props: PostContextProviderProps) => 
{
    const { children, id, body, comments, reactions, username, content  } = props;

    const post: Post = {
        id: id,
        content: content,
        body: body,
        comments: comments,
        reactions: reactions,
        username: username,
    }
  
    const contextValue = {...post};
  
    return (
      <PostContext.Provider value={contextValue}>
        {children}
      </PostContext.Provider>
    );
};

export default PostProvider;