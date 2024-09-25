import { defineStore } from "pinia";

export const useMainStore = defineStore({
    id: "main",
    state: () => ({
        count: 0,
    }),
    getters: {
        doubleCount() {
            return this.count * 2;
        },
    },
    actions: {
        increment() {
            this.count++;
        },
    },
});

export default useMainStore;