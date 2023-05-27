const url = 'https://shorturl9.p.rapidapi.com/functions/api.php';
export const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '7ead1c56eamsh0f94cfe916b2e53p18dc50jsna64ac8e9404d',
		'X-RapidAPI-Host': 'shorturl9.p.rapidapi.com'
	},
	body: new URLSearchParams({
		url: 'https://www.youtube.com/watch?v=mE1mSahY7vk&ab_channel=DoubleD'
	})
};


export const fetchFromApi = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };