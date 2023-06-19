<template>
    <div class="editor" ref="editor" />
</template>
<script>
    import * as monaco from 'monaco-editor';
    export default {
        mounted() {
            this.content = this.src;
            let model = monaco.editor.create(this.$refs.editor, {
                value: this.content,
                language: "javascript",
                selectOnLineNumbers: true,
                automaticLayout: true,
                autoIndent: true,
                formatOnPaste: true,
                formatOnType: true
            });
            model.onDidChangeModelContent(() => {
                this.content = model.getValue();
                this.$emit("change", this.content)
            })
            this.$nextTick(() => {
                model.getAction('editor.action.formatDocument').run()
            })
        },
        data: () => ({
            content: ""
        }),
        props: ["src"],
        emits: ["change"]
    };
</script>
<style scoped>
    .editor {
        height: 100%;
        width: 100%;
    }
</style>

<style>
    @font-face {
        font-family: codicon;
        src: url('https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/esm/vs/base/browser/ui/codicons/codicon/codicon.ttf');
    }
</style>