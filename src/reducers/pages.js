const initialState = {
  pages: [
    { name: 'Главная', path: '/' },
    { name: 'Статьи', path: '/articles' },
    { name: 'Пользователи', path: '/users' },
    { name: 'Контакты', path: '/contacts' },
    { name: 'Войти', path: '/login' },
    { name: 'Регистрация', path: '/registration' }
  ]
};

export default function(state = initialState) {
  return state;
}