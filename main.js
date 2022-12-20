const pclip1 = document.querySelector(".pclip1");
const bclip1 = document.querySelector(".bclip1");
const portal1 = document.querySelector(".portal1");
const portalContainer1 = document.querySelector(".portalContainer1");

const pclip2 = document.querySelector(".pclip2");
const bclip2 = document.querySelector(".bclip2");
const portal2 = document.querySelector(".portal2");
const portalContainer2 = document.querySelector(".portalContainer2");

const pclip3 = document.querySelector(".pclip3");
const bclip3 = document.querySelector(".bclip3");
const portal3 = document.querySelector(".portal3");
const portalContainer3 = document.querySelector(".portalContainer3");

const pclip4 = document.querySelector(".pclip4");
const bclip4 = document.querySelector(".bclip4");
const portal4 = document.querySelector(".portal4");
const portalContainer4 = document.querySelector(".portalContainer4");

function animfun(
  lastContainer,
  activeContainer,
  portalClip,
  portalBorder,
  upcomingContainer
) {
  lastContainer.classList.remove("active");
  activeContainer.classList.add("active");

  portalClip.style.width = "250px";
  portalClip.style.height = "300px";

  portalBorder.style.width = "270px";
  portalBorder.style.height = "320px";

  setTimeout(function () {
    upcomingContainer.style.zIndex = "10";
    activeContainer.style.zIndex = "0";
  }, 1200);
}

portal1.addEventListener("click", () => animfun(portalContainer4, portalContainer1, pclip4,bclip4, portalContainer2 ))
portal2.addEventListener("click", () => animfun(portalContainer1, portalContainer2, pclip1,bclip1, portalContainer3 ))
portal3.addEventListener("click", () => animfun(portalContainer2, portalContainer3, pclip2,bclip2, portalContainer4 ))
portal4.addEventListener("click", () => animfun(portalContainer3, portalContainer4, pclip3,bclip3, portalContainer1 ))


