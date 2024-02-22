import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: any, password: string) {
    const user = await this.userRepository.findOneBy({ email });
    const hash = await bcrypt.hash(password, 10);
    const isMatch = await bcrypt.compare(password, hash);

    if (!isMatch) {
      throw new UnauthorizedException('Token is needed to authorize');
    }
    const payload = {
      sub: user.id,
      userEmail: user.email,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
