AULA.unit({
  n: 0, title: 'En el aula', ko: '교실에서 — 첫 수업',
  goal: '자기소개하기, 교실에서 질문하기, 인사하고 헤어지기',
  can: ['이름 말하기', '인사·작별 인사', '교실 표현', '단어 뜻·철자 묻기'],
  tags: ['saludos', 'presentarse', '교실 표현', 'llamarse'],
  vocab: [
    { g: '인사 · Saludos', w: [['Hola', '안녕', '👋'], ['Buenos días', '좋은 아침 (오전 인사)', '🌅'], ['Buenas tardes', '안녕하세요 (오후)', '🌇'], ['Buenas noches', '안녕하세요/잘 자요 (밤)', '🌙'], ['¿Qué tal?', '어떻게 지내?'], ['Muy bien, gracias', '아주 잘 지내, 고마워']] },
    { g: '작별 · Despedidas', w: [['Adiós', '잘 가'], ['Hasta luego', '나중에 봐'], ['Hasta mañana', '내일 봐'], ['Hasta pronto', '곧 봐'], ['Chao', '안녕(작별, 중남미)']] },
    { g: '교실 표현 · En clase', w: [['¿Cómo se dice … en español?', '…을 스페인어로 어떻게 말해요?'], ['¿Qué significa …?', '…은 무슨 뜻이에요?'], ['¿Cómo se escribe?', '어떻게 써요?'], ['¿Puedes repetir, por favor?', '다시 말해 줄래?'], ['Más despacio, por favor', '더 천천히 부탁해요'], ['No entiendo', '이해가 안 돼요'], ['¿En qué página?', '몇 쪽이에요?'], ['Perdón / Lo siento', '죄송해요']] },
    { g: '교실 사물 · Objetos', w: [['el libro', '책', '📘'], ['el cuaderno', '공책', '📓'], ['el bolígrafo', '볼펜', '🖊️'], ['el lápiz', '연필', '✏️'], ['la mesa', '책상', ''], ['la silla', '의자', '🪑'], ['la pizarra', '칠판', ''], ['la mochila', '책가방', '🎒']] }
  ],
  gram: [
    { h: '이름 말하기 — llamarse', p: '“내 이름은 ~이다”는 **me llamo** + 이름. 상대방 이름은 **¿Cómo te llamas?** (친구) / **¿Cómo se llama?** (존칭)',
      t: [['인칭', 'llamarse'], ['yo', 'me llamo'], ['tú', 'te llamas'], ['él / ella / usted', 'se llama']],
      ex: [['Hola, me llamo Lucía. ¿Y tú?', '안녕, 내 이름은 루시아야. 너는?'], ['Me llamo Minjun, encantado.', '내 이름은 민준이야, 반가워.']] },
    { h: '하루 시간대별 인사', t: [['시간', '인사'], ['아침~점심 전', 'Buenos días'], ['점심 이후~저녁', 'Buenas tardes'], ['밤', 'Buenas noches']], tip: '**Hola**는 하루 중 언제든 쓸 수 있어요. 스페인에서는 점심(오후 2시경) 이후부터 Buenas tardes!' },
    { h: '스페인어 물음표·느낌표', p: '스페인어는 문장 **앞**에 거꾸로 된 부호를 붙여요: **¿**Cómo estás**?** / **¡**Hola**!**' }
  ],
  ex: [
    { k: 'match', t: '인사와 상황 연결하기', d: '각 표현을 알맞은 뜻과 연결하세요.', it: [['Buenos días', '좋은 아침'], ['Hasta mañana', '내일 봐'], ['¿Qué tal?', '어떻게 지내?'], ['Buenas noches', '밤 인사'], ['Adiós', '잘 가'], ['Encantada', '만나서 반가워(여성)']] },
    { k: 'fill', t: '자기소개 완성하기', d: '빈칸에 알맞은 말을 쓰세요.', box: ['me', 'te', 'se', 'llamo', 'llamas'], it: ['Hola, [me] llamo Sofía.', '¿Cómo [te] llamas?', 'Yo me [llamo] Daniel.', '¿Cómo [se] llama usted?', 'Y tú, ¿cómo te [llamas]?'] },
    { k: 'mc', t: '어떤 인사를 할까요?', d: '상황에 가장 알맞은 표현을 고르세요.', it: [['오전 9시, 선생님을 만났어요.', 'Buenas noches|*Buenos días|Hasta luego'], ['오후 4시, 친구를 만났어요.', '*Buenas tardes|Buenos días|Adiós'], ['밤 10시, 가족에게 잘 자라고 말해요.', 'Buenas tardes|Hola|*Buenas noches'], ['수업이 끝나고 내일 또 만나요.', 'Buenos días|*Hasta mañana|¿Qué tal?'], ['친구가 “¿Qué tal?” 하고 물어요.', 'Me llamo Ana|*Muy bien, gracias|Hasta pronto']] },
    { k: 'mc', t: '교실 표현 — 어떻게 물어볼까?', d: '하고 싶은 말을 스페인어로 고르세요.', it: [['“book”이 스페인어로 뭐냐고 묻고 싶어요.', '*¿Cómo se dice “book” en español?|¿Qué significa “book”?|¿En qué página?'], ['선생님 말씀이 너무 빨라요.', 'No entiendo|*Más despacio, por favor|Hasta luego'], ['“mochila”의 뜻을 몰라요.', '¿Cómo se escribe “mochila”?|*¿Qué significa “mochila”?|Perdón'], ['철자를 알고 싶어요.', '*¿Cómo se escribe?|¿Qué tal?|¿Puedes repetir?'], ['한 번 더 들려 달라고 해요.', 'Lo siento|*¿Puedes repetir, por favor?|Encantado']] },
    { k: 'dlg', t: '첫날 교실 대화 듣기', d: '대화를 듣고 질문에 답하세요.', listen: 1,
      lines: [['Profesora', 'Buenos días a todos. Me llamo Carmen. ¿Y tú, cómo te llamas?'], ['Jiwoo', 'Me llamo Jiwoo. Encantada.'], ['Profesora', 'Encantada, Jiwoo. ¿Y tú?'], ['Tomás', 'Yo me llamo Tomás. Perdón, ¿cómo se dice “notebook” en español?'], ['Profesora', 'Se dice “cuaderno”.'], ['Tomás', '¿Puedes repetir, por favor?'], ['Profesora', 'Cuaderno: cu-a-der-no.']],
      it: [['선생님 이름은?', 'Lucía|*Carmen|Jiwoo'], ['대화는 하루 중 언제인가요?', '*오전|오후|밤'], ['Tomás가 물어본 단어는?', 'libro|mochila|*cuaderno'], ['Tomás는 무엇을 부탁했나요?', '천천히 말하기|*다시 말해 주기|철자 써 주기']] },
    { k: 'order', t: '문장 순서 맞추기', d: '단어를 눌러 올바른 문장을 만드세요.', it: ['¿Cómo te llamas?', 'Hola, me llamo Andrés.', '¿Qué significa esta palabra?', '¿Cómo se dice “gracias” en coreano?', 'Más despacio, por favor.'] },
    { k: 'sort', t: '인사일까, 작별일까?', d: '각 표현을 분류하세요.', cats: ['만날 때 👋', '헤어질 때 🚪'], it: [['Hola', 0], ['Adiós', 1], ['Buenos días', 0], ['Hasta luego', 1], ['¿Qué tal?', 0], ['Hasta mañana', 1], ['Buenas tardes', 0], ['Hasta pronto', 1]] },
    { k: 'match', t: '교실 사물', d: '단어와 뜻을 연결하세요.', it: [['el bolígrafo', '볼펜'], ['la pizarra', '칠판'], ['la mochila', '책가방'], ['el cuaderno', '공책'], ['la silla', '의자'], ['el lápiz', '연필']] },
    { k: 'dict', t: '받아쓰기', d: '듣고 문장을 그대로 쓰세요. (부호 ¿ ¡ 는 채점하지 않아요)', it: ['Hola, ¿qué tal?', 'Me llamo Elena.', 'Hasta mañana.', 'No entiendo.'] },
    { k: 'write', t: '나의 첫 자기소개', d: '인사 + 이름 + 작별 인사로 짧게 자기소개를 써 보세요.', model: '¡Hola! Buenos días. Me llamo Yuna. Encantada. ¡Hasta luego!' }
  ]
});
