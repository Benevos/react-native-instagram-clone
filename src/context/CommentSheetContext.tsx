import BottomSheet, { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { ReactNode, RefObject, createContext, useContext, useRef } from "react";


interface commentSheetContextProps {
    sheetModalRef: RefObject<BottomSheetModal>
}

interface commentSheetContextProviderProps {
    children: ReactNode,
}

export const CommentSheetContext = createContext<commentSheetContextProps | undefined>(undefined);

export const useCommentSheetContext = () => {
    const context = useContext(CommentSheetContext);

    if (!context) {
      throw new Error('useGlobalContext debe utilizarse dentro de un proveedor GlobalContext');
    }
  
    return context;
};

const CommentSheetContextProvider: React.FC<commentSheetContextProviderProps> = ({ children }) => 
{
    const sheetModalRef = useRef<BottomSheetModal>(null);
  
    const contextValue: commentSheetContextProps = {
      sheetModalRef: sheetModalRef
    };
  
    return (
      <CommentSheetContext.Provider value={contextValue}>
        {children}
      </CommentSheetContext.Provider>
    );
};

export default CommentSheetContextProvider;