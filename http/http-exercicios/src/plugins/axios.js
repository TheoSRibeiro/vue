import Vue from 'vue'
import axios from 'axios'

//configuracao global
/*
axios.defaults.baseURL = 'https://curso-vue-4954b-default-rtdb.firebaseio.com/'
axios.defaults.headers.common['Authorization'] = 'abc123'
axios.defaults.headers.get['accepts'] = 'application/json'

// acessar axios de forma global
Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})
*/




//configuracao local -> instancias de axios e manter essas instancias
Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-4954b-default-rtdb.firebaseio.com/',
            // inserir o header de forma global:
            headers: {
                "Authorization":"abc123"
            }
        })

        // interceptando requisicoes
        Vue.prototype.$http.interceptors.request.use(req => {
            console.log(req.method)
            // if(req.method == 'post'){
            //     req.method = 'put'
            // }
            return req
        },error => Promise.reject(error))

        // interceptando respostas
        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = []
            // for(let chave in res.data){
            //     array.push({id:chave, ...res.data[chave]})
            // }
            // res.data = array
            return res
        },error => Promise.reject(error))


    }
})
