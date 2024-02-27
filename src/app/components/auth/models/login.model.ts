import { FormControl, Validators } from "@angular/forms";

export class Login {
    email = new FormControl(null, [Validators.required, Validators.email]);
    password = new FormControl(null, Validators.required);
}

// export interface LoginInterface {
//     username: string;
//     password: string;
// }

export interface LoginResponseInterface {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
    token_type: string;
}
