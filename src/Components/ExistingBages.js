import React, { Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import MaterialIcon from 'material-icons-react';
import sushi from '../Img/sushi.svg';
import sushired from '../Img/sushi-red.svg';
import soda from '../Img/soda.svg';

export default class ExistingBages extends Component {
    
    render() {
       
      return (


   
<div className="Badges">
        <Row  className="block_collapsible" >
            <Col xs={12} className="text">
                Damn good coffee
            </Col>
            <Col xs={12}>
                <MaterialIcon icon="local_cafe" color='rgb(227,106,69)'/>
                <MaterialIcon icon="local_cafe" color='rgb(227,106,69)'/>
                <MaterialIcon icon="local_cafe" color='rgb(227,106,69)'/>
                <MaterialIcon icon="local_cafe" color='rgb(227,106,69)'/>
                <MaterialIcon icon="local_cafe" color='rgb(227,106,69)'/>
                <MaterialIcon icon="local_cafe" color='#000'/>
                <MaterialIcon icon="local_cafe" color='#000'/>
                <MaterialIcon icon="local_cafe" color='#000'/>
                <MaterialIcon icon="local_cafe" color='#000'/>
                <MaterialIcon icon="local_cafe" color='#000'/>
            </Col>
            
        </Row>

     
        <Row  className="block_collapsible" >
            <Col xs={12} className="text">
                Bunq Soda
            </Col>
            <Col xs={12}>
                <img alt="User-logo" src={soda} className="badge-logo" />
                <img alt="User-logo" src={soda} className="badge-logo" />
                <img alt="User-logo" src={soda} className="badge-logo" />
                <img alt="User-logo" src={soda} className="badge-logo" />
                <img alt="User-logo" src={soda}  className="badge-logo"/>
            </Col>
           
        </Row>

                <Row  className="block_collapsible" >
            <Col xs={12} className="text">
               AH sushi to go
            </Col>
            <Col xs={12}>
                <img alt="User-logo" src={sushired} className="badge-logo" />
                <img alt="User-logo" src={sushired} className="badge-logo" />
                <img alt="User-logo" src={sushired} className="badge-logo" />
                <img alt="User-logo" src={sushired} className="badge-logo" />
                <img alt="User-logo" src={sushi}  className="badge-logo"/>
                <img alt="User-logo" src={sushi}  className="badge-logo"/>
                <img alt="User-logo" src={sushi}  className="badge-logo"/>
                <img alt="User-logo" src={sushi}  className="badge-logo"/>
                <img alt="User-logo" src={sushi}  className="badge-logo"/>
                <img alt="User-logo" src={sushi}  className="badge-logo"/>

            </Col>
           
        </Row>
        </div>
      );
    }
  }

