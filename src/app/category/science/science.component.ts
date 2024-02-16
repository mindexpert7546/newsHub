import { Component } from '@angular/core';
import { Categorywise } from '../../newsInterface/categorywise';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrl: './science.component.css'
})
export class ScienceComponent {
  science:Categorywise[]=[];
  constructor(private apiService:ApiService){}
  

  ngOnInit(): void {
    this.getBusinessNews();
  }

  getBusinessNews(){
   this.apiService.getScienceNews().subscribe(response=>{
    this.science = response.articles.slice(0,18);
    console.log(this.science);

       // To handle the image response if image is null then defaule image will be set 
       this.science.forEach(res=>{
        if(!res.urlToImage){
          res.urlToImage='./assets/defaultImage.png';
        }
      })
   })
  }
}
