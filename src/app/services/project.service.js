"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('../shared/rxjs-operators');
var ProjectService = (function () {
    function ProjectService(_http) {
        this._http = _http;
        this._url = "http://projectservice.staging.tangentmicroservices.com/api/v1/projects/";
    }
    /**
     * Method which does a http get call to get Projects from Restful service
     *
     * @return Promise as JSON data
     */
    ProjectService.prototype.getProjects = function () {
        var token = window.sessionStorage.getItem("token");
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(this._url, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    /**
     * A method to extract and return data from a http call
     * @param res as Response object
     *
     * @return body as JSON object
     */
    ProjectService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    /**
     * A private method to handle errors with the service
     *
     * @param error as any type of Object
     *
     * @return Observable error Msg
    */
    ProjectService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        //console.error("ERROR: " + errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map