import { Component } from '@angular/core';
import { Categorywise } from '../../newsInterface/categorywise';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css'
})
export class SportsComponent {
  sports:Categorywise[]=[];
  constructor(private apiService:ApiService){}
  

  ngOnInit(): void {
    this.getBusinessNews();
  }

  getBusinessNews(){
   this.apiService.getSportsNews().subscribe(response=>{
    this.sports = response.articles.slice(0,18);
    console.log(this.sports);

       // To handle the image response if image is null then defaule image will be set 
       this.sports.forEach(res=>{
        if(!res.urlToImage){
          res.urlToImage='./assets/defaultImage.png';
        }
      })
   })
  }
}
