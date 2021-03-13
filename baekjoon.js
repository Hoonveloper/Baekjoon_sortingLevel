a=document.getElementsByClassName('level_hidden')
const sorted = new Array();
Array.from(a).map(e=> sorted.push(e));
for (var i=0; i<sorted.length; i++){
    for (var j=0; j<sorted.length; j++){
        if( (sorted[i].innerText *1) < (sorted[j].innerText *1) ){
            var temp = sorted[i]
            sorted[i]=sorted[j]
            sorted[j]=temp
        }
    }
}
for (var i=0; i<sorted.length; i++){
    console.log(`${i+1}번째 풀어야 할 문제 번호:
    ${sorted[i].parentElement.parentElement.parentElement.children[0].innerText}, ${sorted[i].parentElement.innerText}`)
}