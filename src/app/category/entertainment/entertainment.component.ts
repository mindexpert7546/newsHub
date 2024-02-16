import { Component } from '@angular/core';
import { Categorywise } from '../../newsInterface/categorywise';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrl: './entertainment.component.css'
})
export class EntertainmentComponent {

  entertainment:Categorywise[]=[];
  constructor(private apiService:ApiService){}
  

  ngOnInit(): void {
    this.getEntertainMentNews();
  }

  getEntertainMentNews(){
   this.apiService.getEntertainmentNews().subscribe(response=>{
    this.entertainment = response.articles.slice(0,18);
    console.log(this.entertainment);

     // To handle the image response if image is null then defaule image will be set 
     this.entertainment.forEach(res=>{
      if(!res.urlToImage){
        res.urlToImage='./assets/defaultImage.png';
      }
    })
   })
  }
}
