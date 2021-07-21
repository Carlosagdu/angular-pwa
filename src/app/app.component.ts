import { Component, OnInit } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {DataService} from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(updates:SwUpdate, private data:DataService){
    updates.available.subscribe(event =>{
      // IF THRES AN UPDATE ON THE SERVICE WORKER IT WILL UPDATE
      updates.activateUpdate().then(()=>document.location.reload());
    })
  }

  joke:any;
  update:boolean = false;

  title = 'angular-pwa';

  ngOnInit(){
    this.data.giveMeJokes().subscribe(res=>{
      this.joke = res;
    })
  }

}
