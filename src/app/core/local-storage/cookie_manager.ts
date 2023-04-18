export class CookieManager {

    /**
     * Stores data into the cookie
     * @param cookieName (string): Cookie name
     * @param cvalue (string): String value to be stored
     * @param daysToExpire (number): Number of days before the cookie expires
     */
    static setCookie(cookieName: string, cvalue: string, daysToExpire: number) {
        var d = new Date();
        d.setTime(d.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = `${cookieName}=${cvalue};SameSite=Strict;${expires};path=/`;
    }

    /**
     * Retrieves data stored in the cookie
     * @param cookieName (string): Cookie name
     * @returns Returns the string data that was stored in the cookie.
     */
    static getCookie(cookieName: string) {
        var name = cookieName + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}