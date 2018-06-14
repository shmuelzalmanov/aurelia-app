import './calendar.scss';

export class Calendar {
  constructor() {
    this.heading = 'Calendar App';
    this.events = [
      {
        eventName: 'Meeting 1',
        eventLocation: '44th',
        startTime: '17:00',
        endTime: '14:00',
        eventDate: 2,
        eventDesc: '',
        eventId: 0},
      {
        eventName: 'Meeting 2',
        eventLocation: '44th',
        startTime: '13:00',
        endTime: '14:00',
        eventDate: 20,
        eventDesc: '',
        eventId: 1},
      {
        eventName: 'Meeting 3',
        eventLocation: '44th',
        startTime: '12:00',
        endTime: '14:00',
        eventDate: 23,
        eventDesc: '',
        eventId: 2}
    ];
    this.event = {  /* Used for current active event */
      eventName: 'test',
      eventLocation: '',
      startTime: '',
      endTime: '',
      eventDate: 1,
      eventDesc: '',
      eventId: -1};
    this.formHead = ""; /* Used to label current action */
    this.updateMode;

    this.events = this.sortEvents();
    this.inputStyle;
    this.idCount = this.events.length-1;

  }

  addEvent() { 
    this.formHead = "Add New Event";
    this.openEvent();
    this.updateMode = "add";
    this.events = this.sortEvents();

  }

  saveEvent(){  

    if(!this.validateInputs()){return;}

    this.event.eventDate = Number(this.event.eventDate);
    if(this.updateMode === "add"){
      this.idCount++;
      this.event.eventId = this.idCount;

    }else{
      this.deleteEvent();
    }
    let copy = Object.assign({}, this.event); // Fix for a property reference error
    console.log(this.idCount);
    this.events.push(copy);
    this.clearFormFields();
    this.closeEvent();

    
  }

  validateInputs(){
    if(this.event.eventName === '' || 
       this.event.startTime === '' || 
       this.event.eventDate === ''){
      return false;
    } 
    return true;
  }




  deleteEvent() {
    let index = this.findIdIndex(this.event.eventId);
    
    if (index !== -1) {
        this.events.splice(index, 1);
    }

    // let copyAry = [];
    // while(this.events.length > 0){
    //   copyAry.push(this.events.pop());
    // }
    // this.events = copyAry.splice(0);
    // this.closeEvent();
  }

  editEvent(){
    this.formHead = "View/Edit Event";
    this.openEvent();
    this.updateMode = "edit";
    this.event = Object.assign({},this.events[event.target.value]); // Unsure how to bind values where many elements do the same task.
                                                  // this would be the first thing to go in a Dialog/modal approach
  }
  
  findIdIndex(id){
    console.log(id);
    for(let i = 0; i < this.events.length; i++){
      if(this.events.eventIdd === id)
      console.log(i);
        return i;
        
    }
    return -1;
  }

  clearFormFields(){
    this.formHead = "";
    for(let prop in this.event){
      this.event[prop] = '';
    }
  }

  sortEvents(){
    return this.events.sort((a,b) => {
      if(a.eventDate === b.eventDate){
        return a.startTime > b.startTime; //Sort by time
      }
      return a.eventDate > b.eventDate; //Sort by day
    });
  }

  closeEvent(){this.inputStyle = "visibility:hidden";}
  openEvent(){this.inputStyle = "visibility: visible;"}
}