import Badge from "./Badge";
import { posts } from "../data/posts";

export default function Header() {
  const filteredTags = [];
  const tagsArrays = posts.map((post) => post.tags);
  tagsArrays.forEach((tagsArr) => {
    tagsArr.forEach((tag) => {
      if (!filteredTags.includes(tag)) filteredTags.push(tag);
    });
  });

  return (
    <header>
      <div className="container">
        <div className="d-flex flex-column align-items-center p-4">
          <h1 className="fw-bold">Il mio Blog</h1>
          <div className="m-3 d-flex gap-3">
            {filteredTags.map((tag, index) => (
              <Badge key={index} tag={tag} style="tags-badge-header" />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
