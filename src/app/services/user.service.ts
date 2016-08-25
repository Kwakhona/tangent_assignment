import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; 
import { Observable }     from 'rxjs/Observable';
import '../shared/rxjs-operators';

import { User } from '../shared/User';

@Injectable()
export class UserService {
    private _user: User;
    private _loginUrl = "http://userservice.staging.tangentmicroservices.com:80/api-token-auth/";

    public constructor(private _http: Http) {}

    /**
     * Method called when the user is logging in
     * 
     * @param _user
	 *            the {@link User} Object from login form
	 * 
     * @return the {@link Observable<User>} with/without token
     */
    public Login(_user: any){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });  
        
        return  this._http.post(this._loginUrl, _user, options)
                        .toPromise()
                        .then(this.extractData)
                        .catch(this.handleError);
    }

     private extractData(res: Response) {
        let body = res.json();
       
        return body || { };
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
