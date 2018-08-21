import {Injectable} from '@angular/core';
import {UserService, UserLoginRequest} from '@api/index';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {CONST} from '@const';
//import 'rxjs/add/operator/share';
import {share } from 'rxjs/operators';
import { Subscription } from '../../../../node_modules/rxjs';


@Injectable()
export class AuthenticationService
{
    private loggedIn = new BehaviorSubject<boolean>(false);

    constructor(private userService: UserService)
    {
        if(localStorage.getItem(CONST.LOCALSTORAGE_TOKEN_PATH)) 
        {
            this.loggedIn.next(true);
        }
    }

    get isLoggedIn():Observable<boolean>
    {
        return this.loggedIn.asObservable();
    }

    /**
     * Login in by username and password and set bearer token
     * @param {string} username
     * @param {string} password
     */
    login(username: string, password: string): any // Observable<any>
    {   
        let userLogin = <UserLoginRequest>{ login:username, password: password };
        let loginCall = this.userService.userControllerLogin(userLogin).pipe(share());
      
        loginCall.subscribe(authorization =>
        {
            if (authorization.length > 0)
            {
                localStorage.setItem(CONST.LOCALSTORAGE_TOKEN_PATH, authorization);
                this.loggedIn.next(true);
            }
        });    
        return loginCall;
    }

    /**
     * Logout by deleting the token
     */
    logout(): void
    {
        localStorage.removeItem(CONST.LOCALSTORAGE_TOKEN_PATH);
        this.loggedIn.next(false);
    }

}
