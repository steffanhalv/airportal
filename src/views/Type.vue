<template>
    <div style="display:flex;height:100%;font-family:Arial, Helvetica, sans-serif">
        <div style="width:100%;flex-grow:1;flex:1;height:100%;overflow:auto;background-color:#edebebff" class="editor">
            <div style="margin-left:20px;margin-right:20px;margin-top:20px;margin-bottom:20px">
                <h2 style="color:#2b2b2bff;font-weight:100;font-size:35px">
                    {{instance?.title?.en}}
                </h2>
            </div>
            <div style="box-sizing:border-box;width:calc(100% - 40px);padding-left:20px;padding-right:20px;padding-top:15px;padding-bottom:15px;margin-left:20px;margin-right:20px;border-top-left-radius:3px;border-top-right-radius:3px;background-color:#86a0b3ff;position:relative;text-align:center;border-bottom-left-radius:3px;border-bottom-right-radius:3px">
                <button type="" @click="view='main'" class="dark" style="margin-right:2px" :disabled="view==='main'">
                    {{instance?.title?.en}}
                </button><button type="" @click="view='custom'" class="dark" style="margin-right:2px" v-if="decodedContent" :disabled="view==='custom'">
                    Custom view
                </button><button type="" @click="view='fields'" class="dark" style="margin-right:2px" :disabled="view==='fields'">
                    Fields
                </button><button type="" @click="view='roles'" class="dark" style="margin-right:2px" :disabled="view==='roles'">
                    Roles
                </button><button type="" @click="view='instance'" class="dark" style="margin-right:2px" :disabled="view==='instance'">
                    Instance
                </button><button type="" @click="view='custom-editor'" class="dark" style="margin-right:2px" :disabled="view==='custom-editor'">
                    Custom editor
                </button><button type="" @click="view='type'" class="dark" style="margin-right:2px" :disabled="view==='type'">
                    Type
                </button><input v-model="instance.updatedAt" style="margin-left:10px;width:182px" /> <button type="" class="green" @click="saveType()">
                    Save
                </button>
            </div>
            <div v-if="view==='custom'" style="box-sizing:border-box;width:calc(100% - 40px);padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;margin-left:20px;margin-right:20px;margin-top:20px;margin-bottom:20px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;background-color:#ffffffff">
                <component :is="loadedComponent" />
            </div>
            <div v-else-if="view==='main'">
                <select v-model="fieldsSelected" multiple="multiple" style="margin-left:20px;margin-top:10px;width:calc(100% - 40px);height:104px">
                    <option v-for="field in fields" :value="field">
                        {{field}}
                    </option>
                </select>
                <div style="box-sizing:border-box;width:calc(100% - 40px);padding-left:20px;padding-right:20px;padding-top:15px;padding-bottom:15px;margin-left:20px;margin-right:20px;background-color:#86a0b3ff;position:relative;text-align:center;margin-top:10px;border-top-left-radius:3px;border-top-right-radius:3px">
                    <button type="" @click="prevPage" style="float:left;margin-top:-5px" class="dark">
                        Previous page
                    </button><span style="color:#38454dff">
                        Page {{page}} of {{Math.ceil(responseRow?.total / responseRow?.limit)}} ({{responseRow?.skip}} - {{responseRow?.skip + responseRow?.data?.length}} of {{responseRow?.total}})
                    </span><button type="" @click="nextPage" style="float:right;margin-top:-5px" class="dark">
                        Next page
                    </button>
                </div>
                <div style="box-sizing:border-box;width:calc(100% - 40px);padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;margin-left:20px;margin-right:20px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;background-color:#86a0b3ff;margin-bottom:10px" class="row">
                    <div style="display:inline-block">
                        <input placeholder="id" readonly="" /><input v-model="obj[key]" v-for="key in fieldsSelected" :placeholder="key" />
                    </div><input placeholder="Created" readonly="" style="width:185px" /><input placeholder="Updated" readonly="" style="width:185px" />
                    <div style="display:inline-block;float:right">
                        <button type="" @click="create(obj)" class="green">
                            Create
                        </button>
                    </div>
                </div>
                <div style="box-sizing:border-box;padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;margin-left:20px;margin-right:20px;background-color:#87acccff;border-top-left-radius:3px;border-top-right-radius:3px" class="row">
                    <input style="margin-right:5px;width:calc(100% - 110px);padding-top:15px;padding-bottom:15px" v-model="search" placeholder="search..." @keydown.enter="list" /> <button type="" @click="list" class="dark" style="padding-top:15px;padding-bottom:15px;width:100px">
                        Search
                    </button>
                </div>
                <div style="box-sizing:border-box;width:calc(100% - 40px);padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;margin-left:20px;margin-right:20px;margin-top:0px;margin-bottom:0px;position:relative" v-for="row in table" class="row">
                    <div style="display:inline-block;float:right">
                        <button type="" @click="remove(row)" class="red" style="margin-right:2px">
                            Remove
                        </button> <button type="" @click="save(row)" class="green">
                            Save
                        </button>
                    </div>
                    <div style="display:inline-block;">
                        <div></div><input placeholder="ID" v-model="row._id" readonly="" /><input v-model="row[key]" v-for="key in fieldsSelected" :placeholder="key" v-show="!row[key]?.en && !row[key]?.no" /><input placeholder="Updated" v-model="row.updatedAt" readonly="" style="width:185px" /><input placeholder="Created" v-model="row.createdAt" readonly="" style="width:185px" />
                    </div>
                </div>
                <div style="box-sizing:border-box;width:calc(100% - 40px);padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;margin-left:20px;margin-right:20px;margin-top:10px;margin-bottom:20px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;background-color:#86a0b3ff;position:relative;text-align:center">
                    <button type="" @click="prevPage" style="float:left;margin-top:-5px" class="dark">
                        Previous page
                    </button><span style="color:#38454dff">
                        Page {{page}} of {{Math.ceil(responseRow?.total / responseRow?.limit)}} ({{responseRow?.skip}} - {{responseRow?.skip + responseRow?.data?.length}} of {{responseRow?.total}})
                    </span><button type="" @click="nextPage" style="float:right;margin-top:-5px" class="dark">
                        Next page
                    </button>
                </div>
            </div>
            <div v-else-if="view==='fields'" style="margin-right:20px;margin-bottom:20px;margin-left:20px;margin-top:10px;height:calc(100% - 190px)">
                <Editor @change="instance.fieldsValue = $event" :src="instance.fieldsValue" />
            </div>
            <div v-else-if="view==='roles'" style="margin-right:20px;margin-bottom:20px;margin-left:20px;margin-top:10px;height:calc(100% - 190px)">
                <Editor @change="instance.rolesValue = $event" :src="instance.rolesValue" />
            </div>
            <div v-else-if="view==='instance'" style="margin-right:20px;margin-bottom:20px;margin-left:20px;margin-top:10px;height:calc(100% - 190px)">
                <Editor @change="instance.instanceValue = $event" :src="instance.instanceValue" />
            </div>
            <div v-else-if="view==='custom-editor'" style="margin-right:20px;margin-bottom:20px;margin-left:20px;margin-top:10px;height:calc(100% - 190px)">
                <Editor @change="instance.dashboardValue = $event" :src="instance.dashboardValue" />
            </div>
            <div v-else-if="view==='type'" style="margin-right:20px;margin-bottom:20px;margin-left:20px;margin-top:10px;height:calc(100% - 190px)">
                <div>
                    <label>
                        ID
                    </label><input v-model="instance._id" readonly="readonly" />
                </div>
                <div>
                    <label>
                        Title
                    </label><input v-model="instance.title.en" v-if="instance.title" />
                </div>
                <div>
                    <label>
                        Slug
                    </label><input v-model="instance.slug" />
                </div>
                <div>
                    <label>
                        Status
                    </label><input v-model="instance.status" />
                </div>
                <div>
                    <label>
                        Owner
                    </label><input v-model="instance.owner" />
                </div>
                <div>
                    <label>
                        Owner group
                    </label><input v-model="instance.owner_group" />
                </div>
                <div>
                    <label>
                        Updated
                    </label><input v-model="instance.updatedAt" />
                </div>
                <div>
                    <label>
                        Created
                    </label><input v-model="instance.createdAt" />
                </div>
                <div style="margin-top:20px">
                    <button type="" class="green" @click="saveType()">
                        Save
                    </button>
                </div>
                <div style="margin-top:20px">
                    <button type="" class="red" @click="removeType()">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        defineAsyncComponent
    } from "vue";
    import Editor from "@/components/Editor.vue";
    export default {
        setup() {},
        components: {
            Editor
        },
        inject: ["io"],
        props: {
            type: {
                type: String,
                default: "components"
            }
        },
        data: () => ({
            keys: [],
            obj: {},
            limit: 25,
            page: 1,
            response: null,
            responseRow: null,
            search: "",
            custom: true,
            view: "main",
            loaded: false,
            fieldsSelected: []
        }),
        computed: {
            instance() {
                return this.response?.data[0] || {}
            },
            fields() {
                if (this.instance?.fields) {
                    this.keys = this.instance?.fields
                }
                let fields = Object.keys(this.keys);
                if (!this.fieldsSelected.length) this.fieldsSelected = fields.slice(0, 3);
                else {
                    for (const field of this.fieldsSelected) {
                        if (!fields.includes(field)) {
                            this.fieldsSelected = fields.slice(0, 3);
                            break
                        }
                    }
                }
                return fields
            },
            table() {
                return this.responseRow?.data || []
            },
            decodedContent() {
                if (this.response?.data.length) {
                    let content = this.response?.data[0]?.dashboard;
                    content = new TextDecoder().decode(content);
                    if (content && !this.loaded) {
                        this.view = "custom";
                        this.loaded = true
                    }
                    return content
                }
                return ""
            },
            loadedComponent() {
                let url = URL.createObjectURL(new Blob([this.decodedContent], {
                    type: "text/javascript"
                }));
                let component = defineAsyncComponent(async () => await import(url));
                return component
            }
        },
        watch: {
            type() {
                this.list()
            },
            "instance._id"() {
                this.view = "main"
            }
        },
        created() {
            this.list()
        },
        methods: {
            setView(view) {
                this.view = view
            },
            async saveType() {
                await this.io.service("types/any").patch(this.instance._id, {
                    title: this.instance.title,
                    slug: this.instance.slug,
                    status: this.instance.status,
                    fields: this.instance.fieldsValue ? JSON.parse(this.instance.fieldsValue) : {},
                    roles: this.instance.rolesValue ? JSON.parse(this.instance.rolesValue) : {},
                    instance: new TextEncoder().encode(this.instance?.instanceValue).buffer,
                    dashboard: new TextEncoder().encode(this.instance?.dashboardValue).buffer,
                    owner: this.instance.owner,
                    owner_group: this.instance.owner_group
                });
                let t = await this.io.service("types/any").get(this.instance._id);
                t.fieldsValue = t.fields ? JSON.stringify(t.fields, null, 4) : "";
                t.rolesValue = t.roles ? JSON.stringify(t.roles, null, 4) : "";
                t.instanceValue = new TextDecoder().decode(t.instance);
                t.dashboardValue = new TextDecoder().decode(t.dashboard);
                Object.assign(this.instance, t)
            },
            async removeType() {
                if (confirm("Confirm delete type?")) {
                    await this.io.service("types/any").remove(this.instance._id);
                    this.$emit("list");
                    this.$router.push("/")
                }
            },
            async list() {
                let response = await this.io.service("types/any").find({
                    query: {
                        slug: this.type,
                        $limit: this.limit,
                        $skip: (this.page - 1) * this.limit,
                        $sort: {
                            createdAt: -1
                        }
                    }
                });
                response.data = response.data.map(t => {
                    t.fieldsValue = t.fields ? JSON.stringify(t.fields, null, 4) : "";
                    t.rolesValue = t.roles ? JSON.stringify(t.roles, null, 4) : "";
                    t.instanceValue = new TextDecoder().decode(t.instance);
                    t.dashboardValue = new TextDecoder().decode(t.dashboard);
                    return t
                });
                this.response = response;
                this.listRow()
            },
            async listRow() {
                let query = {
                    $or: []
                };
                this.fields.forEach(field => {
                    if (this.keys[field]?.type === "String") {
                        let obj = {};
                        obj[field] = {
                            $regex: this.search
                        };
                        query.$or.push(obj)
                    }
                });
                if (!query.$or.length || !this.search) delete query.$or;
                let response = await this.io.service("types/" + this.type).find({
                    query: {
                        ...query,
                        $limit: this.limit,
                        $skip: (this.page - 1) * this.limit,
                        $sort: {
                            createdAt: -1
                        }
                    }
                });
                response.data = response.data.map(obj => this.decode(obj));
                this.responseRow = response
            },
            async create(obj) {
                const response = await this.io.service("types/" + this.type).create(obj);
                this.clear();
                this.responseRow.data.unshift(this.decode(response))
            },
            async save(obj) {
                const response = await this.io.service("types/" + this.type).patch(obj._id, this.encode(obj));
                this.responseRow.data = this.responseRow.data.map(o => o._id !== response._id ? o : this.decode(response))
            },
            async remove(obj) {
                const response = await this.io.service("types/" + this.type).remove(obj._id);
                this.responseRow.data = this.responseRow.data.filter(o => o._id !== response._id)
            },
            clear() {
                this.obj = {}
            },
            decode(obj) {
                Object.keys(this.keys).forEach(key => {
                    let type = this.keys[key]?.intl ? "object" : this.keys[key]?.type;
                    if (typeof type === "string") type = type.toLowerCase();
                    let valid = type === typeof obj[key] || type === "buffer" && typeof obj[key] === "object";
                    if (valid && type === "object") try {
                        obj[key] = JSON.stringify(obj[key], null, 4)
                    } catch (e) {} else if (valid && type === "buffer") try {
                        obj[key] = new TextDecoder().decode(obj[key])
                    } catch (e) {}
                });
                return obj
            },
            encode(obj) {
                let clone = {
                    ...obj
                };
                Object.keys(this.keys).forEach(key => {
                    let type = this.keys[key]?.intl ? "object" : this.keys[key]?.type;
                    if (typeof type === "string") type = type.toLowerCase();
                    let decoded = typeof clone[key];
                    if (type === "object" && decoded === "string") try {
                        clone[key] = JSON.parse(clone[key])
                    } catch (e) {} else if (type === "buffer" && decoded === "string") try {
                        clone[key] = new TextEncoder().encode(clone[key]).buffer
                    } catch (e) {}
                });
                return clone
            },
            nextPage() {
                this.page++;
                this.list()
            },
            prevPage() {
                this.page--;
                this.list()
            }
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