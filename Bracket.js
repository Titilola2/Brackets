function brackets(s)  {
  const stack = [];
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (brackets[c]) {
      stack.push(c);
    } else if (Object.values(brackets).includes(c)) {
      if (stack.length === 0) {
        return 0;
      }
      const top = stack.pop();
      if (brackets[top] !== c) {
        return 0;
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}
