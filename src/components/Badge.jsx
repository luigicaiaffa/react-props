export default function Badge({ tag, style }) {
  let tagColor = "";

  if (tag === "html") {
    tagColor = "text-bg-success ";
  }
  if (tag === "css") {
    tagColor = "text-bg-primary ";
  }
  if (tag === "js") {
    tagColor = "bg-warning text-white ";
  }
  if (tag === "php") {
    tagColor = "text-bg-danger ";
  }

  return (
    <span className={tagColor + "rounded " + "p-1 " + style}>&#35;{tag}</span>
  );
}
