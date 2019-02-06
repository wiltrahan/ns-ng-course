import { Component, ViewContainerRef } from "@angular/core";
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { DayModalComponent } from "~/app/challenges/day-modal/day-modal.component";
import { UIService } from "~/app/shared/ui.service";
@Component({
  selector: 'ns-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.css'],
  moduleId: module.id
})

export class CurrentChallengeComponent {
  constructor(
    private modalDialog: ModalDialogService, 
    private vcRef: ViewContainerRef,
    private uiService: UIService
  ) {}
  
  onChangeStatus() {
    this.modalDialog.showModal(DayModalComponent, {
      fullscreen: true,
      viewContainerRef: this.uiService.getRootVcRef() ? this.uiService.getRootVcRef() : this.vcRef
    });
  }
}