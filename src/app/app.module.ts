import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UIModule } from "./ui/ui.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SubmitComponent } from "./modal/submit/submit.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [AppComponent, SubmitComponent],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    UIModule,
    BrowserAnimationsModule
  ],
  entryComponents: [SubmitComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
