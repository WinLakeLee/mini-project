import { Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Cards = ({ data }) => {
  const navigate = useNavigate()

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://raw.githubusercontent.com/WinLakeLee/data-bank/main/img/${data.species}.jpg`} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Button variant="info" onClick={() => {
            navigate(`${data.index}`)
          }}>알아보기</Button>
        </Card.Body>
      </Card>
    </>
  )


}

export default Cards