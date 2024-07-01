export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '48c5aa2414msh215ee8f59e5d9a3p156bccjsna62be7268ce2',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
