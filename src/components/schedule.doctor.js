import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule'


const Schedule = () => {
    

    
    return ( <div  id="schedule">
  <ScheduleComponent>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
    </ScheduleComponent>;


  
    </div>);
}
 
export default Schedule;