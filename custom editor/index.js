function formatText(command, value = null) {
  document.execCommand(command, false, value);
}

function createLink() {
  const url = prompt("Enter URL:");
  if (url) {
    document.execCommand("createLink", false, url);
  }
}

function insertImage() {
  const url = prompt("Enter Image URL:");
  if (url) {
    document.execCommand("insertImage", false, url);
  }
}
