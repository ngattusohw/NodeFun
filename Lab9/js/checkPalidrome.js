
var submit = document.getElementById('submit');
var ol = document.getElementById('attempts');
var x = 0;

if(submit.addEventListener){
    submit.addEventListener("submit", function(e){
    	var li = document.createElement("li");
        e.preventDefault();    //stop form from submitting
        var val = e.srcElement[0].value;
        if(val){
        	var tVal = val.toLowerCase().replace(/[.,\/#!\'\`\’$%\^&\*;?:{}=\-_`~()]/g,"").replace(/\s+/g, '').replace("\'", "");
        	li.setAttribute("class", tVal === tVal.split('').reverse().join('') ? "is-palindrome" : "not-palindrome");
        	li.setAttribute("id", x);
        	x++;
        	li.innerHTML = val;
        	ol.appendChild(li);
        }else{
        	//error
        	alert("Please submit a value");
        }
        //var phrase = 
        //li.innerHTML = 
    	console.log("Fuck!")
    	return false;
    },false);  //Modern browsers
}else if(submit.attachEvent){
    submit.attachEvent('onsubmit', function(e){
    	e.preventDefault();
    });//Old IE
}

function fuck(){
	console.log("Eat my ass")
}