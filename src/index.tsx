import React from "react";

const CookieBotLoader = ({CookieBotID = undefined}:{CookieBotID:string| undefined})=>{

    const CookieBotUrl = "https://consent.cookiebot.com/uc.js";

    if (CookieBotID === undefined) {
        console.log("The CookieBot ID is Not Set");
        throw new Error("The CookieBot ID is Not Set");
    }

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


}

export default CookieBotLoader