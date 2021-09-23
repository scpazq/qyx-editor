<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-28
 * @description: Icon
-->
<template>
    <component :is="type" v-bind="$attrs"></component>
</template>
<script>
import {
    Return,
    GoOn,
    Clear,
    TextBold,
    TextItalic,
    TextUnderline,
    Strikethrough,
    ListTwo,
    OrderedList,
    AlignTextLeft,
    AlignTextCenter,
    AlignTextRight,
    AlignTextBoth,
    PictureOne,
    Formula,
    Fill,
    ContrastView,
    Help,
    Down,
    Platte,
    AddTextTwo,
    Round,
    InsertTable,
    BackgroundColor,
    HtmlFive,
    Square
} from '@icon-park/vue'

export default {
    name: 'Icon',
    props: {
        type: {
            type: String,
            default: ''
        }
    },
    components: {
        Return,
        GoOn,
        Clear,
        TextBold,
        TextItalic,
        TextUnderline,
        Strikethrough,
        ListTwo,
        OrderedList,
        AlignTextLeft,
        AlignTextCenter,
        AlignTextRight,
        AlignTextBoth,
        PictureOne,
        Formula,
        Fill,
        ContrastView,
        Help,
        Down,
        Platte,
        AddTextTwo,
        Round,
        InsertTable,
        BackgroundColor,
        HtmlFive,
        Square
    }
}
</script>

<style lang="scss" scoped>

</style>
