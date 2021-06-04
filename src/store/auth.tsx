
enum Keys {
    token = 'e.a.t-98263821453267748901902837623'
};

export const SetToken = (token: string): void => {
    if (token.length === 0) {
        console.log('Not valid token');
        return;
    }
    localStorage.setItem(Keys.token, token);
};

export const GetToken = (): string => {
    return String(localStorage.getItem(Keys.token));
};

export default {
    SetToken,
    GetToken
};