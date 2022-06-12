import './charInfo.scss';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Skeleton from '../skeleton/Skeleton';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';



class CharInfo extends Component {

    state = {
        char: null,
        error: false,
        loading: false
    }

    marvelService = new MarvelService();

    onCharLoaded = (char) => {
        this.setState({
            char, 
            loading: false,
        });
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onError = (res) => {
        this.setState({
            loading: false,
            error: true
        })
    }

    getChar = (id) => {
        if (!id) return;
        this.onCharLoading();
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    componentDidMount() {
        this.getChar(this.props.charId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.getChar(this.props.charId);
        }

    }

    render() {

        const {char, loading, error} = this.state;

        const skeleton = char || loading || error ? null : <Skeleton/> ;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !char) ? <View char={char}/> : null;
         
        return (
            <div className="charinfo">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}

const View = ({char}) => {

    const {thumbnail, name, description, homepage, wiki, comics} = char;

    let comicsListItems;
    if (comics.length === 0) {
        comicsListItems = <li className="charinfo__item">There is no comics for this character</li>;
    } else {
        comicsListItems = comics.slice(0, 10).map((item, i) => {
            return (
                <li className="charinfo__item" key={i}>{item.name}</li>
            )
        })
    }

    let objectFit = thumbnail.includes('not_available') ? {objectFit: "contain"} : {objectFit: "cover"};

    return (
        <div className="charinfo__wrap">
                    <div className="charinfo__header">
                        <img src={thumbnail} alt={name} className="charinfo__img" style={objectFit} />
                        <div>
                            <div className="charinfo__title">{name}</div>
                            <div className="charinfo__btns">
                                <a href={homepage} className="button button__main"><div className="inner">HOMEPAGE</div></a>
                                <a href={wiki} className="button button__secondary"><div className="inner">WIKI</div></a>
                            </div>
                        </div>
                    </div>
                    <div className="charinfo__text">
                        {description}                    
                    </div>
                    <div className="charinfo__comics">Comics:</div>
                    <ul className="charinfo__list">
                        {comicsListItems}
                    </ul>
                </div>
    )
}

export default CharInfo;