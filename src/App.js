import './App.css';
import hero from './images/illustration-hero.svg';
import PlanSelection from './PlanSelection';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="img-container">
          <img src={hero} alt="person listening to music" className="image-hero" />
        </div>
        <div className="order-header">Order Summary</div>
        <div className="order-description">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </div>
        <PlanSelection />
        <button className="confirm button">Proceed To Payment</button>
        <div className="cancel">
          <button className="cancel-text button">Cancel Order</button>
        </div>
      </div>
      <div className="color-bottom"></div>
    </div>
  );
}

export default App;
