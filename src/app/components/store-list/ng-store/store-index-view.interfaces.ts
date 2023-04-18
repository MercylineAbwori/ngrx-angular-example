export interface StoreIndexResultsArrayInterface {
    name: string, 
    enabled: boolean, 
    min_sale_value: number, 
    reg_no: any, 
    days_to_go_back: number, 
    shop_rent: number,
    employee_name: string,
    store_back_date: string,
    has_mpesa: boolean
}

export interface StoreResponseDataInterface {
    count: number,
    next: string,
    previous: string,
    results: Array<StoreIndexResultsArrayInterface>
}

export interface StoreSendItemListResponseDataInterface {
    success: boolean,
    message: string,
}
