const CONFIG = {
    getIngredientUrl: 'https://norma.nomoreparties.space/api/ingredients',
    createOrderUrl: 'https://norma.nomoreparties.space/api/orders'
}

const checkResponse = res => {
  return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
};

export const api = {
  getIngredients: () => fetch(CONFIG.getIngredientUrl).then(checkResponse),
  createOrder: (ingredientsList) => fetch(CONFIG.createOrderUrl, {
    method: "POST",
    headers: {"Content-type": 'application/json'},
    body: JSON.stringify({ingredients: ingredientsList})}).then(checkResponse)
};