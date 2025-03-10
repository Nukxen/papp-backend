import { Injectable } from '@nestjs/common';
import { Code } from 'src/scripts/id-gen';

@Injectable()
export class UserService {
  constructor(private readonly code: Code) {}
  

  createUser(data) {
    console.log(data);
  }
  updateUserData(data) {
    console.log(data);
  }
  deleteUserData(data) {
    console.log(data);
  }
  addFavoriteUser(data) {
    console.log(data);
  }
}
