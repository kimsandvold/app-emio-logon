import ILogonResponse from "../interface/ILogonResponse";
import ILogonPayload from "../interface/ILogonPayload";

/**
 * PostLogin
 * 
 * @param payload 
 * @returns 
 */
export const PostLogin = async (payload: ILogonPayload): Promise<any> => {
    const debug = true;

    if (debug) {
        const json = require('../dummy/LogonResponse.json');
        console.log({ json })
        return json;
    }
    return await fetch('', {
        method: 'post',
        headers: {
            'Content-Type': 'application/application/json',
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then((response: ILogonResponse) => {
            return response;
        })
        .catch((error) => {
            console.log({ error });
            return error;
        });

};

/**
 * GetApps
 * @returns 
 */
export const GetApps = async (): Promise<any> => {
    const token = '';
    return await fetch('', {
        headers: new Headers({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        })
    })
        .then(response => response.json())
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log({ error });
            return error;
        });

};

export default {
    PostLogin,
    GetApps
}