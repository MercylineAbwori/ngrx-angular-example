
export class CurrentHostUrl {

    static getFullUrl(urlExtension: string){
        return `http://${window.location.host}${urlExtension}`;
    }
}