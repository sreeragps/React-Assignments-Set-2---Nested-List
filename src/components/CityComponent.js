import React, { Component, useState } from "react";
import TownComponent from './TownComponent'


const CityComponent=(props)=>{
    const [changeCities,setCities]=useState(-1)
    // const openCloseCity=(indexC)=>{
    //      if(changeCities==-1){
    //         setCities(indexC)
    //      }else{
    //          setCities(-1)
    //      }      
        
    // }
     return(
                <ol>
                    {     props.changedState==props.indexState&&(                    
                                props.arrayStates1[props.indexState].cities.map((eCity,indexC)=>{
                                    
                                        return <li id={`city${indexC+1}`} value={indexC+1} onClick={(e)=>{
                                            
                                            if(changeCities==-1){
                                                setCities(e.target.value-1)
                                             }else{
                                                 setCities(-1)
                                             }      
                                             e.stopPropagation()
                                        }
                                        
                                        }>{eCity.name}
                                                        {changeCities==indexC &&(
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