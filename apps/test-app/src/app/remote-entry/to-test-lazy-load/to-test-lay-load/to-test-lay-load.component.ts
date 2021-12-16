import { Component, OnInit } from '@angular/core';
import {UntilDestroy} from "@ngneat/until-destroy";
@UntilDestroy()
@Component({
  selector: 'zenda-frontend-to-test-lay-load',
  templateUrl: './to-test-lay-load.component.html',
  styleUrls: ['./to-test-lay-load.component.scss']
})
export class ToTestLayLoadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
