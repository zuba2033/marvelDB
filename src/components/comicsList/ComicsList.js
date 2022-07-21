import './comicsList.scss';

import { useEffect} from 'react';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import { useLists } from '../../hooks/useLists.hook';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const ComicsList = () => {

    const {items, newItemLoading, firstLoading, offset, listEnd, onRequest, onScroll, endOfPage, itemRefs, focusOnItem} = useLists(500, 8);

    const {error} = useMarvelService();

    useEffect(() => {
        onRequest('Comics', offset, true);
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (endOfPage) {
            onRequest('Comics', offset);
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
                <li className="comicslist__item"
                    key={item.id}
                    tabIndex={0}
                    ref={el => itemRefs.current[i] = el}
                    onClick={() => {
                        focusOnItem(i);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            focusOnItem(i);
                        }
                    }}>
                    <Link to={`/comics/${item.id}`} >
                        <img src={item.thumbnail} alt={item.title} style={styleImg} />
                        <div className="comicslist__item-title">{item.title}</div>
                        <div className="comicslist__item-price">{item.price}</div>
                    </Link>

                </li>
            )
        });
        return (
            <ul className="comicslist__list">
                {items}
            </ul>
        );
    }


    const itemList = renderItems(items);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = firstLoading ? <Spinner/> : null;

    const btnStyle = listEnd ? {display: 'none'} : {display: 'block'};

    return (

        <div className="comicslist">
            {errorMessage}
            {spinner}
            {itemList}
            <button className="button button__main button__long"
                    style={btnStyle}
                    disabled={newItemLoading}
                    onClick={() => onRequest('Comics', offset)}>
                <div className="inner">{newItemLoading ? 'loading...' : 'load more'}</div>
            </button>
        </div>
    )
}

export default ComicsList;