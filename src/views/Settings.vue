<template>
    <div class="p-6">
        <div class="">
            <div class="p-2">
                <h2 class="text-4xl">
                    Settings
                </h2>
            </div>
            <div class="w-full text-right p-2">
                <button type="" @click="get()" class="bg-sky-500 hover:bg-sky-600 text-sky-50 p-2 rounded shadow">
                    Refresh
                </button>
            </div>
            <div v-for="setting in settings" class="flex bg-slate-100 text-slate-600 p-3 rounded shadow m-2">
                <div class="w-1/2"> <span class="p-2 inline-block font-bold">
                        {{setting.label}}
                    </span></div>
                <div class="w-1/2 text-right">
                    <input placeholder="password" v-model="setting.value" class="mr-4 p-2 rounded shadow" /><button type="" @click="save(setting.key, setting.value)" class="bg-emerald-300 hover:bg-emerald-400 p-2 rounded text-emerald-900 shadow">
                        Save
                    </button>
                </div>
            </div>
            <div class="p-2">
                <h3 class="font-bold text-xl mt-4">
                    Enable Google Drive Auto Backup
                </h3>
                <ul class="list-decimal list-inside p-4">
                    <li>
                        <a href="https://developers.google.com/workspace/guides/create-project" target="_blank">
                            Create a project and enable the API
                        </a>
                    </li>
                    <li>
                        Enable Google Drive API
                    </li>
                    <li>
                        Create Service account credential
                    </li>
                    <li>
                        Open service account and create new Key in JSON format
                    </li>
                    <li>
                        Encode using this tool
                    </li>
                </ul><textarea placeholder="Google JSON key" v-model="googleJSONkey" class="w-full p-4 bg-slate-100 rounded shadow" /><button type="" @click="encode" class="bg-sky-500 hover:bg-sky-600 text-sky-50 p-2 rounded shadow my-2 w-full">
                    Encode
                </button><textarea placeholder="Google JSON key encoded" v-model="googleJSONkeyEncoded" class="w-full p-4 bg-slate-100 rounded shadow" />
                <ul class="list-decimal list-inside p-4">
                    <li class="">
                        Store as google secret
                    </li>
                    <li>
                        Find a folder in google drive and share it with a service account user
                    </li>
                    <li>
                        Copy the folder id and paste it into the Google Folder input field
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        inject: ["io", "user"],
        methods: {
            save(key, value) {
                this.io.service("settings").patch(key, {
                    value
                }).then(response => {
                    this.get()
                }).catch(e => {
                    this.get()
                })
            },
            get() {
                this.settings.forEach(setting => {
                    this.io.service("settings").get(setting.key).then(response => {
                        setting.value = response
                    })
                })
            },
            encode() {
                this.googleJSONkeyEncoded = window.btoa(this.googleJSONkey)
            }
        },
        created() {
            this.get()
        },
        computed: {
            users() {
                return this.response?.data || []
            }
        },
        data: () => ({
            googleJSONkey: "",
            googleJSONkeyEncoded: "",
            settings: [{
                key: "lang",
                value: "",
                label: "Languages"
            }, {
                key: "google-secret",
                value: "",
                label: "Google Secret"
            }, {
                key: "google-folder",
                value: "",
                label: "Google Folder"
            }, {
                key: "backup-interval",
                value: "",
                label: "Backup interval"
            }]
        })
    };
</script>
<style></style>