
interface IConfig {
    prod_hostname: string,
    dev_hostname: string
}

const serverConfig: IConfig = {
    prod_hostname: "https://021e-95-56-55-102.eu.ngrok.io",
    dev_hostname: "localhost",
};

export default serverConfig;