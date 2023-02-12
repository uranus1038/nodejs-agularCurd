import { Component, ViewChild } from '@angular/core';
import { Com1Component } from './com/com1/com1.component';
import { SharedService } from 'src/app/service/shared.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedService]
})
export class AppComponent {
  title = 'Frontend-app';
  messageChild:any ; 
  // ViewChild
  //@ViewChild("com1")
  //com1:Com1Component = new Com1Component;
  public getColor():void
  {
   //this.com1.c += 20 ;  
  }
  public chang(event:any)
  {
    this.messageChild = event ; 
  }
}
