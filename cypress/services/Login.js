class Login {

    postLogin(payload) {
        // Determinar el entorno: preferir ENV, si no existe usar API, si no DEV
        const envi = Cypress.env("ENV") || (Cypress.env('API') ? 'API' : 'DEV');
        const envConfig = Cypress.env(envi) || Cypress.env('API') || Cypress.env('DEV') || {};
        const HOST = envConfig.url_api || envConfig.url || '';
        const path = "/login";

        const headers = {
            "content-type": "application/json",
            "x-api-key": "reqres-free-v1"
        };
        

        return cy
            .api({
                method: "POST",
                url: HOST + path,
                headers: headers,
                body: payload,
                failOnStatusCode: false,
            })
            .then((response) => {
                return response;
            })
            .as("responseLogin");
    }
}

export default Login;
