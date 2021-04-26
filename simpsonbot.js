const botname = "[simpson] ";
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  //안됄 수도 있음 미완성
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
if(day-gotime<0){
  if(w==0||w==1||w==3||w==5||w==6){
    for(var i=0; i<1; i++){
    replier.reply("김민재", "야 지금 집에 가실??");
  }
}
var 비속어 = ["티", "티비", "사", "야동", "똥", "오", "쫏", "여", "그거", "화", "사", "티", "씨", "좃", "시"];
    if (msg == "안녕" || msg == "ㅎㅇ") {
        replier.reply(botname + "ㅎㅇ");
    }
    if (msg.includes('휴게실') || msg.includes('가자')) {
        if (msg.includes(비속어) != 1) {
            replier.reply("ㅇㅋ");
        } else {
            replier.reply("욕이 감지 돼었습니다.");
        }
    }
