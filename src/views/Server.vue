<template>
    <div style="height:100%">
        <div style="width:100%;height:100%;overflow:auto">
            <div style="box-sizing:border-box;width:calc(100% - 40px);padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;margin-left:20px;margin-right:20px;margin-top:20px;margin-bottom:20px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;background-color:#83c9b3ff">
                <div style="display:inline-block"><span style="padding-right:10px">
                        Node version
                    </span> </div>
                <div style="display:inline-block;float:right"><input placeholder="18.0.0" style="margin-right:5px" readonly="" :value="stats.node" class="px-2 rounded shadow" /> </div>
            </div>
            <div style="box-sizing:border-box;width:calc(100% - 40px);padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;margin-left:20px;margin-right:20px;margin-top:20px;margin-bottom:20px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;background-color:#83c9b3ff">
                <div style="display:inline-block"><span style="padding-right:10px">
                        npm version
                    </span> </div>
                <div style="display:inline-block;float:right"><input placeholder="6.0.0" style="margin-right:5px" readonly="" :value="stats.npm" class="px-2 rounded shadow" /> </div>
            </div>
            <div style="box-sizing:border-box;width:calc(100% - 40px);padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;margin-left:20px;margin-right:20px;margin-top:20px;margin-bottom:20px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;background-color:#83b5c9ff;position:relative">
                <div style="height:100%;position:absolute;background-color:#0eb0e6ff;top:0px;left:0px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;display:inline-block" :style="{width: (stats.used /  stats.size) * 100 + '%'}"></div>
                <div style="position:relative">
                    <div style="display:inline-block">
                        <span style="padding-right:10px;z-index:2">
                            Storage
                        </span>
                    </div>
                    <div style="display:inline-block;float:right">
                        <input placeholder="23 of 100gb (23%)" style="margin-right:5px;z-index:2" readonly="" :value="((stats?.used || 1) / 1024 / 1024 / 1024).toFixed(2) + 'gb of ' + ((stats?.size || 1) / 1024 / 1024 / 1024).toFixed(2) + 'gb'" class="px-2 rounded shadow" />
                    </div>
                </div>
            </div>
            <div style="box-sizing:border-box;width:calc(100% - 40px);padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;margin-left:20px;margin-right:20px;margin-top:20px;margin-bottom:20px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;background-color:#aec983ff;position:relative">
                <div style="height:100%;position:absolute;background-color:#e6a50eff;top:0px;left:0px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;display:inline-block" :style="{width: ((stats?.mem?.total - stats?.mem?.active) / stats?.mem?.total) * 100 + '%'}"></div>
                <div style="position:relative">
                    <div style="display:inline-block">
                        <span style="padding-right:10px;z-index:2">
                            Memory
                        </span>
                    </div>
                    <div style="display:inline-block;float:right"><input placeholder="48 of 100gb (48%)" style="margin-right:5px;z-index:2" readonly="" :value="((stats?.mem?.total - stats?.mem?.active) || 1  / 1024 / 1024 / 1024).toFixed(2) + 'gb of ' + (stats?.mem?.total || 1 / 1024 / 1024 / 1024).toFixed(2) + 'gb'" class="px-2 rounded shadow" /> </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        inject: ["io"],
        methods: {
            async getStats() {
                this.stats = await this.io.service("settings").get("server")
            }
        },
        data: () => ({
            stats: {}
        }),
        created() {
            this.getStats()
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