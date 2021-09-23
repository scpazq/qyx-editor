<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: XToolbar
-->
<template>
    <div class="x-editor-toolbar">
        <!--<x-editor-toolbar-area>
            <x-font-family v-bind="$attrs"
                           v-on="$listeners"></x-font-family>
            <x-font-size v-bind="$attrs"
                         v-on="$listeners"></x-font-size>
        </x-editor-toolbar-area>-->
        <!--<x-editor-toolbar-area>
            <x-color v-bind="$attrs"
                     v-on="$listeners"></x-color>
            <x-background v-bind="$attrs"
                          v-on="$listeners"></x-background>
        </x-editor-toolbar-area>-->
        <x-editor-toolbar-area>
            <x-bold v-bind="$attrs"
                    v-on="$listeners"></x-bold>
            <x-italic v-bind="$attrs"
                      v-on="$listeners"></x-italic>
            <!-- <x-underline v-bind="$attrs"
                         v-on="$listeners"></x-underline> -->
            <x-strikethrough v-bind="$attrs"
                             v-on="$listeners"></x-strikethrough>
            <x-superscript v-bind="$attrs" v-on="$listeners"></x-superscript>
            <x-subscript v-bind="$attrs" v-on="$listeners"></x-subscript>
            <x-no-breaking
                v-bind="$attrs"
                v-on="$listeners"
            ></x-no-breaking>
        </x-editor-toolbar-area>
        <!-- <x-editor-toolbar-area> -->
            <!-- <x-unordered-list v-bind="$attrs"
                              v-on="$listeners"></x-unordered-list>
            <x-ordered-list v-bind="$attrs"
                            v-on="$listeners"></x-ordered-list> -->
            <!-- <x-align v-bind="$attrs"
                     v-on="$listeners"></x-align> -->
        <!-- </x-editor-toolbar-area> -->
        <x-editor-toolbar-area>
            <x-table v-bind="$attrs"
                     v-on="$listeners"></x-table>
            <x-image v-bind="$attrs"
                     v-on="$listeners"></x-image>
            <x-formula v-bind="$attrs"
                       v-on="$listeners"></x-formula>
            <x-fill v-bind="$attrs"
                    v-on="$listeners"></x-fill>
            <x-element v-bind="$attrs"
                       v-on="$listeners"></x-element>
        </x-editor-toolbar-area>
        <x-editor-toolbar-area>
            <!-- <x-undo v-bind="$attrs"
                    v-on="$listeners"></x-undo>
            <x-redo v-bind="$attrs"
                    v-on="$listeners"></x-redo> -->
            <x-remove-format v-bind="$attrs"
                             v-on="$listeners"></x-remove-format>
        </x-editor-toolbar-area>
        <!-- <x-editor-toolbar-area>
            <x-contrast v-bind="$attrs"
                        v-on="$listeners"></x-contrast>
            <x-help v-bind="$attrs"
                    v-on="$listeners"></x-help>
        </x-editor-toolbar-area> -->
    </div>
</template>

<script>
import XBold from '@/components/xdoc/editor/Toolbar/XBold'
import XRemoveFormat from '@/components/xdoc/editor/Toolbar/XRemoveFormat'
import XEditorToolbarArea from '@/components/xdoc/editor/XEditorToolbarArea'
// import XFontFamily from '@/components/xdoc/editor/Toolbar/XFontFamily'
// import XFontSize from '@/components/xdoc/editor/Toolbar/XFontSize'
// import XColor from '@/components/xdoc/editor/Toolbar/XColor'
// import XBackground from '@/components/xdoc/editor/Toolbar/XBackground'
import XItalic from '@/components/xdoc/editor/Toolbar/XItalic'
// import XUnderline from '@/components/xdoc/editor/Toolbar/XUnderline'
import XStrikethrough from '@/components/xdoc/editor/Toolbar/XStrikethrough'
// import XUnorderedList from '@/components/xdoc/editor/Toolbar/XUnorderedList'
// import XOrderedList from '@/components/xdoc/editor/Toolbar/XOrderedList'
// import XAlign from '@/components/xdoc/editor/Toolbar/XAlign'
import XTable from '@/components/xdoc/editor/Toolbar/XTable'
import XImage from '@/components/xdoc/editor/Toolbar/XImage'
import XFormula from '@/components/xdoc/editor/Toolbar/XFormula'
// import XContrast from '@/components/xdoc/editor/Toolbar/XContrast'
// import XHelp from '@/components/xdoc/editor/Toolbar/XHelp'
// import XButton from '@/components/xdoc/editor/Toolbar/XButton'
// import XUndo from '@/components/xdoc/editor/Toolbar/XUndo'
// import XRedo from '@/components/xdoc/editor/Toolbar/XRedo'
import XFill from '@/components/xdoc/editor/Toolbar/XFill'
import XElement from '@/components/xdoc/editor/Toolbar/XElement'
import XNoBreaking from '@/components/xdoc/editor/Toolbar/XNoBreaking'
import XSuperscript from '@/components/xdoc/editor/Toolbar/XSuperscript'
import XSubscript from '@/components/xdoc/editor/Toolbar/XSubscript'

export default {
    name: 'XEditorToolbar',
    components: {
        XFill,
        // XRedo,
        // XUndo,
        // XButton,
        // XHelp,
        // XContrast,
        XFormula,
        XImage,
        XTable,
        // XAlign,
        // XOrderedList,
        // XUnorderedList,
        XStrikethrough,
        // XUnderline,
        XItalic,
        // XBackground,
        // XColor,
        // XFontSize,
        // XFontFamily,
        XEditorToolbarArea,
        XRemoveFormat,
        XBold,
        XElement,
        XNoBreaking,
        XSuperscript,
        XSubscript
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
.x-editor {
    &-toolbar {
        border-top: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
        background: #fcfcfc;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
