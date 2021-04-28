
let myRect;

function setup(){
    createCanvas(400,400);
    myRect = new MyRect(200,200,50);
    console.log(compareAna('amor','Roma'));
    console.log(compareAnaOpt('amor','Roma'));
}


function draw(){
    background(200);
    myRect.draw();
}

function compareAna(textOne, textTwo){
    if(textOne.length == textTwo.length){
        textOneMin = textOne.toLowerCase();
        textTwoMin = textTwo.toLowerCase();

        //console.log(textOneMin);
        //console.log(textTwoMin);
        // ----------------------------------
        arrayTextOneMin = textOneMin.split('');
        arrayTextTwoMin = textTwoMin.split('');
        // ----------------------------------
        arrayTextOneMin.sort();
        arrayTextTwoMin.sort();
        //console.log(arrayTextOneMin);
        //console.log(arrayTextTwoMin);
        // ----------------------------------
        stringTextOneMin = arrayTextOneMin.join('');
        stringTextTwoMin = arrayTextTwoMin.join('');
        //console.log(stringTextOneMin);
        //console.log(stringTextTwoMin);
        // ----------------------------------
        if(stringTextOneMin === stringTextTwoMin){
            return true;
        }
    }
    

    return false;
}

function compareAnaOpt(textOne,textTwo){
    if(textOne.length == textTwo.length){
        return textOne.toLowerCase().split('').sort().join('') === textTwo.toLowerCase().split('').sort().join('');
    }
    return false;
}