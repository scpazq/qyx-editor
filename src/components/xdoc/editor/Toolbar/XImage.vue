<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: XImage
-->
<template>
    <a-tooltip placement="top" :trigger="['hover','click']" title="上传图片">
        <a-upload
            name="file"
            :multiple="true"
            :custom-request="onUpload"
            :show-upload-list="false"
            class="x-editor-button">
            <icon type="picture-one" size="16"/>
        </a-upload>
    </a-tooltip>
</template>

<script>
// import {upload, getFullPath} from '@/utils/ali'
export default {
    name: 'XImage',
    data() {
        return {}
    },
    computed: {},
    watch: {},
    created() {
    },
    mounted() {
    },
    methods: {
        async onUpload(data) {
            console.log(data)
            // const {res, url, name} = await upload(data.file, `/editor`)
            // const cdnUrl = getFullPath(name)
            // if (res.status === 200) {
            //     window.tinymce.activeEditor.insertContent(`<img src="${cdnUrl}" width="200"/>`)
            // } else {
            //     this.$message.error('上传失败')
            // }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "style";
</style>
