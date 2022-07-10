import './randomChar.scss';

import { useState, useEffect } from 'react';

import mjolnir from '../../resourses/img/mjolnir.png';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const RandomChar = () => {

    const [char, setChar] = useState({});


    const {loading, error, getCharacter, clearError} = useMarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id)
            .then(onCharLoaded)
    }

    useEffect(() => {
        updateChar();
        // eslint-disable-next-line
    }, [])


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
                <button onClick={updateChar} className="button button__main"><div className="inner">TRY IT</div></button>
                <img src={mjolnir} alt="" />
            </div>
        </div>
    )

    
}

const View = ({char}) => {

    const {thumbnail, name, description, homepage, wiki} = char;

    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }

    return (
        <div className="randomChar__block">
            <img src={thumbnail} alt="character_img" className="randomChar__img" style={imgStyle}/>
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

