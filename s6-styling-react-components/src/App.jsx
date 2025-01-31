import AuthInputs from './components/AuthInputs.jsx';
import DynamicStyle from './components/DynamicStyle.jsx';
import Header from './components/Header.jsx';
import InlineExercise from './components/InlineExercise.jsx';

export default function App()
{
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
      <InlineExercise />
      <DynamicStyle />
    </>
  );
}
