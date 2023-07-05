<template>
    <div class="w-44 h-full text-slate-100 bg-gradient-to-br from-slate-800 bg-slate-700 overflow-auto">
        <div v-for="page in pages">
            <div style="box-sizing:border-box;padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px;position:relative" class="menu-button" :class="page.path === current ? 'active' : ''" @click="$router.push(page.path)">
                <div style="background-color:#edebebff;width:10px;position:absolute;right:0px;clip-path:polygon(100% 0%, 100% 100%, 0% 50%);top:13px;height:20px" v-if="page.path === current"></div>
                {{page.label}}
            </div>
            <div>
            </div>
        </div>
        <hr style="border-color:#3b517dff;border-top-width:3px" />
        <div v-for="type in types">
            <div style="box-sizing:border-box;padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px;position:relative" class="menu-button" :class="'/admin/types/' + type.slug === current ? 'active' : ''" @click="$router.push('/admin/types/' + type.slug)">
                <div style="background-color:#edebebff;width:10px;position:absolute;right:0px;clip-path:polygon(100% 0%, 100% 100%, 0% 50%);top:9px;height:20px" v-if="'/admin/types/' + type.slug === current"></div>
                {{type.title.en}}
            </div>
            <div>
            </div>
        </div>
        <div>
            <div style="box-sizing:border-box;padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px;position:relative" class="menu-button" @click="add()">

                + Add
            </div>
            <div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data: () => ({
            pages: [{
                label: "Users",
                path: "/admin/users"
            }, {
                label: "Settings",
                path: "/admin/settings"
            }, {
                label: "Server",
                path: "/admin/server"
            }],
            types: []
        }),
        computed: {
            current() {
                return this.$route.path
            }
        },
        inject: ["io"],
        methods: {
            async list() {
                let response = await this.io.service("types/any").find({
                    query: {
                        $limit: 100,
                        $sort: {
                            title: "asc"
                        }
                    }
                });
                this.types = response.data
            },
            async add() {
                let slug = prompt("Slug");
                if (slug) {
                    await this.io.service("types/any").create({
                        title: slug,
                        slug
                    });
                    this.$emit("list")
                }
            }
        },
        created() {
            this.list()
        },
        props: {
            renderkey: {
                type: Number,
                default: 42
            }
        },
        watch: {
            renderkey() {
                console.log("to the edge");
                this.list()
            }
        }
    };
</script>
<style scoped>
    .menu-button.active,
    .menu-button.active:hover {
        background-color: #287ac7ff;
        color: #e6e6e6ff;
    }

    .menu-button {
        color: #e6e6e6ff;
    }

    .menu-button:hover {
        cursor: pointer;
        color: #75b6ebff;
    }
</style>