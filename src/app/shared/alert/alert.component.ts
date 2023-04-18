import { StatusCodeDescriptor } from './status_code_descriptor';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() message: string;
  @Output() close = new EventEmitter<void>();

  errorMessage: string;

  ngOnInit() {
    this.errorMessage = StatusCodeDescriptor.codeMessage(+this.message);
  }

  onClose() {
    this.close.emit();
  }
}
