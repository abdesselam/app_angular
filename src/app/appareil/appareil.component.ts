import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent  {

  @Input() indexOfAppareil  : number;
  @Input() appareilName : string;
  @Input() appareilStatus : string;


  constructor(private AppareilService : AppareilService) { }
  
  ngOnInit() {

    
  } 


  onOneOn(){
    this.AppareilService.switchOnOne(this.indexOfAppareil);
    
  }
  onOneOff(){

      this.AppareilService.switchOffOne(this.indexOfAppareil);
     
  
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
}

}
