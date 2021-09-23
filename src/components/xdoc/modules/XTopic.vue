<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-31
 * @description: XTopic
-->
<template>
    <div class="x-topic">
        <div class="x-topic-number" v-if="showNumber">
            <slot name="number"></slot>
        </div>
        <div class="x-topic-number x-topic-symbol"  v-if="showSymbol">
            <slot name="symbol"></slot>
        </div>
        <div class="x-topic__section">
            <!--题干-->
            <div class="x-topic-stem">
                <slot name="stem"></slot>
            </div>
            <slot></slot>
            <!--属性-->
            <slot name="attr"></slot>
            <!--剩余未解析成功部分-->
            <slot name="excess"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'XTopic',
    props: {
        showNumber: {
            type: Boolean,
            default: true
        },
        showSymbol: {
            type: Boolean,
            default: true
        },
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
.x-topic {
    line-height: 1;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    &:hover {
        .handler {
            &:before {
                display: flex;
            }
        }
    }

    > .x-topic {
        margin-left: 48px;
    }

    &:not(:last-child) {
        margin-bottom: 16px;
    }

    &__section {
        flex: 1;
    }

    ::v-deep {
        .ant-input,
        .ant-input-number {
            &[disabled],
            &.ant-input-number-disabled {
                // color: $text-color;
                background-color: #fff;
                cursor: default;
                opacity: 1;
                border-color: transparent;
            }
        }
    }

    // 题号
    &-number {
        flex: 0 0 40px;
        margin: 0 8px 0 0;

        .ant-input {
            text-align: center;
            padding-left: 0;
            padding-right: 0;

            /*&[disabled] {
                color: $text-color;
                background-color: #fff;
                cursor: default;
                opacity: 1;
                border: none;
            }*/
        }
    }

    // 题干
    &-stem {
        display: flex;
        margin-bottom: 8px;

        ::v-deep {
            .x-editor {
                flex: 1;
            }
        }
    }
}
</style>
