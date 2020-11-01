import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Work from './Work';
import Buttom from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './About.css';
import { Container, Row , Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      <nav className = "navbar fluid">
        <h3>Informations</h3>
        <h3> Who is you </h3>
        <h3> Your Resume</h3>
      </nav>

        <Container>
          <Row>
            <Col> <iframe width="560" height="315" src="https://www.youtube.com/embed/CX_HyY3kbZw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <Home/>  </Col>
            <Col> <Work/> </Col>
        </Row>
       </Container> 
  
       <Container>
         <Row>
            <Col> <About/> </Col>
            <Col> <Resume/> </Col>
         </Row>
        </Container> 
      

     <Container>
        <Row>
          
        </Row>
     </Container>   
    </div>
  );
}

export default App;


