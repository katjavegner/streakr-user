import React, {Fragment} from 'react';
import '../Style/App.css';

import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Logo from '../Img/user.jpg'

import OtherCampaigns from './OtherCampaigns';

import ExistingBages from './ExistingBages';

const App = () => (
  <Grid fluid className="App">
   
      <Fragment>
      <Row className="user-description">
        <Col xs={5} xsOffset={1} className="userData">
          <span className="userName">Nice person</span>
          <p className="userDescription">Let's give some smiles to this pug</p>
        </Col>
        <Col xs={3} xsOffset={3}>
          <img alt="User-logo" src={Logo} className="user-logo" />
        </Col>
        </Row>
        
        <Row className="MainPage">
        <Col xs={12} >
        <Tabs defaultActiveKey={1}>
          <Tab eventKey={1} title="Your badges">
            <ExistingBages/>
          </Tab>
          <Tab eventKey={2} title="All Campaigns">
            <OtherCampaigns />
          </Tab>
        </Tabs>
        </Col>
      </Row>
    
   
      </Fragment>
    
  </Grid>
);

export default App;