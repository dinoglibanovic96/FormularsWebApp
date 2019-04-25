var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

// creating 2 new panels
function showPanel(panelIndex, colorCode){
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color = "white";

    tabPanels.forEach(function(node){
        node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "block";
    tabPanels[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0,'dodgerblue');


    
//  Function which creates new elements for saving into the database
function createRow(){    
    
    var firstTxt = document.createElement("input");
    const mySelect = document.createElement("select");
    const optiona = document.createElement("option");
    const optionb = document.createElement("option");
    const optionc = document.createElement("option");
    const mySelect1 = document.createElement("select");
    const optiona1 = document.createElement("option");
    const optionb1 = document.createElement("option");
    const optionc1 = document.createElement("option");
    var div = document.createElement("div");
    var div4 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    
    firstTxt.type = "text";
    firstTxt.className = "firstTxt";

    //combobox 1
    

    optiona.value = "Textbox";
    optiona.text = "Textbox";
    mySelect.appendChild(optiona);	

    
    optionb.value = "Checkbox";
    optionb.text = "Checkbox";
    mySelect.appendChild(optionb);

    
    optionc.value = "Radio button";
    optionc.text = "Radio button";
    mySelect.className = "firstCombo";
    mySelect.appendChild(optionc);

    //combobox 2
    

    optiona1.value = "Mandatory";
    optiona1.text = "Mandatory";
    mySelect1.appendChild(optiona1);	

    
    
    optionb1.value = "Numeric";
    optionb1.text = "Numeric";
    mySelect1.appendChild(optionb1);

    
    optionc1.value = "None";
    optionc1.text = "None";
    mySelect1.className = "firstCombo";
    mySelect1.appendChild(optionc1);

    
    ////////////////////////////
    // container for first row
    
    formAdministration.appendChild(div);
    div.appendChild(firstTxt);

    
    formAdministration.appendChild(div2);
    div2.appendChild(mySelect);

    
    formAdministration.appendChild(div3);
    div3.appendChild(mySelect1);

    
    formAdministration.appendChild(div4);

}

// new function for Replacing old child objects with new ones in formAdministration  
function f(){
    var firstTxt_r = document.createElement("input");
    firstTxt_r.type = "text";
    firstTxt_r.className = "firstTxt";

    //combobox 1
    const mySelect_r = document.createElement("select");
    
    const optiona_r = document.createElement("option");
    optiona_r.value = "Textbox";
    optiona_r.text = "Textbox";
    mySelect_r.appendChild(optiona_r);	

    const optionb_r = document.createElement("option");
    optionb_r.value = "Checkbox";
    optionb_r.text = "Checkbox";
    mySelect_r.appendChild(optionb_r);

    const optionc_r = document.createElement("option");
    optionc_r.value = "Radio button";
    optionc_r.text = "Radio button";
    mySelect_r.className = "firstCombo";
    mySelect_r.appendChild(optionc_r);

    //combobox 2
    const mySelect1_r = document.createElement("select");
    const optiona1_r = document.createElement("option");

    optiona1_r.value = "Mandatory";
    optiona1_r.text = "Mandatory";
    mySelect1_r.appendChild(optiona1_r);	

    const optionb1_r = document.createElement("option");
    optionb1_r.value = "Numeric";
    optionb1_r.text = "Numeric";
    mySelect1_r.appendChild(optionb1_r);

    const optionc1_r = document.createElement("option");
    optionc1_r.value = "None";
    optionc1_r.text = "None";
    mySelect1_r.className = "firstCombo";
    mySelect1_r.appendChild(optionc1_r);

    
    ////////////////////////////
    // container for first row
    var div = document.createElement("div");
    formAdministration.appendChild(div);
    div.appendChild(firstTxt_r);

    var div2 = document.createElement("div");
    formAdministration.appendChild(div2);
    div2.appendChild(mySelect_r);

    var div3 = document.createElement("div");
    formAdministration.appendChild(div3);
    div3.appendChild(mySelect1_r);

    var div4 = document.createElement("div");
    formAdministration.appendChild(div4);

}