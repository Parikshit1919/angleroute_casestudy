import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})

export class LikeComponent implements OnInit {
  numberoflikes:number=100;
  numberofdislikes:number=25;
  isdisliked:boolean=false;
  isLiked:boolean=false;
  counter:number=42;
onSubmit()
{
    this.counter++;
}
 
 dislike()
 {
   if(this.numberofdislikes==25)
   {
     this.numberofdislikes++;
     this.isdisliked=true;
   }
   else
   {
     this.numberofdislikes--;
     this.isdisliked=false;
   }
 }
  like()
  {
    if(this.numberoflikes<101)
    {
      this.numberoflikes++;
      this.isLiked=true;
      
    }
    else{
      this.numberoflikes--;
      this.isLiked=false;
      
    }
   
  
  }

  constructor() { }

  ngOnInit(): void {
  }


}
