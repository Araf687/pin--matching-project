var inputString="";
function getValue(id)
{
    value=parseFloat(document.getElementById(id).value);
    return value;
}
function setValue(id,value)
{
    document.getElementById(id).value=value;
}
function calculateValue(value)
{
    var calValue=''+value;
    inputString=inputString+calValue;
    return inputString;
}
document.getElementById("generate-button").addEventListener("click",function(){
    document.getElementById("pin-match").style.display='none';
    document.getElementById("pin-not-match").style.display='none';
    setValue("input-screen",'');
    var pin=Math.round(Math.random()*10000)+1000;
    setValue("pin-generated-screen",pin);
})
document.getElementById(id="btn-1").addEventListener("click",function(){
    setValue("input-screen",calculateValue(1));
})
document.getElementById(id="btn-2").addEventListener("click",function(){
    setValue("input-screen",calculateValue(2));
})
document.getElementById(id="btn-3").addEventListener("click",function(){
    setValue("input-screen",calculateValue(3));
})
document.getElementById(id="btn-4").addEventListener("click",function(){
    setValue("input-screen",calculateValue(4));
})
document.getElementById(id="btn-5").addEventListener("click",function(){
    setValue("input-screen",calculateValue(5));
})
document.getElementById(id="btn-6").addEventListener("click",function(){
    setValue("input-screen",calculateValue(6));
})
document.getElementById(id="btn-7").addEventListener("click",function(){
    setValue("input-screen",calculateValue(7));
})
document.getElementById(id="btn-8").addEventListener("click",function(){
    setValue("input-screen",calculateValue(8));
})
document.getElementById(id="btn-9").addEventListener("click",function(){
    setValue("input-screen",calculateValue(9));
})
document.getElementById(id="btn-<").addEventListener("click",function(){
    inputString=inputString.slice(0,-1);
    setValue("input-screen",inputString);
})
document.getElementById(id="btn-0").addEventListener("click",function(){
    setValue("input-screen",calculateValue(0));
})
document.getElementById(id="btn-c").addEventListener("click",function(){
    inputString="";
    setValue("input-screen",inputString);
    
})
document.getElementById("btn-submit").addEventListener("click",function(){
    var generatePin=getValue("pin-generated-screen");
    var inputPin=getValue("input-screen");
    if(generatePin==inputPin){
        document.getElementById("pin-match").style.display='block';
    }
    else{
        document.getElementById("pin-not-match").style.display='block';
    }
})