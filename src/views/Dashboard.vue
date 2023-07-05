<template>
    <div style="height:100%;width:100%">
        <TopBar style="width:100%" v-if="!minimal">
        </TopBar>
        <div style="display:flex;" :style="minimal ? 'height:100%' : 'height:calc(100% - 30px)'">
            <Navigation path="/admin/services" v-if="!minimal" :renderkey="!minimal ? renderkey : ''" @list="refresh()">
            </Navigation>
            <div style="width:100%;height:100%;overflow:auto;position:relative;flex:1">
                <router-view class="bg-slate-50 w-full h-full overflow-auto absolute" :min="true" @list="refresh()">
                </router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import Navigation from "@/components/Navigation.vue";
    import TopBar from "@/components/TopBar.vue";
    export default {
        components: {
            Navigation,
            TopBar
        },
        props: ["min"],
        computed: {
            minimal() {
                return this.min || false
            },
            rerender() {
                return this.renderkey
            }
        },
        data: () => ({
            renderkey: 1
        }),
        methods: {
            refresh() {
                this.renderkey = this.renderkey + 1;
                this.$emit("list")
            }
        },
        emits: ["list"]
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