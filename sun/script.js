ctr=1
var outerDiv = document.getElementById('outer')
var back = document.getElementById('back')

function change1(){
outerDiv.style.background='yellow'
// back.style.background='white'
back.style.background='skyblue'


}
function change2(){
outerDiv.style.background='white'
back.style.background='black'

}

function pressed(){
if (ctr%2 == 0){
	change1();
}
else {
	change2();
}

ctr++;
}


outer.addEventListener('click', pressed )
