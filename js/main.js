window.onload = function(){
    var color1 = document.querySelector('input[name="color1"]');
    var color2 = document.querySelector('input[name="color2"]');
    var color3 = document.querySelector('input[name="color3"]');
    var form = document.querySelector('#form');
    var functionalContainer = document.querySelector('.functionalContainer');
    var boxContainer2 = document.querySelector('.boxContainer2');
    var cajaUp1 = document.querySelector('#cajaUp1');
    var cajaUp2 = document.querySelector('#cajaUp2');
    var cajaUp3 = document.querySelector('#cajaUp3');
    var cajaBot1 = document.querySelector('#cajaBot1');
    var cajaBot2 = document.querySelector('#cajaBot2');
    var cajaBot3 = document.querySelector('#cajaBot3');


    functionalContainer.style.display = 'none';

    function validate(){
        let value1;
        let value2;
        let value3;
         
        form.addEventListener('change', function(event){
            if(color1.value == ''){
                color1.style.border= '1px solid red';
            }else{
                color1.style.border= '1px solid green';
                value1= true;
            }
            if(color2.value == ''){
                color2.style.border = '1px solid red';
            }else{
                color2.style.border = '1px solid green';
                value2 = true;
            }
            if(color3.value == ''){
                color3.style.border = '1px solid red';
            }else{
                color3.style.border = '1px solid green';
                value3 = true;
            }

            if(value1 == true && value2 == true && value3 == true){
                hideForm();
            }
        });

    }

    function hideForm(){ 
            form.style.display = 'none';
            functionalContainer.style.display = 'inherit';
            styles();
            let box = boxContainer2.children;
            for (let i = 0; i < box.length; i++) {
                const element = box[i];
                element.addEventListener('drag', function(){

                });
            }

    }

    function styles(){
        cajaUp1.style.backgroundColor = color1.value;
        cajaUp2.style.backgroundColor = color2.value;
        cajaUp3.style.backgroundColor = color3.value;
        cajaBot1.innerHTML = color1.value;
        cajaBot2.innerHTML = color2.value;
        cajaBot3.innerHTML = color3.value;
        cajaBot1.style.color = 'black';
        cajaBot2.style.color = 'black';
        cajaBot3.style.color = 'black';
        cajaBot1.style.padding = '10px';
        cajaBot2.style.padding = '10px';
        cajaBot3.style.padding = '10px';
        cajaBot1.style.textAlign = 'center';
        cajaBot2.style.textAlign = 'center';
        cajaBot3.style.textAlign = 'center';
        cajaBot1.style.backgroundColor = color1.value;
        cajaBot2.style.backgroundColor = color2.value;
        cajaBot3.style.backgroundColor = color3.value;
        cajaBot1.style.fontWeight = 'bold';
        cajaBot2.style.fontWeight = 'bold';
        cajaBot3.style.fontWeight = 'bold';
        cajaBot1.style.fontSize = '16px';
        cajaBot2.style.fontSize = '16px';
        cajaBot3.style.fontSize = '16px';
    }


    function foo(){
        validate();

    }

    foo();


}