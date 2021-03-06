import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  registerUser(username) {
    let getUserUrl = this.config.apiServer+"/getuser/"+username
    return this.http.get<any>(getUserUrl)
  }  

  postTweet(tweet) {
    let postTweetUrl = this.config.apiServer+"/"+tweet.username+"/add"
    return this.http.post<any>(postTweetUrl, tweet)
  }

  getAllTweets() {
    let getAllTweetsUrl = this.config.apiServer+"/all"
    return this.http.get<any>(getAllTweetsUrl)
  }

  postComment(username, id, comment) {
    let postCommentUrl = this.config.apiServer+"/"+username+"/reply/"+id
    return this.http.post<any>(postCommentUrl, comment)
  }
}
