import tipyLogo from './assets/tipy-logo.png';
import Label from './components/Label';

const App = () => (
  <div className='w-full h-full max-w-md flex flex-col justify-center items-center'>
    <img src={tipyLogo} alt='Tipy logo' className='w-10 mb-4' />
    <h2 className='text-center mb-4 font-mono'>
      Tipy provides a set of useful libs to help developers on their daily basis
      tasks.
    </h2>

    <div className='flex flex-row flex-wrap'>
      <Label color='indigo' name='website' />
      <Label color='green' name='convert' />
      <Label color='fuchsia' name='locale' />
    </div>
  </div>
);

export default App;
