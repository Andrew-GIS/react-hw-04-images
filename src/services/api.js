const keyAPI = '27722310-5078c360e429b8b979ebf7ad7';
const per_page = 12;
const API_URL = 'https://pixabay.com/api/';

const fetchPictures = (query, page) => {
	const headers = {
		image_type: 'photo',
		orientation: 'horizontal',
		safesearch: 'true',
	};
	
	return fetch(`${API_URL}?key=${keyAPI}&q=${query}&per_page=${per_page}&page=${page}`, headers)
		.then(response => {
      		if (response.ok) {
        		return response.json();
      		}
			return Promise.reject(new Error('Server response not OK'));
    	})
    	.then(json =>
      		json.hits.map(({ id, webformatURL, largeImageURL, tags }) => ({
        		id,
        		previewURL: webformatURL,
        		imageURL: largeImageURL,
        		tags,
      		}))
   		)
    	.catch(error => console.error(error));
};

export default fetchPictures;