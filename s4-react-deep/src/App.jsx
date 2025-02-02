import CoreConcepts from './components/CoreConcepts';
import Header from './components/Header';
import MainGoal from './components/MainGoal';
import Examples from './components/Examples';

import LoginForm, { user } from './components/LoginForm';
import AvailableExperts from './components/AvailableExperts';
import Input from './components/Input';
import Section from './components/Section';
import Button from './components/Button';
import HomeIcon from './components/IconHome';
import PlusIcon from './components/IconPlus';
import CourseGoal from './components/CourseGoal';
import Review from './components/Review';

import { useState } from 'react';

export const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];


function App()
{

  function handleLogin()
  {
    user.email = 'test@mail.com';
    user.password = '1234';
    user.loggedIn = true;
  }

  const [feedback, setFeedback] = useState('');
  const [studentName, setStudentName] = useState('');

  const handleChange = (event) =>
  {
    if (event.target.localName === "textarea")
    {
      setFeedback(event.target.value);
    }
    if (event.target.localName === "input")
    {
      setStudentName(event.target.value);
    }
  }


  return (
    <>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <MainGoal />
        <CoreConcepts />
        <Examples />

        {/* Exercises Codes */}
        <CourseGoal />
        <AvailableExperts />
        <Section>
          <h2>Login Form Exercise</h2>
          <LoginForm onLogin={handleLogin} />
        </Section>
        <Section title="Inputs exercise (Condicional rendering)">
          <Input type="text" placeholder="Your name" />
          <Input richText placeholder="Your message" />
        </Section>

        <Section title="Highly reusable custom Button">
          <section>
            <h2>Filled Button (Default)</h2>
            <p>
              <Button>Default</Button>
            </p>
            <p>
              <Button mode="filled">Filled (Default)</Button>
            </p>
          </section>
          <section>
            <h2>Button with Outline</h2>
            <p>
              <Button mode="outline">Outline</Button>
            </p>
          </section>
          <section>
            <h2>Text-only Button</h2>
            <p>
              <Button mode="text">Text</Button>
            </p>
          </section>
          <section>
            <h2>Button with Icon</h2>
            <p>
              <Button Icon={HomeIcon}>Home</Button>
            </p>
            <p>
              <Button Icon={PlusIcon} mode="text">
                Add
              </Button>
            </p>
          </section>
          <section>
            <h2>Buttons Should Support Any Props</h2>
            <p>
              <Button mode="filled" disabled>
                Disabled
              </Button>
            </p>
            <p>
              <Button onClick={() => console.log('Clicked!')}>Click me</Button>
            </p>
          </section>
        </Section>
        <Section title="Two-Way Binding Exercise">
          <section id="feedback">
            <h2>Please share some feedback</h2>
            <p>
              <label>Your Feedback</label>
              <textarea value={feedback} onChange={handleChange} />
            </p>
            <p>
              <label>Your Name</label>
              <input type="text" value={studentName} onChange={handleChange} />
            </p>
          </section>
          <section id="draft">
            <h2>Your feedback</h2>
            <Review feedback={feedback} student={studentName} />
            <p>
              <button>Save</button>
            </p>
          </section>
        </Section>
      </main>
    </>
  );
}

export default App;
