import React, { Component } from "react";
import EmpolyerItem from "./EmpolyerItem.js";
import memberInfo from "./memberInfo.js";


class Empolyer extends Component{
    
    constructor(){
        super()
        this.state = { members: [], memberInfo: memberInfo , counter: 0}

        this.clickEvent = this.clickEvent.bind(this)
        
    }


    clickEvent(){

        if(this.state.members.length < this.state.memberInfo.length){

            this.state.members.push(this.state.memberInfo[this.state.counter])
            this.setState(function(prevState){
                return {counter: prevState.counter + 1}
            })
            
            this.newMembers = this.state.members.map(member => 
                        <EmpolyerItem   

                                        key={member.id}
                                        name={member.name} 
                                        nick={member.nick}
                                        role={member.role}
                                        img={member.img}
                                        alt={member.alt}
                                        Email={member.Email}
                                        mobile={member.mobile}
                                        website={member.website} />
            
            )
        }


        

    }


    render(){
  
               

                 return(
                    <div className="row">
                        <button onClick={this.clickEvent} className="btn btn-primary btn-lg btn-block">Click Me!</button>
                        {this.newMembers}
                    </div>
                )
    }
}
export default Empolyer