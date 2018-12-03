// 请你给原生的 Map 添加方法 filterKeys 和 filterValues，
// 可以类似于于数组方法的 filter。它们分别可以对 Map 的键和值进行筛选，
// 它们会返回一个新的 Map， 是对原有的 Map 的筛选结果
Map.prototype.filterKeys = function(fn) {
    return new Map([...this].filter(([k, v]) => fn(k)));
}
  
  Map.prototype.filterValues = function(fn) {
    return new Map([...this].filter(([k, v]) => fn(v)));
}