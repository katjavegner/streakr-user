import React, { Component, Fragment } from 'react';
import {extendObservable} from 'mobx';
import {observer} from 'mobx-react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Logo from '../Img/user.jpg'
import Store from '../Store.js'
import ExistingBages from './ExistingBages';

@observer

export default  class App extends Component{
    constructor(props){
        super(props);

    extendObservable(this,{
        email:'',
        password:''
    })

    this.state={
        userState: Store.userState
    }

}
    onChange =e =>{
       const {name, value} = e.target;
       this[name] = value;
    }

    onSubmit = () => {
        const {email, password} = this
        Store.loginUser(email, password)
        this.setState({userState : "page"})

    }
    render(){

        const {email, password} = this
        const loginPage=(
            <Grid fluid className="App loginPage">
            <h1>Get your <span className="streakr-name">streakr </span>right now!</h1>
              <Row className="MainPage">
                    <Col xs={8} xsOffset={2}>
            <input
                name="email"
                value={email}
                className="inputClass email-input"
                placeholder="Email"
                onChange = {this.onChange}
            />
            </Col>
            <Col xs={8} xsOffset={2}>
            <input
             name="password"
             value={password}
             className="inputClass pass-input"
             placeholder="Password"
             onChange = {this.onChange}
            /></Col>
            </Row>
            <Row>
            <Button onClick={this.onSubmit}>Submit</Button>
            </Row>
            </Grid>
        )

        const userPage =(
            <Grid fluid className="App">
   
            <Fragment>
                <div className="user-description">
                   
                    <div className="user-data">  
                        <span className="userName">{Store.userData.display_name}</span>
                        <p className="userDescription">{Store.userData.email}</p>
                    </div>
                    <img alt="User-logo" src={Logo} className="user-logo" />
                    
               
                </div>
                
                <Row className="MainPage">
                <Col xs={12} >
        
                    <ExistingBages />
                 
                
          
                </Col>
              </Row>
            </Fragment>
          
        </Grid>
        )


        return(
            this.state.userState === "login" ? loginPage : userPage

        )
    }

}