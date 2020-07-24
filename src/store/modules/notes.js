const state = {
  notes: [
    {
      name: 'Прочитать "Старик и море".',
      todo: [
        {
          name: 'Прочитать 1 главу.',
          checked: true,
        },
        {
          name: 'Прочитать 2 главу.',
          checked: true,
        },
        {
          name: 'Прочитать 3 главу.',
          checked: false,
        }
      ]
    },
    {
      name: 'Сходить в магазин.',
      todo: [
        {
          name: 'Купить хлеба.',
          checked: false,
        },
        {
          name: 'Купить молоко.',
          checked: true,
        }
      ]
    },
    {
      name: 'Посмотреть фильмы',
      todo: [
        {
          name: 'Форест Гамп.',
          checked: true,
        },
        {
          name: 'Бегущий по лезвию.',
          checked: false,
        },
        {
          name: 'Заложница.',
          checked: true,
        },
        {
          name: 'Гарри Поттер и философский камень.',
          checked: false,
        },
      ]
    },
  ]
};

const getters = {
  GET_NOTES: state => state.notes
};

const mutations = {};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
