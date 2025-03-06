
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

import { useParams } from "react-router-dom";
export default function Detail() {
 const params = useParams();
 return (
  
  <Container>
      <Row>
        <Col><h1>{params.nombre}</h1></Col>
      </Row>
      <Row>
        <Col><Image src={params.foto} rounded /></Col>
      </Row>
      <Row>
        <Col><h1>{params.raza}</h1></Col>
      </Row>
    </Container>
 )
}