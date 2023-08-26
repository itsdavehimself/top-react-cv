import Panel from "./panel";
import { useState } from "react";

export default function PersonalInfoPanel({ title, isActive, onShow, personalForm, setPersonalForm }) {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  function handleFirstNameChange(e) {
    setNameValue(e.target.value);
  }
  
  function handleEmailChange(e) {
    setEmailValue(e.target.value);
  }

  function handlePhoneChange(e) {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneValue(formattedPhoneNumber);
  }

  function handleAddressChange(e) {
    setAddressValue(e.target.value);
  }

  function handleButtonClick() {
    setPersonalForm({
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      address: addressValue,
    })
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000)

  }

  function formatPhoneNumber(input) {
    const digitsOnly = input.replace(/\D/g, ''); // Remove non-digit characters
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
        <div className="name-input">
          <label htmlFor="name">Full name </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Ava Williams"
            value={nameValue}
            onChange={handleFirstNameChange}
          />
          <br></br>
          <label htmlFor="email">Email </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="avawilliams@gmail.com"
            value={emailValue}
            onChange={handleEmailChange}
          />
          <br></br>
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
          <br></br>
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
      {isSaved && (
        <p>Saved!</p>
      )}
      <button onClick={handleButtonClick}>Save</button>
    </Panel>
  );
}