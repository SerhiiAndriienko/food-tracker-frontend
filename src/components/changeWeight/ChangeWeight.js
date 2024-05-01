import { CloseBtn, Container } from './ChangeWeight.styled';

export default function ChangeWeight({ toggleWeightclick }) {
  return (
    <Container>
      <h2>Enter your current weight</h2>
      <p>You can record your weight once a day</p>
      <p>
        Today
        <span> 05.06.2023</span>
      </p>
      <div>
        <input placeholder="Enter your weight"></input>
        <button>Confirm</button>
      </div>
      <CloseBtn
        src="https://andriizlt.github.io/healthyHub-frontend/static/media/close-circle.73bdd9e6ab202aa8197dc65002a783d9.svg"
        alt="close"
        onClick={toggleWeightclick}
      />
    </Container>
  );
}
