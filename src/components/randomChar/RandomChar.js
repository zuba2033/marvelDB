import './randomChar.scss';

import { useState, useEffect } from 'react';

import mjolnir from '../../resourses/img/mjolnir.png';
import useMarvelService from '../../services/MarvelService';

import setContent from '../../utils/setContent';

const RandomChar = () => {

    const [char, setChar] = useState({});

    const {getCharacter, clearError, process, setProcess} = useMarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
        setProcess('confirmed');
    }

    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id, 'id')
            .then(onCharLoaded)
    }

    useEffect(() => {
        updateChar();
        // eslint-disable-next-line
    }, [])


    return (
        <div className="randomChar">
            {setContent(process, char, View)}
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

const View = ({data}) => {

    const {thumbnail, name, description, homepage, wiki} = data;

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

