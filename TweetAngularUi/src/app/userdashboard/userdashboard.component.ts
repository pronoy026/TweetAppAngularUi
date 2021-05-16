import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss']
})
export class UserdashboardComponent implements OnInit {

  payment: any
  doCommentToggler: boolean
  seeCommentsToggler: boolean

  constructor() { }

  ngOnInit(): void {
  }

  toggleCommentBox() {
    this.doCommentToggler= !this.doCommentToggler
    console.log("comment box toggled")
  }

  postTweet() {
    console.log("Tweet posted!")
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
