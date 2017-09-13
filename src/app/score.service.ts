import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Score } from './score';

@Injectable()
export class ScoreService {
  scoreObj: any;
  constructor(private _http: Http) { }

  setGitScoreAndMessage(score: Score, callback) {
    console.log('now in service: get git score');
    console.log(score);
    this._http.get('https://api.github.com/users/'+score.username)
      .subscribe(
        (response) => {
          console.log(response);
          this.scoreObj = response.json();
          callback(this.scoreObj);
        },
        (error) => {
          console.log(error.status);
        }
      )
  }

}
