/**
 *
 * DashBoardSpac
 *
 */

import React, { memo,useEffect ,useState} from "react";
import Grid from "@material-ui/core/Grid";
import RoiNavBar from "../../components/RoiNavBar";
import SpacCenterPage from "../../components/SpacCenterPage";
import './style.css';
import Card from '@material-ui/core/Card';
export function DashBoardSpac() {

    const [data, setData] = useState({datainitial:[],
        dataall:[]});
  
    useEffect(() => {   
        // SpaceXData();
        let fetchDatas = async () => {

            const responses = await fetch(

                `https://api.spaceXdata.com/v3/launches?limit=100`
            );
            debugger;
            const datas = await responses.json();
            debugger
            setData({...data,datainitial: datas,dataall: datas});
            // setData({...data,dataall: data});

        };;

            fetchDatas();

    }, []);




    
    let filteryear = (e)=>{
        debugger;
        let year = e.target.innerText ;
        let years;
        if(data) {
            years = data.dataall.filter(
                city=> city.launch_year === year);
        }
        setData({...data,datainitial: years});
    }
    // let arrayyear = ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019']

  return (
    <Card className="maincard">

      <h1>SpaceX Launch Program</h1>
      <Grid container>
          <Grid lg={2} md={6} sm={12} container className="col-sm-12 aligns">
             <Card className="maincard2">
              <RoiNavBar filteryear = {filteryear}/>
              </Card>
          </Grid>

        <Grid lg={10} md={6} sm={12} container className="col-sm-12 col-container">
            <Card className="maincard2">
            <SpacCenterPage data = {data.datainitial}/>
            </Card>
        </Grid>

      </Grid>

    </Card>
  );
}

export default DashBoardSpac;
