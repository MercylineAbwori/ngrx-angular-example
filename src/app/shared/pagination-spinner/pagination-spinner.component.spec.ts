import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationSpinnerComponent } from './pagination-spinner.component';

describe('PaginationSpinnerComponent', () => {
    let component: PaginationSpinnerComponent;
    let fixture: ComponentFixture<PaginationSpinnerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ PaginationSpinnerComponent ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PaginationSpinnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have correctly named items', async() => {

        // Loader
        expect(fixture.debugElement.nativeElement.querySelector(
            '.lds-dual-ring')).toBeTruthy();

    });
});

