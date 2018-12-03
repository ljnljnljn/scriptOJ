// 完成 cookieJar 单例，它有三个方法：

// set(name, value, days)：设置 cookie 的值，days 为多少天以后过期。
// get(name)：获取 cookie 的值。
// remove(name)：删除 cookie 的值。

const cookieJar = {
    set (name, value, days) {
      /* TODO */
      var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)
      if(days) {
          let date = new Date().getTime() + parseInt(days) * 24 * 60 * 60 * 1000
          cookie += '; expires=' + new Date(date).toUTCString()
      }
      document.cookie = cookie
    },
    get (name) {
      /* TODO */
      var cookieName = encodeURI(name)
      var indexStart = document.cookie.indexOf(cookieName)
      var cookieValue = ''
      if(indexStart > -1) {
          var indexEnd = document.cookie.indexOf(';', indexStart)
          if(indexEnd === -1) {
              indexEnd = document.cookie.length
          }
          cookieValue = decodeURIComponent(document.cookie.substring(indexStart + cookieName.length, indexEnd))
      }
      return cookieValue
    },
    remove (name) {
      /* TODO */
      cookieJar.set(name, '')
    }
}
  