

import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {

    const {loading, error, request, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=f09e10b3c42de2c120290b4a4f1abcf2';
    const _baseCharOffset = 210;
    const _baseComicsOffset = null;


    const getAllCharacters = async (charOffset = _baseCharOffset) => {
        let totalCharacters;
        const res = await request(`${_apiBase}characters?limit=9&offset=${charOffset}&${_apiKey}`);
        totalCharacters = res.data.total;
        return [totalCharacters, res.data.results.map(_transformCharacterData)];
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacterData(res.data.results[0]);
    }

    const getComics = async (comicsOffset = _baseComicsOffset) => {

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
        clearError
    }

}

export default useMarvelService;