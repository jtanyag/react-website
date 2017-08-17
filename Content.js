import React, {Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import bh1 from './bh1.jpg';
import bh2 from './bh2.jpeg';
import bh3 from './bh3.jpg';



class Content extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Row>
          <Col sm={4}>
            <h4> Stars are Bright</h4>
            <p> Lorem Ipsum has been the industrys standard dummy text ever since the asdsa, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <span className="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</span>It was popularised in the asd with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been the industrys standard dummy text ever since the asdsa, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the asd with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been the industrys standard dummy text ever since the asdsa, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the asd with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Col>
          <Col sm={8}>
            <h4> Black Holes are Black </h4>
            <p> Lorem Ipsum has been the industrys standard dummy text ever since the asdsa, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the asd with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been the industrys standard dummy text ever since the asdsa, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the asd with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.
            </p>
            <div>

              <a href="#" className="btn btn-color btn-xs">Mission</a>
              <a href="#" className="btn btn-info btn-xs"> Rover</a>
              <a href="#" className="btn btn-danger btn-xs">Catstronauts</a>

            </div>
            <div>
            <img className= "bh" src = {bh1} alt = {'bh1'}/>
            <img className= "bh" src = {bh3} alt = {'bh3'}/>
            <img className= "bh" src = {bh2} alt = {'bh2'}/>

            </div>
             <h4> Planets are Usually Round</h4>
             <p>publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been the industrys standard dummy text ever since the asdsa, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the asd with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Content;
