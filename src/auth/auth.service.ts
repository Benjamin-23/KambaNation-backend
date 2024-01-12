import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: any, password: string) {
    const user = await this.userRepository.findOneBy({ email });

    if (!password) {
      throw new UnauthorizedException('We need token to authorize');
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
