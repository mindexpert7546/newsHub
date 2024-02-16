import { Component, OnInit } from '@angular/core';
import { Categorywise } from '../../newsInterface/categorywise';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent implements OnInit{
  general:Categorywise[]=[];
  constructor(private apiService:ApiService){}
  

  ngOnInit(): void {
    this.getBusinessNews();
  }

  getBusinessNews(){
   this.apiService.getGeneralNews().subscribe(response=>{
    this.general = response.articles.slice(0,18);
    console.log(this.general);

       // To handle the image response if image is null then defaule image will be set 
       this.general.forEach(res=>{
        if(!res.urlToImage){
          res.urlToImage='./assets/defaultImage.png';
        }
      })
   })
  }
}
