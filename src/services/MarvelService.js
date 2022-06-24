

class MarvelService {

    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=f09e10b3c42de2c120290b4a4f1abcf2';
    _baseCharOffset = 210;
    _totalCharacters = 0;

    getResource = async (url) => {
        let res = await fetch(url); 
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`); 
        }
        return await res.json();
    }

    getAllCharacters = async (charOffset = this._baseCharOffset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${charOffset}&${this._apiKey}`);
        this._totalCharacters = res.data.total
        return res.data.results.map(this._transformCharacterData);

    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacterData(res.data.results[0]);
    }

    _transformCharacterData = (char) => {
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

}

export default MarvelService;