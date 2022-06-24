import { FC } from 'react';

type Props = {
  color: string;
  name: string;
};

const Label: FC<Props> = ({ color, name }) => (
  <a
    className={`bg-${color}-200 py-1 px-3 mb-2 rounded-2xl text-sm mr-2 text-${color}-700`}
    target='_blank'
    rel='noopener noreferrer'
    href={`https://github.com/tipy/${name}`}
  >
    {name}
  </a>
);

export default Label;
