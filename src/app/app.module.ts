import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { CurrentChallengeComponent } from "~/app/challenges/current-challenge/current-challenge.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ChallengeEditComponent } from './challenges/challenge-edit/challenge-edit.component';
import { AuthComponent } from './auth/auth.component';
import { TodayComponent } from './challenges/today/today.component';
import { AppRoutingModule } from "~/app/app-routing.module";
import { ActionBarComponent } from './shared/ui/action-bar/action-bar.component';

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        CurrentChallengeComponent,
        ChallengeEditComponent,
        AuthComponent,
        TodayComponent,
        ActionBarComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
