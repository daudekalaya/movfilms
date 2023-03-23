import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import bostonImage from "../assets/image/boston-strangler.jpg";
import jhonWickImage from "../assets/image/jhon-wick-chapter-4.jpg";
import legionImage from "../assets/image/legion-of-super-heroes.jpg";
import robinImage from "../assets/image/robbin-hood.jpg";
import theOutlawImage from "../assets/image/the-outlaws.jpg";
import winnieImage from "../assets/image/winnie-the-pooh.jpg";

function Trending() {
  return (
    <div>
      <Container className="p-5" id="trending">
        <CardGroup>
          <Card className="m-3 p-1">
            <Card.Img variant="top" src={bostonImage} />
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
            <Card.Img variant="top" src={jhonWickImage} />
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
            <Card.Img variant="top" src={legionImage} />
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
            <Card.Img variant="top" src={robinImage} />
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
            <Card.Img variant="top" src={winnieImage} />
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
            <Card.Img variant="top" src={theOutlawImage} />
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

export default Trending;
