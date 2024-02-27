import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Login } from '../models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { isFieldInvalid } from '../../utilities';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;

    form!: FormGroup;
    isFieldInvalid = isFieldInvalid;

    constructor(
        public layoutService: LayoutService,
        private formBuilder: FormBuilder
        ) {
            this.form = this.formBuilder.group(new Login())
        }

    submitForm(){
        this.form.markAllAsTouched();

        if(!this.form.valid){
            return;
        }

        localStorage.setItem('accessToken','ulala');
        console.log(this.form.value)
    }
}
