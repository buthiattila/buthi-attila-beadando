export type Food = {
  id: number,
  name: string,
  category: string[],
  image: string,
  shortDescription: string,
  longDescription: string,
  ingredients: string[],
  cookingDescription: string,
  sliderImages: string[],
}

export type FoodsResponse = {
  total: number,
  foods: Food[],
}

export type FoodsByCategoriesResponse = {
  [key: string]: Food[]
}
