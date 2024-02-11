import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import './App.css';
import { PieChart } from './components/PieChart';
import { SplineAreaChart } from './components/SplineAreaChart';
import { ColumnChart } from './components/ColumnChart';
import { StackedColumnsChart } from './components/StackedColumnsChart';
import { CarouselComponent } from './components/CarouselComponent';
import { Tableau } from './components/Tableau';
import { Inflation } from './components/Inflation';
import { Croissance } from './components/Croissance';
import { Chomage } from './components/Chomage';
import { Population } from './components/Population';
import { Balance } from './components/Balance';

function App() {
  return (
    <div className="app">

      <h2 className='title'>Data Visualization Dashboard</h2>
      <h4>Statistiques de la Tunisie</h4>
      <br/>
      <Row className='row'>
        <Col className="col indicator" sm={2}><Inflation /></Col>
        <Col className="col indicator" sm={2}><Croissance /></Col>
        <Col className="col indicator" sm={2}><Chomage /></Col>
        <Col className="col indicator" sm={2}><Population /></Col>
        <Col className="col indicator" sm={2}><Balance /></Col>
      </Row> 
      <Row className='row'>
        <Col className="col" sm={7}><CarouselComponent /></Col>
        <Col className="col" sm={4}><br/><PieChart /></Col>
      </Row> 
      <Row className="row">
        <Col className="col" sm={4}><SplineAreaChart /></Col>
        <Col className="col" sm={7}><ColumnChart /></Col>
      </Row>
      <Row className="row">
        <Col className="col" sm={6}><StackedColumnsChart /></Col>
        <Col className="col" sm={5}><Tableau /></Col>
      </Row>

    </div>
  );
}

export default App;
