/*!
 *    /     '      /  / 
 *   /__      ___ (  /   
 *   \--`-'-|`---\ |  
 *    |' _/   ` __/ /   
 *    '._  W    ,--'   
 *       |_:_._/         
 *                       
 * ~~ object-chain v1.0.3
 * 
 * @moment Tuesday, May 8, 2018 6:22 PM
 * @homepage https://github.com/adriancmiranda/object-chain#readme
 * @author Adrian C. Miranda
 * @license (c) 2017-2021
 */
!(function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.objectChain=e()})(this,(function(){"use strict";function t(t){return"function"==typeof t}function e(t){return"string"==typeof t||t instanceof String}function n(t){return (function(t){return null!=t&&t.constructor===Array})(t)||e(t)||!!t&&"object"==typeof t&&"number"==typeof t.length&&(0===t.length||t.length>0&&t.length-1 in t)}function r(t,e,r,c){try{const u=n(r)?r:[];switch(u.length){case 0:return t.call(e);case 1:return t.call(e,u[0]);case 2:return t.call(e,u[0],u[1]);case 3:return t.call(e,u[0],u[1],u[2]);case 4:return t.call(e,u[0],u[1],u[2],u[3]);case 5:return t.call(e,u[0],u[1],u[2],u[3],u[4]);case 6:return t.call(e,u[0],u[1],u[2],u[3],u[4],u[5]);case 7:return t.call(e,u[0],u[1],u[2],u[3],u[4],u[5],u[6]);case 8:return t.call(e,u[0],u[1],u[2],u[3],u[4],u[5],u[6],u[7]);case 9:return t.call(e,u[0],u[1],u[2],u[3],u[4],u[5],u[6],u[7],u[8]);default:return t.apply(e,u)}}catch(t){if(c)return t;throw t}}const c=Array.from,u=Object.setPrototypeOf,s=Object.defineProperties,i=Object.create,o=Object.keys;return(n,l)=>{function a(){const u=this.rules.reduce((u,s,o)=>{if(t(n[s])){const l=(l=this.args[`${s}${o}`],i=[u],c(l).reduce((e,n,r)=>(e[e.length]=t(n)?n():n,e),i)),a=r(n[s],this,l);if(!e(a))return a;u+=a}else u+=n[s];return u},"");var s,i;return l?r(l,this,[u,arguments],!0):u}function f(t,e,n){function c(){return r(a,c,arguments)}return c.rules=t,c.args=e,c.index=n,u(c,d),c}const h=o(n).reduce((e,r,c)=>{const u=t(n[r]);return e[r]={[u?"value":"get"]:function(){return this.index+=1,u&&(this.args[`${r}${this.index}`]=arguments),f(this.rules.concat(r),this.args,this.index)}},e},i(null)),d=s((function(){}),h);return s({rules:n},o(h).reduce((e,r,c)=>{const u=t(n[r]);return e[r]={[u?"value":"get"]:function(){return void 0===this.args&&(this.args=arguments),u&&(this.args[`${r}0`]=arguments),f([r],this.args,0)}},e},i(null)))}}));
//# sourceMappingURL=index.js.map
