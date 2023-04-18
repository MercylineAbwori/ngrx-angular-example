import { ComponentFixture } from "@angular/core/testing";
import { StatusCodeDescriptor } from "../../../shared/alert/status_code_descriptor";

export class AlertModalChecker {

    /**
     * Confirms the alert modal is not visible
     * @param fixture - A test's @ComponentFixture
     */
    static confirmAlertModalIsNotVisible(fixture: ComponentFixture<any>){
        let errorTitleMessage = fixture.debugElement.nativeElement.querySelector('.page-error-title');
        expect(errorTitleMessage).toEqual(null);

        let errorMessasgeMessage = fixture.debugElement.nativeElement.querySelector('.page-error-message');
        expect(errorMessasgeMessage).toEqual(null);
    }

    /**
     * Confirms if the alert modal is visible and if it contains the appropriate
     * error messgae depending on the passed status code
     * @param fixture - A test's @ComponentFixture
     * @param statusCode - Status code that will be used to describe the error
     */
    static confirmAlertModalIsVisibleWithStatusCodeError(fixture: ComponentFixture<any>, statusCode: number){

        // Confirm top error message is visible
        let errorTitleMessage = fixture.debugElement.nativeElement.querySelector('.page-error-title');
        expect(errorTitleMessage.innerHTML).toContain('Oops, something has gone wrong!');

        let errorMessasgeMessage = fixture.debugElement.nativeElement.querySelector('.page-error-message');
        expect(errorMessasgeMessage.innerHTML).toContain(StatusCodeDescriptor.codeMessage(statusCode));
        StatusCodeDescriptor.codeMessage(statusCode);
    }

    /**
     * Confirms if the alert modal is visible and if it contains the passed
     * error messgae 
     * @param fixture - A test's @ComponentFixture
     * @param statusCode - Status code that will be used to describe the error
     */
    static confirmAlertModalIsVisibleWithMessage(fixture: ComponentFixture<any>, message: string){

        // Confirm top error message is visible
        let errorTitleMessage = fixture.debugElement.nativeElement.querySelector('.page-error-title');
        expect(errorTitleMessage.innerHTML).toContain('Oops, something has gone wrong!');

        let errorMessasgeMessage = fixture.debugElement.nativeElement.querySelector('.page-error-message');
        expect(errorMessasgeMessage.innerHTML).toContain(message);
    
    }
    
}