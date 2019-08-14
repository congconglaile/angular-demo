import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

interface Card {
  cardId: string;
  name: string;
  limit: number;
  availableLimit: number;
  newLimit: number;
  maxLimit: number;
}

@Component({
  selector: 'app-card-set',
  templateUrl: './card-set.component.html',
  styleUrls: ['./card.css']
})
export class CardSetComponent implements OnInit {
  cards: Observable<Card[]>;
  // baseUrl
  baseUrl = 'http://localhost:8080/';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  selectedCard: Card;
  constructor(private http: HttpClient,
              private router: Router) { }

ngOnInit() {
    this.http
      .get<Card[]>(this.baseUrl + 'query/1111')
      .toPromise()
      .then((data: any) => {
        console.log(data);
        this.cards = data;
        this.selectedCard = this.cards[0];
      })
      .catch((err) => {
        console.log(err);
      });
  }

  submit() {
    this.http
      .put(
        this.baseUrl + 'updateCard'
        , JSON.stringify(this.selectedCard)
        , {headers : this.headers})
      .toPromise()
      .then(() => {
        console.log('success');
        this.router.navigate(['/result']
          , { queryParams: { cardId: this.selectedCard.cardId , newLimit: this.selectedCard.newLimit} });
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
