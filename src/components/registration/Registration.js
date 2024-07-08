import {
  Buttons,
  Container,
  GoalList,
  InsideContainer,
  SomeButtons,
  SomeInputs,
  WelcomeImage,
} from './Registration.styled';
import welcomeImg from '../../public/img/welcomeImage.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import {
  fetchUser,
  loginUser,
  registerUser,
} from '../../redux/redux/userSlice/operation';
export default function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sign, setSign] = useState(null);
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const singIn = () => {
    setSign(false);
  };
  const singUp = () => {
    setSign(true);
  };
  const validateInputs = () => {
    let isValid = true;

    if (!email) {
      toast.error('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Email is invalid');
      isValid = false;
    }

    if (!password) {
      toast.error('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      isValid = false;
    }

    if (sign === true && !userName) {
      toast.error('User name is required');
      isValid = false;
    }

    return isValid;
  };

  const handleNextClick = async () => {
    if (sign === true && validateInputs()) {
      try {
        const register = await dispatch(
          registerUser({ userName, email, password })
        );
        if (register.payload === 409) {
          return toast.error('User already exist');
        }
        if (!register.error) {
          if (register.payload.id) {
            sessionStorage.setItem('userId', register.payload.id);
            sessionStorage.setItem('userToken', register.payload.token);
            await dispatch(
              fetchUser({
                id: register.payload.id,
                token: register.payload.token,
              })
            );
            navigate('/goal');
          }
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else if (sign === false && validateInputs()) {
      try {
        const res = await dispatch(loginUser({ email, password }));
        if (res.payload === 'Request failed with status code 401') {
          toast.error('User name or password is incorrect');
        }
        const login = await dispatch(
          fetchUser({ id: res.payload.id, token: res.payload.token })
        );
        if (login.payload.id) {
          sessionStorage.setItem('userId', res.payload.id);
          sessionStorage.setItem('userToken', res.payload.token);

          navigate('/home');
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <Container>
      <WelcomeImage src={welcomeImg} alt="WelcomeImage" />
      {sign === null && (
        <InsideContainer>
          <h1>Set goals and achieve them</h1>
          <p>The service will help you set goals and follow them.</p>
          <Buttons>
            <SomeButtons value="signIn" onClick={singIn}>
              Sign In
            </SomeButtons>
            <SomeButtons value="signUp" onClick={singUp}>
              Sign Up
            </SomeButtons>
          </Buttons>
          <GoalList>
            <div>
              <li>
                <span>Set goals</span>
              </li>
              <li>
                <span>Watch your calories</span>
              </li>
            </div>
            <div>
              <li>
                <span>Keep track of your water intake</span>
              </li>
              <li>
                <span>Control your weight</span>
              </li>
            </div>
          </GoalList>
        </InsideContainer>
      )}
      {sign === true && (
        <InsideContainer>
          <h1>Sing Up</h1>
          <p>You need to register to use the service</p>
          <SomeInputs
            type="text"
            placeholder="Name"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <SomeInputs
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <SomeInputs
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <SomeButtons onClick={handleNextClick} value="next">
            Next
          </SomeButtons>

          <p>Do you already have an account?</p>
          <SomeButtons value="signUp" onClick={singIn}>
            Sign In
          </SomeButtons>
        </InsideContainer>
      )}
      {sign === false && (
        <InsideContainer>
          <h1>Sing In</h1>
          <p>You need to register to use the service</p>
          <SomeInputs
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <SomeInputs
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <SomeButtons onClick={handleNextClick} value="next">
            Next
          </SomeButtons>

          <p>If you don't have an account yet?</p>
          <SomeButtons value="signUp" onClick={singUp}>
            Sign Up
          </SomeButtons>
        </InsideContainer>
      )}
      <ToastContainer />
    </Container>
  );
}
