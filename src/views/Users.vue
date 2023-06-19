<template>
    <div style="display:flex;height:100%;font-family:Arial, Helvetica, sans-serif">
        <div style="width:100%;flex-grow:1;flex:1;height:100%;overflow:auto;background-color:#edebebff" class="editor">
            <div style="margin-left:20px;margin-right:20px;margin-top:20px;margin-bottom:20px">
                <h2 style="color:#2b2b2bff;font-weight:100;font-size:35px">
                    Users
                </h2>
            </div>
            <div>
                <div style="box-sizing:border-box;width:calc(100% - 40px);padding-left:20px;padding-right:20px;padding-top:15px;padding-bottom:15px;margin-left:20px;margin-right:20px;background-color:#86a0b3ff;position:relative;text-align:center;margin-top:10px;border-top-left-radius:3px;border-top-right-radius:3px">
                    <button type="" @click="page--, list()" style="float:left;margin-top:-5px" class="dark" :disabled="page <= 1">
                        Previous page
                    </button><span style="color:#38454dff">
                        Page {{ page }} of {{ Math.ceil(response?.total / response?.limit) }} ({{ response?.skip }} -
                        {{ response?.skip + response?.data?.length }} of {{ response?.total }})
                    </span><button type="" @click="page++, list()" style="float:right;margin-top:-5px" class="dark" :disabled="page >= Math.ceil(response?.total / response?.limit)">
                        Next page
                    </button>
                </div>
                <div style="box-sizing:border-box;width:calc(100% - 40px);padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;margin-left:20px;margin-right:20px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;background-color:#86a0b3ff;margin-bottom:10px" class="row">
                    <div style="display:inline-block">
                        <input placeholder="ID" readonly="readonly" /> <input placeholder="email" v-model="email" /> <input placeholder="password" v-model="password" type="password" />
                        <div style="display:inline-block">
                            <div v-for="(permission, i) in permissions" style="margin-right:6px;margin-left:5px">
                                <button @click="permissions.splice(i, 1)" style="display:inline-block" :disabled="permissions.length <= 1">
                                    Remove
                                </button> <input placeholder="permissions" v-model="permissions[i]" style="margin-right:5px" /> <button v-if="!permissions.length || i === permissions.length - 1" @click="permissions.push('')" style="display:inline-block">
                                    Add
                                </button>
                            </div>
                        </div> <input placeholder="locale" v-model="locale" /> <input placeholder="owner group" v-model="owner_group" /> <input placeholder="Updated" readonly="readonly" style="width:185px;height:29px" /> <input placeholder="Created" readonly="readonly" style="width:185px" />
                    </div>
                    <div style="display:inline-block;float:right">
                        <button @click="create({ email, password, locale, permissions: permissions, owner_group })">
                            Create
                        </button>
                    </div>
                </div>
                <div style="box-sizing:border-box;padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;margin-left:20px;margin-right:20px;background-color:#87acccff;border-top-left-radius:3px;border-top-right-radius:3px" class="row">
                    <input style="margin-right:5px;width:calc(100% - 110px);padding-top:15px;padding-bottom:15px" v-model="search" placeholder="search..." @keydown.enter="list" /> <button @click="list" class="dark" style="padding-top:15px;padding-bottom:15px;width:100px">
                        Search
                    </button>
                </div>
                <div style="box-sizing:border-box;width:calc(100% - 40px);padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;margin-left:20px;margin-right:20px;margin-top:0px;margin-bottom:0px;position:relative" v-for="usr in users" class="row">
                    <div style="display:inline-block;float:right">
                        <button @click="remove(usr)" class="red" style="margin-right:2px" :disabled="user?.value?._id === usr._id || user?._id === usr._id">
                            Remove
                        </button> <button @click="save(usr)" class="green">
                            Save
                        </button>
                    </div>
                    <div style="display:inline-block;">
                        <input placeholder="ID" v-model="usr._id" readonly="" /> <input placeholder="email" v-model="usr.email" /> <input placeholder="password" v-model="usr.password" type="password" />
                        <div style="display:inline-block">
                            <div v-for="(permission, i) in usr.permissions" style="margin-right:6px;margin-left:5px">
                                <button @click="usr.permissions.splice(i, 1)" style="display:inline-block" :disabled="usr.permissions.length <= 1">
                                    Remove
                                </button> <input placeholder="permissions" v-model="usr.permissions[i]" style="margin-right:5px" /> <button v-if="!usr.permissions.length || i === usr.permissions.length - 1" @click="usr.permissions.push('')" style="display:inline-block">
                                    Add
                                </button>
                            </div>
                        </div> <input placeholder="locale" v-model="usr.locale" /> <input placeholder="owner group" v-model="usr.owner_group" /> <input placeholder="Updated" v-model="usr.updatedAt" readonly="" style="width:185px" /> <input placeholder="Created" v-model="usr.createdAt" readonly="" style="width:185px" />
                    </div>
                </div>
                <div style="box-sizing:border-box;width:calc(100% - 40px);padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;margin-left:20px;margin-right:20px;margin-top:10px;margin-bottom:20px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;background-color:#86a0b3ff;position:relative;text-align:center">
                    <button @click="page--, list()" style="float:left;margin-top:-5px" class="dark" :disabled="page <= 1">
                        Previous page
                    </button><span style="color:#38454dff">
                        Page {{ page }} of {{ Math.ceil(response?.total / response?.limit) }} ({{ response?.skip }} - {{
                            response?.skip + response?.data?.length }} of {{ response?.total }})
                    </span><button type="" @click="page++, list()" style="float:right;margin-top:-5px" class="dark" :disabled="page >= Math.ceil(response?.total / response?.limit)">
                        Next page
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        inject: ["io", "user"],
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
        },
        created() {
            this.list()
        },
        computed: {
            users() {
                return this.response?.data || []
            }
        },
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
            page: 1
        })
    };
</script>
<style>
    html,
    body,
    #app {
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
    }
</style>
<style scoped>
    label {
        display: block;
        margin-top: 10px;
        margin-bottom: 5px;
    }

    .editor button:hover {
        background-color: #ffffffff;
    }

    .editor button {
        border-style: none;
        padding-top: 7px;
        padding-right: 10px;
        padding-bottom: 7px;
        padding-left: 10px;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        cursor: pointer;
        color: #060f17ff;
        min-width: 70px;
    }

    .editor button.green {
        background-color: #b8dbbaff;
        color: #144017ff;
    }

    .editor button.red {
        background-color: #d18a8aff;
        color: #261414ff;
    }

    .editor button.green:hover {
        background-color: #b2d1b4ff;
    }

    .editor button.dark {
        color: #ffffffff;
        background-color: #73899cff;
    }

    .editor button.dark:hover {
        background-color: #617485ff;
    }

    .editor input,
    .editor select {
        padding-top: 7px;
        padding-right: 10px;
        padding-bottom: 7px;
        padding-left: 10px;
        border-style: none;
        margin-right: 2px;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        box-sizing: border-box;
        margin-bottom: 2px;
        margin-top: 2px;
        width: 130px;
    }

    .row:nth-child(even) {
        background-color: #6997b8ff;
    }

    .row:nth-child(odd) {
        background-color: #87acccff;
    }
</style>