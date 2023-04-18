import { User } from "../../accounts/user.model";
import { AppCurrentStateData } from "./local_storage_models";

export class AccessUserLocalStorage {

    static readonly userStoreKey = 'userData';

    static storeUserData(user: User) {
        localStorage.setItem(AccessUserLocalStorage.userStoreKey, JSON.stringify(user));
    }

    static retrieveStoredUserData() {
        return JSON.parse(localStorage.getItem(AccessUserLocalStorage.userStoreKey));
    }
    
    static removeStoredUserData() {
        localStorage.removeItem(AccessUserLocalStorage.userStoreKey);

        AccessLastUrlLocalStorage.clearAppCurrentStateData();
    }
}

export class AccessLastUrlLocalStorage {
    /**
     * Stores last url and selected filters.
     * 
     * Here are the steps to add a filter to be stored in local storage
     * - Add the filter definations, getter and setter  in the 
     *   AppCurrentStateData class
     * - Add the fiter data in this class' retrieveStoredAppCurrentStateData
     *   method so that it can be returned and accessed from anywhere
     * - Insert code in the component that will call this class' 
     *   storeAppCurrentStateData method with the new filter data.
     *  
     */

    static readonly storeKey = 'appCurrentStateDataaa111111';
    /**
     * Gets appCurrentStateData model and turns into json format then stores it
     * in the local storage using the "storeKey"
     * @param appCurrentStateData A AppCurrentStateData model
     */
    static storeAppCurrentStateData(appCurrentStateData: AppCurrentStateData) {
        localStorage.setItem(AccessLastUrlLocalStorage.storeKey, JSON.stringify(appCurrentStateData));
    }

    /**
     * Deletes all app current state date
     */
    static clearAppCurrentStateData(){
        localStorage.setItem(AccessLastUrlLocalStorage.storeKey, null);
    }

    /**
     * Clears all local storage data apart from the last url
     */
     static clearAppCurrentStateFilterData(){

        // Get the last url then clear ever
        let data = AccessLastUrlLocalStorage.retrieveStoredAppCurrentStateData();
        let lastUrl = data.getLastUrl;
        AccessLastUrlLocalStorage.clearAppCurrentStateData();

        let appCurrentStateData = AccessLastUrlLocalStorage.retrieveStoredAppCurrentStateData();
        appCurrentStateData.setLastUrl = lastUrl;
        AccessLastUrlLocalStorage.storeAppCurrentStateData(appCurrentStateData);
    }

    /**
     * Retrives the stored data under the "storeKey" key, turns into in a
     * AppCurrentStateData model and then returns it. If there is no data, we
     * return a model with default values
     * @returns A AppCurrentStateData model
     */
    static retrieveStoredAppCurrentStateData(): AppCurrentStateData {
        const jsonData = JSON.parse(localStorage.getItem(AccessLastUrlLocalStorage.storeKey));

        if (jsonData == null){
            return new AppCurrentStateData();
        }

        // First we check if dates are not null to avoid breaking the filter
        let fromCreatedDate = '';
        let toCreatedDate = '';

        if (jsonData.lastFilterDateData != null){
            if (jsonData.lastFilterDateData.fromCreatedDate != null){
                fromCreatedDate = jsonData.lastFilterDateData.fromCreatedDate; 
            }

            if (jsonData.lastFilterDateData.toCreatedDate != null){
                toCreatedDate = jsonData.lastFilterDateData.toCreatedDate;
            }
        }

        return new AppCurrentStateData(
            jsonData.lastUrl,
            {
                value: jsonData.lastFilterStoreData.value, 
                title: jsonData.lastFilterStoreData.title
            },
            {
                value: jsonData.lastFilterSpotCheckLogStatusData.value, 
                title: jsonData.lastFilterSpotCheckLogStatusData.title
            },
            {
                value: jsonData.lastFilterspotCheckProductListStatusData.value, 
                title: jsonData.lastFilterspotCheckProductListStatusData.title
            },
            {
                fromCreatedDate: fromCreatedDate, 
                toCreatedDate: toCreatedDate
            }
        );
    }
}