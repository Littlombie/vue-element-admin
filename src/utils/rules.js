export default {
  // 为空
  checkEmpty: (rule, value, callback) => {
    const _value = String(value).trim();
    if (_value === '') {
      return callback(new Error(rule.message));
    }
    callback();
  },
  // 输入框必填(数字)
  numberCheck: (rule, value, callback) => {
    const _value = value && String(value).trim()
    const test = /(^[1-9]\d*$)/.test(_value)
    if (!_value) {
      return callback(new Error(`${rule.title}不能为空`));
    }
    if (!test) {
      return callback(rule.message || new Error(`${rule.title}必须为正整数`));
    }
    callback();
  },
}