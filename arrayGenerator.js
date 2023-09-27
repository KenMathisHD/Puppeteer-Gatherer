// Megamenu Drawers
document
  .querySelectorAll("div.mega-nav-categories")[1]
  .querySelectorAll("div.container_l1");

// labels within drawers
document.querySelectorAll(".cat-child-wrapper .list-l1");

// first drawer
document
  .querySelectorAll("div. mega-nav-categories")[1]
  .querySelectorAll("div.container_l1")[0]
  .querySelectorAll(".cat-child-wrapper .list-l1");

// loop
const drawers = document
  .querySelectorAll("div.mega-nav-categories")[1]
  .querySelectorAll("div.container_l1");

const anchorArr = [].concat(
  ...Array.from(drawers).map((drawer, index) => {
    const anchors = drawer.querySelectorAll(".cat-child-wrapper .list-l1 a");
    return Array.from(anchors).map((anchor) => {
      return { href: anchor.href, label: anchor.innerText };
    });
  })
);

// Megamenu categories
document
  .querySelectorAll(".height-department.scroll.nav-link-li")[1]
  .querySelectorAll("li.show-desktop");
