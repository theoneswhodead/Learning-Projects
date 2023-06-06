
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7ead1c56eamsh0f94cfe916b2e53p18dc50jsna64ac8e9404d',
		'X-RapidAPI-Host': 'dictionary-data-api.p.rapidapi.com'
	}
};


export const fetchData = async (url) => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        return result;
       // console.log(result);
    } catch (error) {
        console.error(error);
    }
}


