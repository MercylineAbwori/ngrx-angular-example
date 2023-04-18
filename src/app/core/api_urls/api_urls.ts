
export const environment = {
    production: false,
    // http_protocal: "https://",
    // api_host_address: "mwingistage.traqsale.com",
    http_protocal: "https://",
    api_host_address: "mwingistage.traqsale.com", 
    socket_protocal: "ws",
  };


export class AppUrls {
    static base_url = environment.http_protocal + environment.api_host_address;
    static api_host = environment.api_host_address;

    static webSocketTicketUrl() {
        return `${AppUrls.base_url}${"/api/ws/ticket/"}`;
    }

    static webSocketUrl() {
        return `${environment.socket_protocal}://${AppUrls.api_host}${"/listener2/"}`;
    } 

    static loginUrl() {
        return `${AppUrls.base_url}${"/api/api-token-auth/"}`;
    }

    static LogoutUrl() {
        return `${AppUrls.base_url}${"/api/logout/"}`;
    }

    static storeIndexUrl(searchTerm: string = null) {

        let filter = searchTerm? `&search=${searchTerm}` : '';

        return `${AppUrls.base_url}/api/stores/?is_truck=false${filter}`;
    }

    static leanStoreIndexUrl() {
        return `${AppUrls.base_url}/api/stores/lean/limited/`;
    }

    static storeViewUrl(storeRegNo: string) {
        return `${AppUrls.base_url}/api/stores/edit/${storeRegNo}/`;
    }

    static storeIndexSendItemListUrl(regNo: string) {
        return `${AppUrls.base_url}/api/stores/send-full-item-list/${regNo}/`;
    }

}


export class TransformUrl {

    /**
     * If base url is using https, replaces http with https from the passed urls
     * @param url 
     */
    static addHttpsToUrl(url: string): string {
        if (AppUrls.base_url.includes("https://")){
            return url?.replace("http://", "https://");
        }

        return url;
    }
    
}