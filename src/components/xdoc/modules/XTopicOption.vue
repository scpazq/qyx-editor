<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-31
 * @description: 选项
-->
<template>
    <div class="x-topic-option">
        <div v-for="(item,index) in list"
             :key="index"
             class="x-topic-option__item">
            <div class="x-topic-option__number">
                <a-input
                    v-model="item.option"
                    :disabled="disabled"
                />
            </div>
            <div class="x-topic-option__content">
                <x-editor v-model="item.content"
                          :disabled="disabled"
                          placeholder="选项内容（必填）"
                          />
            </div>
            <a-space v-if="!disabled" class="x-topic-option__action">
                <a-icon type="minus-circle"
                        @click="handleRemoveOption(index)"/>
            </a-space>
        </div>
        <a-button v-if="list.length < maxOption && !disabled"
                  size="small"
                  icon="plus-circle"
                  @click="handleAddOption">增加选项
        </a-button>
    </div>
</template>

<script>
import XEditor from '@/components/xdoc/editor/XEditor'
import {cloneDeep} from 'lodash'
import {serialNumber, structure} from '@/components/xdoc/config'

/**
 * @property {array} value
 * @property {number} min-option 最少选项数量
 * @property {number} max-option 最大选项数量
 * @property {boolean} disabled 禁用
 */
export default {
    name: 'XTopicOption',
    components: {XEditor},
    props: {
        value: {
            type: Array,
            default: () => []
        },
        minOption: {
            type: Number,
            default: 2
        },
        maxOption: {
            type: Number,
            default: 6
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            list: []
        }
    },
    computed: {},
    watch: {
        value(val) {
            this.list = val
        },
        list(val) {
            this.$emit('input', val)
        }
    },
    created() {
        this.list = this.format(this.value)
    },
    mounted() {
    },
    methods: {
        /**
         * 添加选项
         */
        handleAddOption() {
            this.list = this.format(this.list, (data) => {
                data.push(structure.full.optionList[0])
            })
        },
        /**
         * 移除选项
         * @param index
         */
        handleRemoveOption(index) {
            const {list, minOption} = this
            if (list.length <= minOption) {
                this.$message.warning(`至少保留${minOption}个选项`)
                return
            }
            this.list = this.format(list, (data) => {
                data.splice(index, 1)
            })
        },
        /**
         * 格式化
         * @param {object} value
         * @param {function} callback 回调函数
         */
        format(value, callback) {
            const data = cloneDeep(value)

            if (typeof callback === 'function') callback.call(this, data)

            return data.map((item, index) => {
                return {
                    ...item,
                    option: serialNumber.letter[index]
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.x-topic-option {
    &__item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 8px;
        min-width: 50px;
    }

    &__handler {
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__number {
        flex: 0 0 40px;
        margin: 0 8px 0 0;
        text-align: center;

        ::v-deep {
            .ant-input {
                text-align: center;
                padding-left: 0;
                padding-right: 0;

                &[disabled] {
                    // color: $text-color;
                    background-color: #fff;
                    cursor: default;
                    opacity: 1;
                    border: none;
                }
            }
        }
    }

    &__content {
        flex: 1;

        ::v-deep {
            .x-editor {
                width: 100%;
            }
        }
    }

    &__action {
        margin-left: 8px;
        line-height: 32px;
    }
}
</style>
