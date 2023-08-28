import Panel from "./panel";
import { useState } from "react";

export default function PersonalInfoPanel({ title, isActive, onShow, personalForm, setPersonalForm }) {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  
  function handleFirstNameChange(e) {
    const updatedNameValue = e.target.value;
    setNameValue(updatedNameValue);
  
    setPersonalForm(prevPersonalForm => ({
      ...prevPersonalForm,
      name: updatedNameValue
    }));
  }
  
  
  function handleEmailChange(e) {
    const updatedEmailValue = e.target.value;
    setEmailValue(updatedEmailValue);

    setPersonalForm(prevPersonalForm => ({
      ...prevPersonalForm,
      email: updatedEmailValue
    }))
  }

  function handlePhoneChange(e) {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneValue(formattedPhoneNumber);

    setPersonalForm(prevPersonalForm => ({
      ...prevPersonalForm,
      phone: formattedPhoneNumber
    }))
  }

  function handleAddressChange(e) {
    const updatedAddressValue = e.target.value;
    setAddressValue(e.target.value);

    setPersonalForm(prevPersonalForm => ({
      ...prevPersonalForm,
      address: updatedAddressValue
    }))
  }

  function handleButtonClick() {
    setPersonalForm({
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      address: addressValue,
    })
  }

  function clearPersonalData() {
    setNameValue('');
    setEmailValue('');
    setPhoneValue('');
    setAddressValue('');
    setPersonalForm({
      name: '',
      email: '',
      phone: '',
      address: '',
    })
  }

  function formatPhoneNumber(input) {
    const digitsOnly = input.replace(/\D/g, '');
    let formattedPhoneNumber = '';
  
    for (let i = 0; i < digitsOnly.length; i++) {
      if (i === 3 || i === 6) {
        formattedPhoneNumber += '-';
      }
      formattedPhoneNumber += digitsOnly[i];
    }
  
    return formattedPhoneNumber;
  }

  return (
    <Panel title={title} isActive={isActive} onShow={onShow} showSaveButton={true} onClick={handleButtonClick}>
      <form className="personal-info">
          <div className="input-group">
          <label htmlFor="name">Full name </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Ava Williams"
            value={nameValue}
            onChange={handleFirstNameChange}
          />
          </div>
          <div className="input-group">
          <label htmlFor="email">Email </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="avawilliams@gmail.com"
            value={emailValue}
            onChange={handleEmailChange}
          />
          </div>
          <div className="input-group">
          <label htmlFor="phone-number">Phone number </label>
          <input 
            type="tel" 
            id="phone-number" 
            name="phone-number" 
            placeholder="123-456-7890"
            value={phoneValue}
            onChange={handlePhoneChange}
            maxLength="12"
          />
          </div>
          <div className="input-group">
          <label htmlFor="address">Address </label>
          <input 
            type="text" 
            id="address" 
            name="address" 
            placeholder="123 Main St. Chicago, IL 60007"
            value={addressValue}
            onChange={handleAddressChange}
          />
          </div>
      </form>
      <div className="btn-section">
        <button className="main-btn cancel-btn" onClick={clearPersonalData}>Clear</button>
      </div>
    </Panel>
  );
}