import {Fit} from '@rive-app/react-canvas';
import {useState} from 'react';

import ShimmerComponent from './ShimmerComponent';

import './App.css';

const Shapes = {
  RECTANGLE: 'Rectangle',
  CIRCLE: 'Circle',
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const heading = isLoaded ? (
    <>
      <img className="avatar" src="https://cdn.britannica.com/13/24313-004-0861FD8C/lightning-discharge-branches-channel.jpg?w=400&h=300&c=crop" alt="avatar" />
      <h3>Hi, I'm Paul!</h3>
    </>
  ) : (
    <>
      <ShimmerComponent className="avatar" shape={Shapes.CIRCLE} shimmerPct={100} />
      <ShimmerComponent className="name" fit={Fit.FitHeight} shape={Shapes.RECTANGLE} shimmerPct={60} />
    </>    
  );

  const BioLine1 = isLoaded ? (
    <h4 style={{fontWeight: "600"}}>This is my bio card</h4>
  ) : (
    <ShimmerComponent fit={Fit.FillWidth} className="skinny-card-line" shape={Shapes.RECTANGLE} shimmerPct={50} />
  );

  const BioLine2 = isLoaded ? (
    <p>It isn't exciting here...</p>
  ) : (
    <ShimmerComponent fit={Fit.FillWidth} className="skinny-card-line" shape={Shapes.RECTANGLE} shimmerPct={80} />
  );

  const BioLine3 = isLoaded ? (
    <p>But look at those shimmers!</p>
  ) : (
    <ShimmerComponent fit={Fit.FillWidth} className="skinny-card-line" shape={Shapes.RECTANGLE} shimmerPct={100} />
  );

  const footer = isLoaded ? (
    <small className="card-footer">Now go forth and make shimmer loaders with <a href="https://rive.app">Rive</a>!</small>
  ) : (
    <ShimmerComponent fit={Fit.FillWidth} className="skinny-card-line card-footer" shape={Shapes.RECTANGLE} shimmerPct={70} />
  );

  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <div className="avatar-and-name">
            {heading}
          </div>
          {BioLine1}
          {BioLine2}
          {BioLine3}
          <br />
          {footer}
        </div>
        <button className="toggle-btn" onClick={() => setIsLoaded(!isLoaded)}>{isLoaded ? 'Back to shimmers' : 'Load data'}</button>
      </header>
    </div>
  );
}

export default App;
