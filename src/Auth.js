const Auth = {
    isAuthenticated: false,

    Authenticate(){
        this.isAuthenticated = true
    },

    Logout()
    {
        this.isAuthenticated = false
    },

    getAuth()
    {
        return this.isAuthenticated;
    }
}
export default Auth;