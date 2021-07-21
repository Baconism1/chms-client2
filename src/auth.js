class Auth {
    _authenticatedKey = 'mernAKey';
    _admin = false;
    constructor() {
        this.authenticated = false;
        this.administrator = false;
        this.username = '';
    }

    state = {
        emailAddress: '',
        password: ''
    }

    login(username, password, callback) {
        this.state.emailAddress = username;
        this.state.password = password;

        fetch('/api/users/loginUser', {method:'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(this.state)})
            .then(response => {
                if (response.ok)
                {
                    sessionStorage.setItem(this._authenticatedKey, JSON.stringify(true));
                    this.authenticated = true; //successful login
                    response.json()
                        .then(
                            (data)=>{
                                //console.log(data);
                                sessionStorage.setItem(this.username, data.username);
                                this.username = data.username;
                                sessionStorage.setItem(this._admin, data.isAdmin);
                                this.administrator = data.isAdmin;
                                // console.log(this.administrator);
                                callback(true);
                            }
                        )
                }
                if (!response.ok)
                {
                    console.error('Error' + JSON.stringify(response.status));
                    callback(false); //unsuccessful login
                }
            });
             
    }

    logout(callback) {
        sessionStorage.setItem(this._authenticatedKey, JSON.stringify(false));
        this.authenticated = false;
        sessionStorage.setItem(this._admin, false);
        this.administrator = false;
        callback();
    }

    isAdmin() {
        this.administrator = JSON.parse(sessionStorage.getItem(this._admin));
        //console.log(this.administrator);
        return this.administrator;
    }

    isAuthenticated() {
        this.authenticated = sessionStorage.getItem(this._authenticatedKey) ? JSON.parse(sessionStorage.getItem(this._authenticatedKey)) : false;
        return this.authenticated;
    }

    getUsername() {
        this.username = sessionStorage.getItem(this.username);
        // console.log('auth.js is reporting username ' + this.username);
        return this.username;
    }

}
export default new Auth()