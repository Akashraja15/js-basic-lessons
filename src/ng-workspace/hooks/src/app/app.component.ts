import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hooks';
  name:any='Home Angular';
  show=false;
  constructor (){
  }
  
  toggle (){
    this.show=!this.show;
  }
}
