<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-04-01
 * @description: 综合题
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
        <template v-if="form.children.length > 0">
            <a-space direction="vertical" style="width: 100%">
                <div v-for="(item,index) in form.children" :key="item.amResTqId">
                    <x-title v-if="item.type==='title' || item.type==='simple'" v-model="form.children[index]" />
                    <x-selection
                        v-if="item.type==='selection' || item.type==='moreSelection' "
                        v-model="form.children[index]"
                        :multipleAnswer="item.type==='moreSelection'"
                        :disabled="disabled"
                        :show-remark="false"
                    />
                    <x-fill v-if="item.type==='fill'" v-model="form.children[index]" :disabled="disabled" :show-remark="false"></x-fill>
                    <x-true-false v-if="item.type==='truefalse'" v-model="form.children[index]" :disabled="disabled" :show-remark="false"></x-true-false>
                    <x-answers v-if="item.type==='answers'" v-model="form.children[index]" :disabled="disabled" :show-remark="false"></x-answers>
                    <x-complex v-if="item.type==='complex'" v-model="form.children[index]" :disabled="disabled" :show-remark="false"></x-complex>
                </div>
            </a-space>
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
                        :maxLength="10"
                        class="w-20"
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
import XSelection from '@/components/xdoc/modules/XSelection'
import XTitle from './XTitle'
import XFill from './XFill'
import XTrueFalse from './XTrueFalse'
import XAnswers from './XAnswers'

/**
 * @property {object} value 默认值
 * @property {boolean} disabled 禁用
 */
export default {
    name: 'XComplex',
    components: {
        XSelection,
        XTopicOption,
        XTopic,
        XTopicAttrItem,
        XTopicAttr,
        XEditor,
        XTitle,
        XFill,
        XTrueFalse,
        XAnswers
    },
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
