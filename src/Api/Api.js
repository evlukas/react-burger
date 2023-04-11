const CONFIG = {
    getIngredientUrl: 'https://norma.nomoreparties.space/api/ingredients',
    createOrderUrl: 'https://norma.nomoreparties.space/api/orders'
}

export const api = {
  getIngredients: () => fetch(CONFIG.getIngredientUrl).then((res) => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)),
  createOrder: (ingredientsList) => fetch(CONFIG.createOrderUrl, {
    method: "POST",
    headers: {"Content-type": 'application/json'},
    body: JSON.stringify({ingredients: ingredientsList})}).then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
};