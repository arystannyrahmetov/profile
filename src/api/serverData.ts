
interface IConfig {
    prod_hostname: string,
    dev_hostname: string
}

const serverConfig: IConfig = {
    prod_hostname: "https://us-central1-profile-server-49cb8.cloudfunctions.net/app",
    dev_hostname: "localhost",
};

export default serverConfig;