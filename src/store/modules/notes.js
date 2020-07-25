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

const updateLocalStorage = (notes) => localStorage.setItem('notes', JSON.stringify(notes));

const getters = {
  getNotes: state => state.notes,
  getNoteByIndex: state => index =>
    state.notes.filter((_, i) => i === Number(index))[0]
};

const mutations = {
  DELETE_NOTE: (state, payload) => {
    state.notes = state.notes
      .filter((_, i) => i !== Number(payload.index));
    updateLocalStorage(state.notes);
  },
  CREATE_NOTE: (state, payload) => {
    state.notes = [...state.notes, payload];
    updateLocalStorage(state.notes);
  },
  EDIT_NOTE: (state, payload) => {
    state.notes = state.notes
      .reduce((acc, note, i) =>
        Number(payload.index) === i ? [...acc, payload.note] : [...acc, note], []);
    updateLocalStorage(state.notes);
  },
  INITIAL_STATE: state => {
    if (localStorage.getItem('notes')) {
      state.notes = JSON.parse(localStorage.getItem('notes'));
    }
  }
};

const actions = {
  deleteNote: (context, payload) => context.commit('DELETE_NOTE', payload),
  createNote: (context, payload) => context.commit('CREATE_NOTE', payload),
  editNote: (context, payload) => context.commit('EDIT_NOTE', payload),
  initialState: context => context.commit('INITIAL_STATE')
};

export default {
  state,
  getters,
  mutations,
  actions,
};
