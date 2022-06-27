import tipyLogo from './assets/tipy-logo.png';
import Label from './components/Label';
import { t } from '@tipy/locale';
import { useEffect } from 'react';

const App = () => (
  <div className='w-full h-full max-w-md flex flex-col justify-center items-center'>
    <img src={tipyLogo} alt='Tipy logo' className='w-10 mb-4' />
    <h2 className='text-center mb-4 font-mono'>{t('description')}</h2>

    <div className='flex flex-row flex-wrap'>
      <Label color='indigo' name='website' />
      <Label color='green' name='convert' />
      <Label color='fuchsia' name='locale' />
    </div>
  </div>
);

export default App;
