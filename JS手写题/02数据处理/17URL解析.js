// let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/

// function parseParam(url) {
//     const paramStr = /.+\?(.+)$/.exec(url)[1]
//     console.log(paramStr)
//     const paramArr = paramStr.split('&')
// }
// parseParam(url)

const url  = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
const parseUrl = (url) => {
  const urlObj = url.split("?")[1]
  const allObj = urlObj.split("&")
  let res = {}
  for (let i = 0; i < allObj.length; i++) {
    const every = allObj[i].split("=")
    if (every.length === 1) res[every[0]] = true
    else res[every[0]] = every[1]
  }
  return res
}
parseUrl(url)
