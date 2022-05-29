import { IsEmail, Length } from "class-validator";

interface UserData {
    name: string, 
    email: string
}
 
export class CreateUserDto {
    @Length(4, 40)
    public name?: string;

    @IsEmail()
    public email?: string;

    constructor({ name, email }: UserData) {
        this.email = email;
        this.name = name;
    }
}