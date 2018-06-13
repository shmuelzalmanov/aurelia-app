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
        eventDate: 20,
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
      eventId: 0};
    this.formHead = ""; /* Used to label current action */
    this.events = this.sortEvents();

  }

  addEvent() { 
    this.clearFormFields();
    this.formHead = "Add New Event";
    // this.event.eventId = this.events[this.events.length-1]+1; // Still need unique ID format. Will be used for event edit and delete.
    this.events = this.sortEvents();

  }

  saveEvent(){  
    this.event.eventDate = Number(this.event.eventDate);
    let copy = Object.assign({}, this.event); // Fix for a property reference error
    this.events.push(copy);
    this.clearFormFields();

    
  }



  deleteEvent() {

  }

  editEvent(){
    this.formHead = "View/Edit Event";
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
}