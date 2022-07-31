

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
const xray= document.querySelector('#Xray')
const xrf= document.querySelector('#XRF')
const decap= document.querySelector('#Decap')

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
    else if(x==1){
        return "Terminal Inspection: Terminals are free of corrosion and oxidation. Minor scratches were observed on the terminals. "+ "<br>"+"<br>"
    }
    else if(x==2){
        return "Terminal Inspection: Terminals are free of corrosion and oxidation. Minor test contact marks were observed on the terminals."+ "<br>"+"<br>"
    }

    else if(x==3){
        return "Terminal Inspection: Terminals are free of corrosion and oxidation. Minor test contact marks were observed. Minor scratches were observed."+ "<br>"+"<br>"
    }

    else if(x==4){
        return "Terminal Inspection: Terminals are free of deformations. Minor oxidation were observed on the terminals."+ "<br>"+"<br>"

    }
    
}

 
function showDecap(){
    if(document.getElementById("Decap")===true){
    document.getElementById("right_container").style.visibility="visible";}

    else if(document.getElementById("Decap")===false){
        document.querySelector("right_container").style.visibility="hidden";}
}




btn.onclick = () => {
    text="" // reset
    
    let package_type= document.querySelector('input[name="package_type"]:checked').value
    let test_type= document.querySelector('input[name="test"]:checked').value
    let partNumber= document.getElementById('PartNumber').value;
    let Quantity= document.getElementById('Quantity').value; 
  
    let lotcode=document.getElementById("LotCode").value;
    let  DC=document.getElementById("DC").value;
    
    let a= document.querySelector('input[id="scratches"]:checked') 

    let numDecap= document.getElementById("NumDecap")
    let sample= checkSample(Quantity);
    
    let xray_sample= checkXray(Quantity);

    text+="Classification: Unused"+ "<br>"+"<br>" 

    text+="Date Code: "+DC+ "<br>"+"<br>"

    text+="Lot Code: "+lotcode+ "<br>"+"<br>"
    
    text+= Quantity+" pieces of "+ partNumber+" were received in "+package_type+" for external visual inspection.  Detailed visual analysis was performed on "+ sample+ " samples.  All testing was performed and sampled according to the AS6081 standard.  "+ "<br>"+"<br>"

    if(dimension.checked){
        
        text+=POD_check()+ "<br>"+ "<br>";
    }
    

    console.log("a is: "+ a)
    let t= terminalStatus();
    text+= terminalCheck(t);
    
    
    //chemical test
    if(chemical.checked){
        text+= chem+ "<br>"+ "<br>";
    }

    //Xray test
    if(xray.checked){

        text+= "Radiological Inspection: "+ xray_sample +" of "+ xray_sample +" sample parts passed radiological inspection. No abnormalities observed."+ "<br>"+ "<br>";
    }
   //xrf 
    if(xrf.checked){
        text+= xrf_text+ "<br>"+ "<br>";
    }
   // ddecap

    if(decap.checked){
        text+= "Decapsulation Testing: "+ numDecap+" of "+numDecap+" sample parts passed decapsulation testing with favorable results."+ "<br>"+ "<br>";
    }
    // Note
    text+= final+ "<br>"+ "<br>" + "<br>"+ "<br>";

    if(decap.checked){
        
        text+= "Decapsulation Summary:"+ "<br>"+ "<br>";
        if(numDecap == 3){
            text+="Decapsulation was performed on 3 samples"


        }
        else if(numDecap== 1){
            text+="Decapsulation was performed on 1 sample"
        }
        

    }

    Print_report(); // last line to store input into text box

    console.log(text_output)

   

    console.log("Package type is:" + package_type)
};




function Print_report(input){
    text_output.innerHTML = text;
}
 


// btn.addEventListener('click',fun1);




function terminalStatus(){
    let a= document.querySelector('input[id="scratches"]:checked') 
    let b= document.querySelector('input[id="testmark"]:checked') 

    if(a!= null && b!=null){
        return 3; //3 is both scratches and test mark
     
    }

    else if( a===null && b===null){
        return 0;// 0 is good
    }

    else if( a!= null && b=== null){
        return 1;// scratches only
    }
    
    else if( a===null && b!=null){
        return 2; // test mark only
    }
}





let dim="Visual Analysis: Dimensions Height, Width, and Thickness were measured and are within manufacturer's specifications. The parts have the same exterior configuration as the POD."
let ter="Terminal Inspection: Terminals are free of deformations, corrosion and oxidation."
let chem="Remarking/Resurfacing: 3 of 3 sample parts passed the remarking and resurfacing test and there is no indication of any tampering on the surface."
let final="Note: Radiological inspection and XRF material analysis was performed on the sample size in accordance with AS6081 standard"

let xrf_text="XRF Material Analysis: 3 of 3 sample parts passed XRF material analysis."


function decap_summary(size){
    let manufacture= document.getElementById("NumDecap")
    let marking=document.getElementById("Marking")

    for(var x=0;x<size;x++){
        text+= "Sample "+x+", Die "+x+': Manufacturer logo "'+logo+'" were observed. "'+marking+'" were observed- this could be the original device code.'+ "<br>"+ "<br>";
    }

}
function check_status(){
    let status= document.getElementById("All")
    if(status.checked==true){
        selectAll();
     
    }  

    else if (status.checked==false){
        deselectAll();
         
    }
}

function selectAll(){
    let checkAll=document.getElementsByName('test_name')
    for (var x=0; x<checkAll.length; x++){
        checkAll[x].checked=true;
        
    }
}

function deselectAll(){
    let checkAll=document.getElementsByName('test_name')
    for (var x=0; x<checkAll.length; x++){
        checkAll[x].checked=false;
        
    }
}


function POD_check(){
    let check= document.getElementById("NoPod")
    if(check.checked==true){
        return "Visual Analysis: Dimensions Height, Width, and Diameter were measured for reference since no POD is available. Terminals are free of deformations, corrosion, and oxidation."  
    }
    else{
        return "Visual Analysis: Dimensions Height, Width, and Thickness were measured and are within manufacturer's specifications. The parts have the same exterior configuration as the POD." 
    }
}

function checkXray(x){
    if(x>=45){
        return 45;
    }

    else{
        return x;
    }
}