import { Component, Input, OnInit } from '@angular/core';
import { Roupa } from '../models/roupa.model';

@Component({
  selector: 'roupa',
  templateUrl: './roupa.component.html',
  styleUrls: ['./roupa.component.css']
})
export class RoupaComponent implements OnInit {

  @Input() roupa: Roupa;

  constructor() { }

  ngOnInit(): void {
  }

}
