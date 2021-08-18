var student1 ={
    id:4985,
    name:"sabbir",
    mark:91,
    phone:88016428558528
}

var myMoblie = {
    ram:"3gb",
    storage:"32gb",
    color:"black",
    band:"tecno"
}
var ramStorge ="ram";

myMoblie["ram"]="8gb";
myMoblie.ram="6gb";
myMoblie[ramStorge]="16gb";

var mobileRam= myMoblie.ram;
console.log(mobileRam);