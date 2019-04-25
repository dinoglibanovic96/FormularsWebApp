// function for searching passed value(namekey) in the global variable/array called "formulari"
function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name == nameKey) {
            return (myArray[i].name);           
        }      
    }
}

     
// set the variable to "true" so the function could execute
var doItOnce;

// on button click execute the function with proper parameters (takes 1 string value and 1 array)
document.getElementById("btnSearch").addEventListener("click", function() {
    // storing the search function in a new variable
    var resultObject = search(document.getElementById("txtSearch").value, formulari);

    var formAdministration = document.getElementById("formAdministration");
    var firstBtn = document.createElement("button");
    var btnSave = document.createElement("BUTTON");
                

    // check if search textbox is empty
    if(document.getElementById("txtSearch").value == ""){
        // testing empty spaces
        alert("Enter formular name!");
    }
    else{

        // actions to run if object is found with an existing name
        if (resultObject)
        {   
            var getName = formulari.find(formulari => formulari.name === document.getElementById("txtSearch").value);
            
            formAdministration.innerHTML = "";
            
            // printing out the values from "formulari" array of an existing object/formular
            for (var i = 0; i < getName.length; i++){
    
                
                if(i % 3 == 0){
                    
                {
                    // btn
                    var firstBtn = document.createElement("button");
                    firstBtn.innerHTML = "+";
                    firstBtn.className = "firstBtn";

                    // txt
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
                    mySelect1_r.appendChild(optionc1_r);
                    mySelect1_r.className = "firstCombo";
                
                    
                    ////////////////////////////
                    // container for first row
                    var div_r = document.createElement("div");
                    formAdministration.appendChild(div_r);
                    div_r.appendChild(firstTxt_r);
                
                    var div2_r = document.createElement("div");
                    formAdministration.appendChild(div2_r);
                    div2_r.appendChild(mySelect_r);
                
                    var div3_r = document.createElement("div");
                    formAdministration.appendChild(div3_r);
                    div3_r.appendChild(mySelect1_r);
                
                    var div4_r = document.createElement("div");
                    formAdministration.appendChild(div4_r);


                    // limit creating element "firstBtn" and adding new row function
                    if (i < 1){
                        div4_r.appendChild(firstBtn);
                    }
                    firstBtn.addEventListener('click', function (event)
                    {
                        event.preventDefault();
                        f();       
                        
                    });
 
                    // printing into "textbox" fields after a formular is found
                    var textboxes = formAdministration.getElementsByTagName("input");

                    for (var s = 0; s < textboxes.length; s++){
                        firstTxt_r.value = getName[s];
                    }
                    
                    
                }
                
                }
                           
            }
                              
        }

// do actions if object does not exist in the database
        else
        {          
            
            // test printing
            alert("You entered a non existing formular name!");
           
            // creating new div which stores button save
            var divSave = document.getElementById("divSave");
            
            // function for executing something only once
            (function onetime() {
            if (!doItOnce) {
                doItOnce = true;

                
                btnSave.innerHTML = "Save";
                divSave.appendChild(btnSave);
                divSave.style.textAlign = "right";
                btnSave.style.fontFamily = "sans-serif";
                btnSave.style.fontSize = "20px";
                btnSave.style.width = "120px";

                ///////////////////////
                // declaring first row elements for input new formulars
                // textbox
                var firstTxt = document.createElement("input");
                firstTxt.type = "text";
                firstTxt.className = "firstTxt";
                
                //button
                firstBtn.innerHTML = "+";
                firstBtn.className = "firstBtn";

                //combobox 1
                const mySelect = document.createElement("select");
                const optiona = document.createElement("option");

                optiona.value = "Textbox";
                optiona.text = "Textbox";
                mySelect.appendChild(optiona);

                const optionb = document.createElement("option");
                optionb.value = "Checkbox";
                optionb.text = "Checkbox";
                mySelect.appendChild(optionb);

                const optionc = document.createElement("option");
                optionc.value = "Radio button";
                optionc.text = "Radio button";
                mySelect.className = "firstCombo";
                mySelect.appendChild(optionc);

                //combobox 2
                const mySelect1 = document.createElement("select");
                const optiona1 = document.createElement("option");

                optiona1.value = "Mandatory";
                optiona1.text = "Mandatory";
                mySelect1.appendChild(optiona1);	

                const optionb1 = document.createElement("option");
                optionb1.value = "Numeric";
                optionb1.text = "Numeric";
                mySelect1.appendChild(optionb1);

                const optionc1 = document.createElement("option");
                optionc1.value = "None";
                optionc1.text = "None";
                mySelect1.className = "firstCombo";
                mySelect1.appendChild(optionc1);

                
                ////////////////////////////
                // container for first row
                
                var div = document.createElement("div");
                var div2 = document.createElement("div");
                var div3 = document.createElement("div");
                var div4 = document.createElement("div");

                formAdministration.appendChild(div);
                div.appendChild(firstTxt);

                
                formAdministration.appendChild(div2);
                div2.appendChild(mySelect);

                
                formAdministration.appendChild(div3);
                div3.appendChild(mySelect1);

                
                formAdministration.appendChild(div4);
                div4.appendChild(firstBtn);

                

            
            // on button "+" add new row
            firstBtn.addEventListener('click', function (event)
            {
                event.preventDefault();
                createRow();
            });

            
            // on button "SAVE" do actions
            btnSave.addEventListener('click', function ()
            {
                
                var inputeltxt = formAdministration.getElementsByTagName("input");
                var inputelselect = formAdministration.getElementsByTagName("select");

                // ADDING DATA TO ARRAY "arr" then pushing to "formulari" [DATABASE]
                var arr = [];
                arr.name = (document.getElementById("txtSearch").value);
                 
                 
                for (var i = 0; i < inputeltxt.length; i++){
                    arr.push(inputeltxt[i].value);
                }
                for (var j = 0; j < inputelselect.length; j++){
                    arr.push(inputelselect[j].value);
                }
                alert("New formular created!");
                
                formulari.push(arr);
                formAdministration.innerHTML = "";
            });
            
            
        }
   
    
    })();       
    

    }
    }
});