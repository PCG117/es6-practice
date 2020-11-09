/*
 * @Author: your name
 * @Date: 2020-10-13 08:05:15
 * @LastEditTime: 2020-10-13 08:09:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \es6\countclick.html\countClick.js
 */
(function(w){
    const getOne=Pquery.getOne
    let countNum=0
    const handleClick=()=>{
        countNum++
        console.log('click' + countNum + ' times');
    }
    w.CountClick={
        count:(selector)=>{
            getOne(selector).addEventListener('click',handleClick)
        }
    }
})(window)