export default function Badge({ tag }) {
  let tagColor;

  if (tag === "html") {
    tagColor = "text-bg-success";
  }
  if (tag === "css") {
    tagColor = "text-bg-primary";
  }
  if (tag === "js") {
    tagColor = "bg-warning text-white";
  }
  if (tag === "php") {
    tagColor = "text-bg-danger";
  }

  return (
    <span className={tagColor + " rounded" + " p-1" + " tags-badge"}>
      &#35;{tag}
    </span>
  );
}
