<template>
    <div class="block text-slate-100 bg-gradient-to-br from-slate-800 bg-slate-700 py-1">
        <h3 class="font-bold inline-block p-2">
            Airportal
        </h3><select name="" @change="open()" v-model="current" class="px-2 py-1 ml-2 w-44 text-slate-800">
            <option v-for="domain in domains?.data" :value="domain.match">
                {{ domain.match }}
            </option>
        </select>
        <div class="float-right">
            <button @click="$router.push('/admin/profile')" class="hover:text-sky-300 link">
                {{ user?.value?.email || user?.email }} -
            </button> <button class="p-2 hover:text-sky-300 link" @click="logout">
                Log out
            </button>
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
<style scoped></style>