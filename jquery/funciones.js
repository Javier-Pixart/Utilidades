function resizeByScrollHeight(elementId) {
  $("#" + elementId).height(0);
  $("#" + elementId).height($("#" + elementId).get(0).scrollHeight);
}
