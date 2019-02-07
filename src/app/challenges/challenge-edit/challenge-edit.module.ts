import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ChallengeEditComponent } from "~/app/challenges/challenge-edit/challenge-edit.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SharedModule } from "~/app/shared/shared.module";

@NgModule({
  declarations: [ChallengeEditComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild([
      { path: '', component: ChallengeEditComponent}
    ]),
    SharedModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ChallengeEditModule {}