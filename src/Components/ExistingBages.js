import React, { Component } from 'react';
import { Row, Col, PanelGroup, Panel } from 'react-bootstrap';
import MaterialIcon from 'material-icons-react';

export default class ExistingBages extends Component {
    
    render() {
        
      return (


        <PanelGroup
              accordion
              id="accordion-controlled"
           
            >
              <Panel>
                <Panel.Heading>
                  <Panel.Title toggle>
   
                    <Row  className="block_collapsible" >
                        <Col xs={4}>
                            Coffee campaign
                        </Col>
                        <Col xs={4}>
                            <MaterialIcon icon="local_cafe" color='rgb(227,106,69)'/>
                            <MaterialIcon icon="local_cafe" color='rgb(227,106,69)'/>
                            <MaterialIcon icon="local_cafe" color='rgb(227,106,69)'/>
                            <MaterialIcon icon="local_cafe" color='rgb(227,106,69)'/>
                            <MaterialIcon icon="local_cafe" color='rgb(227,106,69)'/>
                        </Col>
                        <Col xs={4}>
                            30 of September 2018
                        </Col>
                    </Row>
               
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                 
                </Panel.Body>
              </Panel>
            </PanelGroup>
     
      );
    }
  }

