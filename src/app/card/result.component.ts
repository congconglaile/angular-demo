import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./card.css']
})
export class ResultComponent implements OnInit {
  cardId: string;
  newLimit: number;
  dateTime: Date;

  // ActivatedRoute
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);
      this.cardId = params.cardId;
      this.newLimit = params.newLimit;
      this.dateTime = new Date();
    });

  }

}
