import axios from "axios";

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
      const response = await instance.post('/orders', {ingredients: data});
      return response.data; // Возвращаем полученные данные в формате JSON
    } catch (error) {
      console.error(error); // Обработка ошибки
    }
  }
}
