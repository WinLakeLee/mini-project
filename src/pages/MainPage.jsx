import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

const MainPage = ({ fish }) => {

  const navigate = useNavigate();
  return (
    <>
      <Carousel>
        { fish !== undefined ?
          fish.map((data, index) => {
            console.log(data);
            return (
              <div className="carousel" key={index}>
                <Carousel.Item>
                  <img src={`https://github.com/WinLakeLee/data-bank/tree/main/img/${data.species}.jpg`} alt="" onClick={() => navigate(`docs/${data.index}`)} />
                  <Carousel.Caption>
                    <h3>{data.name}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </div>
            )
          })
          :
          <div>렌더링 중</div>
        }
      </Carousel>
    </>

  )
}

export default MainPage