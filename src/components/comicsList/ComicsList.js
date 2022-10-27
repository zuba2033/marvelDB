import './comicsList.scss';

import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useLists } from '../../hooks/useLists.hook';

const ComicsList = () => {

    const { 
        items, 
        firstLoading,
        offset, 
        listEnd, 
        onRequest, 
        onScroll, 
        endOfPage, 
        itemRefs, 
        focusOnItem,
        setContent,
        process
        } = useLists(500, 8);

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


    const btnStyle = listEnd ? {display: 'none'} : {display: 'block'};

    const elements = useMemo(() => {
        return setContent(process, () => renderItems(items), firstLoading);
        // eslint-disable-next-line
    }, [process])

    return (

        <div className="comicslist">
            {elements}
            <button className="button button__main button__long"
                    style={btnStyle}
                    disabled={process === 'loading'}
                    onClick={() => onRequest('Comics', offset)}>
                <div className="inner">{process === 'loading' ? 'loading...' : 'load more'}</div>
            </button>
        </div>
    )
}

export default ComicsList;