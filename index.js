//new item insert handler

let items = [];
function insertItem() {
  const name = document.getElementById("item-name-input");
  const price = document.getElementById("item-price-input");

  if (name.value !== "" && price.value !== "") {
    const item = {
      itemName: name.value,
      itemPrice: price.value
    };
    console.log("name " + price.value);
    console.log(price.value);
    items.push(item);
    renderList();
  }

  name.value = "";
  price.value = undefined;
}

function renderList() {
  let tbody = document.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.textContent = "Sr. No.";
  tr.append(th);
  let thName = document.createElement("th");
  thName.textContent = "Title";
  tr.append(thName);
  let thPrice = document.createElement("th");
  thPrice.textContent = "Price";
  tr.append(thPrice);

  tbody.append(tr);

  for (let i = 0; i < items.length; i++) {
    let tr = document.createElement("tr");

    let tdId = document.createElement("td");
    tdId.textContent = i + 1;
    tr.append(tdId);

    let tdName = document.createElement("td");
    console.log(items[i].itemName);
    tdName.textContent = items[i].itemName;
    tdName.setAttribute("data-ns-test", "item-name");
    //data-ns-test="item-name" and data-ns-test="item-price"
    tr.append(tdName);

    let tdPrice = document.createElement("td");
    tdPrice.innerText = items[i].itemPrice;
    tdPrice.setAttribute("data-ns-test", "item-price");
    tr.append(tdPrice);

    tbody.append(tr);
  }

  let trTotal = document.createElement("tr");

  let tdTotalId = document.createElement("td");
  tdTotalId.textContent = items.length + 1;
  trTotal.append(tdTotalId);

  let tdTotalName = document.createElement("td");
  //console.log(items[i].itemName);
  tdTotalName.textContent = "Total";
  trTotal.append(tdTotalName);

  let tdTotalPrice = document.createElement("td");
  tdTotalPrice.innerText = calculatePrice();
  tdTotalPrice.setAttribute("data-ns-test", "grandTotal");
  trTotal.append(tdTotalPrice);

  tbody.append(trTotal);
}

function calculatePrice() {
  let totalPrice = 0;

  for (let i = 0; i < items.length; i++) {
    totalPrice += parseInt(items[i].itemPrice);
  }
  console.log("in func" + totalPrice);
  if (isNaN(totalPrice)) {
    return 0;
  }
  return totalPrice;
}
