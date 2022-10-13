import React,{useEffect} from 'react';
import '../../styles/reset.css';
import './style/index.css';
import {Transcriber, FlagRec} from './script';
import AmericanExpress from '../../assets/images/american-express.svg';
import Aura from '../../assets/images/aura.svg';
import DinnersClub from '../../assets/images/dinners-club.svg';
import Discover from '../../assets/images/discover.svg';
import Elo from '../../assets/images/elo.svg';
import Hipercard from '../../assets/images/hipercard.svg';
import Jcb from '../../assets/images/jcb.svg';
import Mastercard from '../../assets/images/mastercard.svg';
import Visa from '../../assets/images/visa.svg';
function PaymentCard() {
    useEffect(()=>{
        Transcriber();
        FlagRec();
    })

  return (
    <div className="payment-card-container">
        <div className="form-container">
            <div className="form-content">
                <h1 className='title'>Comece a participar hoje mesmo!</h1>
                <form action="">
                    <div className='cardholder-name-container'>
                        <label htmlFor='name'>Cardholder Name</label>
                        <input id="name" className='input' type="text" placeholder="JOSE S FRAGOSO"  name="ccname" maxLength={31} pattern="[a-zA-Záãâéêíîóôõú\s]+$" required/>
                    </div>
                    <div className='card-number-container'>
                        <label htmlFor='name'>Card Number</label>
                        <input id="card-number" className='input' type="text" placeholder="0000 0000 0000 0000" maxLength={16}  pattern="[0-9\s]+$" required />
                    </div>
                    <div className='dualfield-container'>
                        <div className='expire-date-container'>
                            <label htmlFor = "expire">Expire date</label>
                            <input className='input' id="expire" type="text" placeholder=" 00/0000"  name="ccexpiration"  maxLength={7}  minLength={7} pattern="\d{2}/\d{4}" title="EX: 00/0000" required/>
                        </div>
                        <div className='security-code-container'>
                            <label htmlFor="ccv">Security code</label>
                            <input className='input division' type="text" id="cvv" placeholder=" 000" name="cccvv" title="EX: 000" maxLength={3} minLength={3}   pattern="[0-9]+$" required/>
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
        <div className="card-container">
            <div className="card-content">
                <div className="card">
                    <div className="card-flag-container">
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
                        <p id='card-number-view'>0000 0000 0000 0000</p>
                    </div>
                    <div className="cardholder-container">
                        <p id='cardholher-name-view'>Antonio Carlos</p>
                    </div>
                    <div className="dual-view-container">
                        <div className="expire-container">
                            <p>Expire</p>
                            <p id='expire-card-view'>12/05</p>
                        </div>
                        <div className="code-security-container">
                            <p>CVV</p>
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
    </div>
  );
}

export default PaymentCard;
