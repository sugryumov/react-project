const initialState = {
  pages: [
    { name: 'Главная', path: '/' },
    { name: 'Статьи', path: '/articles' },
    { name: 'Пользователи', path: '/users' },
    { name: 'Контакты', path: '/contacts' },
  ],
};

export function pageReducer(state = initialState) {
  return state;
}
