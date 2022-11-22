export interface IAuthenticatedUser {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly profilePic: string;
}

export const AuthenticatedUser: IAuthenticatedUser = Object.freeze({
  firstName: 'Wisdom',
  lastName: 'Surname',
  email: 'wisdom@gmail.com',
  phoneNumber: '0901122334',
  profilePic: '/assets/images/anonymous.jpeg',
  id: 'jhy789y78iu78'
});
