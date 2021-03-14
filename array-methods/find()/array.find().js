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
