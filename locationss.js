// // Function to log the user's position using the Geolocation API
// const success = (position) => {
//   console.log("Geolocation API position:", position);
// };

// const error = (error) => {
//   console.log("Geolocation API error:", error);
// };

// Call the Geolocation API to get the current position
// navigator.geolocation.getCurrentPosition(success, error);

// Function to get the user's position using an external IP-based service
async function getLocationFromIP() {
  try {
    let response = await fetch("http://ip-api.com/json/");
    let locat = await response.json();
    console.log("IP-based location:", locat);
    let nearlocation = document.querySelector(".locations");
    nearlocation.innerHTML="Delivering to "+locat.city+"-"+locat.zip
    console.log(nearlocation.innerHTML)
    let flagg=document.querySelector(".flag");
    let newSrc = `https://flagsapi.com/${locat.countryCode}/flat/64.png`;
    flagg.src=newSrc;
  } catch (err) {
    console.error("IP-based location error:", err);
  }
}

// Call the function to get location from IP
getLocationFromIP();


let crtno = document.querySelector(".cartnumber");
let crtbtn=document.querySelector(".cartbtn");
let crtnumber=0;
crtbtn.addEventListener("click",()=>{
  crtnumber+=1;
  crtno.innerHTML=crtnumber;
})



