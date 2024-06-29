import React from "react";

const CookieBotLoader = ()=>{

    const CookieBotUrl = "https://consent.cookiebot.com/uc.js";

    // @ts-ignore
    const CookieBotID = process.env.COOKIEBOT_ID
    //@ts-ignore
    const CookieBotDebug = process.env.COOKIEBOT_DEBUG || "false"

    if(CookieBotDebug === "true"){
        if(CookieBotID === undefined){
            console.warn("CookieBotID is not set")
        }
        else {
            console.log("CookieBotID is set to",CookieBotID)
        }
    }

    if (CookieBotID === undefined) {
        throw new Error("The CookieBot ID is Not Set");
    }
    // @ts-ignore
    if (process.env.NODE_ENV == 'production') {

        return (
            <script
                defer
                id="Cookiebot"
                src={CookieBotUrl}
                data-cbid={CookieBotID}
                type="text/javascript"
            >
            </script>
        )
    }else {
        if(CookieBotDebug === "true"){
            console.log("The Cookie Bar is not Work in Non Production - But is Generally Working");
        }
        return null;
    }


}

export default CookieBotLoader