/**
 *
 * RoiNavBar
 *
 */

import React, { memo } from "react";
import { NavLink} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import './style.css'
import Button from "@material-ui/core/Button";

function RoiNavBar(props) {
    // const isActive = (path, match, location) => !!(match || path === location.pathname);
    let arrayyear = ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019']
    let filteryear = (e)=>{
       
        props.filteryear(e);
    }
    return (
        <Grid sm={12} className="padCh" container justify={"space-evenly"}>
        <nav className="navColor">
            <Grid>
                Filter
            </Grid>
            <Grid>
                Launch Year
            </Grid>
            <Grid  container  sm={12} className="button">
                 
                { arrayyear.map(function(name, index){
                    return <Grid className="col-sm-6" lg={6}  md={5}> <NavLink exact  to={{
                        pathname: "spac",
                        state: {
                            fromNotifications: true
                        }
                    }
                    }
                                                  className="alignHome" activeClassName="active" >
                        <Button className="buttoncolor" onClick={filteryear} key={ index }> {name} </Button>
                    </NavLink></Grid>
                })}
               </Grid>
                <Grid container className="col-sm-12">
                    Successful Launch
                </Grid>
            
            <Grid container sm={12} className="button">
                <Grid className="col-sm-6" lg={5} sm={6} >
                    <NavLink exact  to={{
                        pathname: "LaunchSuccess",
                        state: {
                            fromNotifications: true
                        }
                    }
                    }
                             className="alignHome" activeClassName="active" >
                        <Button className="buttoncolor"> True </Button>
                    </NavLink>
                </Grid>
                <Grid className="col-sm-6" lg={5}  md={5} sm={6}>
                    <NavLink exact  to={{
                        pathname: "LaunchSuccess",
                        state: {
                            fromNotifications: false
                        }
                    }
                    }
                             className="alignHome" activeClassName="active" >
                        <Button className="buttoncolor"> False </Button>
                    </NavLink>
                </Grid>
            </Grid>
            <Grid>
                Landing Succesful
            </Grid>
            <Grid container sm={12}  className="button">
                <Grid className="col-sm-6" lg={5}  md={5} sm={6}>
                    <NavLink exact  to={{
                        pathname: "LandingSuccess",
                        state: {
                            LandfromNotifications: true
                        }
                    }
                    }
                             className="alignHome" activeClassName="active" >
                        <Button className="buttoncolor"> True </Button>
                    </NavLink>
                </Grid>
                <Grid className="col-sm-6" lg={5}  md={5} sm={6}>
                    <NavLink exact  to={{
                        pathname: "LandingSuccess",
                        state: {
                            LandfromNotifications: false
                        }
                    }
                    }
                             className="alignHome" activeClassName="active" >
                        <Button className="buttoncolor"> False </Button>
                    </NavLink>
                </Grid>
            </Grid>
            </nav>

        </Grid>
    )
}

RoiNavBar.propTypes = {};

export default memo(RoiNavBar);