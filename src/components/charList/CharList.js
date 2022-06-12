import './charList.scss';

import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

class CharList extends Component {

    state = {
        items: [],
        loading: true,
        error: false,
        clickedItemId: undefined
    }

    marvelService = new MarvelService();

    onLoaded = (items) => {
        this.setState({
            items, 
            loading: false,
        });
    }

    onError = (res) => {
        this.setState({
            loading: false,
            error: true
        })
    }

    onRequest = (offset) => {
        this.marvelService
            .getAllCharacters(offset)
            .then(this.onLoaded)
            .catch(this.onError);
    }

    componentDidMount() {
        this.onRequest();
    }

    onItemClick(id) {
        this.setState({clickedItemId: id});
        this.props.onItemClick(id);
    }

    renderItems = (arr) => {

        const items = arr.map((item) => {

            let styleImg = {objectFit: 'cover'};
            if (item.thumbnail.includes('not_available')) {
                styleImg = {objectFit: 'unset'};
            }
            
            let itemClassList = item.id === this.state.clickedItemId ? 'charlist__item charlist__item-selected' : 'charlist__item';
            
            return (
            <li className={itemClassList} key={item.id} onClick={() => this.onItemClick(item.id)} >
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

        const {items, loading, error} = this.state;
        

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        
        const itemList = this.renderItems(items);

        return (
            <div className="charlist">
                {errorMessage}
                {spinner}
                {itemList}
                <button className="button button__main button__long"><div className="inner">load more</div></button>
            </div>
        )
    }
}


export default CharList;