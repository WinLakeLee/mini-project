import axios from "axios";
import { useEffect, useState } from "react"
import { Card, CardBody, CardText, CardTitle, Col, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"

const Docs = ({ fish }) => {
  const { id } = useParams();
  console.log(fish);

  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {fish === undefined ?
          <div>렌더링 중</div>
          :
          fish.map((data, idx) => {
            return (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={`https://github.com/WinLakeLee/data-bank/tree/main/img/${data.species}.jpg`} />
                  <CardBody>
                    <CardTitle>{data.name}</CardTitle>
                    <CardText>
                      <span>학명: {data.species}</span>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            )
          })
        }
      </Row>

    </>
  )

}
export default Docs