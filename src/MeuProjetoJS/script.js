const itemList = [];
function addToList() {
  const input = document.getElementById("myInput");
  const inputValue = input.value;

  if (inputValue === "") {
    //se a barraP estiver vazio, n add um item
    return;
  }

  itemList.push(inputValue);

  const li = document.createElement("li");

  //adiciona texto input cm conteúdo do li
  const textNode = document.createTextNode(inputValue);
  li.appendChild(textNode);

  const ul = document.getElementById("myList");

  ul.appendChild(li);

  // limpar a barraP apos adicionar o item
  input.value = "";
}
