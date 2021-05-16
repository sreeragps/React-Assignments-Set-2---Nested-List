import React, { Component, useState } from "react";
import CityComponent from'./CityComponent'

const StateComponent=(props)=>{
    const [changeStates,setStates]=useState(0)
    const openCloseStates=()=>{
        if(changeStates==0){
            setStates(1)
        }
        if(changeStates==1){
            setStates(0)
        }      
    }
    
     return(
                <ol>
                    {
                        props.arrayStates.map((eState,index)=>{
                                return <li id={"state"+(index+1)} onClick={openCloseStates}>{eState.name}
                               
                                    <CityComponent arrayStates1={[...props.arrayStates]} indexState={index} changedState={changeStates}/>
                                </li>
                        })
                    }
                </ol>
            )
}

export default StateComponent;