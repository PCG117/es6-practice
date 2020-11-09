/*
 * @Author: your name
 * @Date: 2020-10-13 08:04:44
 * @LastEditTime: 2020-10-13 08:06:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \es6\countclick.html\Pquery.js
 */
(function(w){
    w.Pquery={
        getOne:(selector)=>{
            return document.querySelector(selector)
        }
    }
})(window)