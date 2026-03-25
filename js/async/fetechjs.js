fetch('https://randomuser.me/api/').
then(function(notreadabledata){
    return notreadabledata.json();
})
.then(function(data){
    console.log(data.results[0].name.first);
    
})