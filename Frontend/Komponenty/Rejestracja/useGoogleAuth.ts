import {useEffect} from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {GOOGLE_CLIENT_ID} from "../../Config/googleAuth";

WebBrowser.maybeCompleteAuthSession();

export function useGoogleAuth(onSuccess: (userInfo: any) => void) {
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: GOOGLE_CLIENT_ID,
        });
    useEffect(() => {
        const fetchUserInfo = async() => {
            if(response?.type === "success") {
                const {authentication} = response;
                try {
                    const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {headers: {Authorization: 'Bearer ${authentication?.accessToken}'},});
                    const userInfo = await res.json();
                    onSuccess(userInfo);
                    }
                catch(error) {
                    console.log("Błąd pobierania danych z Google: ",error);
                    }
                }
            };
            fetchUserInfo();
        },
        [response]);
        return {request,promptAsync};
    }