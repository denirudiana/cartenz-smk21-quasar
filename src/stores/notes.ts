// import { defineStore } from 'pinia';

// export const useCounterStore = defineStore('counter', {
//   state: () => ({
//     counter: 0
//   }),

//   getters: {
//     doubleCount (state) {
//       return state.counter * 2;
//     }
//   },

//   actions: {
//     increment () {
//       this.counter++;
//     }
//   }

  
// });

import { defineStore } from 'pinia';
import { NotesModel } from './models';

export const useNotesStore = defineStore('notes', {
  state: () => ({
    rows: []
  }),

  getters: {
    getStoreNotes (state) {
      return state.rows;
    }
  },

  actions: {
    addStoreNotes (notes: NotesModel) {
      this.rows.push(notes);
    }
  }
});
