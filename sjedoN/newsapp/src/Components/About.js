import React from 'react'

export default function About(props) {
    const mystyle={
        backgroundColor:props.backgroundColor,
        color:props.color,
        borderColor:props.color
        
    }
    return (
        <div className="container" style={mystyle}>
            <div class="card my-4 p-2 about" style={mystyle} >
                <div class="card-body font-weight-bold font-size-20">
                     Calculator is a device use to perform some operation with in a second.
                </div>
            </div>
            <div class="card my-4 p-2 about" style={mystyle} >
                <div class="card-body font-weight-bold font-size-20">
                    Calcualtor save a lots of time of user to perform basics daily world calcualtion.
                </div>
            </div>
            <div class="card my-4 p-2 about" style={mystyle} >
                <div class="card-body font-weight-bold font-size-20">
                     Project show a simple two argument claculator that help to perform algebric operations. 
                </div>
            </div>
            <div class="card my-4 p-2 about" style={mystyle}>
                <div class="card-body font-weight-bold font-size-20">
                    Firstl Login or Signup for using Calcualtor
                 </div>
            </div>
        </div>
    )
}
