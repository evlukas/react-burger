import axios from "axios";

const instance = axios.create({
  baseURL: "https://norma.nomoreparties.space/api",
  headers: {
    'Content-Type': 'application/json',
  }
});

export const api = {
  getIngredients: async () => {
    const response = await instance.get("/ingredients");
    return response.data; // Возвращаем полученные данные в формате JSON
  },
  postIngredients: async (data) => {
    const response = await instance.post("/orders", { ingredients: data });
    return response; // Возвращаем полученные данные в формате JSON
  },
};
