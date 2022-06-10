import { Component, OnInit } from '@angular/core';
import { MotusServiceService } from '../services/motus-service.service';

@Component({
  selector: 'app-motus',
  templateUrl: './motus.component.html',
  styleUrls: ['./motus.component.css']
})
export class MotusComponent implements OnInit {
  wordChoose: string[];

  constructor(private motusService: MotusServiceService) { }

  ngOnInit(): void {
    this.motusService.findWordRandom().subscribe(
      (data) =>{
        this.wordChoose = data;
      }
    )
  }

}
