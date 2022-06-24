import './randomChar.scss';

import { Component } from 'react';

import mjolnir from '../../resourses/img/mjolnir.png';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

class RandomChar extends Component {

    state = {
        char: {},
        loading: true,
        error: false
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

    updateChar = () => {
        this.setState({error: false});
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.onCharLoading();
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    componentDidMount() {
        this.updateChar();
    }

    render() {
        const {char, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <div className="randomChar">
                {errorMessage}
                {spinner}
                {content}
                <div className="randomChar__static">
                    <div className="randomChar__text">
                    Random character for today!<br />
                    Do you want to get to know him better?<br/><br/>
                    Or choose another one
                    </div>
                    <button onClick={this.updateChar} className="button button__main"><div className="inner">TRY IT</div></button>
                    <img src={mjolnir} alt="" />
                </div>
            </div>
        )
        
        
    }
    
}

const View = ({char}) => {

    const {thumbnail, name, description, homepage, wiki} = char;

    const objectFit = thumbnail.includes('not_available') ? {objectFit: "contain"} : {objectFit: "cover"};

    return (
        <div className="randomChar__block">
            <img src={thumbnail} alt="character_img" className="randomChar__img" style={objectFit}/>
            <div className="randomChar__info">
                <div className="randomChar__title">{name}</div>
                <div className="randomChar__descr">
                    {description}
                </div>
                <div className="randomChar__btns">
                    <a href={homepage} className="button button__main"><div className="inner">homepage</div></a>
                    <a href={wiki} className="button button__secondary"><div className="inner">wiki</div></a>
                </div>
            </div>           
        </div>
    )
}

export default RandomChar;

