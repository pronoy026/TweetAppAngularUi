import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  userData = {
    firstname: "",
    lastname: "",
    id: ""
  }
  username= ""
  user = localStorage.getItem("username")

  constructor(private tweetservice: TweetService) { }

  ngOnInit(): void {
    

    this.tweetservice.registerUser(this.user)
        .subscribe(
          res => {
            console.log(res)
            this.userData=res
            this.username= res.firstname+" "+res.lastname
          },
          err => {
            console.log(err)
          }
        )
  }

}
