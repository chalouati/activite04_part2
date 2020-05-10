import { Component } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 USER: any [];
  constructor(private service:RestApiService) {}

  ngOnInit(){
  this.service.getuser().subscribe((data)=>{ 
    this.USER=data['results'];

                })
     
  }

}
