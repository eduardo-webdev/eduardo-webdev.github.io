let image;
let feedback;

document.getElementById("yesbtn").onclick = function(){
    image = document.getElementById("image").src="https://pbs.twimg.com/media/FXPMnuQXEAIKbSC.jpg";
    feedback = document.getElementById("feedback").innerHTML = "Gracias milob, these are for you :)";
}

document.getElementById("nobtn").onclick = function(){
    image = document.getElementById("image").src="https://64.media.tumblr.com/5c0a333415df0bd1a324178a2ef43d12/593ab313c2eba044-24/s400x600/bbdc54ec7839602cd3b85df7ea848af79fe71e53.gif";
    feedback = document.getElementById("feedback").innerHTML = "..."; 
}
