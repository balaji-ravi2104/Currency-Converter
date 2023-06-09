let select = document.querySelectorAll('.currency');

let btn = document.getElementById('btn');

let input = document.getElementById('input');


fetch('https://api.frankfurter.app/currencies')
.then(res=> res.json())
.then(res=> displayDropDown(res))


function displayDropDown(res){

    // Converting Object into array
    let curr = Object.entries(res);

    // console.log(curr[0][0]);
    for(let i=0;i<curr.length;i++){
        // console.log(curr[i][0]);
        let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
        // console.log(opt);
        select[0].innerHTML += opt;
        select[1].innerHTML += opt;
    }
}

btn.addEventListener('click',()=>{
    let currency1 = select[0].value
    let currency2 = select[1].value
    let inputVal = input.value

    if(currency1===currency2){
        alert("Choose Different Types Of Currencys");
    }else{
        convert(currency1,currency2,inputVal)
    }
});


function convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
      document.getElementById('result').value = Object.values(data.rates)[0]
    // console.log(Object.values(data.rates)[0]);
    });
  
  }