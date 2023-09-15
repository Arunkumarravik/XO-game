
const out=document.body.getElementsByClassName('inner_element');

let chr='X';

let m=0;

function swap_places(){

    if( chr=='X'){
        chr='O';

    }
    else{

        chr='X';
    }
}

function win(){

    const one=out[0].innerText;

    const two=out[1].innerText;

    const three=out[2].innerText;

    const four=out[3].innerText;

    const five=out[4].innerText;

    const six=out[5].innerText;

    const seven=out[6].innerText;

    const eight=out[7].innerText;

    const nine=out[8].innerText;

    console.log(one,two,three,four,five,six,seven,eight,nine);

    if( (one==two && two==three) || (four==five && five==six) || (seven==eight && eight==nine) ||
        (one==four && four==seven) || (two==five && five==eight) || (three==six && six==nine) ||
        (one==five && five==nine)|| (three==five && five==seven)){

            return true;

        }
    
    return false;

}

function place_hold(t){
    if(t.innerText!='X' && t.innerText!='O'){

        t.classList.add('inner');

        t.innerText=chr;

        swap_places();

        m+=1;
    }
    else{

        alert('The Place has been occupied');
    }
}

function tic_tac_toe(){

    for(let i=0;i<9;i++){

        out[i].addEventListener('click',(e)=>{

        place_hold(e.target);

        if(win()===true){

            alert(e.target.innerText+" wins the match");

            location.reload();

        }
        else if(m==9){

            alert("oops! the match has been drawn");

            location.reload();
        }

 
        })
    }

}

tic_tac_toe()