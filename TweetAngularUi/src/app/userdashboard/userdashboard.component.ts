import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss']
})
export class UserdashboardComponent implements OnInit {

  payment: any
  doCommentToggler: boolean
  seeCommentsToggler: boolean
  tweet={
    content : "",
		like : 0,
		commentCount : 0,
		time : new Date(),
		username : localStorage.getItem('username') ,
		comments : []
  }
  modalMessage=""
  Tweets

  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
    this.tweetService.getAllTweets()
    .subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }

  toggleCommentBox() {
    this.doCommentToggler= !this.doCommentToggler
    console.log("comment box toggled")
  }

  postTweet() {
    console.log(this.tweet)
    if(this.tweet.content=="")
      this.modalMessage="Please write something before posting!"
    else {
      this.tweetService.postTweet(this.tweet)
        .subscribe(
          res => {
            console.log(res)
            this.modalMessage="Tweet posted successfully!"
          },
          err => {
            console.log(err)
            this.modalMessage="Tweet posted successfully!"
          }
        )
    }
    this.tweet.content=""
  }

  seeComments() {
    this.seeCommentsToggler= !this.seeCommentsToggler
    console.log("see comments");
  }

  replyComment() {
    console.log("replied")
  }

  toCommentBox() {
    console.log("To comment box")
  }
}
