async function callAPI(dataHandler, url) {
    console.log("api-handler.callAPI");

    const response = await fetch(url);
    if (!response) { return console.error(`Unable to retreive response from ${url}`); }
    const data = await response.json();
    if (!data) { return console.error("Unable to retreive json data from response"); }

    console.log("Retreived data:");
    console.log(data);

    dataHandler(data); 
}

export { callAPI }