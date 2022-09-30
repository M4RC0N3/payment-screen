import React from 'react';
import logo from '../../logo.svg';
import '../../styles/reset.css';
import './style/index.css';

function PaymentCard() {
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
                        <input id="card-number" className='input' type="text" placeholder="0000 0000 0000 0000" maxLength={31}  pattern="[0-9\s]+$" required/>
                    </div>
                    <div className='dualfield-container'>
                        <div className='expiration-date-container'>
                            <label htmlFor = "expiration">Expiration date</label>
                            <input className='input' id="expiration" type="text" placeholder=" 00/0000"  name="ccexpiration"  maxLength={7}  minLength={7} pattern="\d{2}/\d{4}" title="EX: 00/0000" required/>
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
                    <button type="submit" className='button' id="pay">Pay</button>
                </form>
            </div>
        </div>
        <div className="card-container">
            <div className="card-content">
                <div className="card">
                    <div className="card-flag-container">
                        <div id="flags"></div>
                    </div>
                    <div className="chip-container">
                        <div className="chip"></div>
                    </div>
                    <div className="card-number-container">
                        <p id='card-number'>0000 0000 0000 0000</p>
                    </div>
                    <div className="cardholder-container">
                        <p id='cardholder'>Antonio Carlos</p>
                    </div>
                    <div className="validity-code-container">
                        <div className="validity-container">
                            <p>Validity</p>
                            <p id='validity'>12/05</p>
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
