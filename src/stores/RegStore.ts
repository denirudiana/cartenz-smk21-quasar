import { defineStore } from 'pinia';

export const useRegStore = defineStore({
  id: 'daerahs',
  state: () => ({
    daerahs: [] as string[],
  }),
  actions: {
    addDaerah(daerahName: string) {
      this.daerahs.push(daerahName);
    },
    deleteDaerah(index: number) {
      if (index >= 0 && index < this.daerahs.length) {
        this.daerahs.splice(index, 1);
      }
    },
    initializeDaerah(simpanDaerah: string[]) {
      this.daerahs = simpanDaerah;
    },
  },
});
