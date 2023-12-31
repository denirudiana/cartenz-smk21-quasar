let isAuthenticated = false;

export default {
  isAuthenticated(): boolean {
    return isAuthenticated;
  },
  login(): void {
    // Implementasikan logika login di sini
    // Untuk sederhana, set isAuthenticated menjadi true
    isAuthenticated = true;
  },
  logout(): void {
    // Implementasikan logika logout di sini
    // Untuk sederhana, set isAuthenticated menjadi false
    isAuthenticated = false;
  },
};
