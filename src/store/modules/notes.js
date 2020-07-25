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
  getNotes: state => state.notes,
  getNoteByIndex: state => index =>
    state.notes.filter((_, i) => i === Number(index))[0]
};

const mutations = {
  DELETE_NOTE: (state, payload) => state.notes = state.notes
    .filter((_, i) => i !== payload.id),
  CREATE_NOTE: (state, payload) => state.notes = [...state.notes, payload],
};

const actions = {
  deleteNote: (context, payload) => context.commit('DELETE_NOTE', payload),
  createNote: (context, payload) => context.commit('CREATE_NOTE', payload),
};

export default {
  state,
  getters,
  mutations,
  actions,
};
