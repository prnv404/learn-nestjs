import { Injectable } from "@nestjs/common";

@Injectable()

export class AuthService {
    signup() {
        return { message:"Hello from signup"}
    }

    signin() {
        return {message:"Hello from signin"}
    }
}
  