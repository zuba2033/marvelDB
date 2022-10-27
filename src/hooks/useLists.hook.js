import { useState, useRef } from "react";
import useMarvelService from "../services/MarvelService";

import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Spinner from '../components/spinner/Spinner';

export const useLists = (initialOffset, itemsInList) => {

    const [items, setItems] = useState([]),
        [offset, setOffset] = useState(initialOffset),
        [listEnd, setListEnd] = useState(false),
        [endOfPage, setEndOfPage] = useState(false),
        [firstLoading, setFirstLoading] = useState(true),
        [itemsLoaded, setItemsLoaded] = useState(false);

    const {getAllCharacters, getComics, process, setProcess} = useMarvelService();

    const onRequest = (items, offset) => {
        if (items === 'Characters') {
            getAllCharacters(offset)
                .then(onListLoaded)
                .then(() => setProcess('confirmed'))
                .finally(() => setEndOfPage(false));
        }
        if (items === 'Comics') {
            getComics(offset)
                .then(onListLoaded)
                .then(() => setProcess('confirmed'))
                .finally(() => setEndOfPage(false));
        }
        
    }

    const onListLoaded = (newItems) => {
        const totalItems = newItems[0];
        let ended = totalItems - offset <= itemsInList;
        setItems(items => [...items, ...newItems[1]]);
        setFirstLoading(false);
        setOffset(offset => offset + itemsInList);
        setListEnd(ended);
        setItemsLoaded(true);
        setProcess('confirmed')
    }

    const onScroll = () => {
        if (
            window.innerHeight + window.pageYOffset >= document.body.offsetHeight && window.pageYOffset > 0
        ) {
            setEndOfPage(true);
        }
    }

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('item-selected'));
        itemRefs.current[id].classList.add('item-selected');
        itemRefs.current[id].focus();
    }

    const setContent = (process, Component, firstLoading) => {
        switch (process) {
            case 'waiting':
                return <Spinner/>;
            case 'error':
                return <ErrorMessage/>;
            case 'loading':
                return firstLoading ? <Spinner/> : <Component/>;
            case 'confirmed':
                return <Component/>;
            default:
                throw new Error('unexpected state');
        }
    }


    return {
        items, 
        itemsLoaded, 
        offset, 
        listEnd, 
        onRequest, 
        onListLoaded, 
        onScroll, 
        endOfPage, 
        firstLoading, 
        itemRefs, 
        focusOnItem,
        setContent,
        process,
        setProcess
    }

}