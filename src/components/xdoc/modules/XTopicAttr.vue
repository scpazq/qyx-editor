<!--
 * @Author: zhangqin
 * @Date: 2021-09-23 11:16:10
 * @LastEditTime: 2021-09-23 15:57:21
 * @Description: XTopicAttr
-->
<template>
    <div class="x-topic-attr" :title="title">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'XTopicAttr',
    props: {
        title: {
            type: String,
            default: '试题属性'
        }
    },
    data() {
        return {}
    },
    computed: {},
    watch: {},
    created() {
    },
    mounted() {
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.x-topic-attr {
    margin-top: 16px;

    &::before {
        content: attr(title);
        display: flex;
        font-size: 12px;
        // color: $text-color-placeholder;
        margin-bottom: 8px;
    }
}
</style>
