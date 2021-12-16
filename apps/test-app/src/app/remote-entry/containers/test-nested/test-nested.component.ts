import { Component, OnInit } from '@angular/core';
import {UntilDestroy} from "@ngneat/until-destroy";
@UntilDestroy()
@Component({
  selector: 'zenda-frontend-test-nested',
  templateUrl: './test-nested.component.html',
  styleUrls: ['./test-nested.component.scss']
})
export class TestNestedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
