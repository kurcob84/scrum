import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthenticationService} from '../../services';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate
{
    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    {
        return this.authenticationService.isLoggedIn
            .take(1)
            .map((isLoggedIn: boolean) => 
            {
                if (!isLoggedIn)
                {
                    this.router.navigate(['/']);
                    return false;
                }
                return true;
            });
    }
}
