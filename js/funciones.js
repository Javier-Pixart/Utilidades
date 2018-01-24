function resizeElementByScrollHeight(elementId) {
  el = document.getElementById(elementId);
  el.style.height = "0px";
  el.style.height = el.scrollHeight;
}
