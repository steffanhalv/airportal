<template>
    <div class="p-6">
        <div class="editor">
            <h2 class="text-4xl">
                Users
            </h2>
            <div class="my-6">
                <div class="grid-cols-3 grid p-4 my-2 rounded flex bg-slate-100 p-4">
                    <button type="" @click="page--, list()" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark" :disabled="page <= 1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clip-rule="evenodd" />
                        </svg> </button><span class="text-slate-600 py-2 text-center">
                        Page {{ page }} of {{ Math.ceil(response?.total / response?.limit) }} ({{ response?.skip }} -
                        {{ response?.skip + response?.data?.length }} of {{ response?.total }})
                    </span><button type="" @click="page++, list()" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark" :disabled="page >= Math.ceil(response?.total / response?.limit)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
                        </svg> </button>
                </div>
                <div class="my-2 rounded flex bg-slate-100 p-4">
                    <div class="gap-1 grid-cols-9 grid">
                        <input placeholder="ID" readonly="readonly" class="p-2" /> <input placeholder="Email" v-model="email" class="p-2" /> <input placeholder="Password" v-model="password" type="password" class="p-2" />
                        <div>
                            <div v-for="(permission, i) in permissions" class="grid-cols-3 grid">
                                <button @click="permissions.splice(i, 1)" :disabled="permissions.length <= 1" class="shadow-slate-400 shadow rounded bg-gradient-to-bl bg-red-500 from-red-400 hover:bg-red-600 text-slate-100 mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                                        <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                                    </svg> </button> <input placeholder="permissions" v-model="permissions[i]" class="p-2" /> <button v-if="!permissions.length || i === permissions.length - 1" @click="permissions.push('')" class="shadow-slate-400 shadow rounded bg-gradient-to-bl bg-emerald-500 from-emerald-400 hover:bg-emerald-600 text-slate-100 ml-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
                                    </svg> </button>
                            </div>
                        </div> <input placeholder="Locale" v-model="locale" class="p-2" /> <input placeholder="Owner Group" v-model="owner_group" class="p-2" /> <input placeholder="Updated" readonly="readonly" class="p-2" /> <input placeholder="Created" readonly="readonly" class="p-2" /><button @click="create({ email, password, locale, permissions: permissions, owner_group })" class="p-2 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-emerald-500 from-emerald-400 hover:bg-emerald-600 text-slate-100 ml-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
                            </svg> </button>
                    </div>
                </div>
                <div class="my-2 rounded grid grid-cols-9 bg-slate-100 p-4">
                    <input v-model="search" placeholder="Search..." @keydown.enter="list" class="shadow rounded px-5 col-span-8" /> <button @click="list" class="col-span-1 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-blue-500 from-blue-400 hover:bg-blue-600 text-slate-100 px-6 ml-2 py-2.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
                        </svg> </button>
                </div>
                <div v-for="usr in users" class="my-2 rounded flex bg-slate-100 p-4">
                    <div class="grid-cols-9 grow gap-1 grid">
                        <input placeholder="ID" v-model="usr._id" readonly="" class="p-2" /> <input placeholder="email" v-model="usr.email" class="p-2" /> <input placeholder="password" v-model="usr.password" type="password" class="p-2" />
                        <div>
                            <div v-for="(permission, i) in usr.permissions" class="grid-cols-3 grid">
                                <button @click="usr.permissions.splice(i, 1)" :disabled="usr.permissions.length <= 1" class="shadow-slate-400 shadow rounded bg-gradient-to-bl bg-red-500 from-red-400 hover:bg-red-600 text-slate-100 mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                                        <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                                    </svg> </button> <input placeholder="permissions" v-model="usr.permissions[i]" class="p-2" /> <button v-if="!usr.permissions.length || i === usr.permissions.length - 1" @click="usr.permissions.push('')" class="shadow-slate-400 shadow rounded bg-gradient-to-bl bg-emerald-500 from-emerald-400 hover:bg-emerald-600 text-slate-100 ml-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
                                    </svg> </button>
                            </div>
                        </div> <input placeholder="locale" v-model="usr.locale" class="p-2" /> <input placeholder="owner group" v-model="usr.owner_group" class="p-2" /> <input placeholder="Updated" readonly="" :value="moment(usr.updatedAt).format('DD.MM.YY HH:mm:ss')" class="p-2" /> <input placeholder="Created" readonly="" :value="moment(usr.createdAt).format('DD.MM.YY HH:mm:ss')" class="p-2" />
                        <div class="grid-cols-2 grid">
                            <button @click="remove(usr)" class="bg-red-400 shadow-slate-400 shadow rounded bg-gradient-to-bl from-red-500 hover:bg-red-600 text-slate-100 ml-2" :disabled="user?.value?._id === usr._id || user?._id === usr._id"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                                    <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                                </svg> </button> <button @click="save(usr)" class="shadow-slate-400 shadow rounded bg-gradient-to-bl bg-emerald-500 from-emerald-400 hover:bg-emerald-600 text-slate-100 ml-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                                </svg> </button>
                        </div>
                    </div>
                </div>
                <div class="grid-cols-3 grid p-4 my-2 rounded flex bg-slate-100 p-4">
                    <button @click="page--, list()" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark" :disabled="page <= 1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clip-rule="evenodd" />
                        </svg> </button><span class="text-slate-600 py-2 text-center">
                        Page {{ page }} of {{ Math.ceil(response?.total / response?.limit) }} ({{ response?.skip }} - {{
                            response?.skip + response?.data?.length }} of {{ response?.total }})
                    </span><button type="" @click="page++, list()" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark" :disabled="page >= Math.ceil(response?.total / response?.limit)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
                        </svg> </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import moment from "moment";
    export default {
        inject: ["io", "user"],
        data: () => ({
            email: "",
            owner_group: "",
            password: "",
            locale: "",
            owner_group: "",
            permissions: ["user"],
            response: null,
            search: "",
            limit: 25,
            page: 1,
            moment
        }),
        computed: {
            users() {
                return this.response?.data || []
            }
        },
        created() {
            this.list()
        },
        methods: {
            async create(obj) {
                const response = await this.io.service("users").create(obj);
                this.clear();
                this.response.data.unshift(response)
            },
            async list() {
                let response = await this.io.service("users").find({
                    query: {
                        email: {
                            $search: this.search
                        },
                        $limit: this.limit,
                        $skip: (this.page - 1) * this.limit,
                        $sort: {
                            createdAt: -1
                        }
                    }
                });
                this.response = response
            },
            async save(user) {
                let usr = Object.assign({}, user);
                if (!usr.password) delete usr.password;
                if (usr.password && usr.password.length < 6) {
                    alert("Too short password!");
                    return
                }
                let response = await this.io.service("users").patch(usr._id, usr);
                this.response.data = this.response.data.map(o => o._id !== response._id ? o : response)
            },
            async remove(user) {
                const response = await this.io.service("users").remove(user._id);
                this.response.data = this.response.data.filter(o => o._id !== response._id)
            },
            clear() {
                this.email = "";
                this.owner_group = "";
                this.password = "";
                this.locale = "";
                this.permissions = ["user"]
            }
        }
    };
</script>
<style></style>
<style scoped></style>