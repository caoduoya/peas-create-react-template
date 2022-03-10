import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';


class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           <div>
               标准模板
           </div>
        )
    }
}

ReactDOM.render( <App />, document.getElementById('root') );