

// const cuttape=document.querySelector('#cut_tape')
// const reel=document.querySelector('#reel')
// const reels=document.querySelector('#reels')
// const tray=document.querySelector('#tray')
// const trays=document.querySelector('#trays')

// const bulk=document.querySelector('#bulk')

// const bulks=document.querySelector('#bulks')

// const package_type=document.querySelector('#')


 

const chemical= document.querySelector('#Chemical');
const dimension= document.querySelector('#Dimension');
const terminal= document.querySelector('#Terminal');
const soldering= document.querySelector('#Soldering');
const btn = document.querySelector('#btn');
const btn_clear = document.querySelector('#btn_clear');
const text_output= document.querySelector("#text_output");


let text=""
let empty=""

function checkSample(x){

    //status check
    
    if (x <= 200){
        return x;
    }
    else if( x>200) {
        return 122;
    }

}

function terminalCheck(x){
    if(x==0){
        return "Terminal Inspection: Terminals are free of deformations, corrosion and oxidation. "+ "<br>"+"<br>"

    }
    else if(x==1){}

    else if(x==2){}

    else if(x==3){}
    
}


btn.onclick = () => {
    text="" // reset
    
    let package_type= document.querySelector('input[name="package_type"]:checked').value
    let test_type= document.querySelector('input[name="test"]:checked').value
    let partNumber= document.getElementById('PartNumber').value;
    let Quantity= document.getElementById('Quantity').value;

    sample= checkSample(Quantity);

    text+="Classification: Unused"+ "<br>"+"<br>" 

    text+= Quantity+" pieces of "+ partNumber+" were received in "+package_type+" for external visual inspection.  Detailed visual analysis was performed on "+ sample+ " samples.  All testing was performed and sampled according to the AS6081 standard.  "+ "<br>"+"<br>"

    if(dimension.checked){
        text+=dim + "<br>"+ "<br>";
    }
    if(chemical.checked){
        text+= chem+ "<br>"+ "<br>";
    }

    let a= document.querySelector('input[id="scratches"]:checked') 

    console.log("a is: "+ a)

    text+= terminalCheck(0);
    
    
    fun1();

    console.log(text_output)

   

    console.log("Package type is:" + package_type)
};




function fun1(input){
    text_output.innerHTML = text;
}
 


// btn.addEventListener('click',fun1);




function terminalStatus(){
    let a= document.querySelector('input[id="scratches"]:checked') 
    let b= document.querySelector('input[id="testmark"]:checked') 

    if(a== null)
}





let dim="Visual Analysis: Dimensions Height, Width, and Thickness were measured and are within manufacturer's specifications. The parts have the same exterior configuration as the POD."
let ter="Terminal Inspection: Terminals are free of deformations, corrosion and oxidation."
let chem="Remarking/Resurfacing: 3 of 3 sample parts passed the remarking and resurfacing test and there is no indication of any tampering on the surface."
let final="Note: Radiological inspection and XRF material analysis was performed on the sample size in accordance with AS6081 standard"