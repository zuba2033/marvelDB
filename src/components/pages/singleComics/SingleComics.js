import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useMarvelService from '../../../services/MarvelService';

import ErrorMessage from '../../errorMessage/ErrorMessage';
import Spinner from '../../spinner/Spinner';
import AppBanner from '../../appBanner/AppBanner';

import './singleComics.scss';

const SingleComics = () => {

    const { comicId } = useParams();
    const [comic, setComic] = useState(null);

    const {loading, error, getSingleComic, clearError} = useMarvelService();

    const onComicLoaded = (comic) => {
        setComic(comic);
    }

    const getComic = () => {
        clearError();
        getSingleComic(comicId)
            .then(onComicLoaded)
    }

    useEffect(() => {
        getComic();
        // eslint-disable-next-line
    }, [comicId]);


    
    const View = ({comic}) => {

        const { thumbnail, title, description, pageCount, price, language} = comic;

        return (
            <>
                <img src={thumbnail} alt="" />
                <div className="singlecomics__block">
                    <h2 className="singlecomics__title">{title}</h2>
                    <p className="singlecomics__text">
                        {description}
                    </p>
                    <p className="singlecomics__pages">{pageCount}</p>
                    <p className="singlecomics__lang">Language: {language}</p>
                    <p className="singlecomics__price">{price}</p>
                    
                </div>
                {/* // eslint-disable-next-line */}
                <Link to={'/comics'} className="singlecomics__back">back to all</Link>
            </>
        )
    }

            
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !comic) ? <View comic={comic}/> : null;

    return (
        <>
            <AppBanner/>

            <div className="singlecomics">
                {errorMessage}
                {spinner}
                {content}
            </div>
        </>

    )
}

export default SingleComics;