var items = ["user1", "user2", "user3", "admin1", "admin2"];

const cookie = document.cookie.split("; ");
// const sport = document.cookie.slice([document.cookie.indexOf("name") + 5]);
for (item of cookie) {
  const sport = item.split("=")[0];
  items.push(sport);
}

const root = new makeNode("\0");
for (const item of items) add(item, 0, root);

const textBox = document.getElementById("text-box");
const list = document.getElementById("list");

function handler(e) {
  const text = e.innerHTML.split("<b>").join("").split("</b>").join(""); // remove the opening and closing b tags
  textBox.value = text;
}

textBox.addEventListener("keyup", e => {
  const str = e.target.value;
  const predictions = search(str, 0, root);
  console.log(predictions);
  list.innerHTML = "";
  for (const prediction of predictions)
    list.innerHTML += `<li class="list-group-item clickable" onclick="handler(this)"><b>${str}</b>${prediction.substring(
      str.length
    )}</li>`;
});
