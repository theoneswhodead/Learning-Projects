export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '7ead1c56eamsh0f94cfe916b2e53p18dc50jsna64ac8e9404d',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '7ead1c56eamsh0f94cfe916b2e53p18dc50jsna64ac8e9404d',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = JSON.stringify(res);

  return data;
};
