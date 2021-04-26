var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var w = d.getDay();
var ho = 22;
var mi = 01;
var se = 01;
var day = h+=m+=s;
var gotime = ho+=mi+=se;
let time;
if(day-gotime<0){
  if(w==0||w==1||w==3||w==5||w==6){
    for(var i=0; i<1; i++){
    replier.reply("야 지금 집에 가실??");
  }
}
}
