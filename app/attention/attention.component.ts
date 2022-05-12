import { Component, OnInit } from '@angular/core';
import { AttentionService } from '../services/attention.service';

@Component({
  selector: 'app-attention',
  templateUrl: './attention.component.html',
  styleUrls: ['./attention.component.scss'],
})
export class AttentionComponent implements OnInit {

  constructor(public attentionService : AttentionService) { }

  ngOnInit() {}

}
