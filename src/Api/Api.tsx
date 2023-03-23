const CONFIG = {
    baseUrl: 'https://norma.nomoreparties.space/api/ingredients'
}

export const api = {
  getIngredients: () =>
        fetch(CONFIG.baseUrl).then((res) =>
            res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
        ),
};