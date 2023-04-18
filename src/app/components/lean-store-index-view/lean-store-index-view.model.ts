import { TransformUrl } from "src/app/core/api_urls/api_urls";
import { LeanStoreIndexClusterArrayInterface, LeanStoreIndexResultsArrayInterface } from "./ng-store/lean-store-index-view.interfaces";

export class LeanStoreIndexViewModel {
    constructor(
        private count: number,
        private nextUrl: string,
        private stores: Array<LeanStoreIndexResultsArrayInterface>,
        private clusters: Array<LeanStoreIndexClusterArrayInterface>

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

    get getClusters() {
        return this.clusters
    }
}