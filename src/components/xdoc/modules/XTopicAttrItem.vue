<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-31
 * @description: XTopicAttrItem
-->
<template>
    <div class="x-topic-attr-item"
         :class="{'x-topic-attr-item--center': center}">
        <div class="x-topic-attr-label">{{ label }}{{ colon ? '：' : '' }}</div>
        <div class="x-topic-attr-value">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'XTopicAttrItem',
    props: {
        label: {
            type: String,
            default: ''
        },
        colon: {
            type: Boolean,
            default: true
        },
        center: {
            type: Boolean,
            default: true
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
    &-item {
        display: flex;

        &:not(:last-child) {
            margin-bottom: 8px;
        }

        &--center {
            align-items: center;
        }
    }

    &-label {
        min-width: 60px;
        padding: 0 4px;
        line-height: 32px;
        flex-shrink: 0;
    }

    &-value {
        flex: 1;
    }
}
</style>
