const { API_URL, STRAPI_API_TOKEN } = require("./urls");

export const fetchDataFromApi = async (endpoint) => {

    // prepare header 
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + STRAPI_API_TOKEN);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    // fetch data from endpoint
    const res = await fetch(`${API_URL}${endpoint}`, requestOptions);
    const data = await res.json();

    return data;

};

export const makePaymentRequest = async (endpoint, payload) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + STRAPI_API_TOKEN
        },
        body: JSON.stringify(payload)
    });
    const data = await res.json();
    return data;
}