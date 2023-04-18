import axios from "axios";

// const CONFIG = {
//     getIngredientUrl: 'https://norma.nomoreparties.space/api/ingredients',
//     createOrderUrl: 'https://norma.nomoreparties.space/api/orders'
// }

// const checkResponse = res => {
//   return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
// };

// export const api = {
//   getIngredients: () => fetch(CONFIG.getIngredientUrl).then(checkResponse),
//   createOrder: (ingredientsList) => fetch(CONFIG.createOrderUrl, {
//     method: "POST",
//     headers: {"Content-type": 'application/json'},
//     body: JSON.stringify({ingredients: ingredientsList})}).then(checkResponse)
// };



//////////////////////////////////////////////////





const instance = axios.create({
  baseURL: 'https://norma.nomoreparties.space/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

export const api = {
  fetchIngredients: async () => {
    try {
      const response = await instance.get('/ingredients');
      return response.data; // Возвращаем полученные данные в формате JSON
    } catch (error) {
      console.error(error); // Обработка ошибки
    }
  },
  postIngredients: async (data) => {
    try {
      const response = await instance.post('/orders', data);
      return response.data; // Возвращаем полученные данные в формате JSON
    } catch (error) {
      console.error(error); // Обработка ошибки
    }
  }
}
