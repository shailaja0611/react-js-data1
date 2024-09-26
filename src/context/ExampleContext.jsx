


import React, { createContext,useContext, useState } from "react";
import { useContext } from "react";

const GiftContext = createContext ()

const GiftProvider =({Children})=>{

    const [surprise,setsurprise ] =useState ("Apple")

    return (
        <GiftContext.Provider value={{ surprise, setSurprise }}>
          {children}
        </GiftContext.Provider>
      );
    };
    
    const useGift = () => useContext(GiftContext);
    
    export { GiftProvider, useGift };
    