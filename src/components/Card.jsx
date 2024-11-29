import img from "../assets/img/placeholder-600x400.png";
import Button from "./Button";

export default function Card({ id, title, image, content, tags }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card card-main">
        <img src={image || img} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <p>post n.{id}</p>
          <div className="d-flex justify-content-between">
            <Button style="card-btn">LEGGI DI PI&#217;</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
