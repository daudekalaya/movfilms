import { Container, Col, Row, Button } from "react-bootstrap";
import "../style/landingPage.css";

function Intro() {
  return (
    <div className="intro">
      <Container className="d-flex justify-content-center align-items-center mt-5 tagline">
        <Row>
          <Col>
            <p>NONTON DIMANA SAJA</p>
            <p>SEMAUNYA SEPUASNYA</p>
            <div className="buttonIntro mt-5 text-center">
              <Button href="#trending" variant="dark">Lihat Semua List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Intro;
