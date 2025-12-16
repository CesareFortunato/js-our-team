const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// setup variables to populate with cards

const outputContainer = document.getElementById("cards-container");

let outputCards = "";

// form variable

const form = document.getElementById("create-member-form");
const nameField = document.getElementById("name-field");
const emailField = document.getElementById("email-field");
const roleField = document.getElementById("role-field");
const imgField = document.getElementById("img-field");





// SYSTEM

populateWithCards(teamMembers, outputContainer);

form.addEventListener("submit", newMember);




// FUNCTION

function createCards(memberObj) {

  // create a <div> structure for every obj in teamMembers array 

  const card = `<div class="card mb-3 col-4" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${memberObj.img}" class="img-fluid rounded-start" alt="${memberObj.name}">
                    </div>
                    <div class="col-md-8 card-text-container">
                        <div class="card-body">
                            <h5 class="card-title">${memberObj.name}</h5>
                            <p class="card-text">${memberObj.role}</p>
                            <a href="" class="mail-text">${memberObj.email}</a>
                        </div>
                    </div>
                </div>
            </div>`

  return card

}


function populateWithCards(arrRef, outputElement) {

  outputCards = "";

  for (let index = 0; index < arrRef.length; index++) {
    const memberTeam = arrRef[index]

    outputCards += createCards(memberTeam);

    // put every card inside the outputContainer <div>

    outputElement.innerHTML = outputCards;

  }
}


function newMember(event) {

  // prevent form behaviour

  event.preventDefault();

  // input fields variables

  const name = nameField.value;
  const email = emailField.value;
  const role = roleField.value;
  const img = imgField.value;

  // new obj 

  const addedMember = {
    name,
    role,
    email,
    img,
  }

  // move the new member inside the teamMemebers array

  teamMembers.push(addedMember);

  populateWithCards(teamMembers, outputContainer);

}



