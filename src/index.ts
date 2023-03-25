import data from "./data";

const ul = document.querySelector("#root");

function Render(item: { id: number; title: string }) {
  const li = document.createElement("li");
  li.textContent = item.title;

  ul.append(li);
}

data.forEach(Render);
