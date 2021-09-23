<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: XTable
-->
<template>
    <a-tooltip placement="top" :trigger="['hover']" title="表格">
        <a-popover trigger="focus">
            <button class="x-editor-button">
                <icon type="insert-table" size="15"/>
                <icon type="down" size="12"/>
            </button>
            <template slot="content">
                <div class="table">
                    <div class="table-body"
                         @mouseleave="onMouseleave">
                        <ul v-for="(item,index) in 9"
                            :key="index">
                            <li v-for="(subItem,subIndex) in 9"
                                :key="subIndex"
                                :class="{active: subIndex < columns && index < rows}"
                                @mouseover="onMouseover(index, subIndex)"
                                @click="handleClick"></li>
                        </ul>
                    </div>
                    <div class="table-footer">{{ columns }}×{{ rows }}</div>
                </div>
            </template>
        </a-popover>
    </a-tooltip>
</template>

<script>
export default {
    name: 'XTable',
    data() {
        return {
            rows: 0,
            columns: 0
        }
    },
    computed: {},
    watch: {},
    created() {
    },
    mounted() {
    },
    methods: {
        onMouseover(row, col) {
            this.rows = row + 1
            this.columns = col + 1
        },
        onMouseleave() {
            this.rows = 0
            this.columns = 0
        },
        handleClick() {
            const {rows, columns} = this
            window.tinymce.activeEditor.execCommand('mceInsertTable', false, {rows, columns})
        }
    }
}
</script>

<style lang="scss" scoped>
@import "style";

.table {
    background: #fff;

    &-body {

        ul {
            margin: 0;
            display: flex;
            align-items: center;

            &:not(:last-child) {
                margin-bottom: 4px;
            }
        }

        li {
            display: inline-block;
            list-style: none;
            width: 16px;
            height: 16px;
            background-color: #f5f6f7;
            border: 2px solid #eff0f1;

            &:not(:last-child) {
                margin-right: 4px;
            }

            &.active {
                border: 2px solid #82a7fc;
                background-color: #82a7fc;
            }
        }
    }

    &-footer {
        text-align: center;
        padding: 4px 0 0 0;
        font-size: 12px;
    }
}
</style>
