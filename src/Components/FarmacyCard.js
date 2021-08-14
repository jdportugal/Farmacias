import { Card, ListGroup, Accordion } from 'react-bootstrap';

function FarmacyCard(props) {
    console.log(props.data)
    var vizinhos = []
    for (let vizinho in props.data["Vizinhos"]) {
        var farmacias = []
        for (let farmacia in props.data["Vizinhos"][vizinho]["Farmácias"]) {
            farmacias.push(
                <ListGroup.Item>{props.data["Vizinhos"][vizinho]["Farmácias"][farmacia]}</ListGroup.Item>
            )
        }
        vizinhos.push(
            <Card className="text-center" style={{ margin: "10px" }}>
                <Card.Body>
                    <Card.Header>{vizinho}</Card.Header>
                    <ListGroup style={{ textAlign: "left" }}>
                        <ListGroup.Item>População: {props.data["Vizinhos"][vizinho].Populacao}</ListGroup.Item>
                        <ListGroup.Item>Cap. Livre: {props.data["Vizinhos"][vizinho]["Cap. Livre"]}</ListGroup.Item>
                        <ListGroup.Item>Num actual de farmacias: {props.data["Vizinhos"][vizinho]["Num actual de farmacias"]}</ListGroup.Item>
                        <ListGroup.Item>Num maximo de farmacias: {props.data["Vizinhos"][vizinho]["Num maximo de farmacias"]}</ListGroup.Item>
                        <Accordion defaultActiveKey="1" style={{ margin: "10px" }}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Farmacias</Accordion.Header>
                                <Accordion.Body>
                                    {farmacias}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ListGroup >
                </Card.Body>
            </Card>
        )
    }
    return (
        <div style={{ textAlign: "left" }}>
            <Accordion defaultActiveKey="1" style={{ margin: "25px" }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header style={{ textAlign: "center" }}>{props.place}</Accordion.Header>
                    <ListGroup style={{ textAlign: "left" }}>
                        <ListGroup.Item>População: {props.data.Populacao}</ListGroup.Item>
                        <ListGroup.Item>Cap. Livre: {props.data["Cap. Livre"]}</ListGroup.Item>
                        <ListGroup.Item>Num actual de farmacias: {props.data["Num actual de farmacias"]}</ListGroup.Item>
                        <ListGroup.Item>Num maximo de farmacias: {props.data["Num maximo de farmacias"]}</ListGroup.Item>
                    </ListGroup >
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item>{vizinhos}</ListGroup.Item>
                        </ListGroup >
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
export default FarmacyCard;