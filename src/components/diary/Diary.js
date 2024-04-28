import { Link } from 'react-router-dom';

export default function Diary() {
  return (
    <>
      <p>Diary</p>
      <Link>See more</Link>
      <img src="https://andriizlt.github.io/healthyHub-frontend/static/media/breakfast.f1ff39ce6a18fb4d909722e48c944518.svg" />
      <p>Breakfast</p>
      <button>+ Record your meal</button>
      <img src="https://andriizlt.github.io/healthyHub-frontend/static/media/lunch.30f0a0599d84d0a170fe6c53fbe282f5.svg" />

      <p>Lunch</p>

      <button>+ Record your meal</button>
      <img src="https://andriizlt.github.io/healthyHub-frontend/static/media/dinner.548e66b9d3a3ed31fbeb5279ee2dd299.svg" />

      <p>Dinner</p>

      <button>+ Record your meal</button>
      <img src="https://andriizlt.github.io/healthyHub-frontend/static/media/snack.ab1ecdcc3d6f3609639a77576cf8628d.svg" />

      <p>Snack</p>
      <button>+ Record your meal</button>
    </>
  );
}
