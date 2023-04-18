
export class StoreViewModel {
    constructor(
        private name: string,
        private enabled: boolean,
        private min_sale_value: string,
        private reg_no: string,
        private days_to_go_back: string,
        private shop_rent: string
    ) { }
    
    get getName() {
        return this.name;
    }

    get getEnabled() {
        return this.enabled;
    }

    get getMinSaleValue() {
        return this.min_sale_value;
    }

    get getRegNo() {
        return this.reg_no;
    }

    get getDaysToGoBack() {
        return this.days_to_go_back;
    }

    get getShopRent() {
        return this.shop_rent;
    }

}
