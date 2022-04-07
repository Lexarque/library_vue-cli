<template>
    <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                                    <div class="card-body">
                                        <br>
                                        <p> {{ message }} </p>
                                        <br>
                                        <form v-on:click="Login()">
                                            <div class="mb-3">
                                                <label for="inputEmail">Email address</label>
                                                <input v-model="email" class="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="inputPassword">Password</label>
                                                <input v-model="password" v-on:keyup.enter="Login()" class="form-control" id="inputPassword" type="password" placeholder="Password" />
                                                
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a class="btn btn-primary" v-on:click="Login()"><span style="color: #fff;">Login</span></a>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><a href="register.html">Need an account? Sign up!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2021</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
</template>
<script>
    export default{
        name: 'Login_Page',
        data(){
            return{
                email: '',
                password: '',
                message: ''
            }
        },
        methods:{
            Login(){
                let credentials = {
                    email: this.email,
                    password: this.password
                }
                this.axios.post('http://localhost:8000/api/login', credentials)
                .then(res => {
                    console.log(res.data);
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user', JSON.stringify(res.data.data.email));
                    localStorage.setItem('role', res.data.role);
                    localStorage.setItem('status', true);
                    this.message = "Login Success";
                    this.$emit('authenticated', true);
                    location.href = '/';
                }).catch(error => {
                    this.message = "invalid credentials";
                    console.log(error);
                })
            },
        }

    }
</script>
