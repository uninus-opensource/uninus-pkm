import { FC, ReactElement } from 'react';
import { clsx } from 'clsx';
import { match } from 'ts-pattern';
import { BiErrorCircle, BiCheckCircle } from 'react-icons/bi';
import { TMessage } from '@psu/entities';

export const Message: FC<TMessage> = (props): ReactElement => {
  const { status = 'default' } = props;

  const statusIcon = match(status)
    .with('error', () => <BiErrorCircle />)
    .with('success', () => <BiCheckCircle />)
    .with('warning', () => <BiErrorCircle />)
    .with('default', () => null)
    .otherwise(() => null);

  const className = clsx(
    'text-xs flex items-center pt-1 gap-x-1 mt-[-7px]',
    {
      'text-red': status === 'error',
      'text-primary': status === 'success',
      'text-grey': status === 'default',
      'text-secondary-60%': status === 'warning',
    },
    props.className
  );

  return (
    <span className={className} {...props}>
      {statusIcon}
      {props.children}
    </span>
  );
};
