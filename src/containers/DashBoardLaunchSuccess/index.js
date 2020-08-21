/**
 *
 * DashBoardLaunchSuccess
 *
 */

import React, {memo, useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import SpacCenterPage from "../../components/SpacCenterPage";
import RoiNavBar from "../../components/RoiNavBar";
import Card from "@material-ui/core/Card";
import './style.css'
export function DashBoardLaunchSuccess(props) {
  debugger;
  const [data, setData] = useState({
    dataall:[],
    datayr:[],
    datainitial:[], dataNotification:null,LandfromNotifications:null
  }
      );
 
  if(props.location.state) {
  
    let fetchDatas = async () => {
     
      let ApiUrl ; // https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true
      if(props.location.state) {
        if (props.location.state.fromNotifications === true) {
          ApiUrl = true

        } else if (props.location.state.fromNotifications === false) {
          ApiUrl = false
        } else
          ApiUrl = ''
      }
      const responses = await fetch(

          `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${ApiUrl}`
      );
    
      const datas = await responses.json();
      setData({...data,datainitial: datas,dataall: datas});


    };
    fetchDatas();
    
  }

  useEffect(() => {

    let fetchDatas = async () => {
      debugger;
      let ApiUrl ; // https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true
      if(props.location.state) {
        if (props.location.state.fromNotifications === true) {
          ApiUrl = true

        } else if (props.location.state.fromNotifications === false) {
          ApiUrl = false
        } else
          ApiUrl = ''
      }
      const responses = await fetch(

          `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${ApiUrl}`
      );
      debugger;
      const datas = await responses.json();
      setData({...data,datainitial: datas,dataall: datas});
      // setData({...data,dataall: data});

    };

    fetchDatas();

  }, []);

  let filteryears = (e)=>{
    debugger;
    let year = e.target.innerText ;
    let years;
    if(data) {
      years = data.dataall.filter(
          city=> `${city.launch_success}` === year);
    }
   
  }
  return (
    <Card className="maincard">

    <h1>SpaceX Launch Program</h1>
    <Grid container>
        <Grid lg={2} md={6} sm={12} container className="aligns">
           <Card className="maincard2">
            <RoiNavBar filteryear = {filteryears}/>
            </Card>
        </Grid>

      <Grid lg={10} md={6} sm={12} container className="col-container">
          <Card className="maincard2">
          <SpacCenterPage data = {data.datainitial}/>
          </Card>
      </Grid>

    </Grid>

  </Card>

  );
}



export default DashBoardLaunchSuccess;
