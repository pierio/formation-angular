import { Client } from 'src/app/shared/models/client';

export const fakeClients: Client[] = [
  new Client(
    {
      id: '1',
      name: 'John Doe',
      email: 'jonh.doe@capgemini.com'
    }
  ),
  new Client(
    {
      id: '2',
      name: 'Jean Dupont',
      email: 'jean.dupont@capgemini.com'
    }
  ),
  new Client(
    {
      id: '3',
      name: 'Test Test',
      email: 'test.test@capgemini.com'
    }
  )
];
