import React, { Component, useState } from "react";

const TownComponent=(props)=>{
     return(
                <ol>           
                        {
                            props.arrayStates2[props.indexState2].cities[props.indexCity].towns.map((eTown,indexT)=>{
                                   
                                    return <li id={"town"+(indexT+1)}>{eTown.name}</li>})
                    
                        }
                </ol>
            )
}

export default TownComponent;