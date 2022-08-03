function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/F0T-yCQ9x/model.json', modelReady);
    
   
    

}
function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);

    }
    else {
        console.log(results);
        randomNumber_r=Math.floor(Math.random()* 255)+1;
        randomNumber_g=Math.floor(Math.random()* 255)+1;
        randomNumber_b=Math.floor(Math.random()* 255)+1;
        document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuraccy-'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+ randomNumber_r +","+ randomNumber_g +", "+ randomNumber_b+")";
        document.getElementById("result_confidence").style.color="rgb("+ randomNumber_r+", "+ randomNumber_g +", "+randomNumber_b+")";  
        img=document.getElementById('ear');
       
        
        if (results[0].label=="cat") {
            img.src="cat.gif";
            cat = cat+1;
            
        }
        else if (results[0].label=="dog") {
           img.src="dog.gif";
           dog = dog+1
          
        }
       
        else {
            img.src="ear.png";
           
           
        }
    }
}