import './charList.scss';

import { useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const CharList = (props) => {

    const [items, setItems] = useState([]),
        [newItemLoading, setNewItemLoading] = useState(false),
        [offset, setOffset] = useState(210),
        [charEnd, setCharEnd] = useState(false);


    const {loading, error, getAllCharacters} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
        // eslint-disable-next-line
    }, [])

    // useEffect(() => {
    //     const onScroll = () => {
    //         const client = document.documentElement;
    //         console.log(offset);
    //         if (client.scrollTop !== 0 && client.scrollTop === (client.scrollHeight - client.clientHeight)) {
    //             onRequest(offset);
    //         }
    //     }
    //     window.addEventListener('scroll', () => onScroll);
    //     return () => window.removeEventListener("scroll", onScroll);
        
    // }, [offset]);


    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded);
    }


    const onCharListLoaded = (newItems) => {
        let ended = newItems[0] - offset <= 9;
        setItems(items => [...items, ...newItems[1]]);
        setNewItemLoading(false);
        setOffset(offset => offset + 9);
        setCharEnd(ended);
    }


    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('charlist__item-selected'));
        itemRefs.current[id].classList.add('charlist__item-selected');
        itemRefs.current[id].focus();
    }

    function renderItems(arr) {

        const items = arr.map((item, i) => {

            let styleImg = {objectFit: 'cover'};
            if (item.thumbnail.includes('not_available')) {
                styleImg = {objectFit: 'unset'};
            }
            
            return (
            <li className={'charlist__item'} 
                tabIndex={0}
                ref={el => itemRefs.current[i] = el}
                key={item.id} 
                onClick={() => {
                    props.onItemSelected(item.id); 
                    focusOnItem(i);
                }}
                onKeyPress={(e) => {
                    if (e.key === ' ' || e.key === "Enter") {
                        props.onItemSelected(item.id);
                        focusOnItem(i);
                    }
                }}>
                <img src={item.thumbnail} alt={item.name} style={styleImg} />
                <div className="charlist__name">{item.name}</div>
            </li>
            )
        });
        return (
            <ul className="charlist__list">
                {items}
            </ul>
        )
    }

    const itemList = renderItems(items);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;

    const btnStyle = charEnd ? {display: 'none'} : {display: 'block'};

    return (
        <div className="charlist">
            {errorMessage}
            {spinner}
            {itemList}
            <button  
            className="button button__main button__long"
            disabled={newItemLoading}
            style={btnStyle}
            onClick={() => onRequest(offset)}>
                <div className="inner">{newItemLoading ? 'loading...' : 'load more'}</div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    onItemSelected: PropTypes.func.isRequired
}


export default CharList;