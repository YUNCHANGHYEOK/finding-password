export const rules = [
  // 1~6: 기본 문자 포함 규칙
  { id: 1, description: "대문자를 하나 이상 포함해야 합니다", check: p => /[A-Z]/.test(p) },
  { id: 2, description: "소문자를 하나 이상 포함해야 합니다", check: p => /[a-z]/.test(p) },
  { id: 3, description: "숫자를 하나 이상 포함해야 합니다", check: p => /\d/.test(p) },
  { id: 4, description: "특수문자 (!, $, ^, &, *) 중 하나 포함", check: p => /[!$^&*]/.test(p) },
  { id: 5, description: "공백 문자가 포함되면 안 됩니다", check: p => !/\s/.test(p) },
  { id: 6, description: "한글이 포함되면 안 됩니다", check: p => !/[\u3131-\u318E\uAC00-\uD7A3]/.test(p) },

  // 7~14: 패턴 제한
  { id: 7, description: "같은 문자가 3번 이상 반복되면 안 됩니다", check: p => {
    const count = {};
    for (let ch of p) {
      count[ch] = (count[ch] || 0) + 1;
      if (count[ch] > 2) return false;
    }
    return true;
  }},
  { id: 8, description: "연속된 알파벳 또는 숫자는 포함되면 안 됩니다 (abc, 123 등)", check: p => !/(abc|bcd|cde|123|234|345|456|567|678|789)/i.test(p) },
  { id: 9, description: "회문(앞뒤가 같은 구조)은 허용되지 않습니다", check: p => p !== p.split("").reverse().join("") },
  { id: 10, description: "이메일 형식이 포함되면 안 됩니다 (@, .com 등)", check: p => !/[@]|\.com/.test(p) },
  { id: 11, description: "password 또는 admin이 포함되면 안 됩니다", check: p => !/password|admin/i.test(p) },
  { id: 12, description: "대문자 3개 이상 연속 사용 불가", check: p => !/[A-Z]{3,}/.test(p) },
  { id: 13, description: "숫자 3개 이상 연속 사용 불가", check: p => !/\d{3,}/.test(p) },
  { id: 14, description: "특수문자 연속 2개 이상 금지", check: p => !/[!$^&*]{2,}/.test(p) },

  // 15~17: 시작/끝 문자 조건
  { id: 15, description: "숫자로 시작해야 합니다", check: p => /^\d/.test(p) },
  { id: 16, description: "문자로 끝나야 합니다", check: p => /[a-zA-Z]$/.test(p) },
  { id: 17, description: "대문자로 시작하면 안 됩니다", check: p => !/^[A-Z]/.test(p) },

  // 18~22 (22 제거됨)
  { id: 18, description: "문자열 길이는 소수여야 합니다", check: p => {
    const len = p.length;
    if (len < 2) return false;
    for (let i = 2; i <= Math.sqrt(len); i++) {
      if (len % i === 0) return false;
    }
    return true;
  }},
  { id: 19, description: "문자열 길이는 피보나치 수여야 합니다", check: p => {
    const len = p.length;
    let a = 1, b = 1;
    while (b < len) [a, b] = [b, a + b];
    return b === len;
  }},
  { id: 20, description: "숫자의 총합은 홀수여야 합니다", check: p => {
    const sum = (p.match(/\d/g) || []).reduce((a, b) => a + Number(b), 0);
    return sum % 2 === 1;
  }},
  { id: 21, description: "특수문자 개수는 짝수여야 합니다", check: p => (p.match(/[!$^&*]/g) || []).length % 2 === 0 },
  { id: 22, description: "숫자 개수는 2의 배수여야 합니다", check: p => (p.match(/\d/g) || []).length % 2 === 0 },

  // 23~25: 비율/문자 구조
  { id: 23, description: "대소문자 비율은 1:2 이상이어야 합니다 (대:소)", check: p => {
    const up = (p.match(/[A-Z]/g) || []).length;
    const low = (p.match(/[a-z]/g) || []).length;
    return low >= up * 2;
  }},
  { id: 24, description: "비밀번호에는 영어 모음(aeiou)이 최소 2개 이상 포함되어야 합니다", check: p => (p.match(/[aeiou]/gi) || []).length >= 2 },
  { id: 25, description: "숫자 다음엔 반드시 문자가 와야 합니다", check: p => !/\d[^a-zA-Z]/.test(p) },

  // 26~28: 포함형 조건
  { id: 26, description: "화학 원소 기호 중 하나(H, He, Li, Be, B 등)를 포함해야 합니다", check: p => /H|He|Li|Be|B|C|N|O|F|Ne/.test(p) },
  { id: 27, description: "임의의 유일한 알파벳 하나를 반드시 포함해야 합니다 (예: q)", check: p => /q/.test(p) },
  { id: 28, description: "하나는 ASCII 33~47번 문자여야 합니다 (예: !\"#$%&'()*+,-./)", check: p => /[\x21-\x2F]/.test(p) },

  // 29~30: 정답 유도 조건
  { id: 29, description: "비밀번호에는 정확히 세 개의 대문자가 포함되어야 하며, 각각 'B', 'L', 'C' 중 하나여야 합니다", check: p => {
    const caps = (p.match(/[A-Z]/g) || []);
    return caps.length === 3 && caps.every(c => ['B', 'L', 'C'].includes(c));
  }},
  { id: 30, description: "비밀번호에는 'a', 'b', 'q' 소문자 세 개가 모두 포함되어야 하며, '6'과 '^'도 포함되어야 합니다", check: p =>
    /a/.test(p) && /b/.test(p) && /q/.test(p) && /6/.test(p) && /\^/.test(p)
  }
];