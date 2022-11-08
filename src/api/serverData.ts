
interface IConfig {
    prod_hostname: string,
    dev_hostname: string
}

const serverConfig: IConfig = {
    prod_hostname: "https://profile-backend-server.herokuapp.com",
    dev_hostname: "http://localhost:5001/profile-server-49cb8/us-central1/app"
};

export default serverConfig;