import { Component, OnInit } from '@angular/core';
import { Categorywise } from '../../newsInterface/categorywise';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrl: './health.component.css'
})
export class HealthComponent implements OnInit {
  health:Categorywise[]=[];
  constructor(private apiService:ApiService){}
  

  ngOnInit(): void {
    this.getBusinessNews();
  }

  getBusinessNews(){
   this.apiService.getHealthNews().subscribe(response=>{
    this.health = response.articles.slice(0,18);
    console.log(this.health);

       // To handle the image response if image is null then defaule image will be set 
       this.health.forEach(res=>{
        if(!res.urlToImage){
          res.urlToImage='./assets/defaultImage.png';
        }
      })
   })
  }
}
