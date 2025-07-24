import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom"
import "./Details.css"

const Details = ({ fish }) => {

  const idx = useParams();

  console.log(idx)
  console.log(fish);
  return (
    <div className="Details">
      <div className="Container">
        <Carousel className="Details" onMouseOver={() => { }}>
          <Carousel.Item>
            <img className="Carousel" src={`https://raw.githubusercontent.com/WinLakeLee/data-bank/main/img/${fish[idx.id].species}.jpg`} alt="" />
          </Carousel.Item>
        </Carousel>
        <div className="Content">
          <div className="desc">
            <article>
              대충아무거나씀
            </article>
          </div>
        </div>
      </div>
      <div className="rightBar">
        <div className="names">
          <ul>
            <li>{fish[idx.id].name}</li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="env">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="info">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <footer>
      </footer>
    </div>
  )

}

export default Details