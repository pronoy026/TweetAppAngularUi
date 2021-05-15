import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  userData = {
    firstname: "Pronoy",
    lastname: "Sarkar",
    userid: "prosrkr"
  }
  username= this.userData.firstname+" "+this.userData.lastname

  constructor() { }

  ngOnInit(): void {
  }

}
