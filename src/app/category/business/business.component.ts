import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Categorywise } from '../../newsInterface/categorywise';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent implements OnInit {

  businessNews:Categorywise[]=[];
  constructor(private apiService:ApiService){}
  

  ngOnInit(): void {
    this.getBusinessNews();
  }

  getBusinessNews(){
   this.apiService.getBusinessNews().subscribe(response=>{
    this.businessNews = response.articles.slice(0,18);
    console.log(this.businessNews);
     // To handle the image response if image is null then defaule image will be set 
     this.businessNews.forEach(res=>{
      if(!res.urlToImage){
        res.urlToImage='./assets/defaultImage.png';
      }
    })
   })
  }
}
