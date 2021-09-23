/**
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-26
 * @description: config
 */
window.MathJax = {
    startup: {
        ready: () => {
            MathJax.startup.defaultReady()
            MathJax.startup.promise.then(() => {
                console.log('MathJax initial typesetting complete')
            })
        }
    },
    options: {
        enableMenu: false
    },
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        macros: {
            RR: '{\\bf R}',
            bold: ['{\\bf #1}', 1]
        },
        packages: {
            '[+]': ['mhchem']
        }
    },
    loader: {load: ['[tex]/mhchem']},
}
