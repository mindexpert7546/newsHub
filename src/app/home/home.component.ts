import { Component, OnInit } from '@angular/core';
import { ArticlesResponse, NewsTech } from '../newsInterface/news-tech';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsTech:NewsTech[] = [];
  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    this.getTechData();
  }

  getTechData(){
    this.apiService.getTechCrunchNews().subscribe(response=>{
      this.newsTech = response.articles.slice(6, 15);
      console.log(response);

      // To handle the image response if image is null then defaule image will be set 
      this.newsTech.forEach(res=>{
        if(!res.urlToImage){
          res.urlToImage='./assets/defaultImage.png';
        }
      })
    })
  }

}
