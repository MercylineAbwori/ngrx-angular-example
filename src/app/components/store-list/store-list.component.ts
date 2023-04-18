import { ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/auth/user.model';
import { StoreIndexResultsArrayInterface } from './ng-store/store-index-view.interfaces';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent {


  isLoading = true;
  weHaveError: boolean = false;
  viewTitle = 'Stores Parameter Setup'
  user: User = null;

  isPaginationLoading = false;

  // We need to know if it's income statement view so that we can show different
  // values
  isIncomeStateView = false;

  viewModelHolder: {
    count: number,
    next: string,
    results: Array<StoreIndexResultsArrayInterface>

} = {
    count: 0,
    next: "",
   results: []
}


  urlFilter: {
    searchTerm: string
  } = {
      searchTerm: ''
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private changeDetectorRef: ChangeDetectorRef) {
    }

  fetchSearch(clear=false) {
    if (clear){
      this.urlFilter.searchTerm = '';

  }else if (!this.urlFilter.searchTerm){
      // Do nothing
      return;
  }
  }

  navigateToView(regNo: string){}
  sendFullList(name: string, regNo: string){}
  onLoadMore() {
  }

//   error: any = null;

//   @ViewChild(
//       PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;

//   userType: number = 0;


//   private viewStoreSub: Subscription;
//   private authStoreSub: Subscription;
//   private closeSub: Subscription;


 

//   // Add button vairables
//   showFloatButton = false;
//   viewTitle = 'Stores Parameter Setup'
//   @ViewChild("floatingAddButtonElement") floatingAddButtonElementView: ElementRef;

//   // Alert variables 
//   options = {
//       autoClose: false,
//       keepAfterRouteChange: false
//   };


 
//   // During testing, this variable is filled so that it can be passed into
//   // TestAuthHttpRequestInterceptorMock. When not testing, it is ignored by other 
//   // interceptors
//   testMockedHttpResponse: TestMockHttpResponseInterface = null;
//   weAreInTestingMode: boolean = false;


}
