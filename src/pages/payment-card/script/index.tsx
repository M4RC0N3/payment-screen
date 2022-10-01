import React from "react";

const ArrowAnimation =  (FocusedInput:string)=>{
    switch(FocusedInput){
        case "name":
            console.log('arrow name');
        break

        case "card-number":
            console.log("arrow number");
        break

        case "expire":
            console.log("arrow expire");
        break

        case "cvv":
            console.log("arrow cvv");
        break
    }
}
function Transcriber(){
    //form id's selections
    const CardholderName = document.getElementById('name');
    const CardNumber = document.getElementById('card-number');
    const CardExpire = document.getElementById('expire');
    const Cvv = document.getElementById('cvv');

    let Inputs: any = [CardholderName, CardNumber, CardExpire, Cvv];
    //card id's selections
    const CardHolderNameView = document.getElementById('cardholher-name-view');
    const CardNumberView = document.getElementById('card-number-view');
    const CardExpireView = document.getElementById('expire-card-view');
    const CvvCardView = document. getElementById('security-code');

    let CardViewInfo: any = [CardHolderNameView, CardNumberView, CardExpireView, CvvCardView];
    Inputs.forEach((item:any)=>{
        let FocusedInput = item.id;
        item.addEventListener('focus', ()=>{
            ArrowAnimation(FocusedInput);
            let index: number = Inputs.indexOf(item);
            //console.log(index);
            item.addEventListener('keyup', ()=>{
                let TypedInfo: any = item.value;
                //console.log("input: " + item.id + "input value: " + item.value);
                CardViewInfo[index].innerHTML=TypedInfo
            });
        })
    })
}
function FlagRec(){
    console.log('fag');
}
export {Transcriber,FlagRec}