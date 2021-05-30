import React, { Component, useState } from "react";
import CityComponent from'./CityComponent'

const StateComponent=(props)=>{
    const [changeStates,setStates]=useState(-1)
    const openCloseStates=(e)=>{
        if(changeStates==-1){
            setStates(e.target.value-1)
        }
        else{
            setStates(-1)
        }
        e.stopPropagation()
    }
    
     return(
                <ol>
                    {
                        props.arrayStates.map((eState,index)=>{
                                return <li id={`state${index+1}`} value={index+1}onClick={openCloseStates}>{eState.name}
                                    {changeStates==index&&(
                                       <CityComponent arrayStates1={[...props.arrayStates]} indexState={index} changedState={changeStates}/>
                                    )

                                    }
                                    
                                </li>
                        })
                    }
                </ol>
            )
}

export default StateComponent;