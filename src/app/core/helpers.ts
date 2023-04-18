import * as fromApp from '../ng-store/app.reducer';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';

/**
 * A class that holds custom settings
 */
export class CommonHelpers {

    /**
     * Generates a unique string id
     */
    static generateUniqueId()  {
         return Math.random().toString(36).substring(2, 15) + 
                Math.random().toString(36).substring(2, 15);
    }

    /**
     * Adds commas to numbers
     * @param num Number to be adde commas
     * @returns A number as a string with commas
     */
    static addCommasToNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}