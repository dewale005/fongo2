import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { LandingpageComponent } from "src/app/ui/landingpage/landingpage.component";

@Component({
  selector: "app-submit",
  templateUrl: "./submit.component.html",
  styleUrls: ["./submit.component.scss"]
})
export class SubmitComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<LandingpageComponent>) {}

  ngOnInit() {}
}
