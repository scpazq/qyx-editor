<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-25
 * @description: 编辑器
-->
<template>
    <editor v-model="content"
            :init="init"
            :key="key"
            :placeholder="placeholder"
            :disabled="disabled"
            class="x-editor"/>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
// import {upload} from '@/utils/ali'

/**
 * @property {String} value
 * @property {object} options 配置
 * @property {string} placeholder 占位符
 * @property {boolean} disabled 禁用
 */
export default {
    name: 'XEditor',
    components: {Editor},
    props: {
        value: {
            type: String,
            default: ''
        },
        options: {
            type: Object,
            default: () => ({})
        },
        placeholder: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            init: {
                branding: false,
                skin_url: '/plugins/tinymce/skins/ui/oxide',
                menubar: false,
                toolbar: 'alignleft aligncenter alignright alignjustify',
                // toolbar: false,
                resize: false,
                statusbar: false,
                inline: true,
                draggable_modal: false,
                language: 'zh_CN',
                plugins: ['nonbreaking', 'table', 'image', 'paste', 'wordcount'],
                table_toolbar: 'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tableinsertcolbefore tableinsertcolafter | tabledeleterow tabledeletecol | tablemergecells tablesplitcells',
                a11y_advanced_options: false,
                images_upload_handler: () => {
                },
                image_title: true,
                image_caption: true,
                image_advtab: false,
                image_dimensions: false,
                paste_data_images: true,
                verify_html: false,
                external_plugins: {
                    'mathjax': '/plugins/tinymce/plugins/mathjax.js',
                    'fill': '/plugins/tinymce/plugins/fill.js',
                },
                // valid_children: 'span[table|span|br|sup|img],p[span|img|table|br]',
                setup: (editor) => {
                    editor.on('focus', () => {
                        this.$emit('focus', editor)
                    })

                    //editor.on('SelectionChange', () => {
                    //    console.log('SelectionChange')
                    //})
                    //
                    //editor.on('keydown', () => {
                    //    console.log('keydown')
                    //})
                },
                formats: {
                    xdot: { inline: 'span', classes: 'qyx-dot' },
                    xuline: { inline: 'span', classes: 'qyx-uline' },
                    xulines: { inline: 'span', classes: 'qyx-ulines' },
                    xuwave: { inline: 'span', classes: 'qyx-uwave' },
                    xuwaves: { inline: 'span', classes: 'qyx-uwaves' },
                    xulinewave: { inline: 'span', classes: 'qyx-ulinewave' },
                    xuwaveline: { inline: 'span', classes: 'qyx-uwaveline' },
                    xbigbox: { inline: 'span', classes: 'qyx-bigbox' },
                    strikethrough: { inline: 'del' },
                    alignleft: [
                        { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,audio,video,figure', classes: 'qyx-left' },
                        {
                            selector: 'figure.image',
                            classes: 'qyx-left',
                            collapsed: false,
                            ceFalseOverride: true
                        },
                        {
                            selector: 'img,table',
                            collapsed: false,
                            classes: 'qyx-left',
                        }
                    ],
                    aligncenter: [
                        { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,audio,video,figure', classes: 'qyx-center' },
                        {
                            selector: 'figure.image',
                            classes: 'qyx-center',
                            collapsed: false,
                            ceFalseOverride: true,
                            preview: 'font-family font-size'
                        },
                        {
                            selector: 'img,table',
                            collapsed: false,
                            classes: 'qyx-center',
                        }
                    ],
                    alignright: [
                        { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,audio,video,figure', classes: 'qyx-right' },
                        {
                            selector: 'figure.image',
                            classes: 'qyx-right',
                            collapsed: false,
                            ceFalseOverride: true,
                            preview: 'font-family font-size'
                        },
                        {
                            selector: 'img,table',
                            collapsed: false,
                            classes: 'qyx-right',
                        }
                    ],
                    alignfull: [
                        { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,audio,video,figure', classes: 'qyx-full' },
                        {
                            selector: 'figure.image',
                            classes: 'qyx-full',
                            collapsed: false,
                            ceFalseOverride: true,
                            preview: 'font-family font-size'
                        },
                        {
                            selector: 'img,table',
                            collapsed: false,
                            classes: 'qyx-full',
                        }
                    ],
                },
                urlconverter_callback: (url, node, onSave, name) => {
                    if (node === 'img' && url.startsWith('blob:')) {
                        // tinymce.activeEditor && tinymce.activeEditor.uploadImages()
                    }
                    console.log(onSave)
                    console.log(name)
                    return url
                },
                // images_upload_handler: (blobInfo, success, failure) => {
                //     let file = blobInfo.blob()
                //     upload(file, `/editor`).then(res => {
                //         if (res.res.status === 200) {
                //             let file = res.url;
                //             success(file);
                //             return
                //         }
                //         failure('上传失败')
                //     }).catch(() => {
                //         failure('上传出错')
                //     })
                // }
            },
            key: '',
            content: ''
        }
    },
    computed: {},
    watch: {
        value(val) {
            this.content = val
        },
        content(val) {
            this.$emit('input', val)
            this.$emit('change', val)
        }
    },
    created() {
    },
    mounted() {
        this.key = new Date().getTime()
        this.content = this.value
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.x-editor {
    // border: 1px solid $border-color;
    outline: none;
    min-height: 32px;
    // border-radius: $border-radius;
    line-height: 22px;
    padding: 4px 11px;
    transition: all 0.3s;
    display: block;
    white-space: break-spaces;

    &::after {
        display: block;
        clear: both;
        content: ""
    }

    &:hover {
        // border-color: $color-primary;
    }

    &[contenteditable='false'] {
        border-color: transparent;
        padding: 4px 0;
    }

    &.mce-edit-focus {
        // border-color: $color-primary;
        // box-shadow: $box-shadow-primary;
    }

    &.mce-content-body:not([dir=rtl])[data-mce-placeholder]:not(.mce-visualblocks)::before {
        left: auto;
        // color: $text-color-placeholder;
    }

    ::v-deep {
        p {
            margin: 0;
        }

        ol, ul {
            padding-left: 20px;
        }

        [data-name="fill"] {
            margin: 0 4px;
        }
    }
}
</style>
