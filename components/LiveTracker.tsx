import { useState, useEffect } from 'react';

export default function LiveTracker() {
  const [amount, setAmount] = useState(0);
  const target = 2000;
  const percentage = Math.min((amount / target) * 100, 100);

  useEffect(() => {
    // Simulate live updates - in production, this would fetch from an API
    const interval = setInterval(() => {
      // For now, just show static value
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tracker">
      <div className="tracker-top">
        <div className="tracker-amount">
          <span className="amount">€ {amount.toLocaleString()}</span>
          <span className="target">/ € {target.toLocaleString()}</span>
        </div>
        <div className="tracker-status">
          <span className="status-dot"></span>
          <span>Live</span>
        </div>
      </div>
      
      <div 
        className="bar" 
        role="progressbar" 
        aria-valuemin={0} 
        aria-valuemax={100} 
        aria-valuenow={percentage}
        aria-label={`Fortschritt ${percentage.toFixed(0)}%`}
      >
        <div className="bar-fill" style={{ width: `${percentage}%` }}></div>
        <div className="bar-glow" style={{ left: `${percentage}%` }}></div>
      </div>
      
      <div className="bar-labels">
        <span>{percentage.toFixed(0)}% funded</span>
        <span>€ {(target - amount).toLocaleString()} to go</span>
      </div>

      <div className="tracker-cta">
        <a href="https://buy.stripe.com/placeholder_template" className="mini-cta">
          🦊 Help Clio reach the goal →
        </a>
      </div>
    </div>
  );
}
