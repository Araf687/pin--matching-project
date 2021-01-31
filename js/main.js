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
    var pin=Math.round(Math.random()*10000);
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
    value=''+5;
    x=x+value;
    setValue("input-screen",value);
})
document.getElementById(id="btn-6").addEventListener("click",function(){
    value=''+6;
    x=x+value;
    setValue("input-screen",value);
})
document.getElementById(id="btn-7").addEventListener("click",function(){
    console.log("click");
})
document.getElementById(id="btn-8").addEventListener("click",function(){
    console.log("click");
})
document.getElementById(id="btn-9").addEventListener("click",function(){
    console.log("click");
})
document.getElementById(id="btn-<").addEventListener("click",function(){
    console.log("click");
})
document.getElementById(id="btn-0").addEventListener("click",function(){
    console.log("click");
})
document.getElementById(id="btn-c").addEventListener("click",function(){
    console.log("click");
})