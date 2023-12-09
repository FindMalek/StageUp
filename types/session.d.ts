export type SessionType = {
  id: string;
  name: string;
  email: string;
  image: string | null;
};

export type ErrorSessionType = {
  statusCode: number;
  title: string;
  description: string;
  button: string;
  link: string;
};
