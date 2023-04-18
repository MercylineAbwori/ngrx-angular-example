/**
 * User Model
 */
export class User {

    /**
     * Represent the user model
     * @param name (string) - User's name
     * @param token (string) - Authentication token
     * @param user_type (number) - A number representing the user's type
     * @param user_perms (Strings Array) - An array with the user's permissions
     */
    constructor(
        private name: string,
        private token: string,
        private user_type: number,
        private user_perms: Array<string>
    ) { }

    get getName() {
        return this.name;
    }

    get getToken() {
        return this.token;
    }

    get getUserType() {
        return this.user_type;
    }

    public set userPrms(user_perms: Array<string>){
        this.userPrms = user_perms;
    }

    get getUserPerms(){
        return this.user_perms;
    }

    get canChangeStoreParameters(): boolean {
        return this.user_perms.includes('change_loyversestore');
    }

    get canSendItemList(): boolean {
        return this.user_perms.includes('view_loyversestore');
    }

    get canViewShrinkageReceipt(): boolean {
        return this.user_perms.includes('view_receipt');
    }

    get canViewSpotCheckLog(): boolean {
        return this.user_perms.includes('view_spotchecklog');
    }

    get canViewSpotCheckProductList(): boolean {
        return this.user_perms.includes('view_spotcheckproductlist');
    }

    get canViewMpesaPayments(): boolean {
        return this.user_perms.includes('view_mpesapaymentstoredailylog');
    }

    get canViewProducts(): boolean {
        return this.user_perms.includes('view_product');
    }

    get canChangeProducts(): boolean {
        return this.user_perms.includes('change_product');
    }

    get canViewDeliveryNote(): boolean {
        return this.user_perms.includes('view_storedeliverynote');
    }

    get canViewPurchaseOrder(): boolean {
        return this.user_perms.includes('view_inventorypurchaseorder');
    }

    get canViewIncomeStatement(): boolean {
        return this.user_perms.includes('view_storeincomestatement');
    }

    get canAddIncomeStatement(): boolean {
        return true;
        // return this.user_perms.includes('add_storeincomestatement');
    }

    get canDeleteIncomeStatement(): boolean {
        return true;
        // return this.user_perms.includes('delete_storeincomestatement');
    }

    get canViewDailySale(): boolean {
        return this.user_perms.includes('view_dailysale')
    }

    get canChangeSpotCheckLog(): boolean {
        return this.user_perms.includes('change_spotchecklog')
    }

}
