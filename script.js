let button = document.querySelector("#button")
let name   = document.querySelector("#name")
let age   = document.querySelector("#age")
let all   = document.querySelector("#all")
let allButton = document.querySelector("#loadall")
let mass = document.querySelector("#mass")
let birth_year = document.querySelector("#birth_year")
let hair = document.querySelector("#hair")
let eye_color = document.querySelector("#eye_color")
let home = document.querySelector("#home")

function getInfo(){
  updateInfoLoad();
  axios.get(randomURL()).then(function(response){
    updateInfo(response.data)
    getHome(response.data.homeworld)
  }).catch(err => {
    updateInfoErr()
  })
}
function updateInfo(data){
  name.innerHTML   =  data.name;
  age.innerHTML    = "Age: " + data.age;
  height.innerHTML = "Height: " + data.height + "cm";
  mass.innerHTML   = "Weight: " +data.mass + "kg";
  birth_year.innerHTML       = "Birth year: " + data.birth_year;
  hair.innerHTML     = "Hair color: " + data.hair_color;
  eye_color.innerHTML     = "Eye color: " + data.eye_color;
  }

function updateInfoErr(data){
  name.innerHTML   =  "Oops! Try again!";
  age.innerHTML    = "";
  height.innerHTML = "";
  mass.innerHTML   = "";
  birth_year.innerHTML       = "";
  hair.innerHTML     = "";
  eye_color.innerHTML     = "";
  home.innerHTML = "";
  }

function updateInfoLoad(data){
  name.innerHTML   =  ' ';
  age.innerHTML    = "";
  height.innerHTML = '';
  mass.innerHTML   = "  ";
  birth_year.innerHTML       = '<i class="fa fa-cog fa-spin fa-3x fa-fw" id="what"></i>';
  hair.innerHTML     = "  ";
  eye_color.innerHTML     = '<p id="loading"> Loading...</p>';
  home.innerHTML = "";
  }

function randomURL(){
  return "https://swapi.co/api/people/" + Math.floor((Math.random()*88)+1)
}


button.addEventListener("click",getInfo)

function getHome(url){
  fetch(url).then(response => response.json()).
  then(json => {
    home.innerHTML = "Home: " + json.name
  }).
  catch((err)=>console.log(err))
}

/*
var allList = []
function getAll(){
  for (i=1;i<88;i++){
    var URL = "https://swapi.co/api/people/" + i
    try{
      axios.get(URL).then(function(response){
      updateList(response.data)
    })
  }
  catch (e) {}
}
  all.innerHTML = allList + "TOTAL: " + allList.length
  allList = []
}

function updateList(data){
  allList.push(data.name)
}

allButton.addEventListener("click",getAll)
*/