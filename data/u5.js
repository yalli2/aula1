AULA.unit({
  n: 5, title: 'Tus amigos son mis amigos', ko: '네 친구는 내 친구 — 사람 묘사하기',
  goal: '가족·친구의 외모와 성격 묘사하기, 취미와 좋아하는 것 비교하기',
  can: ['gustar', 'también / tampoco', '소유사 mi·tu·su', '외모·성격 형용사', '가족'],
  tags: ['gustar', 'posesivos', 'también / tampoco', 'familia', 'carácter', 'aspecto físico', 'música'],
  vocab: [
    { g: '가족 · La familia', w: [['el padre / la madre', '아버지 / 어머니'], ['los padres', '부모님'], ['el hermano / la hermana', '형제 / 자매'], ['el abuelo / la abuela', '할아버지 / 할머니'], ['el tío / la tía', '삼촌 / 이모·고모'], ['el primo / la prima', '사촌'], ['el hijo / la hija', '아들 / 딸'], ['el marido / la mujer', '남편 / 아내'], ['el sobrino / la sobrina', '조카'], ['el nieto / la nieta', '손자 / 손녀']] },
    { g: '외모 · Aspecto físico', w: [['alto / alta', '키가 큰'], ['bajo / baja', '키가 작은'], ['delgado / delgada', '마른'], ['moreno / morena', '갈색 머리의/피부가 까만'], ['rubio / rubia', '금발의'], ['pelirrojo / pelirroja', '빨간 머리의'], ['tiene el pelo largo', '머리가 길다'], ['tiene el pelo rizado', '곱슬머리다'], ['lleva gafas', '안경을 썼다'], ['tiene barba', '수염이 있다'], ['es calvo', '대머리다']] },
    { g: '성격 · Carácter', w: [['simpático / simpática', '상냥한'], ['antipático / antipática', '불친절한'], ['divertido / divertida', '재미있는'], ['serio / seria', '진지한'], ['tímido / tímida', '수줍은'], ['abierto / abierta', '개방적인'], ['trabajador / trabajadora', '부지런한'], ['inteligente', '똑똑한'], ['amable', '친절한'], ['cariñoso / cariñosa', '다정한'], ['tranquilo / tranquila', '차분한'], ['perezoso / perezosa', '게으른']] },
    { g: '음악 · Música', w: [['el pop', '팝'], ['el rock', '록'], ['el jazz', '재즈'], ['el flamenco', '플라멩코'], ['la salsa', '살사'], ['el reguetón', '레게톤'], ['la música clásica', '클래식'], ['el K-pop', '케이팝']] }
  ],
  gram: [
    { h: '동사 GUSTAR', p: '“나에게 ~이 마음에 든다” 구조. 좋아하는 대상이 **단수/동사원형 → gusta**, **복수 → gustan**.', t: [['(a mí)', 'me', 'gusta / gustan'], ['(a ti)', 'te', 'gusta / gustan'], ['(a él/ella/usted)', 'le', 'gusta / gustan'], ['(a nosotros/-as)', 'nos', 'gusta / gustan'], ['(a vosotros/-as)', 'os', 'gusta / gustan'], ['(a ellos/ellas/ustedes)', 'les', 'gusta / gustan']], th: false, ex: [['Me gusta el jazz.', '나는 재즈가 좋아.'], ['Me gustan los perros.', '나는 개들이 좋아.'], ['A mi hermano le gusta bailar.', '내 동생은 춤추는 걸 좋아해.']] },
    { h: '정도 표현', p: 'me encanta(n) 😍 > me gusta(n) mucho > me gusta(n) bastante > no me gusta(n) mucho > no me gusta(n) nada 😖' },
    { h: '동의·반대: también / tampoco / sí / no', t: [['상대 말', '나도 같음', '나는 다름'], ['Me gusta el rock.', 'A mí también.', 'A mí no.'], ['No me gusta el rock.', 'A mí tampoco.', 'A mí sí.']] },
    { h: '소유사 (mi, tu, su…)', t: [['', '단수', '복수'], ['나의', 'mi', 'mis'], ['너의', 'tu', 'tus'], ['그/그녀/당신의', 'su', 'sus'], ['우리의', 'nuestro/-a', 'nuestros/-as'], ['너희의', 'vuestro/-a', 'vuestros/-as'], ['그들의', 'su', 'sus']], ex: [['Mi hermana y mis primos viven en Daegu.', '내 여동생과 사촌들은 대구에 산다.']] },
    { h: '정도 부사 muy · bastante · un poco', p: '**un poco**는 보통 부정적인 형용사와 함께: Es **un poco** tímido. (×un poco simpático)' },
    { h: '외모: ser / tener / llevar', ex: [['Es alto y moreno.', 'ser + 형용사'], ['Tiene los ojos verdes y el pelo corto.', 'tener + 신체 특징'], ['Lleva gafas y barba.', 'llevar + 착용물·수염']] }
  ],
  ex: [
    { k: 'fill', t: 'gusta 또는 gustan?', it: ['Me {*gusta|gustan} el cine español.', 'A Lucas le {gusta|*gustan} los videojuegos.', '¿Te {*gusta|gustan} cocinar?', 'Nos {gusta|*gustan} las películas de terror.', 'A mis padres les {*gusta|gustan} viajar.', 'No me {gusta|*gustan} los lunes.'] },
    { k: 'fill', t: '대명사 me · te · le · nos · os · les', it: ['A mí [me] encanta el flamenco.', 'A ti [te] gustan las novelas, ¿verdad?', 'A mi abuela [le] gusta mucho la salsa.', 'A nosotros [nos] gusta jugar al fútbol.', 'A vosotras [os] gusta el reguetón.', 'A mis amigos [les] encanta el K-pop.'] },
    { k: 'mc', t: '대답하기 — también / tampoco / sí / no', d: '“나”는 괄호 안 의견이에요. 알맞은 대답을 고르세요.', it: [['Me gusta el jazz. (나도 좋아)', '*A mí también.|A mí tampoco.|A mí sí.'], ['No me gusta el fútbol. (나도 싫어)', 'A mí también.|*A mí tampoco.|A mí no.'], ['Me encantan los gatos. (나는 싫어)', 'A mí tampoco.|*A mí no.|A mí sí.'], ['No me gustan las verduras. (나는 좋아)', 'A mí también.|A mí no.|*A mí sí.']] },
    { k: 'fill', t: '소유사 넣기', it: ['Yo vivo con [mis] padres y [mi] hermana. (나의)', '¿Cómo se llama [tu] profesor? (너의)', 'Ana y [sus] primos van al cine. (그녀의)', '[Nuestra] casa es pequeña. (우리의)', '¿Dónde están [vuestros] libros? (너희의)'] },
    { k: 'match', t: '가족 관계', d: '설명과 가족 단어를 연결하세요.', it: [['el padre de mi padre', 'mi abuelo'], ['la hermana de mi madre', 'mi tía'], ['el hijo de mi tío', 'mi primo'], ['la hija de mi hermano', 'mi sobrina'], ['el hijo de mi hija', 'mi nieto'], ['el marido de mi madre', 'mi padre']] },
    { k: 'sort', t: '긍정적? 부정적?', d: '성격 형용사를 분류하세요.', cats: ['😊 긍정', '😕 부정'], it: [['simpático', 0], ['antipático', 1], ['trabajador', 0], ['perezoso', 1], ['cariñoso', 0], ['egoísta', 1], ['generoso', 0], ['maleducado', 1]] },
    { k: 'fill', t: 'ser · tener · llevar', d: '사람 묘사를 완성하세요.', it: ['Mi primo [es] alto y delgado.', '[Tiene] los ojos azules.', '[Lleva] gafas redondas.', 'Mi abuela [tiene] el pelo blanco.', 'Mi profesor [lleva] barba.'] },
    { k: 'dlg', t: '누구일까요? — 듣기', d: '친구 사진을 설명하는 대화를 듣고 답하세요.', listen: 1,
      lines: [['Clara', 'Mira, esta es mi familia en la boda de mi prima.'], ['Pablo', '¿Quién es el chico alto con barba?'], ['Clara', 'Es mi hermano Iker. Es muy divertido, pero un poco desordenado.'], ['Pablo', '¿Y la señora rubia con gafas?'], ['Clara', 'Es mi tía Rosa. Es profesora de música y le encanta el jazz.'], ['Pablo', '¡A mí también me encanta el jazz!']],
      it: [['Iker는 Clara의 누구?', '사촌|*형제|삼촌'], ['Iker의 단점은?', '수줍음|*조금 정리를 못 함|게으름'], ['Rosa 이모의 외모는?', '*금발, 안경|갈색 머리, 수염|빨간 머리'], ['Rosa 이모의 직업은?', '의사|*음악 선생님|기자'], ['Pablo도 좋아하는 것은?', '플라멩코|*재즈|록']] },
    { k: 'tf', t: '읽기 — 펜팔 찾기 게시판', d: '글을 읽고 V/F.',
      text: 'Me llamo **Nico**, tengo dieciséis años y soy de Rosario (Argentina). Soy bastante tímido pero muy simpático (¡eso dice mi madre!). Me encanta el rock y toco la guitarra. No me gusta nada el reguetón. Tengo dos hermanas mayores y un perro, Tango. Busco amigos de Asia para practicar inglés y hablar de música.',
      it: [['Nico es argentino.', true], ['Nico es muy abierto.', false], ['A Nico le gusta el reguetón.', false], ['Nico tiene dos hermanos.', false], ['Nico quiere hablar de música.', true]] },
    { k: 'order', t: '문장 만들기', it: ['A mi madre le encanta la música clásica.', 'Mi hermano es alto y un poco serio.', '¿Te gustan los perros?', 'A nosotros no nos gusta nada.'] },
    { k: 'dict', t: '받아쓰기', it: ['Mi abuelo es muy cariñoso.', 'Me gustan mucho las películas.', 'Tiene el pelo largo y rizado.', 'A mí tampoco.'] },
    { k: 'write', t: '내가 좋아하는 사람 소개', d: '가족이나 친구 한 명의 외모·성격·좋아하는 것을 써 보세요.', model: 'Mi mejor amiga se llama Sora. Es baja y morena, tiene el pelo largo y lleva gafas. Es muy divertida, inteligente y un poco desordenada. Le encanta el K-pop y le gusta mucho dibujar. No le gustan nada las matemáticas. ¡A mí tampoco!' }
  ]
});
