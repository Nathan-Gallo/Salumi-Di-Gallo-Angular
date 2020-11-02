export class Recipe {

    public id: number;
    public name: string;
    public category: string;
    public type: string;
    public difficulty: string;
    public image: string = '';
    public ingredients: Ingredients;
    public steps: Array<string>;
    
    constructor(recipeData: Recipe) {
        this.id = recipeData.id;
        this.name = recipeData.name;
        this.category = recipeData.category;
        this.type = recipeData.type;
        this.difficulty = recipeData.difficulty;
        this.image = recipeData.image;
        this.ingredients = recipeData.ingredients;
        this.steps = recipeData.steps;

    }
}

export interface Ingredients {
    meat: Array<object>;
    curingIngredients: Array<object>;
    aromatics: Array<object>;
}

