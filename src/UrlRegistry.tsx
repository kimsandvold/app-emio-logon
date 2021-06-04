
enum UrlProd {
    PostLogon = "https://auth.api.emio.no/Logon.json",
    AuthData = "https://auth.api.emio.no/AuthData.json",
    CheckAuth = "https://auth.api.emio.no/CheckAuth.json",
}
enum UrlDev {
    PostLogon = "http://localhost:3000/dummy/Logon.json",
    AuthData = "http://localhost:3000/dummy/AuthData.json",
    CheckAuth = "http://localhost:3000/dummy/CheckAuth.json",
}

export const Uri = process.env.NODE_ENV === "development" ? UrlDev : UrlProd;

export default {
    Uri
}