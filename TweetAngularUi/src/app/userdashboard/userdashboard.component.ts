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
    this.loadAllTweetsData()
  }

  loadAllTweetsData() {
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
            this.loadAllTweetsData()
          },
          err => {
            console.log(err)
            this.modalMessage = "Tweet posted successfully!"
            this.loadAllTweetsData()
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
    let comment = {
      content : tweet.commentNow,
      username : localStorage.getItem("username"),
      name: tweet.firstname+" "+tweet.lastname ,
      time: new Date()
    }
    console.log(comment)
    console.log(tweet)
    this.tweetService.postComment(comment.username, tweet.tid, comment)
        .subscribe(
          res => {
            console.log(res)
            this.Tweets.forEach(element => {
              if (element.tid == tweet.tid) {
                element.commentNow = ""
              }
              this.modalMessage = "Comment posted successfully!"
              this.loadAllTweetsData()
            });
          },
          err => {
            console.log(err)
            this.Tweets.forEach(element => {
              if (element.tid == tweet.tid) {
                element.commentNow = ""
              }
              this.modalMessage = "Comment posted successfully!"
              this.loadAllTweetsData()
            });
          }
        )
  }

  toCommentBox() {
    console.log("To comment box")
  }
}
