import './charList.scss';

import { useEffect, useMemo} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

import { useLists } from '../../hooks/useLists.hook';

const CharList = (props) => {

    const { items,
        itemsLoaded, 
        firstLoading, 
        offset, 
        listEnd, 
        onRequest, 
        onScroll, 
        endOfPage, 
        itemRefs, 
        focusOnItem,
        process,
        setContent } = useLists(210, 9);

    const transitionDuration = 1000;

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
                <CSSTransition
                    key={item.id} 
                    in={itemsLoaded}
                    timeout={transitionDuration}
                    classNames='charlist__item'>
                    <li className={'charlist__item'} 
                        tabIndex={0}
                        ref={el => itemRefs.current[i] = el}
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
                </CSSTransition>
            )
        });
        return (
            <ul className="charlist__list">
                <TransitionGroup component={null}>
                    {items}
                </TransitionGroup>
            </ul>
        )
    }

    const elements = useMemo(() => {
        return setContent(process, () => renderItems(items), firstLoading);
        // eslint-disable-next-line
    }, [process])

    const btnStyle = listEnd ? {display: 'none'} : {display: 'block'};

    return (
        <div className="charlist">
            {elements}
            <button  
            className="button button__main button__long"
            disabled={process === 'loading'}
            style={btnStyle}
            onClick={() => onRequest('Characters', offset)}>
                <div className="inner">{process === 'loading' ? 'loading...' : 'load more'}</div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    onItemSelected: PropTypes.func.isRequired
}


export default CharList;