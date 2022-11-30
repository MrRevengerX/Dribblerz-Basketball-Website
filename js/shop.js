// Argument to check if all content in html page is loaded
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// Main function to run if all content in shop page is loaded
function ready() {
  // Delete button event listner
  const removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", deleteCartItem);
  }

  // Quantity change event listner
  const quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", changeQuantity);
  }

  // Add to cart button event listner
  const addToCartButtons = document.getElementsByClassName("btn-addtocart");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }

  // Place order button event listner
  const purchase = document.getElementsByClassName("btn-purchase")[0];
  purchase.addEventListener("click", validateFields);

  // Change order button event listner
  const editOrder = document.getElementsByClassName("btn-edit")[0];
  editOrder.addEventListener("click", hideInvoice);
}

//Functions to add product item to cart when click on add to cart button
function addToCartClicked(event) {
  var button = event.target;
  var item = button.parentElement.parentElement.parentElement;
  button.classList.remove("btn");
  button.classList.add("btn-disabled");
  button.innerHTML = "Already Added";
  button.parentElement.classList.add("disabled-cursor");
  var title = item.getElementsByClassName("product-name")[0].innerText;
  var price = item.getElementsByClassName("product-price")[0].innerText;
  var image = item.getElementsByClassName("product-image")[0].src;
  addItemToCart(title, price, image);
  updateTotal();
  var cart = document.getElementById("cart").classList.remove("invisible");
}

//Function to add new cartRow div to cart list
function addItemToCart(title, price, image) {
  var cartRow = document.createElement("div");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  cartRow.classList.add("cart-row");

  var cartRowContent = `<div class="cart-item cart-column">
    <img
      class="cart-item-image"
      src="${image}"
      width="100"
      height="100"
    />
    <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1" />
    <button class="btn-danger" type="button">
      <i class="fas fa-trash"></i>
    </button>
  </div>
`;
  cartRow.innerHTML = cartRowContent;
  cartItems.appendChild(cartRow);

  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", deleteCartItem);

  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", changeQuantity);
}

// Function to avoid getting minus or zero quantity
function changeQuantity(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

//Function to remove cartRow from cart list
function deleteCartItem(event) {
  var deleteClicked = event.target;
  deleteClicked.parentElement.parentElement.remove();
  updateTotal();
  reEnableButton(deleteClicked);
}

//Function to reenable add to cart button of the product if the item is  deleted from cart list
function reEnableButton(deleteButton) {
  var cartRow = deleteButton.parentElement.parentElement;
  var title = cartRow.getElementsByClassName("cart-item-title")[0].innerText;
  var cap = document.getElementsByClassName("cap")[0];
  var tshirt = document.getElementsByClassName("tshirt")[0];
  var trouser = document.getElementsByClassName("trouser")[0];
  var sneakers = document.getElementsByClassName("sneakers")[0];

  if (cap.getElementsByClassName("product-name")[0].innerText == title) {
    cap
      .getElementsByClassName("addtocart-wrapper")[0]
      .classList.remove("disabled-cursor");
    cap
      .getElementsByClassName("btn-addtocart")[0]
      .classList.remove("btn-disabled");
    cap.getElementsByClassName("btn-addtocart")[0].classList.add("btn");
    cap.getElementsByClassName("btn-addtocart")[0].innerHTML =
      '<i class="fas fa-shopping-cart"></i>Add to cart';
  } else if (
    tshirt.getElementsByClassName("product-name")[0].innerText == title
  ) {
    tshirt
      .getElementsByClassName("addtocart-wrapper")[0]
      .classList.remove("disabled-cursor");
    tshirt
      .getElementsByClassName("btn-addtocart")[0]
      .classList.remove("btn-disabled");
    tshirt.getElementsByClassName("btn-addtocart")[0].classList.add("btn");
    tshirt.getElementsByClassName("btn-addtocart")[0].innerHTML =
      '<i class="fas fa-shopping-cart"></i>Add to cart';
  } else if (
    trouser.getElementsByClassName("product-name")[0].innerText == title
  ) {
    trouser
      .getElementsByClassName("addtocart-wrapper")[0]
      .classList.remove("disabled-cursor");
    trouser
      .getElementsByClassName("btn-addtocart")[0]
      .classList.remove("btn-disabled");
    trouser.getElementsByClassName("btn-addtocart")[0].classList.add("btn");
    trouser.getElementsByClassName("btn-addtocart")[0].innerHTML =
      '<i class="fas fa-shopping-cart"></i>Add to cart';
  } else if (
    sneakers.getElementsByClassName("product-name")[0].innerText == title
  ) {
    sneakers
      .getElementsByClassName("addtocart-wrapper")[0]
      .classList.remove("disabled-cursor");
    sneakers
      .getElementsByClassName("btn-addtocart")[0]
      .classList.remove("btn-disabled");
    sneakers.getElementsByClassName("btn-addtocart")[0].classList.add("btn");
    sneakers.getElementsByClassName("btn-addtocart")[0].innerHTML =
      '<i class="fas fa-shopping-cart"></i>Add to cart';
  }
}

// Function to update cart total when changing quantity or items in cart.
function updateTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var totalPrice = document.getElementsByClassName("cart-total-price")[0];
  var total = 0;

  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var itemPrice = cartRow.getElementsByClassName("cart-price")[0];
    var itemQuanity = cartRow.getElementsByClassName("cart-quantity-input")[0];
    var price = parseFloat(itemPrice.innerText.replace("$", ""));
    var quantity = itemQuanity.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  totalPrice.innerText = "$" + total;
  removeCartContainer(cartRows.length);
}

