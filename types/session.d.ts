export type UserType = {
  id: string;
  name: string;
  email: string;
  image: string;
  isIntern: boolean;
  isEnterprise: boolean;
};

type SessionData = {
  user: UserType;
  expires: string;
};

export type SessionType = {
  data: SessionData | null;
  status: 'authenticated' | 'loading' | 'unauthenticated';
};

export type ErrorSessionType = {
  statusCode: number;
  title: string;
  description: string;
  button: string;
  link: string;
};
