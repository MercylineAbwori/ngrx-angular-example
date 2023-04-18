import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../ng-store/app.reducer';
import * as AuthActions from '../../auth/store/auth/auth.actions';
import { TestMockHttpResponseInterface } from 'src/app/core/testing_utils/http_utils/http_mock';
import { AppUrls } from 'src/app/core/api_urls/api_urls';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit{

  public submitted = false;
  errorMessage: string = null;
  // Form error message variables
    emailErrorMessage: string = null
    passwordErrorMessage: string = null

  signInForm:any= FormGroup;

  constructor(
    public router : Router,
    private formBuilder: FormBuilder,
    private store: Store<fromApp.AppState>,
  ) { }

  testMockedHttpResponse: TestMockHttpResponseInterface = null;

  
  get formControl() {
    return this.signInForm.controls;
  }

  ngOnInit(): void {
    // Perform clear error incase there is hanging error
    this.store.dispatch(new AuthActions.ClearError());

    this.signInForm = this.formBuilder.group({
      username: ['', [Validators.email, Validators.required]],
      password: [
        '', [Validators.required,
          Validators.pattern(
            "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
          )
        ]
      ]
    });
  }
  
  onLogin(): void {
    // console.log(this.loginForm.value);
    this.submitted = true;
    if (this.signInForm.valid) {
      console.log(this.signInForm.value);
      localStorage.setItem("user-Data", JSON.stringify(this.signInForm.value));
      this.router.navigate(['/store-list']);
      this.store.dispatch(
        new AuthActions.LoginStart(
            { 
                requestData: {
                    email: this.signInForm.value.username, 
                    password: this.signInForm.value.password
                },
                requestUrl: this.getApiRequestUrl(),
                testMockedHttpResponse: this.testMockedHttpResponse
            })
    );
    }
  }
  getApiRequestUrl(){
    return AppUrls.loginUrl();
  }

}
