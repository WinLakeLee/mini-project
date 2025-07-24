import { Col, Row } from "react-bootstrap";
import Card from "./Card"

const DocsMain = ({fish}) => {

  console.log("docsmain"+fish);

  return (

    <Row xs={1} md={4} className="g-4">
      {fish === undefined ?
        <div>렌더링 중</div>
        :
        fish.map((data, idx) => {
          console.log(data);
          return (
            <Col key={idx}>
              <Card data={data} />
            </Col>
          )
        })
      }
    </Row>
  )

}

export default DocsMain