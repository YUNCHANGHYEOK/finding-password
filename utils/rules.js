export const rules = [
  {
    id: 1,
    description: "비밀번호에 대문자 하나 포함하세요",
    check: (password) => /[A-Z]/.test(password),
  },
  {
    id: 2,
    description: "숫자 하나 포함해야 함",
    check: (password) => /\d/.test(password),
  },
  {
    id: 3,
    description: "특수문자 포함 (!@#$ 등)",
    check: (password) => /[!@#$%^&*]/.test(password),
  },
  {
    id: 4,
    description: "길이는 12자 이상",
    check: (password) => password.length >= 12,
  },
  {
    id: 5,
    description: "같은 문자가 연속으로 두 번 나오면 안 됩니다 (예: aa, 11)",
    check: (password) => !/(.)\1/.test(password),
  },
  {
    id: 6,
    description: "비밀번호에 '123'이나 'abc'와 같은 연속된 문자가 포함되면 안 됩니다",
    check: (password) => !/(012|123|234|345|456|567|678|789|abc|bcd|cde|def|efg|fgh|ghi|hij)/i.test(password),
  },
  {
    id: 7,
    description: "비밀번호에 공백을 포함하면 안 됩니다",
    check: (password) => !password.includes(" "),
  },
  {
    id: 8,
    description: "비밀번호에 이메일 형식 포함 금지 (예: @, .com 등)",
    check: (password) => !/[@]|\.com/.test(password),
  },
  {
    id: 9,
    description: "모든 문자는 고유해야 합니다 (중복 문자 금지)",
    check: (password) => new Set(password).size === password.length,
  },
  {
    id: 10,
    description: "대소문자를 최소 하나씩 포함해야 합니다",
    check: (password) => /[a-z]/.test(password) && /[A-Z]/.test(password),
  },
  {
    id: 11,
    description: "한글은 포함할 수 없습니다",
    check: (password) => !/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(password),
  },
  {
    id: 12,
    description: "특수문자 중 '@', '#', '%'는 사용할 수 없습니다",
    check: (password) => !/[@#%]/.test(password),
  },
  {
    id: 13,
    description: "비밀번호는 반드시 숫자로 시작해야 합니다",
    check: (password) => /^\d/.test(password),
  },
  {
    id: 14,
    description: "비밀번호에 'password' 또는 'admin'이라는 단어는 포함되면 안 됩니다",
    check: (password) => !/password|admin/i.test(password),
  },
  
];