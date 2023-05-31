

// 接收ThingJS页面传送的数据
window.addEventListener("message", function (e) {
  const data = e.data;
  const funcName = data.funcName;
  const param = data.param;

  if (window[funcName]) window[funcName](param);
});


