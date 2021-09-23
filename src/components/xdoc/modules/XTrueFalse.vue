<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-04-01
 * @description: 判断题
-->
<template>
    <x-topic>
        <template #number>
            <a-input v-model="form.topicNumber"
                     :disabled="disabled"
                     :maxLength="10"
                     placeholder="题号"/>
        </template>
        <template #symbol>
            <a-input v-model="form.topicNumberSymbol"
                     :disabled="disabled"
                     :maxLength="1"
                     placeholder="标点"/>
        </template>
        <template #stem>
            <x-editor v-model="form.content"
                      :disabled="disabled"
                      placeholder="题干"/>
        </template>
        <template #attr>
            <x-topic-attr>
                <x-topic-attr-item label="答案">
                    <div class="answer">
                         <x-editor
                            v-for="(item, index) in form.amResTqAnswerList"
                            :key="index"
                            v-model="item.content"
                            :disabled="disabled"
                            placeholder="答案"
                        />
                    </div>
                </x-topic-attr-item>
                <!-- TODO: 后端判断题答案没有固定格式，所以只能放输入框-->
                <!-- <x-topic-attr-item label="答案">
                    <a-radio-group>
                        <a-radio value="1">正确</a-radio>
                        <a-radio value="2">错误</a-radio>
                    </a-radio-group>
                </x-topic-attr-item> -->
                <x-topic-attr-item label="解析" :center="false">
                    <x-editor
                        v-model="form.analyze"
                        :disabled="disabled"
                        placeholder="解析"/>
                </x-topic-attr-item>
                <x-topic-attr-item label="难易度">
                    <a-rate v-model="form.complexity" :count="3"  :disabled="disabled"/>
                </x-topic-attr-item>
                <x-topic-attr-item label="分值">
                    <a-input
                        v-model.trim="form.score"
                        class="w-20"
                        :maxLength="10"
                        :disabled="disabled"
                    />分
                </x-topic-attr-item>
                <x-topic-attr-item label="来源">
                    <a-input 
                        v-model.trim="form.source"
                        :disabled="disabled"
                    />
                </x-topic-attr-item>
                <x-topic-attr-item label="备注" v-if="showRemark">
                    <x-editor
                        placeholder="试题备注信息"
                        v-model.trim="form.remark"
                        :disabled="disabled"
                    />
                </x-topic-attr-item>
            </x-topic-attr>
        </template>
        <template #excess v-if="form.failTqInfo || form.failAnswerInfo">
            <x-topic-attr title="剩余信息">
                <x-topic-attr-item label="正文" v-if="form.failTqInfo">
                    <x-editor
                        v-model="form.failTqInfo"
                        :disabled="disabled"
                        placeholder="题干剩余部分"/>
                </x-topic-attr-item>
                <x-topic-attr-item label="答案" v-if="form.failAnswerInfo">
                    <x-editor
                        v-model="form.failAnswerInfo"
                        :disabled="disabled"
                        placeholder="答案剩余部分"/>
                </x-topic-attr-item>
            </x-topic-attr>
        </template>
    </x-topic>
</template>

<script>
import XEditor from '../editor/XEditor'
import XTopicAttr from '@/components/xdoc/modules/XTopicAttr'
import XTopicAttrItem from '@/components/xdoc/modules/XTopicAttrItem'
import XTopic from '@/components/xdoc/modules/XTopic'
import XTopicOption from '@/components/xdoc/modules/XTopicOption'

/**
 * @property {object} value 默认值
 * @property {boolean} disabled 禁用
 */
export default {
    name: 'XTrueFalse',
    components: {XTopicOption, XTopic, XTopicAttrItem, XTopicAttr, XEditor},
    props: {
        value: {
            type: Object,
            default: () => ({})
        },
        disabled: {
            type: Boolean,
            default: false
        },
        // 是否显示试题备注，综合题下的题不展示试题备注
        showRemark: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            form: this.value
        }
    },
    computed: {},
    watch: {
        value(val) {
            this.form = val
        },
        form(val) {
            this.$emit('input', val)
        },
        'form.stem'(val) {
            let div = document.createElement('div')
            div.innerHTML = val
            let elements = div.querySelectorAll('[data-name="fill"]')
            let count = elements.length

        }
    },
    created() {

    },
    mounted() {
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
</style>
