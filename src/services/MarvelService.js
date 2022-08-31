

import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {

    const {loading, error, request, clearError} = useHttp();

    const _apiBase = 'https://api.nasa.gov/';
    const _apiKey = 'apikey=f09e10b3c42de2c120290b4a4f1abcf2';
    const _baseCharOffset = 210;
    const _baseComicsOffset = 500;

    const getAllCharacters = async (charOffset = _baseCharOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${charOffset}&${_apiKey}`);
        const totalCharacters = res.data.total;
        console.log(res);
        return [totalCharacters, res.data.results.map(_transformCharacterData)];

    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacterData(res.data.results[0]);
    }

    const getComics = async (comicsOffset = _baseComicsOffset) => {
        const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${comicsOffset}&${_apiKey}`);
        const totalComics = res.data.total;
        return [totalComics, res.data.results.map(_transformComicsData)];
    }

    const getSingleComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComicsData(res.data.results[0]);
    }

    const _transformComicsData = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description || 'There is no description',
            pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            language: comics.textObjects.language || 'en-us',
            price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'not available'
        }
    }

    const _transformCharacterData = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    return {
        loading,
        error,
        getAllCharacters,
        getCharacter,
        getComics,
        clearError,
        getSingleComic
    }

}

export default useMarvelService;