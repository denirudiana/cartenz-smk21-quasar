// user.ts
import { ref, Ref } from 'vue';

interface User {
  username: string;
}

export const user: Ref<User> = ref({
  username: '',
});

export const setUser = (username: string): void => {
  user.value.username = username;
};
