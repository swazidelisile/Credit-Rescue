(function(){
var pay=document.getElementById('pay'),acc=document.getElementById('acc');
function fmt(n){return 'R'+Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,'\u00a0')}
function upd(){
document.getElementById('payOut').textContent=fmt(pay.value);
document.getElementById('accOut').textContent=acc.value;
document.getElementById('relief').textContent=fmt(pay.value*0.5);
}
if(pay&&acc){pay.addEventListener('input',upd);acc.addEventListener('input',upd);upd();}
var lead=document.getElementById('lead');
if(lead){lead.addEventListener('submit',function(e){
e.preventDefault();
var f=e.target;
if(!f.name.value.trim()||!f.phone.value.trim()){alert('Enter your name and phone number.');return}
document.getElementById('ok').style.display='block';f.reset();
});}
})();

if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})})}

(function(){
var el=document.getElementById('vid');if(!el)return;
var S=[["😟","📄","📄"],"Bills pile up, and every phone call feels heavy.",
["📆","💸"],"By month end, the money is already gone.",
["🤝"],"You are not alone, and there are options.",
["🧭","📋"],"A free assessment shows what could work for you.",
["🌱","✅"],"One clear plan. Less pressure. A way forward."];
var n=S.length/2,i=-1,t=null,p=0,D=4500,playing=false;
var art=document.getElementById('vArt'),cap=document.getElementById('vCap'),btn=document.getElementById('vBtn'),fill=document.getElementById('vFill'),cnt=document.getElementById('vCount');
function show(k){i=k;art.style.animation='none';cap.style.animation='none';void art.offsetWidth;art.style.animation='';cap.style.animation='';
art.textContent=S[k*2].join(' ');cap.textContent=S[k*2+1];el.className='vid s'+k;cnt.textContent=(k+1)+'/'+n}
function stop(label){playing=false;clearInterval(t);btn.textContent=label}
function tick(){p+=100;fill.style.width=((i*D+p)/(n*D)*100)+'%';
if(p>=D){p=0;if(i+1>=n){fill.style.width='100%';stop('Replay');i=-1;return}show(i+1)}}
btn.addEventListener('click',function(){
if(playing){stop('Resume');return}
if(i<0){show(0);p=0;fill.style.width='0'}
playing=true;btn.textContent='Pause';clearInterval(t);t=setInterval(tick,100)});
show(0);cap.textContent=S[1];
})();
