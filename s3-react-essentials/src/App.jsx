import { useState } from 'react';
import Card from './components/Card';
import CoreConcepts from './components/CoreConcepts';
import CourseGoal from './components/CourseGoal';
import Header from './components/Header';
import LoginForm, { user } from './components/LoginForm';
import MainGoal from './components/MainGoal';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS, COURSE_GOALS, REACT_DESCRIPTIONS, TAB_BUTTONS, EXAMPLES } from './data';
import { getRandomIndex } from './utils';

export const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];

function Todo({ text })
{
  return <li>{text}</li>;
}

function App()
{
  const headerDisclaimer = `${REACT_DESCRIPTIONS[getRandomIndex(2)]} React concepts you will need for almost any app you are going to build!`;
  const headerTitle = "React Essentials";

  const [selectedButton, setSelectedButton] = useState();

  let tabContent = selectedButton ? (
    <>
      <h3>{selectedButton.title}</h3>
      <p>{selectedButton.description}</p>
      <Card>
        <pre>
          <code>
            {selectedButton.code}
          </code>
        </pre>
      </Card>
    </>
  ) : (
    <p>👆🏻 Select a Topic</p>
  )

  function handleLogin()
  {
    user.email = 'test@mail.com';
    user.password = '1234';
    user.loggedIn = true;
  }

  function handleSelect(tabSelected)
  {
    setSelectedButton(EXAMPLES[tabSelected.toLowerCase()]);
  }

  return (
    <div>
      <Header Title={headerTitle} Disclaimer={headerDisclaimer} />
      <main>
        <h2>Time to get started!</h2>
        <MainGoal />
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => <CoreConcepts key={concept.title} {...concept} />)}
          </ul>
        </section>
        <section id='examples'>
          <menu>
            {
              TAB_BUTTONS.map((button, index) => (
                <TabButton isActive={(selectedButton && selectedButton.title === button) ? "active" : ""} key={index} onSelectButtonTab={() => handleSelect(button)}>
                  {button}
                </TabButton>
              )
              )
            }
          </menu>
          <div id="tab-content">
            {tabContent}
          </div>
        </section>
        {/* Exercises Codes */}
        <section id="course-goals">
          <h2>Course Goals Exercise</h2>
          <ul>
            {COURSE_GOALS.map((goal, index) => <CourseGoal key={index} title={goal.title} description={goal.description} />)}
          </ul>
        </section>
        <section>
          <h2>Available Experts Exercise (Cards)</h2>
          <Card title="Anthony Blake">
            <p>
              Blake is a professor of Computer Science at the University of
              Illinois.
            </p>
            <p>
              <a href="mailto:blake@example.com">Email Anthony</a>
            </p>
          </Card>
          <Card title="Maria Miles">
            <p>
              Maria is a professor of Computer Science at the University of
              Illinois.
            </p>
            <p>
              <a href="mailto:blake@example.com">Email Maria</a>
            </p>
          </Card>
        </section>
        <section>
          <h2>Login Form Exercise</h2>
          <LoginForm onLogin={handleLogin} />
        </section>
        <section>
          <h2>DUMMY TODOS EXERCISE</h2>
          {
            DUMMY_TODOS.map((toDoItem) => <Todo key={toDoItem} text={toDoItem} />)
          }
        </section>
      </main>
    </div>
  );
}

export default App;
