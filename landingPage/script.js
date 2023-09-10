// Get the modal and login button by their IDs
const modal1 = document.getElementById("myModal1");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");
const modal4 = document.getElementById("myModal4");
const loginButton = document.getElementById("loginAnchor");
const contactButton = document.getElementById("contactAnchor");
const bmiButton = document.getElementById("bmiAnchor");
const book = document.getElementById("book");
const closeModal1 = document.getElementById("closeModal1");
const closeModal2 = document.getElementById("closeModal2");
const closeModal3 = document.getElementById("closeModal3");
const closeModal4 = document.getElementById("closeModal4");

// Function to open the modal1
function openModal() {
        modal1.style.display = "block";
}

// Function to close the modal1
function closeModalFunction() {
    modal1.style.display = "none";
}

function openModal2() {
    modal2.style.display = "block";
}

// Function to close the modal1
function closeModalFunction2() {
    modal2.style.display = "none";
}

function openModal3() {
    modal3.style.display = "block";
}

function closeModalFunction3() {
    modal3.style.display = "none";
}

function openModal4() {
    modal4.style.display = "block";
}

function closeModalFunction4() {
    modal4.style.display = "none";
}


// Event listener for the login button
loginButton.addEventListener("click", openModal);

// Event listener for the close button
closeModal1.addEventListener("click", closeModalFunction);


//Event listener for the contact button
contactButton.addEventListener("click", openModal2);

// Event listener for the close button of contact modal
closeModal2.addEventListener("click", closeModalFunction2);

//Event listener for the bmi button
bmiButton.addEventListener("click", openModal3);

// Event listener for the close button of bmi modal
closeModal3.addEventListener("click", closeModalFunction3);

//Event listener for the book button
book.addEventListener("click", openModal4);

// Event listener for the close button of book modal
closeModal4.addEventListener("click", closeModalFunction4);