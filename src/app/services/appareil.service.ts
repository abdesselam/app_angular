export class AppareilService {
    appareils = [
        {   
            id:1,
            name: 'Machine à laver',
            status: 'éteint',
            color: 'green'
          },
          {
            id:2,
            name: 'Frigo',
            status: 'allumé',
            color: 'red'
          },
          {
            id:3,
            name: 'Ordinateur',
            status: 'éteint',
            color: 'green'
          }
    ]; 


    onAllOn(){
        for(let app of this.appareils){
            app.status = 'allumé'
        }
    }
    onAllOff(){
        for(let app of this.appareils){
            app.status = 'éteint'
        }
    }

    switchOnOne(index){
        this.appareils[index].status = "allumé"
        console.log('------------5555',index,this.appareils)
    }
    switchOffOne(index){
        this.appareils[index].status = 'éteint'
    }
    
  }
  