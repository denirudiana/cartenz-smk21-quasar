import { defineStore } from 'pinia';

export const useRegStore = defineStore({
  id: 'regs',
  state: () => ({
    regs: [] as string[],
  }),
  actions: {
    addReg(regName: string) {
      this.regs.push(regName);
    },
    deleteReg(index: number) {
      if (index >= 0 && index < this.regs.length) {
        this.regs.splice(index, 1);
      }
    },
    initializeReg(simpanReg: string[]) {
      this.regs = simpanReg;
    },
  },
});