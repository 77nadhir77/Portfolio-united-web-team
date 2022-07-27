import React, {Component} from "react";
import Header from './Header.js'
import Empolyer from "./Employer.js";


class App extends Component{
    render(){
            return(
                    <div className="container">
                        <Header />
                        <Empolyer />
                    </div>
                )
        }
}

export default App;


