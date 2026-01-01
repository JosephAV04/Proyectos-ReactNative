const API_KEY = 'jHB4WAkNiuSfRNr3UmeI9RUcJ6Zg103Egj7yrnik'
const API_URL = 'https://api.nasa.gov/planetary/apod'

export default async (urlParams?: string) => {
    try {
        const response = await fetch(
            `${API_URL}?api_key=${API_KEY}${
            typeof urlParams !== 'undefined' && urlParams?.length > 0 
            ? urlParams : ''}`);

        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
}

        const data = await response.json();

        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error);
        
    }
};
