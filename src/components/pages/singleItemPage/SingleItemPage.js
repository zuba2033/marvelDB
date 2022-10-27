import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import useMarvelService from '../../../services/MarvelService';
import setContent from '../../../utils/setContent';
import AppBanner from '../../appBanner/AppBanner';

import './singleItemPage.scss';

const SingleItemPage = ({ dataType }) => {

    const { id } = useParams();
    const [data, setData] = useState(null);

    const {getSingleComic, getCharacter, clearError, process, setProcess} = useMarvelService();

    const onDataLoaded = (data) => {
        setData(data);
        setProcess('confirmed');
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

    const ComicPageLayout = ({data}) => {

        const { thumbnail, title, description, pageCount, price, language } = data;

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

    const CharPageLayout = ({data}) => {

        const { thumbnail, name, description} = data;

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
        layout = ComicPageLayout;
    } else if (dataType === 'character') {
        layout = CharPageLayout;
    }


    return (
        <>
            <AppBanner/>
            <div className="singleItemPage">
                {setContent(process, data, layout)}
            </div>
        </>

    )
}

export default SingleItemPage;