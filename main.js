window.onload = () => {
  const anchors = document.querySelectorAll("a");
  const transition_el = document.querySelector(".transition");

  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href;
      transition_el.classList.add("is-active");
      setInterval(() => {
        window.location.href = target;
      }, 500);
    });
  }
};
$(document).ready(function () {
  $("#fullpage").fullpage({
    anchors: [
      "section-1",
      "section-2",
      "section-3",
      "section-4",
      "section-5",
      "section-6",
    ],
    sectionsColor: ["#000000", "#000000", "#000000", "#000000"],
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: [],
    slidesNavigation: true,
    controlArrows: true,
    onLeave(index, nextIndex, direction) {},
    afterLoad: function (anchorLink, index) {},
  });
});
