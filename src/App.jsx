import React, { useReducer, useMemo, useState } from 'react';
import "./App.css";
import Header from './header/header';
import ArticleBody from './articleBody/articleBody';
import { pageReducer, initialState, PageContext } from './dataStore';
import { useInputVisbility } from './appHooks';
import Details from './details/details';


const App = () => {

    const [ item, dispatch ] = useReducer(pageReducer, initialState);
    const [ quantity, setQuantity ] = useState(1);
    const { article, cart, user } = item;
    const { visible, scrollInputRef } = useInputVisbility();

    const value = useMemo(()=>({
        dispatch, scrollInputRef, visible, quantity, setQuantity
    }), [ dispatch,  scrollInputRef, visible, quantity]);

    return (<div>
        <PageContext.Provider value={value}>
            <Header article={article} cart={cart} />
            <ArticleBody article={article} />
            <Details article={article} />
        </PageContext.Provider>
    </div>)
}


export default App;