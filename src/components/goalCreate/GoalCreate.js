import {
  Buttons,
  Container,
  DatePickerWrapper,
  GlobalStyle,
  GoalInputs,
  GoalList,
  InsideContainer,
  Label,
  MainImage,
  NextBtn,
  PrevBtn,
  RadioButton,
  SomeInputs,
  StyledDatePicker,
} from './GoalCreate.styled';
import step1 from '../../public/img/Illustration Goals.webp';
import step2 from '../../public/img/Illustration gender and age.webp';
import step3 from '../../public/img/Illustration  Body parameters.webp';
import step4 from '../../public/img/Illustration Activity.webp';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../redux/redux/userSlice/operation';
import { useNavigate } from 'react-router-dom';
import { createDayInDB } from '../../redux/redux/daySlice/operation';
export default function GoalCreate() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: 'Lose Fat',
    gender: 'Female',
    height: '',
    dob: null,
    weight: '',
    activity: 'Low',
  });

  const nextStep = () => {
    setStep(step + 1);
    console.log(formData);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}.${month}.${year}`;
  }
  const handleDateChange = date => {
    setFormData({ ...formData, dob: formatDate(date) });
    setStartDate(date);
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const saveDataToDatabase = async data => {
    try {
      const response = await dispatch(setUserData({ userId, data }));
      if (!response.error) {
        const createDay = await dispatch(createDayInDB(userId));
        if (!createDay.error) {
          navigate('/home');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <Container>
      {step === 1 && (
        <InsideContainer>
          <MainImage src={step1} alt="MainImage" />
          <GoalList>
            <h1>Your goal</h1>
            <p>Choose a goal so that we can help you effectively</p>
            <GoalInputs>
              <Label>
                <RadioButton
                  type="radio"
                  name="goal"
                  value="Lose Fat"
                  onChange={handleChange}
                  checked={formData.goal === 'Lose Fat'}
                />
                Lose Fat
              </Label>
              <Label>
                <RadioButton
                  type="radio"
                  name="goal"
                  value="Maintain"
                  onChange={handleChange}
                />
                Maintain
              </Label>
              <Label>
                <RadioButton
                  type="radio"
                  name="goal"
                  value="Gain Muscle"
                  onChange={handleChange}
                  onChecked={formData.goal === 'Gain Muscle'}
                />
                Gain Muscle
              </Label>
            </GoalInputs>
            <Buttons>
              {step < 4 && <NextBtn onClick={nextStep}>Next</NextBtn>}
              {step === 4 && (
                <NextBtn onClick={() => saveDataToDatabase(formData)}>
                  Sign Up
                </NextBtn>
              )}

              <PrevBtn disabled={step === 1} step={step} onClick={prevStep}>
                Back
              </PrevBtn>
            </Buttons>
          </GoalList>
        </InsideContainer>
      )}
      {step === 2 && (
        <InsideContainer>
          <MainImage src={step2} alt="MainImage" />
          <GoalList>
            <h1>Select gender, Age</h1>
            <p>Choose a goal so that we can help you effectively</p>
            <GoalInputs>
              <Label>
                <RadioButton
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  checked={formData.gender === 'Female'}
                />
                Female
              </Label>
              <Label>
                <RadioButton
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  checked={formData.gender === 'Male'}
                />
                Male
              </Label>
            </GoalInputs>
            <div>Date of birth</div>
            <DatePickerWrapper>
              <GlobalStyle />
              <StyledDatePicker
                selected={startDate ? new Date(startDate) : null}
                onChange={handleDateChange}
                showMonthDropdown
                showYearDropdown
                dateFormat="dd/MM/yyyy"
                dropdownMode="select"
                placeholderText="Select your birth date"
              />
            </DatePickerWrapper>
            <Buttons>
              {step < 4 && <NextBtn onClick={nextStep}>Next</NextBtn>}
              {step === 4 && (
                <NextBtn onClick={() => saveDataToDatabase(formData)}>
                  Sign Up
                </NextBtn>
              )}

              <PrevBtn disabled={step === 1} step={step} onClick={prevStep}>
                Back
              </PrevBtn>
            </Buttons>
          </GoalList>
        </InsideContainer>
      )}
      {step === 3 && (
        <InsideContainer>
          <MainImage src={step3} alt="MainImage" />
          <GoalList>
            <h1>Body parameters</h1>
            <p>Enter your parameters for correct performance tracking</p>
            <div>
              <label>
                <span>Height</span>
                <SomeInputs
                  type="text"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  placeholder="Enter your height"
                />
              </label>
            </div>
            <div>
              <label>
                <span>Weight</span>
                <SomeInputs
                  type="text"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="Enter your weight"
                />
              </label>
            </div>
            <Buttons>
              {step < 4 && <NextBtn onClick={nextStep}>Next</NextBtn>}
              {step === 4 && (
                <NextBtn onClick={() => saveDataToDatabase(formData)}>
                  Sign Up
                </NextBtn>
              )}

              <PrevBtn disabled={step === 1} step={step} onClick={prevStep}>
                Back
              </PrevBtn>
            </Buttons>
          </GoalList>
        </InsideContainer>
      )}
      {step === 4 && (
        <InsideContainer>
          <MainImage src={step4} alt="MainImage" />
          <div>
            <h1>Your Activity</h1>
            <p>To correctly calculate calorie and water intake</p>
            <GoalInputs>
              <Label>
                <RadioButton
                  type="radio"
                  name="activity"
                  value="Low"
                  checked={formData.activity === 'Low'}
                  onChange={handleChange}
                />
                If you do not have physical activity and sedentary work
              </Label>
              <Label>
                <RadioButton
                  type="radio"
                  name="activity"
                  value="Light"
                  checked={formData.activity === 'Light'}
                  onChange={handleChange}
                />
                If you do short runs or light gymnastics 1-3 times a week
              </Label>
              <Label>
                <RadioButton
                  type="radio"
                  name="activity"
                  value="Moderate"
                  checked={formData.activity === 'Moderate'}
                  onChange={handleChange}
                />
                If you play sports with average loads 3-5 times a week
              </Label>
              <Label>
                <RadioButton
                  type="radio"
                  name="activity"
                  value="High"
                  checked={formData.activity === 'High'}
                  onChange={handleChange}
                />
                If you train fully 6-7 times a week
              </Label>
              <Label>
                <RadioButton
                  type="radio"
                  name="activity"
                  value="Very High"
                  checked={formData.activity === 'Very High'}
                  onChange={handleChange}
                />
                If your work is related to physical labor, you train 2 times a
                day and include strength exercises in your training program{' '}
              </Label>
            </GoalInputs>
            <Buttons>
              {step < 4 && <NextBtn onClick={nextStep}>Next</NextBtn>}
              {step === 4 && (
                <NextBtn onClick={() => saveDataToDatabase(formData)}>
                  Sign Up
                </NextBtn>
              )}

              <PrevBtn disabled={step === 1} step={step} onClick={prevStep}>
                Back
              </PrevBtn>
            </Buttons>
          </div>
        </InsideContainer>
      )}
    </Container>
  );
}
