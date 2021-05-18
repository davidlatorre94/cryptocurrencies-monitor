const axios = require("axios").default;

class CoingeckoApiConsumer {
  public async getAllCoins() {
    try {
      const url =
        process.env.GET_ALL_COINS_SERVICE_ENDPOINT ||
        "https://api.coingecko.com/api/v3/coins/list";

      const serviceConfig = {
        method: "GET",
        baseURL: url,
      };

      const response = await axios(serviceConfig);
      console.log(
        "3002 GET-ALL-COINS service status response:",
        response.status
      );
      return response.data;
    } catch (error) {
      console.error("3003 Error al consumir el servicio del GET-ALL-COINS");

      const responseError = {
        errorCode: "003",
        name: "StatusCodeError",
        statusCode: 500,
        message: error.response
          ? JSON.stringify(error.response.data)
          : "Error desconocido",
        errorMessage: error.response
          ? `GET-ALL-COINS SERVICE ERROR STATUS CODE ${error.response.status}`
          : "GET-ALL-COINS SERVICE RESPONSE UNDEFINED",
      };

      throw responseError;
    }
  }
}

export const coingeckoApiConsumer = new CoingeckoApiConsumer();
