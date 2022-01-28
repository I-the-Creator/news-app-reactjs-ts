import axios from 'axios';

const getNewsRu = (language) => {
    const options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {q: 'Russia', lang: language},
        headers: {
            'x-rapidapi-host': 'free-news.p.rapidapi.com',
            'x-rapidapi-key': '6bd18638c3msh29830a13c89e1e2p102e49jsndb17686fe719'
        }
    };

    return axios.request(options);
}

export default getNewsRu;
