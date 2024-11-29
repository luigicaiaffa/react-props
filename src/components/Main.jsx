import Card from "./Card";
import { posts } from "../data/posts";

export default function Main() {
  const filteredPosts = posts.filter((post) => post.published === true);

  return (
    <main>
      <div className="container mb-5">
        <section>
          <div className="row g-5 justify-content-center">
            {filteredPosts.map((post) => {
              return (
                <Card
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  image={post.image}
                  content={post.content}
                  tags={post.tags}
                />
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
