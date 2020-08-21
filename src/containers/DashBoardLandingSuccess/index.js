/**
 *
 * DashBoardLandingSuccess
 *
 */

import React, { useEffect, useState} from "react";




import Grid from "@material-ui/core/Grid";

import SpacCenterPage from "../../components/SpacCenterPage";
import Card from "@material-ui/core/Card";
import RoiNavBar from "../../components/RoiNavBar";
import './style.css'
export function DashBoardLandingSuccess(props) {

  const [data, setData] = useState({
        dataall:[],
        datayr:[],
        datainitial:[], dataNotification:null,LandfromNotifications:true
      }
  );
 
  let fetchDatasLanding = async () => {
    debugger;
    let ApiUrl ; //
    if(props.location.state) {
      if (props.location.state.LandfromNotifications === true) {
        ApiUrl = true
      } else if (props.location.state.LandfromNotifications === false) {
        ApiUrl = false
      }
    }
    const responses = await fetch(

        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=${ApiUrl}`
    );
    debugger;
    const datas = await responses.json();
    setData({...data,datainitial: datas,dataall: datas});
    // setData({...data,dataall: data});

  };;
  if(props.location.state) {
  
    fetchDatasLanding();
   
  }

  useEffect(() => {
    fetchDatasLanding();
  }, []);

  let filteryears = (e)=>{

    let year = e.target.innerText ;
    let years;
    if(data) {
      years = data.dataall.filter(
          city=> `${city.land_success}` === year);
    }
    setData({...data,datainitial: years});
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



export default DashBoardLandingSuccess;
