import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom"
import "./Details.css"

const Details = ({ fish }) => {

  const idx = useParams();
  
  console.log(idx)
  console.log(fish);
  return (
    <div className="Details">
      <Carousel onMouseOver={() => { }}>
        <Carousel.Item>
          <img className="Carousel" src={`https://raw.githubusercontent.com/WinLakeLee/data-bank/main/img/${fish[idx.id].species}.jpg`} alt="" />
        </Carousel.Item>
      </Carousel>
      <div className="rightBar">
        <div className="names">
          <ul>
            <li></li>
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
        <div className="content">
          <div className="desc">
            <article>
            </article>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Details