let baseUrl = "http://localhost:8000/";

const isProd = import.meta.env.PROD;
if (isProd) baseUrl = "https://hackadisc-api.onrender.com/";

export const apiUrl = baseUrl;
