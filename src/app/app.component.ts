import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit{
 // isAuth = true;

   //lastUpdate = new Date();
   appareils : any[];

constructor(private AppareilService : AppareilService){

}

ngOnInit(){
  this.appareils = this.AppareilService.appareils;
  
}

  

onAllOn(){
  this.AppareilService.onAllOn();
}
onAllOff(){
  if(confirm('Etes vous sûr de vouloire éteindre tous vos appareils ?')){
    this.AppareilService.onAllOff();}
    else{
      return null;
    }

}



  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    console.log('---------------------------');
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  

 




  




}
