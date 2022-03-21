var __const = window.__const || [];
var modal = document.createElement("div");
modal.innerHTML = `
<div id="kuzen-modal" style="display:none;">
  <div style="width: 100%;height: 100%;position: fixed;top: 0;left: 0;z-index: 9999;">
    <div style="width: 100%;height: 100%;position: fixed;top: 0;left: 0;z-index: 10000;background: #aaa; opacity: 0.9;" onclick="toogleModal();"></div>
    <div style="width: 320px;height: 525px;position: absolute;top: 50%;left: 50%;z-index: 10001;text-align: center;transform: translate(-50%,-50%);">
      <div style="width: 40px;height: 40px;position: absolute;z-index: 10003;top: -15px;left: -15px;border-radius: 50%;cursor:pointer;" onclick="toogleModal();">
        <img src="${__const["host"]}/images/close.png" style="width: 100%;height: 100%">
      </div>
      <iframe
        style="width: 320px;height: 525px;border: none!important;margin: 0!important;"
        src="${__const["host"]}"
        scrolling="no"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
      ></iframe>
    </div>
  </div>
</div>
`;
document.body.appendChild(modal);

function toogleModal() {
  var element = document.getElementById("kuzen-modal");
  if (!element) return;

  if (element.style.display == "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

function getNumberOfVisit() {
  const numberOfVisit = parseInt(window.localStorage.getItem("numberOfVisit"));
  return numberOfVisit >= 0 ? numberOfVisit : 0;
}

function incrementNumberOfVisit() {
  window.localStorage.setItem("numberOfVisit", getNumberOfVisit() + 1);
}

window.onload = function () {
  incrementNumberOfVisit();
};

history.pushState(null, null, location.href);
window.onpopstate = function () {
  console.log(getNumberOfVisit());
  if (getNumberOfVisit() === 1) {
    toogleModal();
    incrementNumberOfVisit();
  }
};
