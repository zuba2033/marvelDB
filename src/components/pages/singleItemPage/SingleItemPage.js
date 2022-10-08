import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import useMarvelService from '../../../services/MarvelService';

import ErrorMessage from '../../errorMessage/ErrorMessage';
import Spinner from '../../spinner/Spinner';
import AppBanner from '../../appBanner/AppBanner';

import './singleItemPage.scss';

const SingleItemPage = ({ dataType }) => {

    const { id } = useParams();
    const [data, setData] = useState(null);

    const {loading, error, getSingleComic, getCharacter, clearError} = useMarvelService();

    const onDataLoaded = (data) => {
        setData(data);
    }

    const getComic = () => {
        clearError();
        getSingleComic(id)
            .then(onDataLoaded)
    }

    const getChar = () => {
        clearError();
        getCharacter(id, 'id')
            .then(onDataLoaded)
    }

    useEffect(() => {
        if (dataType === 'comics') {
            getComic();
        }
        if (dataType === 'character') {
            getChar();
        }
        // eslint-disable-next-line
    }, [id]);

    const ComicPageLayout = ({comic}) => {

        const { thumbnail, title, description, pageCount, price, language} = comic;

        return (
            <>  
                <Helmet>
                    <meta 
                        name="description"
                        content={`Page of ${title} comics`}/>
                    <title>{title}</title>
                </Helmet>
                <img src={thumbnail} alt="comic" />
                <div className="singleItemPage__block">
                    <h2 className="singleItemPage__title">{title}</h2>
                    <p className="singleItemPage__text">
                        {description}
                    </p>
                    <p className="singleItemPage__pages">{pageCount}</p>
                    <p className="singleItemPage__lang">Language: {language}</p>
                    <p className="singleItemPage__price">{price}</p>
                    
                </div>
                {/* // eslint-disable-next-line */}
                <Link to={'/comics'} className="singleItemPage__back">back to all</Link>
            </>
        )
    }

    const CharPageLayout = ({char}) => {

        const { thumbnail, name, description} = char;

        return (
            <>
                <Helmet>
                    <meta 
                        name="description"
                        content={`Page of ${name}`}/>
                    <title>{name}</title>
                </Helmet>
                <img src={thumbnail} alt="character" />
                <div className="singleItemPage__block">
                    <h2 className="singleItemPage__title">{name}</h2>
                    <p className="singleItemPage__text">
                        {description}
                    </p>
                </div>
                <Link to={'/'} className="singleItemPage__back">back to all</Link>
            </>
        )
    }

    let layout;
    if (dataType === 'comics') {
        layout = <ComicPageLayout comic={data}/>
    } else if (dataType === 'character') {
        layout = <CharPageLayout char={data}/>
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !data) ? layout : null;

    return (
        <>
            <AppBanner/>
            <div className="singleItemPage">
                {errorMessage}
                {spinner}
                {content}
            </div>
        </>

    )
}

export default SingleItemPage;