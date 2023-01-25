const authProvider = {
    isAuthenticated: false,
    signIn(callback?: () => void) {
        if (localStorage.getItem('accessToken')) this.isAuthenticated = true;
        else this.isAuthenticated = false;
    },
    signOut(callback?: () => void) {
        this.isAuthenticated = false;
    }
}

export default authProvider