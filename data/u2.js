AULA.unit({
  n: 2, title: 'Quiero aprender español', ko: '스페인어를 배우고 싶어요',
  goal: '스페인어를 배우는 목적·이유 말하고, 할 수 있는 것 정도 표현하기',
  can: ['현재형 규칙 동사', 'querer + 동사원형', 'porque / para', '정관사 el·la·los·las'],
  tags: ['presente regular', 'querer', 'porque / para', 'artículo determinado', 'idiomas'],
  vocab: [
    { g: '언어 · Idiomas', w: [['el español', '스페인어'], ['el inglés', '영어'], ['el coreano', '한국어'], ['el chino', '중국어'], ['el japonés', '일본어'], ['el francés', '프랑스어'], ['el alemán', '독일어'], ['el italiano', '이탈리아어'], ['el portugués', '포르투갈어'], ['el árabe', '아랍어']] },
    { g: '수업 활동 · En clase', w: [['leer', '읽다'], ['escribir', '쓰다'], ['escuchar', '듣다'], ['hablar', '말하다'], ['ver películas', '영화를 보다'], ['hacer ejercicios', '연습 문제를 하다'], ['aprender vocabulario', '어휘를 배우다'], ['practicar la gramática', '문법을 연습하다'], ['traducir', '번역하다'], ['cantar canciones', '노래를 부르다']] },
    { g: '여가 · Ocio', w: [['viajar', '여행하다', '✈️'], ['conocer gente', '사람들을 알게 되다'], ['visitar museos', '박물관을 방문하다', '🏛️'], ['bailar', '춤추다', '💃'], ['cocinar', '요리하다', '🍳'], ['chatear', '채팅하다', '💬']] },
    { g: '정도 · ¿Qué tal hablas…?', w: [['muy bien', '아주 잘'], ['bien', '잘'], ['bastante bien', '꽤 잘'], ['regular', '그럭저럭'], ['mal', '못'], ['un poco', '조금']] }
  ],
  gram: [
    { h: '현재형 규칙 동사', p: '원형 어미 -ar, -er, -ir을 떼고 인칭 어미를 붙여요.', t: [['', 'hablar', 'comer', 'vivir'], ['yo', 'hablo', 'como', 'vivo'], ['tú', 'hablas', 'comes', 'vives'], ['él / ella / usted', 'habla', 'come', 'vive'], ['nosotros/-as', 'hablamos', 'comemos', 'vivimos'], ['vosotros/-as', 'habláis', 'coméis', 'vivís'], ['ellos / ellas / ustedes', 'hablan', 'comen', 'viven']] },
    { h: '불규칙: querer · hacer · ir', t: [['', 'querer', 'hacer', 'ir'], ['yo', 'quiero', 'hago', 'voy'], ['tú', 'quieres', 'haces', 'vas'], ['él/ella/usted', 'quiere', 'hace', 'va'], ['nosotros/-as', 'queremos', 'hacemos', 'vamos'], ['vosotros/-as', 'queréis', 'hacéis', 'vais'], ['ellos/ellas/ustedes', 'quieren', 'hacen', 'van']], ex: [['Quiero aprender español para viajar por Perú.', '페루를 여행하려고 스페인어를 배우고 싶어.']] },
    { h: '이유·목적: porque / para', p: '**porque** + 문장(왜냐하면) · **para** + 동사원형(~하기 위해)', ex: [['Estudio español porque mi madre es mexicana.', '엄마가 멕시코인이라서 스페인어를 공부해.'], ['Estudio español para trabajar en Argentina.', '아르헨티나에서 일하려고 스페인어를 공부해.']] },
    { h: '정관사 el · la · los · las', t: [['', '단수', '복수'], ['남성', 'el libro', 'los libros'], ['여성', 'la canción', 'las canciones']], tip: '언어 이름은 남성: **el** español. 단, hablar 뒤에서는 보통 관사 없이: Hablo español.' },
    { h: '주어 인칭대명사', p: '동사 어미로 주어를 알 수 있어서, 스페인어는 주어를 자주 생략해요. 강조·대조할 때만 씀: **Yo** hablo inglés, pero **ella** no.' }
  ],
  ex: [
    { k: 'fill', t: '-AR 동사 변화', d: '괄호 속 동사를 알맞게 바꾸세요.', it: ['Yo [hablo] tres idiomas. (hablar)', '¿Tú [estudias] alemán? (estudiar)', 'Mi padre [trabaja] en un hospital. (trabajar)', 'Nosotros [escuchamos] música latina. (escuchar)', 'Vosotros [practicáis] mucho. (practicar)', 'Ellas [bailan] salsa los viernes. (bailar)'] },
    { k: 'fill', t: '-ER · -IR 동사 변화', d: '괄호 속 동사를 알맞게 바꾸세요.', it: ['Yo [leo] novelas en español. (leer)', 'Tú [escribes] muy bien. (escribir)', 'Ana [vive] en Toledo. (vivir)', 'Nosotros [aprendemos] vocabulario nuevo. (aprender)', 'Vosotras [comprendéis] el texto. (comprender)', 'Mis amigos [viven] en Lima. (vivir)'] },
    { k: 'fill', t: '불규칙 동사 querer · hacer · ir', it: ['Yo [quiero] visitar Cuba.', '¿Qué [haces] los sábados?', 'Mi hermano [va] al gimnasio.', 'Nosotros [queremos] ver una película.', 'Yo [hago] los ejercicios en casa.', 'Vosotros [vais] a clase de español.'] },
    { k: 'mc', t: '이 동사의 주어는?', d: '동사형에 맞는 주어를 고르세요.', it: [['leéis', 'tú|*vosotros|ellos'], ['escribe', 'yo|*ella|nosotros'], ['vivimos', '*nosotros|vosotros|ellas'], ['hablas', '*tú|él|usted'], ['comen', 'yo|nosotros|*ustedes'], ['hago', '*yo|tú|él']] },
    { k: 'fill', t: 'porque 또는 para?', d: '알맞은 쪽을 고르세요.', it: ['Estudio español {*para|porque} viajar por Sudamérica.', 'Aprendo japonés {para|*porque} me gusta el anime.', 'Quiero hablar inglés {*para|porque} trabajar en Londres.', 'Leo periódicos {para|*porque} quiero mejorar mi vocabulario.', 'Voy a Madrid {*para|porque} visitar el Museo del Prado.'] },
    { k: 'fill', t: '정관사 넣기', d: 'el · la · los · las 중 고르세요.', it: ['{*el|la|los} libro de gramática', '{el|*la|las} música cubana', '{el|los|*las} películas españolas', '{*los|las|el} ejercicios de clase', '{el|*la|los} canción favorita', '{*el|la|las} idioma oficial'] },
    { k: 'sort', t: '동사 분류 — 어떤 그룹?', d: '각 동사를 -ar / -er / -ir 로 분류하세요.', cats: ['-AR', '-ER', '-IR'], it: [['cantar', 0], ['leer', 1], ['vivir', 2], ['bailar', 0], ['aprender', 1], ['escribir', 2], ['viajar', 0], ['comprender', 1], ['abrir', 2]] },
    { k: 'tf', t: '듣기 — 왜 스페인어를 배우나요?', d: '세 학생의 이야기를 듣고 V/F를 고르세요.', listen: 1,
      lines: [['Lukas', 'Hola, soy Lukas. Estudio español porque mi novia es de Sevilla. Quiero hablar con su familia.'], ['Mei', 'Yo soy Mei. Aprendo español para trabajar en una empresa de turismo. Hablo inglés bastante bien, pero español, un poco.'], ['Omar', 'Me llamo Omar. A mí me encanta la música latina. Quiero entender las canciones de reguetón.']],
      it: [['Lukas tiene una novia de Sevilla.', true], ['Mei habla inglés muy mal.', false], ['Mei quiere trabajar en turismo.', true], ['Omar estudia español por la comida.', false]] },
    { k: 'match', t: '언어 실력 표현', d: '그림 대신 퍼센트로! 알맞게 연결하세요.', it: [['muy bien', '95%'], ['bastante bien', '75%'], ['regular', '50%'], ['un poco', '25%'], ['nada', '0%']] },
    { k: 'order', t: '문장 만들기', it: ['Quiero aprender español para viajar.', 'Hablo inglés bastante bien.', '¿Por qué estudias chino?', 'Mis amigos viven en Barcelona.', 'Leemos un texto y hacemos ejercicios.'] },
    { k: 'dlg', t: '대화 — 수업 계획 정하기', d: '대화를 듣고 답하세요.',
      lines: [['Nuria', '¿Qué quieres hacer en este curso?'], ['Sam', 'Yo quiero hablar mucho y aprender expresiones útiles.'], ['Nuria', 'Yo también. Y quiero ver películas en español.'], ['Sam', '¡Buena idea! Pero la gramática… regular.'], ['Nuria', 'Pues hacemos ejercicios juntos los martes.']],
      it: [['Sam은 수업에서 무엇을 하고 싶나요?', '영화 보기|*많이 말하기|문법 공부'], ['Nuria가 추가로 하고 싶은 것은?', '*영화 보기|노래 부르기|번역하기'], ['두 사람은 언제 함께 연습하나요?', '월요일|*화요일|금요일']] },
    { k: 'dict', t: '받아쓰기', it: ['Estudio español porque quiero viajar.', 'Mi madre habla francés muy bien.', 'Vivimos en una ciudad pequeña.', '¿Qué idiomas hablas?'] },
    { k: 'write', t: '나의 스페인어 목표', d: '왜 스페인어를 배우는지, 이 수업에서 무엇을 하고 싶은지, 어떤 언어를 얼마나 잘하는지 써 보세요.', model: 'Estudio español porque quiero viajar por México y Perú. En este curso quiero hablar mucho, escuchar canciones y ver películas. Hablo coreano muy bien, inglés bastante bien y español un poco.' }
  ]
});
