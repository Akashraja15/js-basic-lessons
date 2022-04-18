import { Component, Input, OnChanges, OnDestroy, OnInit, DoCheck, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent-field',
  template: `<h1>Hello {{name}}</h1>`,
  styleUrls: ['./parent.component.css']
})
export class ParentFieldComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterViewInit {
  @Input () name:any='Angular'
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit is working');
  }

  ngOnDestroy() {
    console.log("ondestroyed is working!");
  }

  ngOnChanges(){
    console.log("onchanges is working!");
  }

  ngDoCheck(): void {
    console.log("Docheck is working!");
  }

  ngAfterContentInit(): void {
    console.log("AfterContent Init is working!");    
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit is working");
  }
  
}