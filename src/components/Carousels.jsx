import { Carousel } from "react-bootstrap";
import './Carousels.css'
import { useNavigate } from "react-router-dom";
const Carousels = ({ fish }) => {

  const navigate = useNavigate();
  return (

    <>
      <Carousel className="Carousels container">
        {
          fish.map((data, index) => {
            console.log(data);
            return (
              <Carousel.Item key={index}>
                <img className="Carousel" src={`https://raw.githubusercontent.com/WinLakeLee/data-bank/main/img/${data.species}.jpg`} alt="" onClick={() => navigate(`docs/${data.index}`)} />
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </>
  )
}

export default Carousels