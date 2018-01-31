import { Component, OnInit, Renderer2 } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  previousUrl: string;

  constructor(private renderer: Renderer2, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {}

}
