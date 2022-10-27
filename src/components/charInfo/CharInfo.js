import './charInfo.scss';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);

    const {getCharacter, clearError, process, setProcess} = useMarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const getChar = (id) => {
        clearError();
        if (!id) return;
        getCharacter(id, 'id')
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'))
    }

    useEffect(() => {
        getChar(props.charId);
        // eslint-disable-next-line
    }, [props.charId])

        
    return (
        <div className="charinfo">
            {setContent(process, char, View)}
        </div>
    )
}

const View = ({data}) => {

    const {thumbnail, name, description, homepage, wiki, comics} = data;

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

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;