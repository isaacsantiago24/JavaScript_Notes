//Find
//Goes through an array , once it finds a specific one. It wll only return that value

const videos = [
  "how to tie a tie",
  "photoshop tutorial",
  "practice html",
  "how to ride a bike",
];

const searchVideo = videos.find(function (video) {
  return video.includes("photo");
});

console.log(searchVideo); //photoshop tutorial

///////////////////////////////////////////////////////////////////////////

var age = prompt("whats your age?");

if (age >= 18 && age <= 35) {
  status = "target demo";
} else {
  status = "not my target demo";
}
