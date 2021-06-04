import ILogonResponse from "../interface/ILogonResponse";
import ILogonPayload from "../interface/ILogonPayload";
import { Uri } from "../UrlRegistry";

/**
 * PostLogin
 * 
 * @param payload 
 * @returns 
 */
export const PostLogin = async (payload: ILogonPayload): Promise<any> => {
    const headerObject = process.env.NODE_ENV === 'development' ? {} : {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    };

    return await fetch(Uri.PostLogon, headerObject)
        .then(response => response.json())
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

    const headerObject = process.env.NODE_ENV === 'development' ? {} : {
        headers: {
            'Authorization': 'Bearer +token}',
            'Content-Type': 'application/json',
        },
    };
    return await fetch(Uri.AuthData, headerObject)
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