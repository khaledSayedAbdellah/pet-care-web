import * as React from "react";
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { ScheduleComponent ,Day ,Week ,WorkWeek ,Month ,Inject } from "@syncfusion/ej2-react-schedule";
import { SampleBase } from "../sample-base";
import axios from "axios";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { L10n } from '@syncfusion/ej2-base';





L10n.load({
  'en-US': {
    'schedule': {
      'saveButton': 'Confirm Reservation',
      'cancelButton': 'Close',
      'deleteButton': 'Cancel Reservation',
      'newEvent': 'Book a Reservation',
    },
  }
});
const API_URL = "https://pet-care-iti.herokuapp.com/api/reservations ";
export class AddRemoteData extends SampleBase {
  constructor(props) {
    super(props);
    this.state = {
      res: [{
        //   id:'',
        //   subject:'hi there',
        //   isAllDay:false,
        //   location:'',
        //   description:'',
        StartTime: new Date(2020, 11, 14, 10, 0),
        EndTime: new Date(2020, 11, 14, 11, 0),
        //   startTimezone:'Asia/Yekaterinburg',
        //   endTimezone:'Asia/Yekaterinburg',
      }],
      data:[],
      services:[]
    };


  }

  
  // getServices = () => {
  //   if (this.props.doctorServices)
  //     return this.props.doctorServices.map((service) => { return service._id })
  // }
  getServicesTitle = () => {
    if (this.props.doctorServices)
      return this.props.doctorServices.map((service) => { return service.title
        //  [{ id: service._id, services: service.title }] 
    })  
  }
 
  // componentDidMount(){ 
  //   if(this.props.doctorServices){
  //   let ids=this.props.doctorServices.map((service)=>{return service._id})
  //   this.setState({data:ids})
  //   // console.log(this.state.data)
  //   }
    
  // }
  getUserToken = () => {
    if (localStorage.getItem('user'))
      return JSON.parse(localStorage.getItem('user')).token
  }
  // async componentDidUpdate() {
    /////////////////////////////////      
    // JSON.parse(localStorage.getItem('doctor')).token
    /////////////////////////////////////////////////



    // console.log(this.getServices())
    // const id=this.props.doctorServices.map((service)=>{return service._id})
    // const doctorServices=this.props.doctorServices.map((service)=>{
    //   return({id:`${service._id}`})
    // })
    // console.log(this.props.doctorServices)
    // console.log(this.props.doctorServices.map((service)=>{return service._id}))
    // console.log(id)
    // console.log(this.getServices())
    // const gehan=this.getServices()
    // console.log(gehan)

    // let { data } = await axios.put(
    //   API_URL,
    //   {
    //     doctorId: this.props.doctorId,
    //     services:["5fc61a48b386840017167775"],
    //     date: "12-6-2020",
    //   },
    //   {
    //     headers: {
    //       Authorization: this.getUserToken(),
    //     },
    //   }
    // );
    // console.log(data);

    // let  response=data.data;
    // response.map((schedule)=>{
    //   console.log(schedule)
    //   return()=>{
    //     this.state.res.id=schedule.id
    //     this.state.res.subject=schedule.user.name
    //     this.state.res.location=schedule.user.address
    //     // this.state.res.startTime=schedule.date
    //   }

    // })
    // this.setState({ res: data.data });

    // console.log(this.state.res)
  // }

  editorWindowTemplate(props) {
    
    return (
  
      <table className="custom-event-editor" style={{ width: '100%' }}>
        
        <tbody>

          <tr>
            <td className="e-textlabel">From</td>
            <td>
            <div className="form-group col">
              <DateTimePickerComponent id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} format='dd/MM/yy hh:mm a' className="e-field">

              </DateTimePickerComponent>
              </div>
            </td>
          </tr>

          {/* <tr>
            <td className="e-textlabel">To</td>
            <td>
            <div className="form-group col">
              <DateTimePickerComponent id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} format='dd/MM/yy hh:mm a' className="e-field">

              </DateTimePickerComponent>
              </div>
            </td>
          </tr> */}


          <tr>
            <td className="e-textlabel">
              Services
            </td>
            <td>
              <MultiSelectComponent 
              id="dropdowntree" 
              dataSource={this.getServicesTitle()} 
              placeholder="Choose Services" 
              className="e-field"
              />
            </td>
          </tr>
        </tbody>
      </table>
      
      
      
  
    );
  }

  render() {
    // console.log(JSON.parse(localStorage.getItem('user')).token)
    // console.log(this.props.doctorId)
    // console.log(this.actionBegin.requestType)
    return (
      <div className="schedule-control-section">
        <div className="control-section">
          <div className="control-wrapper">
            <ScheduleComponent
            actionBegin={(e)=>{
              // console.log(e.addedRecords)
              if(e.addedRecords){
              axios.put(
                  API_URL,
                  {
                    doctorId: this.props.doctorId,
                    services:e.addedRecords[0].dropdowntree,
                    date:`${e.addedRecords[0].StartTime}`,
                  },
                  {
                    headers: {
                      Authorization: this.getUserToken(),
                    },
                  }
                )
                alert('success')
              }
                else{
                  // console.log('error')
                }
            }}
            actionComplete={()=>{
            }}
            actionFailure={(e)=>{
              console.log(e)
            }}
              showQuickInfo={false}
              width="100%"
              height="70vh"
              selectedDate={new Date().now}
              showWeekend={false}
              workDays={[0, 1, 2, 3, 4]}
              startHour='07:00'
              endHour='16:00'
              firstDayOfWeek={0}
              readonly={false}
              isBlock={true}
              editorTemplate={this.editorWindowTemplate.bind(this)}
              minDate={new Date().now} 
              maxDate={new Date(2022, 5, 17)} 
              timeScale={{ enable: true, interval: 60, slotCount: 1 }}
              showTimeIndicator={false}
            >
              <Inject services={[Day, Week, WorkWeek, Month]} />
            </ScheduleComponent>
          </div>
        </div>
      </div>
    );
  }
}
