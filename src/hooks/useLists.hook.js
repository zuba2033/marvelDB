import { useState, useRef} from "react";
import useMarvelService from "../services/MarvelService";

export const useLists = (initialOffset, itemsInList) => {

    const [items, setItems] = useState([]),
        [newItemLoading, setNewItemLoading] = useState(false),
        [offset, setOffset] = useState(initialOffset),
        [listEnd, setListEnd] = useState(false),
        [endOfPage, setEndOfPage] = useState(false),
        [firstLoading, setFirstLoading] = useState(true),
        [itemsLoaded, setItemsLoaded] = useState(false);

    const {getAllCharacters, getComics} = useMarvelService();

    const onRequest = (items, offset) => {
        setNewItemLoading(true);
        if (items === 'Characters') {
            getAllCharacters(offset)
                .then(onListLoaded)
                .finally(() => setEndOfPage(false));;
        }
        if (items === 'Comics') {
            getComics(offset)
                .then(onListLoaded)
                .finally(() => setEndOfPage(false));;
        }
        
    }

    const onListLoaded = (newItems) => {
        const totalItems = newItems[0];
        let ended = totalItems - offset <= itemsInList;
        setItems(items => [...items, ...newItems[1]]);
        setNewItemLoading(false);
        setFirstLoading(false);
        setOffset(offset => offset + itemsInList);
        setListEnd(ended);
        setItemsLoaded(true);
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


    return {
        items, 
        itemsLoaded, 
        newItemLoading, 
        offset, 
        listEnd, 
        onRequest, 
        onListLoaded, 
        onScroll, 
        endOfPage, 
        firstLoading, 
        itemRefs, 
        focusOnItem
    }

}