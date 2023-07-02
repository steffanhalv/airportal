<template>
    <div style="display:flex;height:100%;font-family:Arial, Helvetica, sans-serif">
        <div style="width:100%;flex-grow:1;flex:1;height:100%;overflow:auto" class="bg-slate-300 from-slate-400 bg-gradient-to-br">
            <div style="box-sizing:border-box;padding-left:30px;padding-right:30px;padding-top:30px;padding-bottom:30px;margin-left:auto;margin-right:auto;margin-top:80px;width:360px" class="shadow-slate-500 rounded-md shadow-lg bg-gradient-to-b from-slate-100 bg-slate-50">
                <div style="display:inline-block;width:100%">
                    <h3 style="text-align:center" class="text-slate-600 mb-6 text-2xl">
                        Setup Airportal
                    </h3> <input placeholder="Email" style="display:block;width:100%;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;box-sizing:border-box" v-model="email" type="email" class="shadow mb-4 rounded" /><input placeholder="Password" style="display:block;width:100%;padding-bottom:10px;padding-top:10px;padding-right:10px;padding-left:10px;box-sizing:border-box" type="password" v-model="password" class="shadow mb-4 rounded" /><input placeholder="Connection String" style="display:block;width:100%;padding-bottom:10px;padding-top:10px;padding-right:10px;padding-left:10px;box-sizing:border-box" v-model="mongodb" v-if="status !== 'admin-registration'" class="shadow mb-6 rounded" /><button type="" style="display:block;width:100%;padding-bottom:10px;padding-top:10px;padding-right:10px;padding-left:10px;box-sizing:border-box" @click="setup" class="text-slate-50 bg-slate-400 shadow rounded hover:text-white hover:bg-slate-500">
                        {{ setup === 'admin-registration' ? 'Submit admin' : 'Install'}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data: () => ({
            email: "",
            password: "",
            mongodb: "",
            status: ""
        }),
        methods: {
            async setup() {
                let req = {
                    email: this.email,
                    password: this.password
                };
                if (this.status === "setup") req.mongodb = this.mongodb;
                let results = await this.io.service("/settings").create(req);
                if (results === "ready") {
                    this.$router.push("/")
                } else {
                    alert(results)
                }
            },
            async init() {
                this.status = await this.io.service("/settings").get("status")
            }
        },
        inject: ["io"],
        created() {
            this.init()
        }
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