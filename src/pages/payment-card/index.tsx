import React,{useEffect, useState} from 'react';
import InputMask from "react-input-mask";

import Lottie from 'react-lottie';
import ArrowFlag from '../../assets/animations/arrow-flag.json';
import ArrowCardholder from '../../assets/animations/arrow-cardholder.json';
import ArrowCardNumber from '../../assets/animations/arrow-cardnumber.json';
import ArrowCardSecurityCode from '../../assets/animations/arrow-card-security-code.json';
import ArrowCardExpiringDate from '../../assets/animations/arrow-card-expiring-date.json';
import '../../styles/reset.css';
import './style/index.css';

import AmericanExpress from '../../assets/images/american-express.svg';
import Aura from '../../assets/images/aura.svg';
import DinnersClub from '../../assets/images/dinners-club.svg';
import Discover from '../../assets/images/discover.svg';
import Elo from '../../assets/images/elo.svg';
import Hipercard from '../../assets/images/hipercard.svg';
import Jcb from '../../assets/images/jcb.svg';
import Mastercard from '../../assets/images/mastercard.svg';
import Visa from '../../assets/images/visa.svg';
import {Transcriber, FlagRec} from './script';

function PaymentCard() {
    const[stopArrowFlags, setStopArrowFlags] = useState(true);
    const[stopArrowName, setStopArrowName] = useState(true);
    const[stopArrowNumber, setStopArrowNumber] = useState(true);
    const[stopArrowExpire, setStopArrowExpire] = useState(true);
    const[stopArrowCode, setStopArrowCode] = useState(true);
    const ArrowShow =  (FocusedInput:string, AnimationData:any)=>{
        switch(FocusedInput){
            case "name":
                setStopArrowName(false);
                AnimationData[2].classList.add('anime');
            break
    
            case "card-number":
                setStopArrowFlags(false);
                setStopArrowNumber(false);
                AnimationData[0].classList.add('anime');
                AnimationData[1].classList.add('anime');
            break
    
            case "expire":
                setStopArrowExpire(false);
                AnimationData[3].classList.add('anime');
            break
    
            case "cvv":
                setStopArrowCode(false);
                AnimationData[4].classList.add('anime');
            break
        }
    }
    const ArrowHidden =  (FocusOut:string, AnimationData:any)=>{
        switch(FocusOut){
            case "name":
                setStopArrowName(true);
                AnimationData[2].classList.remove('anime');
            break
    
            case "card-number":
                setStopArrowFlags(true);
                setStopArrowNumber(true);
                AnimationData[0].classList.remove('anime');
                AnimationData[1].classList.remove('anime');
            break
    
            case "expire":
                setStopArrowExpire(true);
                AnimationData[3].classList.remove('anime');
            break
    
            case "cvv":
                setStopArrowCode(true);
                AnimationData[4].classList.remove('anime');
            break
        }
    }
    const Arrows=()=>{
        const CardholderName = document.getElementById('name');
        const CardNumber = document.getElementById('card-number');
        const CardExpire = document.getElementById('expire');
        const Cvv = document.getElementById('cvv');
        let Inputs: any = [CardholderName, CardNumber, CardExpire, Cvv];
        //card id's selections
        const AnimationData = document.querySelectorAll('[data-animation]');
        Inputs.forEach((item:any)=>{
            let FocusedInput = item.id;
            let FocusOut = item.id;
            item.addEventListener('focus', ()=>{
                ArrowShow(FocusedInput, AnimationData);
            })
            item.addEventListener('focusout',()=>{
                ArrowHidden(FocusOut, AnimationData);
            })
        })
    }
    useEffect(()=>{
        FlagRec();
        Transcriber();
        Arrows();
    })
    function ShowCard(){
        const CardContainer:any = document.getElementById('card-container');
        CardContainer.classList.toggle('show-card');
    }
  return (
    <div className="payment-card-container">
        <div className="form-container">
            <div className="form-content">
                <h1 className='title'>Payment form</h1>
                <form action="">
                    <div className='cardholder-name-container'>
                        <label htmlFor='name'>Cardholder Name</label>
                        <input id="name" className='input' type="text" placeholder="JOSE S FRAGOSO"  name="ccname" maxLength={31} pattern="[a-zA-Záãâéêíîóôõú\s]+$" required/>
                    </div>
                    <div className='card-number-container'>
                        <label htmlFor='name'>Card Number</label>
                        <InputMask id="card-number" className='input' mask="9999 9999 9999 9999" placeholder="0000 0000 0000 0000" required />
                    </div>
                    <div className='dualfield-container'>
                        <div className='expire-date-container'>
                            <label htmlFor = "expire">Expire date</label>
                            <InputMask className='input' id="expire" type="text" mask="99/9999" placeholder="00/0000" required />
                        </div>
                        <div className='security-code-container'>
                            <label htmlFor="ccv">Security code</label>
                            <InputMask className='input division' id="cvv" type="text" mask="999" placeholder="000" required />
                        </div>
                    </div>
                    <div className='type-payment-container'>
                        <label htmlFor="formaPagamento">Forma de pagamento</label>
                        <select className='input' id="type-payment" name="payType">
                            <option id="credit" value="crd">Credit</option>
                            <option id="debt" value="crd">Debt</option>
                        </select>
                    </div>
                    <button type="submit" className='button' id="pay" onClick={Transcriber}>Pay</button>
                </form>
            </div>
        </div>
        <div className="card-container" id='card-container' data-show>
            <div className="card-content">
                <div className="card">
                    <div className="card-flag-container">
                        <div className="arrow arrow-flag-container">
                            <p data-animation="card-name-opacity">Flags</p>
                            <Lottie
                                options={{
                                    animationData: ArrowFlag,
                                    autoplay: false,
                                    loop:false,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }}
                                isStopped={stopArrowFlags}
                            />
                        </div>
                        <div id="flags">
                            <img id='american-express' src={AmericanExpress} width={84} height={84} alt="American Express" draggable={false} />
                            <img id='aura' src={Aura} width={84} height={84} alt="Aura" draggable={false} />
                            <img id='dinners-club' src={DinnersClub} width={84} height={84} alt="Dinners Club" draggable={false} />
                            <img id='discover' src={Discover} width={84} height={84} alt="Discover" draggable={false} />
                            <img id='elo' src={Elo} width={84} height={84} alt="Elo" draggable={false} />
                            <img id='hipercard' src={Hipercard} width={84} height={84} alt="Hipercard" draggable={false} />
                            <img id='jcb' src={Jcb} width={84} height={84} alt="Jcb" draggable={false} />
                            <img id='mastercard' src={Mastercard} width={84} height={84} alt="Mastercard" draggable={false} />
                            <img id='visa' src={Visa} width={84} height={84} alt="Visa" draggable={false} />
                        </div>
                    </div>
                    <div className="chip-container">
                        <div className="chip"></div>
                    </div>
                    <div className="card-number-container">
                        <div className="arrow arrow-card-number-container">
                            <p data-animation="card-name-opacity">Card number</p>
                            <Lottie
                                options={{
                                    animationData: ArrowCardNumber,
                                    autoplay: false,
                                    loop:false,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }}
                                isStopped={stopArrowNumber}
                            />
                        </div>
                        <p id='card-number-view'>0000 0000 0000 0000</p>
                    </div>
                    <div className="cardholder-container">
                        <div className="arrow arrow-cardholder-container">
                            <p data-animation="card-name-opacity">Cardholer</p>
                            <Lottie 
                                options={{
                                    animationData: ArrowCardholder,
                                    autoplay: false,
                                    loop:false,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }}
                                isStopped={stopArrowName}
                            />
                        </div>
                        <p id='cardholher-name-view'>Antonio Carlos</p>
                    </div>
                    <div className="dual-view-container">
                        <div className="expire-container">
                            <div className="arrow arrow-expire-container">
                                <p data-animation="card-name-opacity">Expire date</p>
                                <Lottie
                                    options={{
                                        animationData: ArrowCardExpiringDate,
                                        autoplay: false,
                                        loop:false,
                                        rendererSettings: {
                                            preserveAspectRatio: 'xMidYMid slice'
                                        }
                                    }}
                                    isStopped={stopArrowExpire}
                                />
                            </div>
                            <p className='expire-name'>Expire</p>
                            <p className='expire-date' id='expire-card-view'>12/05</p>
                        </div>
                        <div className="code-security-container">
                            <div className="arrow arrow-code-container">
                                <p data-animation="card-name-opacity">Code security</p>
                                <Lottie
                                    options={{
                                        animationData: ArrowCardSecurityCode,
                                        autoplay: false,
                                        loop:false,
                                        rendererSettings: {
                                            preserveAspectRatio: 'xMidYMid slice'
                                        }
                                    }}
                                    isStopped={stopArrowCode}
                                />
                            </div>
                            <p className='cvv'>CVV</p>
                            <p id='security-code'>555</p>
                        </div>
                    </div>
                </div>
                <div className="balls-container">
                    <div className="big-ball"></div>
                    <div className="small-ball"></div>
                    <div className="mid-ball"></div>
                </div>
            </div>
        </div>
        <button className="button-show-card" onClick={ShowCard}>Card</button>
    </div>
  );
}

export default PaymentCard;