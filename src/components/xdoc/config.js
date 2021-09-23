/**
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: config.js
 */

    // 序号
export const serialNumber = {
        letter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        number: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
    }

// 数据结构
export const structure = {
    full: {
        id: '', // 题 id
        number: '1', // 题号
        stem: '题干题干题干题干题干题干题干题干', // 题干
        type: '', // 题型
        // 选项，所属题型：单选题，多选题
        optionList: [
            {
                optionId: '', // 标识
                option: 'A', // 序号
                content: '', // 内容
                order: '' // 排序
            },
            {
                optionId: '', // 标识
                option: 'B', // 序号
                content: '', // 内容
                order: '' // 排序
            },
            {
                optionId: '', // 标识
                option: 'C', // 序号
                content: '', // 内容
                order: '' // 排序
            },
            {
                optionId: '', // 标识
                option: 'D', // 序号
                content: '', // 内容
                order: '' // 排序
            }
        ],
        // 子题，所属题型：综合题，包含除综合题外的所有题型
        children: [],
        // 拓展
        expand: [
            {
                score: '', // 题分数
                source: '', // 来源
                difficulty: '' // 难度
            }
        ],
        // 解法
        solutionList: [
            {
                answerList: [], // 答案
                analyze: '' // 解析
            }
        ],
        // 答案
        amResTqAnswerList: [{
            answerId: '',
            content: ''
        }
    ],
    }
}

/**
 * 检查题目内容是否填写完整
 * @param questionData 题目信息
 * @returns Object 
 */
export function checkQuestionData(questionData) {
    function checkInfo(info) {
        const  { amResTqOptionList, content, children, amResTqAnswerList } = info
        // if (!content) {
        //     return {
        //         status: false,
        //         message: `题干不能为空`
        //     }
        // }
        switch(info.type) {
            case 'selection':
                for (let index = 0; index < amResTqOptionList.length; index++) {
                    if (!amResTqOptionList[index].content) {
                        return {
                            status: false,
                            message: `选项内容不能为空`
                        }
                    }
                }
            case 'moreSelection': 
                for (let index = 0; index < amResTqOptionList.length; index++) {
                    if (!amResTqOptionList[index].content) {
                        return {
                            status: false,
                            message: `选项内容不能为空`
                        }
                    }
                }
                if (amResTqAnswerList.length > 1) {
                    for (let index = 0; index < amResTqAnswerList.length; index++) {
                        if (!amResTqAnswerList[index].content) {
                            return {
                                status: false,
                                message: `答案不能为空`
                            }
                        }
                    }
                }
            case 'answers': 
                if (amResTqAnswerList.length > 1) {
                    for (let index = 0; index < amResTqAnswerList.length; index++) {
                        if (!amResTqAnswerList[index].content) {
                            return {
                                status: false,
                                message: `答案不能为空`
                            }
                        }
                    }
                }    
            case 'complex': 
                if (children.length > 0) {
                    for (let index = 0; index < children.length; index++) {
                        const result = checkInfo(children[index])
                        if (!result.status) {
                            return result
                        }
                    }
                    return {
                        status: true,
                        message: ''
                    }
                }
                return {
                    status: true,
                    message: ''
                }
            default: {
                return {
                    status: true,
                    message: ''
                }
            }
        }
    }

    return checkInfo(questionData)
}
