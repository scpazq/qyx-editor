<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: 标题
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
                      :placeholder="placeholder"/>
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
                <x-topic-attr-item v-if="form.complexity"  label="难易度">
                    <a-rate v-model="form.complexity" :count="3"  :disabled="disabled"/>
                </x-topic-attr-item>
                <x-topic-attr-item  v-if="form.score" label="分值">
                    <a-input
                        v-model.trim="form.score"
                        class="w-20"
                        :maxLength="10"
                        :disabled="disabled"
                    />分
                </x-topic-attr-item>
                <x-topic-attr-item v-if="form.source" label="来源">
                    <a-input 
                        v-model.trim="form.source"
                        :disabled="disabled"
                    />
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

export default {
    name: 'XTitle',
    components: {XTopicAttr, XTopicAttrItem, XTopic, XEditor},
    props: {
        value: {
            type: Object,
            default: () => ({})
        },
        placeholder: {
            type: String,
            default: '请输入标题'
        },
        disabled: {
            type: Boolean,
            default: false
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
    }
}
</script>

<style lang="scss" scoped>
.x-title {
    margin-bottom: 8px;
}
</style>
