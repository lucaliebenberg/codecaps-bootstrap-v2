import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

function CardComponent(props) {
  return (
    <>
      <Card
        style={{
          width: "24rem",
          height: "10rem",
          marginRight: "0.25rem",
          marginBottom: "0.25rem"
        }}
      >
        <Card.Body>
          <Row className="d-flex ">
            <Card.Title style={{ textAlign: "left" }}>{props.title}</Card.Title>
          </Row>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ textAlign: "left" }}
          >
            {props.status}
            <i
              className="fa-solid fa-circle-check ms-3"
              style={{ color: "green" }}
            ></i>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
}
export default CardComponent;
