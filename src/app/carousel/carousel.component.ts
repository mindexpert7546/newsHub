import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { NewsTech } from '../newsInterface/news-tech';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  constructor(private apiService:ApiService){}

  trending:NewsTech[] = [];
  ngOnInit(): void {
   this.getTrendingNews();
  }
  getTrendingNews(){
    this.apiService.getTrendingNews().subscribe(res=>{
      console.log(res);
      this.trending=res.articles.slice(0,5);

     // To handle the image response if image is null then defaule image will be set 
     this.trending.forEach(res=>{
      if(!res.urlToImage){
        res.urlToImage='./assets/defaultImage.png';
      }
    })
    })
  }
}
