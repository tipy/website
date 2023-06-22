import { t } from '@tipy/locale';

import tipyLogo from './assets/tipy-logo.png';
import Label from './components/Label';

const App = () => (
  <div className='w-full h-full max-w-md flex flex-col justify-center items-center'>
    <img src={tipyLogo} alt='Tipy logo' className='w-10 mb-4' />
    <h2 className='text-center mb-4 font-mono'>{t('main.description')}</h2>

    <div className='flex flex-row flex-wrap'>
      <Label color='indigo' name='website' />
      <Label color='green' name='convert' />
      <Label color='fuchsia' name='locale' />
      <Label color='yellow' name='observable' />
    </div>

    <div className='flex flex-col items-center mt-6'>
      <span className='text-sm'>You wanna buy me a coffee? ☕</span>
      <a
        href='https://www.paypal.com/donate/?hosted_button_id=RAY2DYX7MCTGJ'
        target='_blank'
        className='p-2 px-4 mt-2 bg-indigo-600 text-white rounded-3xl shadow-sm cursor-pointer hover:bg-indigo-500 text-sm'
      >
        Donate via PayPal
      </a>
    </div>
  </div>
);

export default App;
