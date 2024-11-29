import img from "../assets/img/placeholder-600x400.png";
import Button from "./Button";
import Badge from "./Badge";

export default function Card({ id, title, image, content, tags }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card card-main">
        <img src={image || img} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <Button style="card-btn">LEGGI DI PI&#217;</Button>
          <div className="tags-badge-container">
            {tags.map((tag) => (
              <Badge tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
