function videoPlayer(id) {
  fetch(`/video/${id}`)
    .then((response) => {
      console.log(id);
      info = response.json();
      console.log(info);
      return info;
    })
    .then((info) => {
      const videoPlayer = document.getElementById("dials");
      videoPlayer.removeChild(videoPlayer.firstChild);
      const video = info.video;
      const Player = document.createElement("iframe");
      videoPlayer.appendChild(Player);
      Player.src = video;
    })

    .catch((error) => {
      console.log(error);
    });
}

function artistCards(id) {
  fetch(`/artists/${id}`)
    .then((response) => {
      info = response.json();

      return info;
    })

    .then((info) => {
      console.log(info);

      cardContainer = document.getElementById("content");
      cardParagraph = document.getElementById("paragraph");
      cardLink = document.getElementById("link");
      cardImage = document.getElementById("image");
      cardArtist = document.getElementById("name");
      cardParagraph.innerHTML = info.bio;
      cardLink.href = info.spotify;
      cardImage.src = info.image;
      cardArtist.innerHTML = info.artist;
      cardLink.innerHTML = `Take a Look`;
    })

    .catch((error) => {
      console.log(error);
    });
}

function no() {
  document.getElementById("name").innerHTML = "";
  document.getElementById("image").src =
    "https://static.vecteezy.com/system/resources/previews/001/826/199/original/progress-loading-bar-buffering-download-upload-and-loading-icon-vector.jpg";
  document.getElementById("paragraph").innerHTML = "";
}


function qrCode(){
  fetch("	https://api.qr-code-generator.com/v1/create?access-token=asUuN2YZIA42MrvPAFfjdQqErcD_0FQVGt0veF05YpvR0qZgGh5VPuC9mbFKUc0L")
  .then((response) => {
    info = response.json()
    console.log(info)
    return info
  })
}