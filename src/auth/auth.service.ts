import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
   constructor(private readonly userService : UserService) {} 
  register(registerDto : RegisterDto) {
   const user = this.userService.getUserByEmail(registerDto.email);
    return user;
  }
}




// 1 . check email already exists
// 2 . hash the password (bcrypt)
// 3 . create the user in the database
// 4 . generate and return JWT token
