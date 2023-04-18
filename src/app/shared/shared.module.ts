import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { PaginationSpinnerComponent } from './pagination-spinner/pagination-spinner.component';
import { SelectPaginationSpinnerComponent } from './select-pagination-spinner/select-pagination-spinner.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
    PaginationSpinnerComponent,
    SelectPaginationSpinnerComponent,
    DeleteModalComponent,
  ],
  imports: [CommonModule,],
  exports: [
   
    LoadingSpinnerComponent,
    AlertComponent,
    DeleteModalComponent,
    PaginationSpinnerComponent,
    SelectPaginationSpinnerComponent,
    PlaceholderDirective,
    CommonModule,

  ],
  providers: []
})
export class SharedModule {}
