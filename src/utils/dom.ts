import _ from 'lodash'


// 以242px 底图为准开发页面
export const setDomFontSize = (): void => {
  let width = document.documentElement.clientWidth || document.body.clientWidth;
  let fontsize = (width <= 1242 ? 1242 : width) / 100 + 'px';
  (document.getElementsByTagName('html')[0].style as any)['font-size'] = fontsize;
}

let setDomFontSizeDebounce = _.debounce(setDomFontSize, 400)
window.addEventListener('resize', setDomFontSizeDebounce); // 浏览器加入收缩监听防抖，重新计算rem配置