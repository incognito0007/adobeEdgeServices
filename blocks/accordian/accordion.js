export default function decorate(block) {
  const items = [...block.children];
  block.classList.add(`accordian-${items.length}-items`);
  items.forEach((item) => {
    const title = item.firstElementChild;
    if (title) {
      title.classList.add("accordian-title");
      title.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    }
    const content = title.nextElementSibling;
    if (content) content.classList.add("accordian-content");
  });
}
