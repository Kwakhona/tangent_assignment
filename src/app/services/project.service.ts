import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import '../shared/rxjs-operators';

import { User } from '../shared/User';

@Injectable()
export class ProjectService {
    private _url = "http://projectservice.staging.tangentmicroservices.com/api/v1/projects/";

    public constructor(private _http: Http) { }

    /**
     * Method which does a http get call to get Projects from Restful service
     * 
     * @return Promise as JSON data
     */
    public getProjects(): any {

        let token = window.sessionStorage.getItem("token");

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token,
        });
        let options = new RequestOptions({ headers: headers });

        let url = encodeURI(this._url)

        return this._http.get(url, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    /**
     * Method which does a call to add a project
     * 
     * @param project
     * 
     * @return Promise as JSON data
     * 
     */
    addProject(project: any){
        let token = window.sessionStorage.getItem("token");

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token,
        });
        let options = new RequestOptions({ headers: headers });

        let url = encodeURI(this._url);
        return this._http.post(url, project, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    /**
     * Metho which does a http call to update a project info
     * 
     * @param project
     * 
     * @return Promise as JSON data
     */
    updateProject(project: any){
        let token = window.sessionStorage.getItem("token");

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token,
        });
        let options = new RequestOptions({ headers: headers });

        let url = encodeURI(this._url + project.pk +"/");

        return this._http.put(url, project, options)
                            .toPromise()
                            .then(this.extractData)
                            .catch(this.handleError);
    }

    /**
     * Metho which does a http call to delete a project using the pk
     * 
     * @param project
     * 
     * @return Promise as JSON data
     */
    deleteProject(project: any){
        let token = window.sessionStorage.getItem("token");

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token,
        });
        let options = new RequestOptions({ headers: headers });

        let url = encodeURI(this._url + project.pk +"/");

        return this._http.delete(url, options)
                            .toPromise()
                            .then(this.extractData)
                            .catch(this.handleError);
    }

    /**
     * A method to extract and return data from a http call
     * @param res as Response object
     * 
     * @return body as JSON object
     */
    private extractData(res: Response) {
        let body = res.json();

        return body || {};
    }

    /** 
     * A private method to handle errors with the service
     * 
     * @param error as any type of Object
     * 
     * @return Observable error Msg
    */
    private handleError(error: any) {

        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        //console.error("ERROR: " + errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}