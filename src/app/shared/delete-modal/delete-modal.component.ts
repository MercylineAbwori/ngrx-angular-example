import { DeleteMessages, DeleteMessageInterface } from './delete_messages';
import { Component, OnInit, Output, EventEmitter, Input, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit, OnDestroy {

    @Input() itemKey: string;
    @Output() close = new EventEmitter<{isDeleteConfirmed: boolean}>();

    itemDesc: DeleteMessageInterface;
    title: string;
    message: string;

    // Modal template reference
    @ViewChild('modalElem', { static: true }) 
    public modalElem: TemplateRef<any>;

    modal;

    constructor(private modalService: NgbModal) {}

    ngOnInit(): void {
        this.itemDesc = DeleteMessages.getItemDetails(this.itemKey)
        this.title = this.itemDesc.title;
        this.message = this.itemDesc.message;        
    }

    ngOnDestroy() {
    }

    public ngAfterViewInit() {
        this.openScrollableModal();
    }

    // Open the modal and then sets listners to listen to modal close
    openScrollableModal() {
        this.modal = this.modalService.open(
            this.modalElem);

        this.modal.result.then(() => { 
            // Called when modal's close has been clicked
            this.onClose();

        }, () => { 
            // Called when modal's backdrop has been clicked
            this.onClose();
        })
    }

    deleteConfirmed(){
        this.onClose(true);
    }

    /**
     * Closes the modal and then emits a close event to notify the parent 
     * component that this component should be closed
     */
    onClose(isDelete: boolean = false) {
        this.modal.close(); // Closes modal
        
        this.close.emit({isDeleteConfirmed: isDelete});
    }

}
