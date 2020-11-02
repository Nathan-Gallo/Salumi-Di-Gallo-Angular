import { Component, OnInit } from '@angular/core';
import { RecipesService } from './../providers/recipes.service';
import { Recipe } from '../models/recipe.model';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  viewAll: boolean = true;
  viewCategories: boolean = false;
  viewDifficulty: boolean = false;
  radioFilter: string = 'all';
  showRecipe: boolean = false;
  loggedIn: boolean = true;
  viewCategoryRecipes: boolean = false;
  viewDifficultyRecipes: boolean = false;


  selectedRecipeId: string = "-1";
  selectedRecipeCategory: string = "-1"
  selectedRecipeDifficulty: string = "-1"


  allRecipes: Recipe[] = [];
  allCategories: Recipe[] = [];
  allDifficulties: Recipe[] = [];

  selectedRecipe: Recipe;
  selectedCategory: Recipe[];
  selectedDifficulty: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.getAllRecipes().subscribe(results => {

      let length = results.data.length;

      for (let i = 0; i < length; i++) {
        let recipe = new Recipe(results.data[i])

        this.allRecipes.push(recipe)
      }

      this.allCategories = results.data.filter((v, i, a) => a.findIndex(t => (t.category === v.category)) === i);
      this.allDifficulties = results.data.filter((v, i, a) => a.findIndex(t => (t.difficulty === v.difficulty)) === i);

    })

  }


  recipeSelected(): void {
    //@ts-ignore
    if (this.selectedRecipe != "-1") {
      this.recipesService.getSingleRecipe(this.selectedRecipeId).subscribe(results => {
        this.selectedRecipe = new Recipe(results.data)
        this.showRecipe = true;
      })
    }
  }

  categorySelected() {
    this.viewCategoryRecipes = true;
    this.selectedCategory = this.allRecipes.filter(r => r.category.toLowerCase() == this.selectedRecipeCategory.toLowerCase())
  }

  difficultySelected() {
    this.viewDifficultyRecipes = true;
    this.selectedDifficulty = this.allRecipes.filter(r => r.difficulty.toLowerCase() == this.selectedRecipeDifficulty.toLowerCase())
  }


  onRadioSelect(): void {
    if (this.radioFilter == "all") {
      this.viewAll = true;
      this.viewCategories = false;
      this.viewDifficulty = false;
      this.viewCategoryRecipes = false;
    }
    else if (this.radioFilter == "category") {
      this.viewAll = false;
      this.viewCategories = true;
      this.viewDifficulty = false;
      this.viewDifficultyRecipes = false;

    }
    else {
      this.viewAll = false;
      this.viewCategories = false;
      this.viewDifficulty = true;
      this.viewCategoryRecipes = false;
    }
  }
}
