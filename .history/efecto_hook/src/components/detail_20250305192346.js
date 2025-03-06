
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

import { useParams } from "react-router-dom";
const { useEffect, useState } = require("react");

export default function Detail() {
 const params = useParams();
  
  const [mascota, setMascota] = useState({
    id: params.mascotaId,
    nombre: "Mascota no encontrada",
    especie: "null",
    raza: "null",
    foto: "null",
    descripcion: "null",
    
  });
   useEffect(() => {
     const URL =
       "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
     fetch(URL)
       .then((data) => data.json())
       .then((data) => {
          const mascota = data.find((pMascota)=> pMascota["id"]==params.mascotaId)
          if(mascota) setMascota(mascota);
       });
   }, []);
 return (
  
  <Container>
      <Row>
        <Col><h1>{mascota.nombre}</h1></Col>
      </Row>
      <Row>
        <Col><Image src={mascota.foto} rounded /></Col>
      </Row>
      <Row>
        <Col><h1>{mascota.raza}</h1></Col>
      </Row>
    </Container>
 )
}