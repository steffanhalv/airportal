import {
    createApp,
    ref,
    computed
} from 'vue'
import App from '@/App.vue'
import router from '@/logic/router'
import feathers from '@feathersjs/client'
import sio from 'socket.io-client'

const app = createApp(App)

let domain = ['vueplay.com', 'www.vueplay.com', 'next.vueplay.com', 'localhost'].includes(parent?.location?.hostname) ? 'https://api.vueux.com' : '/'
const socket = sio(domain, { // http://localhost:3001
    transports: ['websocket', 'polling']
})

const io = feathers()
io.configure(feathers.socketio(socket))
io.configure(feathers.authentication())

let user = ref()

io.reAuthenticate().then(() => { }).catch(e => { })

router.beforeEach(async to => {
    try {
        user.value = (await io.reAuthenticate())?.user
        if (to.path === '/') return '/admin/users'
    } catch (e) {
        let status = await io.service('/settings').get('status')
        user.value = null
        if (['setup', 'admin-registration'].includes(status) && to.path !== '/setup') return '/setup'
        if (!['setup', 'admin-registration'].includes(status) && !['/'].includes(to.path)) return '/'
    }
})

app.provide('user', computed(() => user?.value))
app.provide('userUpdate', val => user.value = val)
app.provide('io', io)

app.use(router)
app.mount('#app')