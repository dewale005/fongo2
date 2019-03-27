import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { SubmitComponent } from "src/app/modal/submit/submit.component";

@Component({
  selector: "app-landingpage",
  templateUrl: "./landingpage.component.html",
  styleUrls: ["./landingpage.component.scss"]
})
export class LandingpageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openModal() {
    this.dialog.open(SubmitComponent, { width: "30%" });
  }
}
