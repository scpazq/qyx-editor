<!--
 * @Author: zhangqin
 * @Date: 2021-05-21 16:36:43
 * @LastEditTime: 2021-09-23 15:31:07
 * @Description: 答案列表
 * @FilePath: \tk-admin\src\components\xdoc\modules\XAnswerOption.vue
-->
<template>
    <div class="x-topic-option">
        <div v-for="(item,index) in list"
             :key="index"
             class="x-topic-option__item">
            <div
                class="x-topic-option__label"
                v-if="hasLabel"
            >空{{ index + 1 }}</div>
            <div class="x-topic-option__content">
                <x-editor
                    v-model="item.content"
                    :disabled="disabled"
                    placeholder="答案"
                />
            </div>
            <a-space v-if="!disabled && isMultiple" class="x-topic-option__action">
                <a-icon type="minus-circle"
                        @click="handleRemoveOption(index)"/>
            </a-space>
        </div>
        <a-button v-if="list.length < maxOption && !disabled && isMultiple"
                  size="small"
                  icon="plus-circle"
                  class="mr-8-1"
                  @click="handleAddOption">增加答案
        </a-button>
        <a-button
            v-if="hasAction && !disabled"
            size="small"
            @click="changeAnswer"
        >一键合并/拆解
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
 * @property {boolean} isMultiple 是否拥有多个答案
 * @property {boolean} hasLabel 是否有答案label，只有简答题有
 * @property {boolean} hasAction 答案能否一键拆分
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
            default: 1
        },
        maxOption: {
            type: Number,
            default: 6
        },
        disabled: {
            type: Boolean,
            default: false
        },
        isMultiple: {
            type: Boolean,
            default: true
        },
        hasLabel: {
            type: Boolean,
            default: false
        },
        hasAction: {
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
                data.push(structure.full.amResTqAnswerList[0])
            })
        },
        /**
         * 移除选项
         * @param index
         */
        handleRemoveOption(index) {
            const {list, minOption} = this
            if (list.length <= minOption) {
                this.$message.warning(`至少保留${minOption}个答案`)
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
                }
            })
        },
        changeAnswer() {
            if (this.list.length > 1) {
                let answerStr = this.list.map(item => {
                    return item.content.indexOf('<p>') > -1 ? item.content : `<p>${item.content}</p>`
                }).join('')
                this.list = [{
                    ...this.list[0],
                    content: answerStr
                }]
            } else {
                let content = this.list[0].content
                let answers = content.split(/<p>|<\/p>|\n/g)
                answers = answers.filter(item => item)
                answers = answers.filter(item => item && item !=='\n')
                let list = []
                if (answers.length === 0) {
                    list = [{
                        ...this.list[0],
                        content: ''
                    }]
                } else {
                    list = answers.map((item,index) => {
                        if (index === 0) {
                            return {
                                ...this.list[0],
                                content: answers[0]
                            }
                        } else {
                            return {
                                content: answers[index],
                                resTqType: answers[0].resTqType,
                                answerId: ''
                            }
                        }
                    })
                }
                this.list = [...list]
            }
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
        min-width: 100px;
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

    &__label {
        line-height: 32px;
        padding-right: 8px;
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
