import './charList.scss';

import {useEffect} from 'react';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import { useLists } from '../../hooks/useLists.hook';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const CharList = (props) => {

    const {items, newItemLoading, firstLoading, offset, listEnd, onRequest, onScroll, endOfPage, itemRefs, focusOnItem} = useLists(210, 9);

    const {error} = useMarvelService();


    useEffect(() => {
        onRequest('Characters', offset);
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (endOfPage) {
            onRequest('Characters', offset);
        }
        // eslint-disable-next-line
      }, [endOfPage])

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
        // eslint-disable-next-line
      }, []);


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
    const spinner = firstLoading ? <Spinner/> : null;

    const btnStyle = listEnd ? {display: 'none'} : {display: 'block'};

    return (
        <div className="charlist">
            {errorMessage}
            {spinner}
            {itemList}
            <button  
            className="button button__main button__long"
            disabled={newItemLoading}
            style={btnStyle}
            onClick={() => onRequest('Characters', offset)}>
                <div className="inner">{newItemLoading ? 'loading...' : 'load more'}</div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    onItemSelected: PropTypes.func.isRequired
}


export default CharList;