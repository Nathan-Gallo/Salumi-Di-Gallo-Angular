import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-content',
  templateUrl: './recipe-content.component.html',
  styleUrls: ['./recipe-content.component.css']
})
export class RecipeContentComponent implements OnInit {


@Input() selectedRecipe: object;

  constructor() { }

  ngOnInit() {
  }

}
