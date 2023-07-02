<template>
    <div class="p-6">
        <div class="editor">
            <h2 class="text-4xl">
                Users
            </h2>
            <div class="my-6">
                <div class="grid-cols-3 grid p-4 my-2 rounded flex bg-slate-100 p-4">
                    <button type="" @click="page--, list()" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark" :disabled="page <= 1">
                        Previous Page
                    </button><span class="text-slate-600 py-2 text-center">
                        Page {{ page }} of {{ Math.ceil(response?.total / response?.limit) }} ({{ response?.skip }} -
                        {{ response?.skip + response?.data?.length }} of {{ response?.total }})
                    </span><button type="" @click="page++, list()" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark" :disabled="page >= Math.ceil(response?.total / response?.limit)">
                        Next Page
                    </button>
                </div>
                <div class="my-2 rounded flex bg-slate-100 p-4">
                    <div class="gap-1 grid-cols-9 grid">
                        <input placeholder="ID" readonly="readonly" class="p-2" /> <input placeholder="Email" v-model="email" class="p-2" /> <input placeholder="Password" v-model="password" type="password" class="p-2" />
                        <div>
                            <div v-for="(permission, i) in permissions" class="grid-cols-3 grid">
                                <button @click="permissions.splice(i, 1)" :disabled="permissions.length <= 1" class="p-2 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-red-500 from-red-400 hover:bg-red-600 text-slate-100 mr-2">
                                    Remove
                                </button> <input placeholder="permissions" v-model="permissions[i]" class="p-2" /> <button v-if="!permissions.length || i === permissions.length - 1" @click="permissions.push('')" class="p-2 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-emerald-500 from-emerald-400 hover:bg-emerald-600 text-slate-100 ml-2">
                                    Add
                                </button>
                            </div>
                        </div> <input placeholder="Locale" v-model="locale" class="p-2" /> <input placeholder="Owner Group" v-model="owner_group" class="p-2" /> <input placeholder="Updated" readonly="readonly" class="p-2" /> <input placeholder="Created" readonly="readonly" class="p-2" /><button @click="create({ email, password, locale, permissions: permissions, owner_group })" class="p-2 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-emerald-500 from-emerald-400 hover:bg-emerald-600 text-slate-100 ml-2">
                            Create
                        </button>
                    </div>
                </div>
                <div class="my-2 rounded flex bg-slate-100 p-4">
                    <input v-model="search" placeholder="Search..." @keydown.enter="list" class="shadow rounded px-5 grow" /> <button @click="list" class="shadow-slate-400 shadow rounded bg-gradient-to-bl bg-blue-500 from-blue-400 hover:bg-blue-600 text-slate-100 px-6 ml-2 py-2.5">
                        Search
                    </button>
                </div>
                <div v-for="usr in users" class="my-2 rounded flex bg-slate-100 p-4">
                    <div class="grid-cols-9 grow gap-1 grid">
                        <input placeholder="ID" v-model="usr._id" readonly="" class="p-2" /> <input placeholder="email" v-model="usr.email" class="p-2" /> <input placeholder="password" v-model="usr.password" type="password" class="p-2" />
                        <div>
                            <div v-for="(permission, i) in usr.permissions" class="grid-cols-3 grid">
                                <button @click="usr.permissions.splice(i, 1)" :disabled="usr.permissions.length <= 1" class="p-2 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-red-500 from-red-400 hover:bg-red-600 text-slate-100 mr-2">
                                    Remove
                                </button> <input placeholder="permissions" v-model="usr.permissions[i]" class="p-2" /> <button v-if="!usr.permissions.length || i === usr.permissions.length - 1" @click="usr.permissions.push('')" class="p-2 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-emerald-500 from-emerald-400 hover:bg-emerald-600 text-slate-100 ml-2">
                                    Add
                                </button>
                            </div>
                        </div> <input placeholder="locale" v-model="usr.locale" class="p-2" /> <input placeholder="owner group" v-model="usr.owner_group" class="p-2" /> <input placeholder="Updated" readonly="" :value="moment(usr.updatedAt).format('DD.MM.YY HH:mm:ss')" class="p-2" /> <input placeholder="Created" readonly="" :value="moment(usr.createdAt).format('DD.MM.YY HH:mm:ss')" class="p-2" />
                        <div class="grid-cols-2 grid">
                            <button @click="remove(usr)" class="bg-red-400 p-2 shadow-slate-400 shadow rounded bg-gradient-to-bl from-red-500 hover:bg-red-600 text-slate-100 ml-2" :disabled="user?.value?._id === usr._id || user?._id === usr._id">
                                Remove
                            </button> <button @click="save(usr)" class="p-2 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-emerald-500 from-emerald-400 hover:bg-emerald-600 text-slate-100 ml-2">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
                <div class="grid-cols-3 grid p-4 my-2 rounded flex bg-slate-100 p-4">
                    <button @click="page--, list()" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark" :disabled="page <= 1">
                        Previous Page
                    </button><span class="text-slate-600 py-2 text-center">
                        Page {{ page }} of {{ Math.ceil(response?.total / response?.limit) }} ({{ response?.skip }} - {{
                            response?.skip + response?.data?.length }} of {{ response?.total }})
                    </span><button type="" @click="page++, list()" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark" :disabled="page >= Math.ceil(response?.total / response?.limit)">
                        Next Page
                    </button>
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