import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }
  // apikey = '329049c3c3da44438b55307af192c894'; // t-api key 
  // apikey = '2dabcd62ba2e4bb38e76d8ae929f93a6'; //personal api key 
  // apikey = '83f53e6a38aa4781acc0bae1836e5b87';
  apikey = '80815f3772b34e07b273dfd2bf905a34'

  newsApi =  "https://newsapi.org/v2/top-headlines?country=in&apiKey="+this.apikey;

  // business entertainment general health science sports technology
  //https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=2dabcd62ba2e4bb38e76d8ae929f93a6
  categoryNewsApi = "https://newsapi.org/v2/top-headlines?country=in&category=";

  // Latest News of India
  getTechCrunchNews():Observable<any>{
  return this.http.get<any>(this.newsApi);
  }

  //Business News of India
  getBusinessNews():Observable<any>{
    return this.http.get<any>(this.categoryNewsApi+'business&apiKey=' + this.apikey);
  }

   //Entertainment News of India
   getEntertainmentNews():Observable<any>{
    return this.http.get<any>(this.categoryNewsApi+'entertainment&apiKey=' + this.apikey);
  }

   //General News of India
   getGeneralNews():Observable<any>{
    return this.http.get<any>(this.categoryNewsApi+'general&apiKey=' + this.apikey);
  }

   //Health News of India
   getHealthNews():Observable<any>{
    return this.http.get<any>(this.categoryNewsApi+'health&apiKey=' + this.apikey);
  }

   //Science News of India
   getScienceNews():Observable<any>{
    return this.http.get<any>(this.categoryNewsApi+'science&apiKey=' + this.apikey);
  }

   //Sports News of India
   getSportsNews():Observable<any>{
    return this.http.get<any>(this.categoryNewsApi+'sports&apiKey=' + this.apikey);
  }

   //Technology News of India
   getTechnologyNews():Observable<any>{
    return this.http.get<any>(this.categoryNewsApi+'technology&apiKey=' + this.apikey);
  }
    
  // Trending news 
  getTrendingNews():Observable<any>{
    return this.http.get<any>(this.newsApi);
  }
}
