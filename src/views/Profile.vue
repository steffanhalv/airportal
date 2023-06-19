<template>
    <div style="font-family:Arial, Helvetica, sans-serif">
        <div style="width:100%;height:100%;overflow:auto;background-color:#edebebff">
            <div style="margin-left:20px;margin-right:20px;margin-top:20px;margin-bottom:20px">
                <h2>
                    Profile
                </h2> <input type="" name="" style="margin-right:5px;width:167px" /><button type="">
                    Filter
                </button>
            </div>
            <div style="box-sizing:border-box;width:calc(100% - 40px);padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;margin-left:20px;margin-right:20px;margin-top:20px;margin-bottom:20px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;background-color:#83c9b3ff">
                <div style="display:inline-block">
                    <span style="padding-right:10px">
                        {{user?.value?.email || user?.email}} {{user?.value?.permissions || user?.permissions}}
                    </span>
                </div>
                <pre>
                {{user}}
                </pre>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        inject: ["user"]
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