import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import contextProps from './interfaces';

interface Props{
  children: JSX.Element | JSX.Element[]
}

export const selectorContext = createContext<contextProps>({} as contextProps);

function ContextProvider({children}:Props) {
  const [selector, setSelector] = useState<number>(0);
  const [language, setLanguage] = useState<string>('es');

  useEffect(()=>{
    if(window.location.pathname === '/'){
        setSelector(0);
    }else if(window.location.pathname === '/Services'){
      setSelector(1);
    }else if(window.location.pathname === '/Cars'){
      setSelector(2)
    }else if(window.location.pathname === '/Budget'){
      setSelector(3)
    }else{
      setSelector(4)
    }
  },[])
  
  return (
    <selectorContext.Provider value={{selector, setSelector, language, setLanguage}}>{children}</selectorContext.Provider>
  )
}

export default ContextProvider