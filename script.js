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

// form variables

const form = document.getElementById("create-member-form");
const name = document.getElementById("name-field");
const email = document.getElementById("email-field");
const role = document.getElementById("role-field");
const img = document.getElementById("img-field");




// SYSTEM


populateCards()



// FUNCTION

function populateCards(){

for (let index = 0; index < teamMembers.length; index++) {
  const memberTeam = teamMembers[index];

  // destructuring obj memberTeam

  const {name, img, role  } = memberTeam;

  // create a <div> structure for every obj in teamMembers array

  outputCards += `<div class="card mb-3 col-4" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${img}" class="img-fluid rounded-start" alt="${name}">
                    </div>
                    <div class="col-md-8 card-text-container">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${role}</p>
                            <a href="" class="mail-text">${email}</a>
                        </div>
                    </div>
                </div>
            </div>`

}

// put every card inside the outputContainer <div>

outputContainer.innerHTML = outputCards;
}


function newMember() {
  
}