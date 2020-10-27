import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import CreateStudent from './components/create-student.componant';

export default class App extends React.Component{
 
  
render() {
    return (
        <div>
           <CreateStudent />
        </div>
    );
}
};