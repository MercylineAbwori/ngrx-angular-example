import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModalComponent } from './delete-modal.component';

describe('DeleteModalComponent', () => {
    let component: DeleteModalComponent;
    let fixture: ComponentFixture<DeleteModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [ DeleteModalComponent]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DeleteModalComponent);
        component = fixture.componentInstance;
        component.itemKey = 'account';
        fixture.detectChanges();
    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should fill title and message depending on the provided itemKey input', () => {

        expect(component.title).toEqual('Delete Account');
        expect(component.message).toEqual('Are you sure you want to delete this account?');
        
    });
  
});
