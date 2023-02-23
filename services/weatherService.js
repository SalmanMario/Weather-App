// API keys NU!!! ar trebui sa fie stocate in forma de text deoarece nu este sigur
// Fara server propriu, nu putem fi 100% safe. Dar avand in vedere ca open weather este gratuit, cel mai rau caz ramanem cu cheia blocata
const API_KEY = "1fee18fce1be9057841e7836832c5f75";

// URL de baza pentru call-urile pe open weather api
const API_URL = "https://api.openweathermap.org/data/2.5";

// Query Parameters care vor fi trimisi la fiecare request
// lang=ro => rezultatele vor venii in limba romana
// units=metric => Unitatea de masura sa fie in grade celsius
// appid => API KEY-ul pentru autentificare
const DEFAULT_QUERY_PARAMETERS = `lang=ro&units=metric&appid=${API_KEY}`;

function getCurrentWeather(city) {
    // Construim Linkul (endpointul) catre cererea de current weather,folosind informatiile predifinite 
    return fetchAndParse(`${API_URL}/weather?q=${city}&${DEFAULT_QUERY_PARAMETERS}`);
}