//Function to remove cart item container if zero items in cart
function removeCartContainer(numOfItems) {
  if (numOfItems == 0) {
    var cart = document.getElementById("cart");
    cart.classList.add("invisible");
  }
}

//============================== Field Validation ================================

// Function to validate name and email field.
function validateFields(event) {
  var name = document.getElementById("customer-name");
  var email = document.getElementById("customer-email");
  let massages = [];
  if (name.value == "" || name.value == null) {
    massages.push("Name field cannot be empty.");
  } else if (name.value.length <= 3) {
    massages.push("Name must be longer than 3 letters.");
  } else if (/\d/.test(name.value)) {
    massages.push("Name cannot include numbers.");
  }
  validateEmail(email.value, massages);

  if (massages.length > 0) {
    alert(massages.join("\n"));
  } else {
    viewInvoice();
  }
}

function validateEmail(mail, massages) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  massages.push("Email must be valid.");
  return false;
}

// Assigning HTML elements to variables.
const invoiceHeader = document.getElementsByClassName("product-header")[0];
const productContent = document.getElementsByClassName(
  "product-page-content"
)[0];
const invoiceContent = document.getElementsByClassName("invoice-content")[0];

// Function to view invoice on purchase button click
function viewInvoice() {
  addInvoiceRow();
  setCustomerDetails();

  invoiceHeader.innerText = "Invoice";
  productContent.classList.add("invisible");
  invoiceContent.classList.remove("invisible");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Function to hide invoice and show cart again on edit button click
function hideInvoice() {
  invoiceHeader.innerText = "Shop";
  productContent.classList.remove("invisible");
  invoiceContent.classList.add("invisible");
}

// Function to add cart item to invoice
function addInvoiceRow() {
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartRow = cartItems.getElementsByClassName("cart-row");
  var cartTotal =
    document.getElementsByClassName("cart-total-price")[0].innerText;
  var invoiceRows = document.getElementsByClassName("invoice-rows")[0];
  invoiceRows.innerHTML = "";
  for (var i = 0; cartRow.length > i; i++) {
    var img = cartRow[i].getElementsByClassName("cart-item-image")[0].src;
    var product =
      cartRow[i].getElementsByClassName("cart-item-title")[0].innerText;
    var price = parseFloat(
      cartRow[i]
        .getElementsByClassName("cart-price")[0]
        .innerText.replace("$", "")
    );
    var quantity = cartRow[i].getElementsByClassName("cart-quantity-input")[0]
      .value;
    var itemTotalPrice = Math.round(price * quantity * 100) / 100;

    var invoiceRow = document.createElement("div");
    invoiceRow.classList.add("invoice-row");
    var invoiceRowContent = `
     <div class="product-details-wrapper flex">
       <div class="product-details-invoice">
         <p>Product : ${product}</p>
         <p>Quantity : ${quantity}</p>
         <p>Price : $${itemTotalPrice}</p>
       </div>
       <div class="product-image-invoice">
         <img src="${img}" alt="" />
       </div>
     </div>`;
    invoiceRow.innerHTML = invoiceRowContent;

    invoiceRows.append(invoiceRow);
  }
  var invoiceTotal = document.getElementsByClassName("invoice-total")[0];
  invoiceTotal.innerHTML = `<strong>Total Bill : </strong> ${cartTotal}`;
}

// Function to add customer details to invoice 
function setCustomerDetails() {
  var customerName = document.getElementById("customer-name").value;
  var customerEmail = document.getElementById("customer-email").value;
  var invoiceName = document.getElementsByClassName("customer-name-invoice")[0];
  var invoiceEmail = document.getElementsByClassName(
    "customer-email-invoice"
  )[0];

  invoiceName.innerHTML = `Name : ${customerName}`;
  invoiceEmail.innerHTML = `Email : ${customerEmail}`;
}
