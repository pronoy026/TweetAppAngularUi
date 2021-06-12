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
  tweet = {
    content: "",
    like: 0,
    commentCount: 0,
    time: new Date(),
    username: localStorage.getItem('username'),
    comments: []
  }
  modalMessage = ""
  Tweets
  currentComment = ""

  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
    this.tweetService.getAllTweets()
      .subscribe(
        res => {
          console.log(res)
          res.forEach(element => {
            element.commentboxToggler = false
            element.commentsToggler = false
            element.commentNow = ""
          });
          this.Tweets = res
          console.log(this.Tweets)
        },
        err => {
          console.log(err)
        }
      )
  }

  toggleCommentBox(tweet) {
    this.Tweets.forEach(element => {
      if (element.tid == tweet.tid) {
        element.commentboxToggler = !element.commentboxToggler
      }
    });
    console.log("comment box toggled")
  }

  postTweet() {
    console.log(this.tweet)
    if (this.tweet.content == "")
      this.modalMessage = "Please write something before posting!"
    else {
      this.tweetService.postTweet(this.tweet)
        .subscribe(
          res => {
            console.log(res)
            this.modalMessage = "Tweet posted successfully!"
          },
          err => {
            console.log(err)
            this.modalMessage = "Tweet posted successfully!"
          }
        )
    }
    this.tweet.content = ""
  }

  seeComments(tweet) {
    this.Tweets.forEach(element => {
      if (element.tid == tweet.tid) {
        element.commentsToggler = !element.commentsToggler
      }
    });
    console.log("see comments");
  }

  replyComment(tweet) {
    console.log(tweet.commentNow)
    //POST comment here
    this.Tweets.forEach(element => {
      if (element.tid == tweet.tid) {
        element.commentNow = ""
      }
    });
  }

  toCommentBox() {
    console.log("To comment box")
  }
}
