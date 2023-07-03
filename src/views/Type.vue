<template>
    <div class="p-6">
        <div class="flex flex-col h-full">
            <div>
                <h2 class="text-4xl">
                    {{instance?.title?.en}}
                </h2>
            </div>
            <div class="text-center mt-6 mb-4 p-4 rounded bg-slate-100 p-4">
                <button @click="view='main'" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark mx-0.5 px-3 mb-2" :disabled="view==='main'">
                    {{instance?.title?.en}}
                </button><button @click="view='custom'" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark mx-0.5 px-3 mb-2" v-if="decodedContent" :disabled="view==='custom'">
                    Custom view
                </button><button @click="view='fields'" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark mx-0.5 px-3 mb-2" :disabled="view==='fields'">
                    Fields
                </button><button @click="view='roles'" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark mx-0.5 px-3 mb-2" :disabled="view==='roles'">
                    Roles
                </button><button @click="view='instance'" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark mx-0.5 px-3 mb-2" :disabled="view==='instance'">
                    Instance
                </button><button @click="view='custom-editor'" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark mx-0.5 px-3 mb-2" :disabled="view==='custom-editor'">
                    Custom editor
                </button><button @click="view='type'" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark mx-0.5 mr-1 px-3 mb-2" :disabled="view==='type'">
                    Type
                </button><input :value="moment(instance.updatedAt).format('DD.MM.YY HH:mm:ss')" class="w-40 py-2 px-2 mx-0.5 rounded shadow-slate-200 shadow text-slate-700 mb-2" /> <button class="disabled:opacity-25 cursor-pointer shadow-slate-300 shadow rounded py-2 text-emerald-50 hover:text-white bg-emerald-400 hover:bg-emerald-500 px-3 mb-2" @click="saveType()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div v-if="view==='custom'" class="my-2 rounded flex bg-slate-100 p-4 overflow-auto">
                <component :is="loadedComponent" />
            </div>
            <div v-else-if="view==='main'" class="my-2">
                <select v-model="fieldsSelected" multiple="multiple" class="py-2 px-2 w-full">
                    <option v-for="field in fields" :value="field">
                        {{field}}
                    </option>
                </select>
                <div class="grid-cols-3 grid p-4 my-2 rounded flex bg-slate-100 p-4">
                    <button type="" @click="prevPage" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark" :disabled="page <= 1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clip-rule="evenodd" />
                        </svg>
                    </button><span class="text-slate-600 py-2 text-center">
                        Page {{page}} of {{Math.ceil(responseRow?.total / responseRow?.limit)}} ({{responseRow?.skip}} - {{responseRow?.skip + responseRow?.data?.length}} of {{responseRow?.total}})
                    </span><button type="" @click="nextPage" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark" :disabled="page >= Math.ceil(responseRow?.total / responseRow?.limit)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div class="my-2 rounded flex bg-slate-100 p-4">
                    <div class="gap-1 grid" :class="'grid-cols-' + (fieldsSelected.length + 4)">
                        <input placeholder="id" readonly="" class="p-2 rounded shadow-slate-200 shadow text-slate-700" /><input v-model="obj[key]" v-for="key in fieldsSelected" :placeholder="key" class="p-2 rounded shadow-slate-200 shadow text-slate-700" /><input placeholder="Updated" readonly="" class="p-2 rounded shadow-slate-200 shadow text-slate-700" /><input placeholder="Created" readonly="" class="p-2 rounded shadow-slate-200 shadow text-slate-700" /><button type="" @click="create(obj)" class="p-2 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-emerald-400 from-emerald-300 hover:bg-emerald-500 text-slate-100 ml-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
                            </svg> </button>
                    </div>
                </div>
                <div class="my-2 rounded grid bg-slate-100 p-4 flex" :class="'grid-cols-' + (fieldsSelected.length + 4)">
                    <input v-model="search" placeholder="search..." @keydown.enter="list" class="rounded shadow-slate-200 shadow text-slate-700 px-5" :class="'col-span-' + (fieldsSelected.length + 3)" /> <button type="" @click="list" class="col-span-1 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-blue-500 from-blue-400 hover:bg-blue-600 text-slate-100 ml-2 py-2.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
                        </svg> </button>
                </div>
                <div v-for="row in table" class="flex bg-slate-100 p-4">
                    <div>
                        <div class="grow gap-1 grid" :class="'grid-cols-' + (fieldsSelected.length + 4)"><input placeholder="ID" v-model="row._id" readonly="" class="p-2 rounded shadow-slate-200 shadow text-slate-700" />
                            <InputUniversal v-model="row[key]" v-for="key in fieldsSelected" :placeholder="key" v-show="!row[key]?.en && !row[key]?.no" class="p-2 rounded shadow-slate-200 shadow text-slate-700" /><input placeholder="Updated" readonly="" class="p-2 rounded shadow-slate-200 shadow text-slate-700" :value="moment(row.updatedAt).format('DD.MM.YY HH:mm:ss')" /><input placeholder="Created" readonly="" class="p-2 rounded shadow-slate-200 shadow text-slate-700" :value="moment(row.createdAt).format('DD.MM.YY HH:mm:ss')" />
                            <div class="text-right flex">
                                <button type="" @click="remove(row)" class="w-6/12 bg-red-400 py-2 shadow-slate-400 shadow rounded bg-gradient-to-bl from-red-500 hover:bg-red-500 text-slate-100 ml-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                                        <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                                    </svg> </button> <button type="" @click="save(row)" class="w-6/12 py-2 shadow-slate-400 shadow rounded bg-gradient-to-bl bg-emerald-400 from-emerald-300 hover:bg-emerald-500 text-slate-100 ml-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                                    </svg> </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-cols-3 grid p-4 my-2 rounded flex bg-slate-100 p-4">
                    <button type="" @click="prevPage" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark" :disabled="page <= 1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clip-rule="evenodd" />
                        </svg>
                    </button><span class="text-slate-600 py-2 text-center">
                        Page {{page}} of {{Math.ceil(responseRow?.total / responseRow?.limit)}} ({{responseRow?.skip}} - {{responseRow?.skip + responseRow?.data?.length}} of {{responseRow?.total}})
                    </span><button type="" @click="nextPage" class="disabled:opacity-25 cursor-pointer hover:text-slate-100 hover:bg-slate-400 shadow-slate-300 shadow rounded py-2 text-slate-700 bg-slate-300 dark" :disabled="page >= Math.ceil(responseRow?.total / responseRow?.limit)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mx-auto">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <div v-else-if="view==='fields'" class="my-2 rounded flex-1 bg-slate-100">
                <Editor @change="instance.fieldsValue = $event" :src="instance.fieldsValue" />
            </div>
            <div v-else-if="view==='roles'" class="my-2 rounded flex-1 bg-slate-100">
                <Editor @change="instance.rolesValue = $event" :src="instance.rolesValue" />
            </div>
            <div v-else-if="view==='instance'" class="my-2 rounded flex-1 bg-slate-100">
                <Editor @change="instance.instanceValue = $event" :src="instance.instanceValue" />
            </div>
            <div v-else-if="view==='custom-editor'" class="my-2 rounded flex-1 bg-slate-100">
                <Editor @change="instance.dashboardValue = $event" :src="instance.dashboardValue" />
            </div>
            <div v-else-if="view==='type'" class="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-2 rounded flex bg-slate-100 p-4 grid gap-2">
                <div class="p-2">
                    <label class="font-bold inline-block w-full mb-2">
                        ID
                    </label><input v-model="instance._id" readonly="readonly" class="p-2 shadow rounded w-full" />
                </div>
                <div class="p-2">
                    <label class="font-bold inline-block w-full mb-2">
                        Title
                    </label><input v-model="instance.title.en" v-if="instance.title" class="p-2 shadow rounded w-full" />
                </div>
                <div class="p-2">
                    <label class="font-bold inline-block w-full mb-2">
                        Slug
                    </label><input v-model="instance.slug" class="p-2 shadow rounded w-full" />
                </div>
                <div class="p-2">
                    <label class="font-bold inline-block w-full mb-2">
                        Status
                    </label><input v-model="instance.status" class="p-2 shadow rounded w-full" />
                </div>
                <div class="p-2">
                    <label class="font-bold inline-block w-full mb-2">
                        Owner
                    </label><input v-model="instance.owner" class="p-2 shadow rounded w-full" />
                </div>
                <div class="p-2">
                    <label class="font-bold inline-block w-full mb-2">
                        Owner Group
                    </label><input v-model="instance.owner_group" class="p-2 shadow rounded w-full" />
                </div>
                <div class="p-2">
                    <label class="font-bold inline-block w-full mb-2">
                        Updated
                    </label><input v-model="instance.updatedAt" class="p-2 shadow rounded w-full" />
                </div>
                <div class="p-2">
                    <label class="font-bold inline-block w-full mb-2">
                        Created
                    </label><input v-model="instance.createdAt" class="p-2 shadow rounded w-full" />
                </div>
                <div class="col-span-full p-2 w-full">
                    <button type="" class="disabled:opacity-25 cursor-pointer shadow-slate-300 shadow rounded py-2 text-red-50 hover:text-white bg-red-400 hover:bg-red-500 px-3" @click="removeType()">
                        Delete
                    </button><button type="" class="disabled:opacity-25 cursor-pointer shadow-slate-300 shadow rounded py-2 text-emerald-50 hover:text-white bg-emerald-400 hover:bg-emerald-500 px-3 float-right" @click="saveType()">
                        Save
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
    import InputUniversal from "@/components/InputUniversal.vue";
    import moment from "moment";
    export default {
        setup() {},
        components: {
            Editor,
            InputUniversal
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
            fieldsSelected: [],
            moment
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
                            $regex: this.search,
                            $options: "i"
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