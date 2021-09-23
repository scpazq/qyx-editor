/**
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-26
 * @description: 填空
 */
 window.tinymce.PluginManager.add('fill', function (editor, url) {

    // 填空，fillbox=填充狂；fillline=填充线
    const fill = function (className) {
        return () => {
            let el = editor.getDoc().createElement('span')
            el.classList.add(className)
            el.setAttribute('contenteditable', false)
            editor.insertContent(el.outerHTML)
        }
    }

    /**
     * 预览
     * @param {string} content 文本
     * @param {string} pinyin 拼音
     */
    const preview = function (content, pinyin) {
        const preview = document.querySelector('.js-fillmatt-preview')
        let html = '预览区域'
        if (content || pinyin) html = Generate.html(content, pinyin)
        preview.innerHTML = html
    }

    /**
     * 预览拼音+文字
     * @param {string} content 文本
     * @param {string} pinyin 拼音
     */
    const previewRuby = function (content, pinyin) {
        const preview = document.querySelector('.js-fillruby-preview')
        let html = '预览区域'
        if (content || pinyin) html = GenerateRuby.html(content, pinyin)
        preview.innerHTML = html
    }

    // 生成
    const Generate = {
        /**
         * 田字格
         * @param {string} content 内容
         */
        matt: function (content = '') {
            const el = editor.dom.create('span')
            const span = editor.dom.create('span')
            span.innerHTML = content
            span.setAttribute('contenteditable', false)
            el.appendChild(span)
            el.classList.add('qyx-fillmatt')
            return el.outerHTML
        },
        /**
         * 田字格组
         * @param content
         * @return {string}
         */
        mattgroup: function (html, content, pinyin) {
            const el = editor.dom.create('span')
            el.setAttribute('contenteditable', false)
            if (content) el.setAttribute('data-content', content)
            if (pinyin) el.setAttribute('data-pinyin', pinyin)
            el.classList.add('qyx-fillmattgroup')
            el.innerHTML = html
            return el.outerHTML
        },
        /**
         * 拼音 + 田字格
         * @param content
         * @param pinyin
         * @return {string}
         */
        pinyin: function (content, pinyin) {
            const ruby = editor.dom.create('ruby')
            const rt = editor.dom.create('rt')
            rt.innerHTML = pinyin
            ruby.innerHTML = content
            ruby.appendChild(rt)
            return ruby.outerHTML
        },
        /**
         * 生成 html
         * @param content
         */
        html: function (content, pinyin) {
            const newContent = content.match(/[\u4E00-\u9FA5\uF900-\uFA2D\u0020]+/g)
            const contentArr = newContent ? newContent[0].split('') : []
            const pinyinArr = pinyin ? pinyin.split(' ') : []
            const html = (contentArr.length > pinyinArr.length ? contentArr : pinyinArr).map((item, index) => {
                const matt = this.matt(contentArr.length ? contentArr[index] : '')
                if (pinyinArr.length) {
                    // 显示拼音
                    return this.pinyin(matt, pinyinArr[index] || '')
                } else {
                    // 不显示拼音
                    return matt
                }
            }).join('')
            return this.mattgroup(html, content, pinyin)
        }
    }

    // 生成拼音+文字
    const GenerateRuby = {
        /**
         * 单个文字
         * @param {string} content 内容
         */
        ruby: function (content = '') {
            const el = editor.dom.create('span')
            const span = editor.dom.create('span')
            span.innerHTML = content
            el.appendChild(span)
            el.classList.add('qyx-fillruby')
            return el.outerHTML
        },
        /**
         * 拼音+文字组
         * @param content
         * @return {string}
         */
        rubygroup: function (html, content, pinyin) {
            const el = editor.dom.create('span')
            el.setAttribute('contenteditable', false)
            if (content) el.setAttribute('data-content', content)
            if (pinyin) el.setAttribute('data-pinyin', pinyin)
            el.classList.add('qyx-fillrubygroup')
            el.innerHTML = html
            return el.outerHTML
        },
        /**
         * 拼音 + 文字
         * @param content
         * @param pinyin
         * @return {string}
         */
        pinyinRuby: function (content, pinyin) {
            const ruby = editor.dom.create('ruby')
            const rt = editor.dom.create('rt')
            rt.innerHTML = pinyin
            ruby.innerHTML = content
            ruby.appendChild(rt)
            return ruby.outerHTML
        },
        /**
         * 生成 html
         * @param content
         */
        html: function (content, pinyin) {
            const newContent = content.match(/[\u4E00-\u9FA5\uF900-\uFA2D\u0020]+/g)
            const contentArr = newContent ? newContent[0].split('') : []
            const pinyinArr = pinyin ? pinyin.split(' ') : []
            const html = (contentArr.length > pinyinArr.length ? contentArr : pinyinArr).map((item, index) => {
                const matt = this.ruby(contentArr.length ? contentArr[index] : '')
                if (pinyinArr.length) {
                    // 显示拼音
                    return this.pinyinRuby(matt, pinyinArr[index] || '')
                } else {
                    // 不显示拼音
                    return matt
                }
            }).join('')
            return this.rubygroup(html, content, pinyin)
        }
    }

    const Dialog = {
        fillmatt: function (target) {
            let dataContent = '',
                dataPinyin = ''
            if (target) {
                dataContent = target.getAttribute('data-content') || ''
                dataPinyin = target.getAttribute('data-pinyin') || ''
            }
            editor.windowManager.open({
                title: '插入田字格',
                body: {
                    type: 'panel',
                    items: [
                        {
                            type: 'textarea',
                            name: 'content',
                            label: '文本'
                        },
                        {
                            type: 'textarea',
                            name: 'pinyin',
                            label: '拼音'
                        },
                        {
                            type: 'htmlpanel',
                            html: '<div class="js-fillmatt-preview" style="height: 120px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center;">预览区域</div>'
                        }
                    ]
                },
                initialData: {
                    content: dataContent,
                    pinyin: dataPinyin
                },
                buttons: [
                    {
                        type: 'cancel',
                        name: 'closeButton',
                        text: '取消'
                    },
                    {
                        type: 'submit',
                        name: 'submitButton',
                        text: '确定',
                        primary: true
                    }
                ],
                onChange(api) {
                    const {content, pinyin} = api.getData()
                    preview(content, pinyin)
                },
                onSubmit(api, details) {
                    const {content, pinyin} = api.getData()
                    if (content.length || pinyin.length) {
                        console.log(Generate.html(content, pinyin))
                        editor.insertContent(Generate.html(content, pinyin))
                    } else {
                        editor.insertContent('')
                    }
                    api.close()
                }
            })

            if (dataContent || dataPinyin) {
                preview(dataContent, dataPinyin)
            }
        },
        fillruby: function (target) {
            let dataContent = '',
                dataPinyin = ''
            if (target) {
                dataContent = target.getAttribute('data-content') || ''
                dataPinyin = target.getAttribute('data-pinyin') || ''
            }
            console.log(dataContent)
            console.log(dataPinyin)
            editor.windowManager.open({
                title: '插入带拼音的文字',
                body: {
                    type: 'panel',
                    items: [
                        {
                            type: 'textarea',
                            name: 'content',
                            label: '文本'
                        },
                        {
                            type: 'textarea',
                            name: 'pinyin',
                            label: '拼音'
                        },
                        {
                            type: 'htmlpanel',
                            html: '<div class="js-fillruby-preview" style="height: 120px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center;">预览区域</div>'
                        }
                    ]
                },
                initialData: {
                    content: dataContent,
                    pinyin: dataPinyin
                },
                buttons: [
                    {
                        type: 'cancel',
                        name: 'closeButton',
                        text: '取消'
                    },
                    {
                        type: 'submit',
                        name: 'submitButton',
                        text: '确定',
                        primary: true
                    }
                ],
                onChange(api) {
                    const {content, pinyin} = api.getData()
                    previewRuby(content, pinyin)
                },
                onSubmit(api, details) {
                    const {content, pinyin} = api.getData()
                    if (content.length || pinyin.length) {
                        editor.insertContent(GenerateRuby.html(content, pinyin))
                    } else {
                        editor.insertContent('')
                    }
                    api.close()
                }
            })

            if (dataContent || dataPinyin) {
                previewRuby(dataContent, dataPinyin)
            }
        }
    }

    editor.addCommand('xfillbox', fill('qyx-fillbox'))
    editor.addCommand('xfillline', fill('qyx-fillline'))
    editor.addCommand('xfillmatt', Dialog.fillmatt)
    editor.addCommand('xfillruby', Dialog.fillruby)

    editor.on('click', function (e) {
        const el = e.target.closest('.qyx-fillmattgroup')
        if (el) {
            Dialog.fillmatt(el)
        }
    })

    editor.on('click', function (e) {
        const el = e.target.closest('.qyx-fillrubygroup')
        if (el) {
            Dialog.fillruby(el)
        }
    })

    return {
        getMetadata: function () {
            return {
                name: 'fill'
            }
        }
    }
})

