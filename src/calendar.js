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
        eventLocation: '47th',
        startTime: '12:00',
        endTime: '14:00',
        eventDate: 23,
        eventDesc: '',
        eventId: 2},
        {
        eventName: 'Meeting 4',
        eventLocation: '46th',
        startTime: '12:00',
        endTime: '14:00',
        eventDate: 8,
        eventDesc: '',
        eventId: 3},
    {
        eventName: 'Meeting 5',
        eventLocation: '45th',
        startTime: '12:00',
        endTime: '14:00',
        eventDate: 1,
        eventDesc: '',
        eventId: 4}
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
    this.inputStyle; /* style for input area, used for hidden/visible */ 
    this.idCount = this.events.length-1;

  }

  addEvent() { 
    this.clearFormFields();
    this.formHead = "Add New Event";
    this.openEvent();
    this.idCount++;
    this.event.eventId = this.idCount; // Prime new ID for addition
  }

  saveEvent(){  
    if(!this.validateInputs()){return;}// Validate for minimum required inputs for an event.

    this.event.eventDate = Number(this.event.eventDate);
    if(this.formHead === "View/Edit Event"){
      this.deleteEvent(); // Clear out stored event so the changes can be re-added
    }

    let copy = Object.assign({}, this.event); // Fix for a bind reference error
    this.events.push(copy);

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
    this.closeEvent();
  }

  editEvent(){
    if(event.target.value == -1){
      this.addEvent()
      return;
    }
    this.event = Object.assign({},this.events[this.findIdIndex(event.target.value)]); 
    // Unsure how to bind values where many elements do the same task.
    // event.target would be the first thing to go in a Dialog/modal approach

    this.formHead = "View/Edit Event";
    this.openEvent();
                                      
  }
  
  findIdIndex(id){
    for(let i = 0; i < this.events.length; i++){
      if(this.events[i].eventId == id){
        return i;
    }
    }
    return -1;
  }

  clearFormFields(){
    this.formHead = "";
    for(let prop in this.event){
      this.event[prop] = '';
    }
  }

  sortEvents(){// Was used before I figured out the value converters. Still might be useful at some point.
    return this.events.sort((a,b) => {
      if(a.eventDate === b.eventDate){
        return a.startTime > b.startTime; //Sort by time
      }
      return a.eventDate > b.eventDate; //Sort by day
    });
  }

  closeEvent(){this.inputStyle = "visibility: hidden";}
  openEvent(){this.inputStyle = "visibility: visible;"}
}