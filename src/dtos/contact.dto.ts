import { IsEmail, Length } from "class-validator";

interface ContactData {
    name: string, 
    email: string
}
 
export class CreateContactDto {
    @Length(4, 40)
    public name?: string;

    @IsEmail()
    public email?: string;

    constructor({ name, email }: ContactData) {
        this.email = email;
        this.name = name;
    }
}