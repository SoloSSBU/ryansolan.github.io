const axios = require('axios');

exports.handler = async (event) => {
    try {
        const response = await axios.get('https://smogonapi.herokuapp.com/GetSmogonData/sv/Swampert');
        const data = response.data;
        console.log(data);
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};
