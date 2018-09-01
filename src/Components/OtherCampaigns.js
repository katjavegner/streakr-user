
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import MaterialIcon from 'material-icons-react';


export default class OtherCampaigns extends Component {
    
    render() {
        
      return (
        <div className="OtherCampaigns">  
          <Row>
            <Col xs={4}>
              Coffee campaign
            </Col>
            <Col xs={4}>
              <MaterialIcon icon="local_cafe" />
              <MaterialIcon icon="local_cafe" />
              <MaterialIcon icon="local_cafe" />
              <MaterialIcon icon="local_cafe" />
              <MaterialIcon icon="local_cafe" />
            </Col>
            <Col xs={4}>
              July-September 2018
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              Free pizza
            </Col>
            <Col xs={4}>
              <MaterialIcon icon="local_pizza" />
              <MaterialIcon icon="local_pizza" />
              <MaterialIcon icon="local_pizza" />
              <MaterialIcon icon="local_pizza" />
            </Col>
            <Col xs={4}>
              September 2018
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              Spa day
            </Col>
            <Col xs={4}>
              <MaterialIcon icon="spa" />
              <MaterialIcon icon="spa" />
              <MaterialIcon icon="spa" />
              <MaterialIcon icon="spa" />
              <MaterialIcon icon="spa" />
              <MaterialIcon icon="spa" />
              <MaterialIcon icon="spa" />
            </Col>
            <Col xs={4}>
              August-December 2018
            </Col>
          </Row>
          <Row>
            <Col xs={4}>  
              Painting class
            </Col>
            <Col xs={4}>
              <MaterialIcon icon="brush" />
              <MaterialIcon icon="brush" />
              <MaterialIcon icon="brush" />
            </Col>
            <Col xs={4}>
              September-December 2018
            </Col>
          </Row>
        </div>  
      );
    }
  }
