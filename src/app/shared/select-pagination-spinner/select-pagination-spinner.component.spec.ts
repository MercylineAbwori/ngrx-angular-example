import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPaginationSpinnerComponent } from './select-pagination-spinner.component';

describe('SelectPaginationSpinnerComponent', () => {
    let component: SelectPaginationSpinnerComponent;
    let fixture: ComponentFixture<SelectPaginationSpinnerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ SelectPaginationSpinnerComponent ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectPaginationSpinnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have correctly named items', async() => {

        // Loader
        expect(fixture.debugElement.nativeElement.querySelector(
            '.select-lds-roller')).toBeTruthy();

    });
});
