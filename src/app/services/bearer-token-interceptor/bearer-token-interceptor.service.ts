import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import {CONST} from '@const';

@Injectable()
export class BearerTokenInterceptorService implements HttpInterceptor
{

    constructor()
    {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {

        // Clone the request to add the new header.
        const token = localStorage.getItem( CONST.LOCALSTORAGE_TOKEN_PATH);

        let changedRequest: HttpRequest<any>;
        if (token) 
        {
            changedRequest = req.clone({headers: req.headers.set(CONST.JWT_AUTH_HEADER , token)});
        }
        else 
        {
            changedRequest = req;
        }

        // send the newly created request
        return next.handle(changedRequest)
            .catch((error, caught) => {
                // intercept the respons error and displace it to the console
                // console.log('Error Occurred');
                // console.log(error);
                
                // return the error to the method that called it
                return Observable.throw(error);
            }) as any;
    }

}
