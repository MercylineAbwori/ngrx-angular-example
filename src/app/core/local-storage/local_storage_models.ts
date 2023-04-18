export interface FilterDataInterface {
    value: string, 
    title: string
}

export interface FilterDateDataInterface {
    fromCreatedDate: string;
    toCreatedDate: string;
}

export class AppCurrentStateData {

    constructor(
        private lastUrl: string = '/',
        private lastFilterStoreData: FilterDataInterface = {value: '', title: ''},
        private lastFilterSpotCheckLogStatusData: FilterDataInterface = {value: '', title: ''},
        private lastFilterspotCheckProductListStatusData: FilterDataInterface = {value: '', title: ''},
        private lastFilterDateData: FilterDateDataInterface = {fromCreatedDate: '', toCreatedDate: ''},
    ) {}

    set setLastUrl(lastUrl: string) {
        this.lastUrl = lastUrl;
    }

    get getLastUrl() {
        return this.lastUrl;
    }

    set setLastFilterStoreData(data: FilterDataInterface) {
        this.lastFilterStoreData = data;
    }

    get getLastFilterStoreData() {
        return this.lastFilterStoreData;
    }

    set setLastFilterSpotCheckLogStatusData(data: FilterDataInterface) {
        this.lastFilterSpotCheckLogStatusData = data;
    }

    get getLastFilterSpotCheckLogStatusData() {
        return this.lastFilterSpotCheckLogStatusData;
    }

    set setLastFilterspotCheckProductListStatusData(data: FilterDataInterface) {
        this.lastFilterspotCheckProductListStatusData = data;
    }

    get getLastFilterspotCheckProductListStatusData() {
        return this.lastFilterspotCheckProductListStatusData;
    }
    
    set setLastFilterDateData(data: FilterDateDataInterface) {
        this.lastFilterDateData = data;
    }

    get getLastFilterDateData() {
        return this.lastFilterDateData;
    }

}