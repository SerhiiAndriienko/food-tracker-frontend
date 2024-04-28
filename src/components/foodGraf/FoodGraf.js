import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function FoodGraf() {
  const percentage = 66;

  return (
    <>
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar
          value={percentage}
          text={`Calories:${percentage}`}
        />
      </div>
      <div style={{ width: 60, height: 60 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <div>
        Carbohydrates
        <div>
          <span>Goal: 170</span>
          <span>Left: 170</span>
        </div>
      </div>
      <div style={{ width: 60, height: 60 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <div>
        Protein
        <div>
          <span>Goal: 170</span>
          <span>Left: 170</span>
        </div>
      </div>
      <div style={{ width: 60, height: 60 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <div>
        Fat
        <div>
          <span>Goal: 170</span>
          <span>Left: 170</span>
        </div>
      </div>
    </>
  );
}
