const listElement = [
  {
    id: 1,
    color: "#6F98A8",
  },
  {
    id: 2,
    color: "#2B8EAD",
  },
  {
    id: 3,
    color: "#2F454E",
  },
  {
    id: 4,
    color: "#2B8EAD",
  },
  {
    id: 5,
    color: "#2F454E",
  },
  {
    id: 6,
    color: "#BFBFBF",
  },
  {
    id: 7,
    color: "#BFBFBF",
  },
  {
    id: 8,
    color: "#6F98A8",
  },
  {
    id: 9,
    color: "#2F454E",
  },
];

function preload(list) {
  let items = list ? list : listElement;
  var app = document.querySelector("#app");
  app.innerHTML =
  '<ul class="grid-container">' +
  items
    .map(function (item) {
      return `<li class='grid-item' style=background-color:${item.color};border-color:${item.color}> ${item.id}</li>`;
    }).join('') + '</ul>';
}
function sortList() {
  var list = listElement.sort();
  this.preload(list);
}

function shuffleList() {
  const shuffleList = listElement.slice()
    for (let i = shuffleList.length - 1; i > 0; i--) {
        const randomize = Math.floor(Math.random() * (i + 1));
        [shuffleList[i], shuffleList[randomize]] = [shuffleList[randomize], shuffleList[i]];
    }
    this.preload(shuffleList);
}
