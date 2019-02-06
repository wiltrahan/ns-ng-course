import { NgModule } from "@angular/core";
import {NativeScriptCommonModule} from 'nativescript-angular/common';
import { ChallengesRoutingModule } from "~/app/challenges/challenges-routing.module";
import { ChallengeEditComponent } from "~/app/challenges/challenge-edit/challenge-edit.component";
import { ChallengeTabsComponent } from "~/app/challenges/challenge-tabs/challenge-tabs.component";
import { CurrentChallengeComponent } from "~/app/challenges/current-challenge/current-challenge.component";
import { TodayComponent } from "~/app/challenges/today/today.component";
import { SharedModule } from "~/app/shared/shared.module";

@NgModule({
  declarations: [
    ChallengeEditComponent,
    ChallengeTabsComponent,
    CurrentChallengeComponent,
    TodayComponent
  ],
  imports: [NativeScriptCommonModule, ChallengesRoutingModule, SharedModule]
})
export class ChallengesModule {}