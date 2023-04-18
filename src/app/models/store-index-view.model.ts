import { TransformUrl } from "src/app/core/api_urls/api_urls";
import { StoreIndexResultsArrayInterface } from "../components/store-list/ng-store/store-index-view.interfaces";

export class StoreIndexViewModel {
    constructor(
        private count: number,
        private nextUrl: string,
        private stores: Array<StoreIndexResultsArrayInterface> = []

    ) { }

    get getCount() {
        return this.count;
    }

    get getNextUrl() {
        return TransformUrl.addHttpsToUrl(this.nextUrl);
    }

    get getStores() {
        return this.stores
    }
}
