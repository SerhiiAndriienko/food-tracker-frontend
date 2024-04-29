import React from 'react';
import { Link } from 'react-router-dom';
export default function DailyGoal() {
  return (
    <div>
      <p>Today</p>
      <Link>On the way to the goal</Link>
      <div>
        <img
          alt="buble"
          src="https://andriizlt.github.io/healthyHub-frontend/static/media/bubble.3b2e6986df7fcf539bc5e73bed7ca1ce.svg"
        />

        <span>Calories</span>
        <span>1000</span>
      </div>

      <div>
        <img
          src="https://andriizlt.github.io/healthyHub-frontend/static/media/milk.a0eacd57b86b0ba2f6c6a392b77da7f8.svg"
          alt="milk"
        />
        <span>Water</span>
        <span>500</span>
      </div>
    </div>
  );
}
