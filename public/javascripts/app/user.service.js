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
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this._userUrl = '/api/user';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this._userUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUserHistory = function () {
        return this.http.get('/api/user/history')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.postAnswers = function (question, answer) {
        var body = JSON.stringify({ question: question, answer: answer });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/submit', body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.updateAnswer = function (answer, id) {
        var body = JSON.stringify({ answer: answer, id: id });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put('/api/user/history/update', body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.deleteAnswer = function (id) {
        var body = JSON.stringify({ id: id });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put('/api/user/history/delete', body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.deleteHistory = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.delete('/api/user/history/clearhistory')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map