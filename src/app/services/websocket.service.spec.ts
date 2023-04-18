import { TestBed } from '@angular/core/testing';
import * as fromApp from '../ng-store/app.reducer';
import { WebsocketService } from './websocket.service';
import { StoreModule, Store } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EffectsModule } from '@ngrx/effects';
import { AllEffectsCollection } from '../app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../shared/shared.module';

describe('WebsocketService', () => {
    let service: WebsocketService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot(fromApp.reducers),
                EffectsModule.forRoot(AllEffectsCollection),
                RouterTestingModule,
                HttpClientTestingModule, 
                SharedModule
            ],

            providers: [
                Store,
            ]
        });
        service = TestBed.inject(WebsocketService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
   

});
