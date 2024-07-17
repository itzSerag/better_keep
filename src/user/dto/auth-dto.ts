import { IsEmail, IsNotEmpty } from "class-validator";


class auth {

    @IsEmail()
    @IsNotEmpty()
    email : string

    @IsNotEmpty()
    password : string
}


export class SignupDto extends auth{

    @IsNotEmpty()
    fname : string

    @IsNotEmpty()
    lname : string

}


export class LoginDto extends auth {

    
}