import { Component, ViewContainerRef, OnInit } from "@angular/core";
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { DayModalComponent } from "~/app/challenges/day-modal/day-modal.component";
import { UIService } from "~/app/shared/ui.service";
@Component({
  selector: 'ns-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.scss'],
  moduleId: module.id
})

export class CurrentChallengeComponent implements OnInit {
  weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S',];
  days: { dayInMonth: number, dayInWeek: number }[] = [];
  private currentMonth: number;
  private currentYear: number;

  constructor(
    private modalDialog: ModalDialogService, 
    private vcRef: ViewContainerRef,
    private uiService: UIService
  ) {}

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth();
    const daysInMonth = new Date(
      this.currentYear, 
      this.currentMonth + 1, 
      0).getDate();

    for(let i = 1; i < daysInMonth + 1; i++) {
      const date = new Date(this.currentYear, this.currentMonth, i);
      const dayInWeek = date.getDay();
      this.days.push({ dayInMonth: i, dayInWeek: dayInWeek });
    }
  }

  getRow(index: number, day: {dayInMonth: number, dayInWeek: number}) {
    const startRow = 1;
    const weekRow = Math.floor(index / 7);
    const firstWeekDayOfMonth = new Date(
      this.currentYear, 
      this.currentMonth, 
      1
    ).getDay();
    const irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;

    return startRow + weekRow + irregularRow;
  }
  
  onChangeStatus() {
    this.modalDialog.showModal(DayModalComponent, {
      fullscreen: true,
      viewContainerRef: this.uiService.getRootVcRef() ? this.uiService.getRootVcRef() : this.vcRef,
      context: { date: new Date() }
    }).then((action: string) => {
      console.log(action);
    });
  }
}