function start() {
    navigator.mediaDevices.getUserMedia({
audio:true
    });
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/I8MWq1Xqc/model.json',modelLoaded);
}
function modelLoaded() {
classifier.classify(gotResults);
}
function gotResults(error, results) {
if (error) {
    console.error(error);
}
else {
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    console.log(results);
    document.getElementById("result_label").innerHTML=results[0].label;
    document.getElementById("result_confidence").innerHTML=(results[0].confidence*100).toFixed(3)+"%";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    img1=document.getElementById("blue_bear");
    img2=document.getElementById("puppy");
    img3=document.getElementById("kitten");
    img4=document.getElementById("chick");
    if (results[0].label=="Barking"){
        img2.src="pet-dancing.gif";
        img1.src="aliens-02.png";
        img3.src="pusheen.jfif";
        img4.src="chick.png";
    }
    else if (results[0].label=="Bells"){
        img2.src="pet-dancing.png";
        img1.src="aliens-02.gif";
        img3.src="pusheen.jfif";
        img4.src="chick.png";
    }
    else if (results[0].label=="Kitten Meowing"){
        img2.src="pet-dancing.png";
        img1.src="aliens-02.png";
        img3.src="pusheen-dancing.gif";
        img4.src="chick.png";
    }
    else if (results[0].label=="Chirping"){
        img2.src="pet-dancing.png";
        img1.src="aliens-02.png";
        img3.src="pusheen.jfif";
        img4.src="chick-loving.gif";
    }
    else {
        img2.src="aliens-01.gif";
        img1.src="aliens-01.gif";
        img3.src="aliens-01.gif";
        img4.src="aliens-01.gif";
    }
}
}