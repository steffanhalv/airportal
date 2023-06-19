<template>
    <div style="height:30px;display:flex;color:#e6e6e6ff;font-family:Arial, Helvetica, sans-serif;background:linear-gradient(45deg, rgba(58,66,64,1) 0%, rgba(48,52,51,1) 100%);background-color:rgb(58,66,64)">
        <div style="padding-left:10px;width:calc(100% - 350px);font-weight:bold;margin-top:4px">
            <div style="display:inline-block;margin-top:1px;color:#ffffffff">
                Airportal
            </div> <select name="" style="width:200px;padding-top:1px;padding-bottom:1px;margin-left:7px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px" @change="open()" v-model="current">
                <option v-for="domain in domains?.data" :value="domain.match">
                    {{ domain.match }}
                </option>
            </select>
        </div>
        <div style="flex:1">
            <div style="text-align:right;font-size:14px;padding-top:7px;padding-bottom:7px;padding-right:7px;display:inline-block;float:right" class="link" @click="logout">
                Log out
            </div>
            <div style="text-align:right;font-size:14px;padding-top:7px;padding-bottom:7px;padding-right:7px;display:inline-block;float:right" @click="$router.push('/admin/profile')" class="link">
                {{ user?.value?.email || user?.email }} -
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data: () => ({
            domains: [],
            current: ""
        }),
        inject: ["io", "user", "userUpdate"],
        methods: {
            async logout() {
                await this.io.logout();
                this.userUpdate(null);
                this.$router.push("/")
            },
            async getDomains() {
                this.domains = await this.io.service("types/domains").find().catch(e => {
                    this.domains = {
                        data: [{
                            match: this.io?.io?.io?.uri
                        }]
                    }
                });
                if (this.domains?.data?.length) {
                    this.current = this.domains.data[0].match
                }
            },
            open() {
                window.open("https://" + this.current, "_blank")
            }
        },
        created() {
            this.getDomains()
        }
    };
</script>
<style scoped>
    .link:hover {
        color: #75b6ebff;
        cursor: pointer;
    }
</style>