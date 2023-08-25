import Panel from "./panel";

export default function PersonalInfoPanel({ title, isActive, onShow }) {
  return (
    <Panel title={title} isActive={isActive} onShow={onShow}>
      <form className="personal-info">
        <div className="name-input">
          <label htmlFor="name">Full name </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Ava Williams"
          />
          <br></br>
          <label htmlFor="email">Email </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="avawilliams@gmail.com"
          />
          <br></br>
          <label htmlFor="phone-number">Phone number </label>
          <input 
            type="tel" 
            id="phone-number" 
            name="phone-number" 
            placeholder="123-456-7890"
          />
          <br></br>
          <label htmlFor="address">Address </label>
          <input 
            type="text" 
            id="address" 
            name="address" 
            placeholder="123 Main St. Chicago, IL 60007"
          />
        </div>
      </form>
    </Panel>
  );
}