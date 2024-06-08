import { Component, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-modal-options',
	templateUrl: './userModal.html',
	encapsulation: ViewEncapsulation.None,
	styles: `
		.dark-modal .modal-content {
			background-color: #292b2c;
			color: white;
		}
		.dark-modal .close {
			color: white;
		}
		.light-blue-backdrop {
			background-color: #5cb3fd;
		}
	`,
})
export class NgbdModalOptions {
	private modalService = inject(NgbModal);

  openFullscreen(content: TemplateRef<any>) {
		this.modalService.open(content, { fullscreen: true });
	}
}
