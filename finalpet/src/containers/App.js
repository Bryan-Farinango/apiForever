import React from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';

import UserForm from "../components/UserForm";
import EventsForm from "../components/EventsForm";

import 'antd/dist/antd.css';


class App extends React.Component {


  state = {
    tasks: [],
    tasksList: [],


  };




  render(){

    const { tasks, tasksList} = this.state;
    return (


        <div>
          <div className="App">
          <h1>Página de mascotas </h1>
          </div>
            <div className="-col-md-24">
                <div className="ant-col-md-6">
                    <UserForm/>
                </div>
                <div className="ant-col-md-6">
                    <EventsForm/>
                </div>
                <div className="ant-col-md-6">

                </div>
                <div className="ant-col-md-6">

                </div>

            </div>

          <br/>



        </div>
    );
  }

}

export default App;
