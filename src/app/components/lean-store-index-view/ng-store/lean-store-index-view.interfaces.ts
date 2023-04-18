export interface LeanStoreIndexResultsArrayInterface {
    name: string,
    reg_no: number, 
}

export interface LeanStoreIndexClusterArrayInterface {
    name: string,
    reg_no: number,
    stores: Array<LeanStoreIndexResultsArrayInterface> 
}

export interface LeanStoreCheckboxDataArrayInterface {
    name: string,
    reg_no: number, 
    selected: boolean 
}

export interface LeanStoreResponseDataInterface {
    count: number,
    next: string,
    previous: string,
    results: Array<LeanStoreIndexResultsArrayInterface>,
    clusters: Array<LeanStoreIndexClusterArrayInterface>
}