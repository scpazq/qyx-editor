/**
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-26
 * @description: 公式
 */
 window.tinymce.PluginManager.add('mathjax', function (editor, url) {

    // const symbols = editor.settings?.mathjax?.symbols ?? {start: '\\(', end: '\\)'}
    const symbols = editor.settings?.mathjax?.symbols ?? {start: '$', end: '$'}

    const Format = {
        element: function (el) {
            if (el.childNodes.length != 2) {
                el.setAttribute('contenteditable', false)
                el.setAttribute('data-name', 'math')
                el.style.cursor = 'pointer'

                const value = el.getAttribute('data-latex') || el.innerHTML
                el.setAttribute('data-latex', value)
                el.innerHTML = ''

                const latex = editor.dom.create('span')
                latex.setAttribute('data-name', 'latex')
                latex.classList.add('qyx-latex')
                latex.innerHTML = value
                el.appendChild(latex)

                const dummy = editor.dom.create('span')
                dummy.setAttribute('hidden', 'hidden')
                dummy.innerHTML = 'dummy'
                el.appendChild(dummy)
            }
        },
        latex: function (value) {
            return `${symbols.start}${value}${symbols.end}`
        }
    }

    const Math = {
        render: function (value) {
            const preview = document.querySelector('.js-math-preview')
            MathJax.typesetClear([preview])
            preview.innerHTML = `$$${value}$$`
            MathJax.typesetPromise([preview])
        }
    }

    const Dialog = {
        open: function (target) {
            let latex = ''
            if (target) {
                let latexAttr = target.getAttribute('data-latex')
                if (latexAttr.length >= (symbols.start + symbols.end).length) {
                    latex = latexAttr.substr(symbols.start.length, latexAttr.length - (symbols.start + symbols.end).length)
                }
            }

            editor.windowManager.open({
                title: '插入公式',
                body: {
                    type: 'panel',
                    items: [
                        {
                            type: 'textarea',
                            name: 'content'
                        },
                        {
                            type: 'htmlpanel',
                            html: '<div class="js-math-preview" style="height: 120px; display: flex; align-items: center; justify-content: center;">预览区域</div>'
                        }
                    ]
                },
                initialData: {
                    content: latex
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
                onChange(api, details) {
                    const data = api.getData()
                    Math.render(data.content)
                },
                onSubmit(api, details) {
                    const data = api.getData()
                    const value = data.content
                    const el = editor.getDoc().createElement('span')
                    el.classList.add('qyx-latex')
                    el.innerHTML = Format.latex(value)
                    Format.element(el)
                    editor.insertContent(el.outerHTML)
                    MathJax.startup.getComponents()
                    MathJax.typeset()

                    api.close()
                }
            })

            latex && Math.render(latex)
        }
    }

    editor.addCommand('xMathJax', Dialog.open)

    editor.on('click', function (e) {
        const el = e.target.closest('[data-name="math"]')
        if (el) {
            Dialog.open(el)
        }
    })

    // remove extra tags on get content
    editor.on('GetContent', function (e) {
        let div = editor.dom.create('div')
        div.innerHTML = e.content
        let els = div.querySelectorAll('[data-name="math"]')
        for (let i = 0; i < els.length; i++) {
            let children = els[i].querySelectorAll('span')
            for (let j = 0; j < children.length; j++) {
                children[j].remove()
            }
            let latex = els[i].getAttribute('data-latex')
            els[i].removeAttribute('contenteditable')
            els[i].removeAttribute('style')
            els[i].removeAttribute('data-latex')
            els[i].innerHTML = latex
        }
        e.content = div.innerHTML
    })

    // add dummy tag on set content
    editor.on('BeforeSetContent', function (e) {
        let div = editor.dom.create('div')
        div.innerHTML = e.content
        let els = div.querySelectorAll('[data-name="math"]')
        for (let i = 0; i < els.length; i++) {
            Format.element(els[i])
        }
        e.content = div.innerHTML
    })

    // refresh mathjax on set content
    editor.on('SetContent', function (e) {
        if (window.MathJax) {
            window.MathJax.startup.getComponents()
            window.MathJax.typeset()
        }
    })

    return {
        getMetadata: function () {
            return {
                name: 'mathjax'
            }
        }
    }
})

