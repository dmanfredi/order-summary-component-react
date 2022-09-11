import note from './images/icon-music.svg';

const PlanSelection = () => {
  return (
    <div className="plan-container">
      <div className="left-container">
        <div className="music-image-container">
          <img src={note} alt="" className="music-image" />
        </div>
        <div className="details-container">
          <div className="plan-name">Annual Plan</div>
          <div className="plan-cost">$59.99/year</div>
        </div>
      </div>
      <button className="change-plan button">Change</button>
    </div>
  );
};

export default PlanSelection;
