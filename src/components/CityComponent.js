import React, { Component, useState } from "react";
import TownComponent from './TownComponent'


const CityComponent=(props)=>{
    const [changeCities,setCities]=useState(0)
    const openCloseCity=()=>{
        if(changeCities==0){
            setCities(1)
        }else{
            setCities(0)
        }      
    }
     return(
                <ol>
                    {     props.changedState==1&&(                    
                                props.arrayStates1[props.indexState].cities.map((eCity,indexC)=>{
                                    
                                        return <li id={"city"+(indexC+1)} onClick={openCloseCity}>{eCity.name}
                                                        {changeCities==1 &&(
                                                        <TownComponent arrayStates2={[...props.arrayStates1]} indexState2={props.indexState} indexCity={indexC}/>
                                                        )}
                                                </li>
                                })
                           )
                    }
                </ol>
            )
}

export default CityComponent;