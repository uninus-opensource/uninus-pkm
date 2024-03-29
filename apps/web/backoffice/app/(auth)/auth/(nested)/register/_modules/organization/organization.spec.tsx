import { PropsWithChildren } from 'react';
import { AuthRegisterOrganizationModule } from '.';
import { render } from '@testing-library/react';
import { TMetaErrorResponse } from '@psu/entities';

jest.mock('drizzle-orm/node-postgres', () => ({
  drizzle: jest.fn(() => ({})),
}));

jest.mock('next/image', () => ({
  Image: jest.fn(() => <></>),
}));

jest.mock('pg', () => {
  return {
    Pool: jest.fn(() => ({})),
  };
});

jest.mock('react-avatar', () => ({
  Avatar: jest.fn(() => <></>),
}));

jest.mock('next/link', () => ({
  Link: jest.fn(() => <></>),
}));

jest.mock('react-select', () => ({
  Select: jest.fn(() => <></>),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));
jest.mock('@tanstack/react-query', () => {
  return {
    useQuery: jest.fn(),
    useMutation: jest.fn(),
  };
});

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  Controller: () => <></>,
  useFormContext: () => ({}),
  useContext: () => ({}),
  useForm: () => ({
    control: {
      register: jest.fn(),
      unregister: jest.fn(),
      getFieldState: jest.fn(),
      _names: {
        array: new Set('test'),
        mount: new Set('test'),
        unMount: new Set('test'),
        watch: new Set('test'),
        focus: 'test',
        watchAll: false,
      },
      _subjects: {
        watch: jest.fn(),
        array: jest.fn(),
        state: jest.fn(),
      },
      _getWatch: jest.fn(),
      _formValues: ['test'],
      _defaultValues: ['test'],
    },
    formState: {
      errors: {
        email: {
          message: 'Email tidak valid',
        },
        password: {
          message: 'Kata sandi wajib diisi',
        },
      },
    },
    handleSubmit: () => jest.fn(),
  }),
}));

jest.mock('react');
jest.mock(
  'next/link',
  () =>
    ({ children }: PropsWithChildren) =>
      children
);
jest.mock(
  'react-select',
  () =>
    ({ children }: PropsWithChildren) =>
      children
);

jest.mock('next-usequerystate', () => ({ useQueryState: () => ({}) }));

describe('Auth Register Personal Module', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(
      <AuthRegisterOrganizationModule errorData={{} as TMetaErrorResponse} />
    );
    expect(baseElement).toBeTruthy();
  });
});
