

export const getGifs = async category => {
    const API_KEY = 'ZNHzthfP551jbu5p928GsxwqPUwyS21F';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${18}&lang=en`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.original.url,
    }));

    // console.log(gifs);
    return gifs;
};
