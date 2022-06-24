import './charList.scss';

import { Component } from 'react';
import PropTypes from 'prop-types';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

class CharList extends Component {

    state = {
        items: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 210,
        charEnd: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
        this.onScrollToBottom();
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService
            .getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError);
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onCharListLoaded = (newItems) => {
        let ended = this.marvelService._totalCharacters - this.state.offset <= 9;

        this.setState(({offset, items}) => ({
            items: [...items, ...newItems], 
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnd: ended
        }));
    }

    onItemSelected = (id) => {
        this.props.onItemSelected(id);
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    onScrollToBottom = () => {
        const client = document.documentElement;
        window.addEventListener('scroll', () => {

            if (client.scrollTop !== 0 && client.scrollTop === client.scrollHeight - client.clientHeight) {
                this.onRequest(this.state.offset);
            }
        })
    }

    itemRefs = [];

    setRef = (ref) => {
        this.itemRefs.push(ref);
    }

    focusOnItem = (id) => {
        this.itemRefs.forEach(item => item.classList.remove('charlist__item-selected'));
        this.itemRefs[id].classList.add('charlist__item-selected');
        this.itemRefs[id].focus();
    }

    renderItems(arr) {

        const items = arr.map((item, i) => {

            let styleImg = {objectFit: 'cover'};
            if (item.thumbnail.includes('not_available')) {
                styleImg = {objectFit: 'unset'};
            }
            
            return (
            <li className={'charlist__item'} 
                tabIndex={0}
                ref={this.setRef}
                key={item.id} 
                onClick={() => {
                    this.onItemSelected(item.id); 
                    this.focusOnItem(i);
                }}
                onKeyPress={(e) => {
                    if (e.key === ' ' || e.key === "Enter") {
                        this.onItemSelected(item.id);
                        this.focusOnItem(i);
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

    render() {

        const {items, loading, error, offset, newItemLoading, charEnd} = this.state;

        const itemList = this.renderItems(items);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? itemList : null;

        const btnStyle = charEnd ? {display: 'none'} : {display: 'block'};

        return (
            <div className="charlist">
                {errorMessage}
                {spinner}
                {content}
                <button  
                className="button button__main button__long"
                disabled={newItemLoading}
                style={btnStyle}
                onClick={() => this.onRequest(offset)}>
                    <div className="inner">{newItemLoading ? 'loading...' : 'load more'}</div>
                </button>
            </div>
        )
    }
}

CharList.propTypes = {
    onItemSelected: PropTypes.func.isRequired
}


export default CharList;