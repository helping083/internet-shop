import { Component, OnInit, Input, Output } from '@angular/core';
import { AbstractControl, FormControl }from '@angular/forms';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() placeHolder: string = "placeholder";
  @Input() searchControl: FormControl;
  constructor() { }

  ngOnInit(): void {
    
  }
}
