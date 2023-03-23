import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import narutoImage from "../assets/image/anime/naruto.jpg"
import borutoImage from "../assets/image/anime/boruto.jpg"
import blackImage from "../assets/image/anime/black-clover.jpg"
import demonImage from "../assets/image/anime/demon-slayer.jpg"
import fairyImage from "../assets/image/anime/fairy-tail.jpg"
import aotImage from "../assets/image/anime/AOT.jpg"

function Anime() {
  return (
    <div>
      <Container className="p-5" id="anime">
        <CardGroup>
          <Card className="m-3 p-1">
            <Card.Img variant="top" src={narutoImage} />
            <Card.Body>
              <Card.Title>Boston Stangler</Card.Title>
              <Card.Text>
                This is a wider card with supporting text
              </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-dark">
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="m-3 p-1">
            <Card.Img variant="top" src={borutoImage} />
            <Card.Body>
              <Card.Title>Jhon Wick</Card.Title>
              <Card.Text>
                This card has supporting text
              </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-dark">
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="m-3 p-1">
            <Card.Img variant="top" src={blackImage} />
            <Card.Body>
              <Card.Title>Legion Of Super - Heroes</Card.Title>
              <Card.Text>
                This is a wider card with supporting text
              </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-dark">
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="m-3 p-1">
            <Card.Img variant="top" src={demonImage} />
            <Card.Body>
              <Card.Title>Boston Stangler</Card.Title>
              <Card.Text>
                This is a wider card with supporting text
              </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-dark">
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="m-3 p-1">
            <Card.Img variant="top" src={fairyImage} />
            <Card.Body>
              <Card.Title>Jhon Wick</Card.Title>
              <Card.Text>
                This card has supporting text
              </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-dark">
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="m-3 p-1">
            <Card.Img variant="top" src={aotImage} />
            <Card.Body>
              <Card.Title>Legion Of Super - Heroes</Card.Title>
              <Card.Text>
                This is a wider card with supporting text
              </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-dark">
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

export default Anime;
