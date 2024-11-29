import img from "../assets/img/placeholder-600x400.png";
import Button from "./Button";

export default function Card(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card card-main">
        <img src={img} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">Titolo del Post</h5>
          <p className="card-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            reiciendis, velit dolorem iure recusandae assumenda iste deserunt
            nulla rerum hic quam commodi corrupti, expedita modi! Ullam, harum?
          </p>
          <Button style="card-btn">LEGGI DI PI&#217;</Button>
        </div>
      </div>
    </div>
  );
}
