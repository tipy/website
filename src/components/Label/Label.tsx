import { FC } from 'react';

type Props = {
  color: 'indigo' | 'green' | 'fuchsia' | 'yellow';
  name: string;
};

const colors = {
  indigo: {
    bg: 'bg-indigo-200',
    text: 'text-indigo-700',
  },
  green: {
    bg: 'bg-green-200',
    text: 'text-green-700',
  },
  fuchsia: {
    bg: 'bg-fuchsia-200',
    text: 'text-fuchsia-700',
  },
  yellow: {
    bg: 'bg-yellow-200',
    text: 'text-yellow-700',
  },
};

const Label: FC<Props> = ({ color, name }) => (
  <a
    className={`${colors[color].bg} py-1 px-3 mb-2 rounded-2xl text-sm mr-2 ${colors[color].text}`}
    target='_blank'
    rel='noopener noreferrer'
    href={`https://github.com/tipy/${name}`}
  >
    {name}
  </a>
);

export default Label;
