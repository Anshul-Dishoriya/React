import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 65J_t41m0bVJAoVwMQUgVByztVTrxZM8R2-Z9_A-JxM'
    },
    params: {
      query: term,
    }
  });
  console.log(response);
  return response.data.results;
};

export default searchImages;
