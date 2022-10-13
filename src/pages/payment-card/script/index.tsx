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
    const CvvCardView = document.getElementById('security-code');

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
//
var visa:any = [4]; //flags
var elo:any = [5, 6];
var aexpress:any = [34, 37];
var dclub:any = [36, 38];
var hipercard:any = [63, 60];
var master:any = [51, 52, 53, 54, 55];
var jcb:any = [35]; 
var aura:any = [50];
var discover:any = [6011, 65];
function FlagRec(){
    const Discover = document.getElementById('discover');
    const Visa = document.getElementById('visa');
    const Elo = document.getElementById('elo');
    const American = document.getElementById('american-express');
    const DinnersClub = document.getElementById('dinners-club');
    const Hipercard = document.getElementById('hipercard');
    const MasterCard = document.getElementById('mastercard');
    const Jcb = document.getElementById('jcb');
    const Aura = document.getElementById('aura');
    const CardNumber:any = document.getElementById('card-number');
    const FlagsDisabled: any=[Discover, Visa, Elo, American, DinnersClub, Hipercard, MasterCard, Jcb, Aura]
    FlagsDisabled.forEach((element:any) => {
        element.style.display = 'none';
    });
    CardNumber.addEventListener('keyup', ()=>{
        let CardNumberValue = CardNumber.value;
        let CardNumberQuantity = CardNumberValue.length;
        var flag = CardNumberValue.substring(0, 4)
        if (CardNumberQuantity>=4){
            const VectorFlag: any=[Discover, Visa, Elo, American, DinnersClub, Hipercard, MasterCard, Jcb, Aura];
            const disableFlag = ((posi:any)=>{
                let search = VectorFlag[posi];
                let index = VectorFlag.indexOf(search);
                while(index >= 0){
                    VectorFlag.splice(index, 1);
                    index = VectorFlag.indexOf(search);
                }
                VectorFlag.forEach((item:any)=>{
                    item.style.display='none';
                });
            });
            if(flag == discover[0] || flag.substring(0,2) == discover[1]){
                let posi=0;
                VectorFlag[0].style.display = 'block';
                disableFlag(posi);
                flag = "discover";
            }
            else if(flag.substring(0,2) == aexpress[0] || flag.substring(0,2) == aexpress[1]){
                let posi=3;
                VectorFlag[3].style.display = 'block';
                disableFlag(posi);
                flag = "American Express"
            }
            else if(flag.substring(0,2) == dclub[0] || flag.substring(0,2) == dclub[1]){
                let posi=4;
                VectorFlag[4].style.display = 'block';
                disableFlag(posi);
                flag = "Diners Club";
            }
            else if(flag.substring(0,2) == hipercard[0] || flag.substring(0,2) == hipercard[1]){
                let posi=5;
                VectorFlag[5].style.display = 'block';
                disableFlag(posi);
                flag = "Hipercard";
            }
            else if(flag.substring(0,2) == master[0] || flag.substring(0,2) == master[1] || flag.substring(0,2) == master[2] || flag.substring(0,2) == master[3] || flag.substring(0,2) == master[4]){
                let posi=6;
                VectorFlag[6].style.display = 'block';
                disableFlag(posi);
                flag = "master";
            }
            else if(flag.substring(0,2) == jcb){
                let posi=7;
                VectorFlag[7].style.display = 'block';
                disableFlag(posi);
                flag = "jcb";
            }
            else if(flag.substring(0,2) == aura){
                let posi=8;
                VectorFlag[8].style.display = 'block';
                disableFlag(posi);
                flag = "aura";
            }
            else if(flag.substring(0,1) == elo[0] || flag.substring(0,1) == elo[1]){ // comparação para as flags que são identificadas
                let posi=2;
                VectorFlag[2].style.display = 'block';
                disableFlag(posi);
                flag = "elo";
            }
            else if(flag.substring(0,1) == visa){
                let posi=1;
                VectorFlag[1].style.display = 'block';
                disableFlag(posi);
                flag = "visa";
            } /* else{
                flag = "nao suportada"
                unsupported.style.display="block";
                VectorFlagDisable.forEach(element=>{
                    element.style.display='none';
                });
            } */
            /* console.log(flag); */
        }
    })
}
export {Transcriber,FlagRec}