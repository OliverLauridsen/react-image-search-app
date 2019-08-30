import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 27ef5fe5d0748c2fe2836f8586893f3d1ed342aed38afec3ba4dcd7aa0da1484'
    }
});
