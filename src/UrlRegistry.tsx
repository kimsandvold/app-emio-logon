
enum UrlProd {
    PostLogon = "https://auth.api.emio.no/Logon.json",
    AuthData = "https://auth.api.emio.no/AuthData.json",
}
enum UrlDev {
    PostLogon = "http://localhost:3000/dummy/Logon.json",
    AuthData = "http://localhost:3000/dummy/AuthData.json",
}

export const Uri = process.env.NODE_ENV === "development" ? UrlDev : UrlProd;

export default {
    Uri
}