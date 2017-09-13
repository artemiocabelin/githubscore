import { Component } from '@angular/core';
import { ScoreService } from './score.service';
import { Score } from './score';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score = new Score();
  outputScore = 0;
  message = '';
  constructor(private _scoreService: ScoreService) {
  } 

  onSubmit() {
    console.log('onSubmit()')
    console.log(this.score);
    this._scoreService.setGitScoreAndMessage(this.score,
      (scoreResponse) => {
        console.log(scoreResponse);
        this.outputScore = scoreResponse.public_repos + scoreResponse.followers;

        if(this.outputScore < 20) {
          this.message = 'Needs Work!';
        } else if(this.outputScore < 50) {
          this.message = 'A decent start!';
        } else if(this.outputScore < 100) {
          this.message = 'Doing Good!';
        } else if(this.outputScore < 200) {
          this.message = 'Great Job!';
        } else {
          this.message = 'Github Elite';
        }

      }
    );
    this.score = new Score();
  }

}
