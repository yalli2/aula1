AULA.unit({
  n: 6, title: 'Día a día', ko: '하루하루 — 일상과 습관',
  goal: '하루 일과·습관과 빈도 말하기, 시간 묻고 답하기',
  can: ['불규칙 현재형 (e→ie, o→ue, e→i, -go)', '재귀동사', '시간 말하기', '빈도 표현', 'primero/después/luego'],
  tags: ['presente irregular', 'verbos reflexivos', 'la hora', 'frecuencia', 'días de la semana', 'rutina'],
  vocab: [
    { g: '요일 · Días de la semana', w: [['el lunes', '월요일'], ['el martes', '화요일'], ['el miércoles', '수요일'], ['el jueves', '목요일'], ['el viernes', '금요일'], ['el sábado', '토요일'], ['el domingo', '일요일'], ['el fin de semana', '주말']] },
    { g: '하루의 때 · Partes del día', w: [['por la mañana', '아침/오전에'], ['al mediodía', '정오에'], ['por la tarde', '오후에'], ['por la noche', '밤에'], ['de madrugada', '새벽에']] },
    { g: '일과 · Actividades diarias', w: [['despertarse', '잠에서 깨다', '⏰'], ['levantarse', '일어나다'], ['ducharse', '샤워하다', '🚿'], ['vestirse', '옷을 입다'], ['desayunar', '아침을 먹다', '🥐'], ['ir al instituto', '학교에 가다'], ['comer', '점심을 먹다'], ['merendar', '간식을 먹다'], ['hacer los deberes', '숙제하다'], ['cenar', '저녁을 먹다'], ['acostarse', '잠자리에 들다', '🛏️'], ['dormir', '자다']] },
    { g: '빈도 · Frecuencia', w: [['siempre', '항상'], ['normalmente', '보통'], ['a menudo', '자주'], ['a veces', '가끔'], ['casi nunca', '거의 안'], ['nunca', '절대 안'], ['todos los días', '매일'], ['una vez a la semana', '일주일에 한 번'], ['dos veces al mes', '한 달에 두 번']] },
    { g: '시간 · La hora', w: [['¿Qué hora es?', '몇 시예요?'], ['Es la una.', '1시예요.'], ['Son las tres y cuarto.', '3시 15분이에요.'], ['Son las cinco y media.', '5시 반이에요.'], ['Son las ocho menos diez.', '8시 10분 전이에요.'], ['¿A qué hora…?', '몇 시에 …?'], ['a las nueve en punto', '9시 정각에']] }
  ],
  gram: [
    { h: '어간모음 변화 동사', p: 'nosotros·vosotros를 **제외**한 인칭에서 어간 모음이 바뀌어요.', t: [['', 'e → ie: empezar', 'o → ue: poder', 'e → i: pedir'], ['yo', 'empiezo', 'puedo', 'pido'], ['tú', 'empiezas', 'puedes', 'pides'], ['él/ella/usted', 'empieza', 'puede', 'pide'], ['nosotros/-as', 'empezamos', 'podemos', 'pedimos'], ['vosotros/-as', 'empezáis', 'podéis', 'pedís'], ['ellos/ellas/ustedes', 'empiezan', 'pueden', 'piden']], tip: '같은 그룹: e→ie (querer, preferir, despertarse, cerrar) · o→ue (dormir, volver, acostarse, jugar u→ue) · e→i (vestirse, repetir, servir)' },
    { h: '1인칭 -go 동사', t: [['원형', 'yo'], ['hacer', 'hago'], ['salir', 'salgo'], ['poner', 'pongo'], ['tener', 'tengo'], ['venir', 'vengo'], ['decir', 'digo']] },
    { h: '재귀동사 (levantarse, ducharse…)', p: '자기 자신에게 하는 동작. 동사 앞에 **me, te, se, nos, os, se**.', t: [['', 'levantarse'], ['yo', 'me levanto'], ['tú', 'te levantas'], ['él/ella/usted', 'se levanta'], ['nosotros/-as', 'nos levantamos'], ['vosotros/-as', 'os levantáis'], ['ellos/ellas/ustedes', 'se levantan']], ex: [['Me ducho por la mañana y me acuesto a las once.', '나는 아침에 샤워하고 11시에 잔다.']] },
    { h: '시간 말하기', p: '1시는 **es la una**, 2시부터는 **son las…** · 15분 = **y cuarto**, 30분 = **y media**, 45분 = **menos cuarto**', ex: [['Son las siete y veinte.', '7:20'], ['Es la una menos cuarto.', '12:45'], ['Las clases empiezan a las ocho y media.', '수업은 8시 반에 시작한다.']] },
    { h: '순서 연결어', p: '**Primero** … **después** … **luego** … **al final** …', ex: [['Primero me ducho, después desayuno y luego voy al instituto.', '먼저 샤워하고, 그다음 아침을 먹고, 그러고 나서 학교에 가.']] },
    { h: 'Yo también / Yo tampoco / Yo sí / Yo no', p: '일반 동사에 반응할 때는 **yo**를 써요. (gustar는 a mí!)', ex: [['— Me levanto a las seis. — Yo también.', ''], ['— No desayuno. — Yo sí.', '']] }
  ],
  ex: [
    { k: 'fill', t: '어간모음 변화 동사', d: '괄호 속 동사를 알맞게 바꾸세요.', it: ['Las clases [empiezan] a las ocho. (empezar)', 'Yo [duermo] ocho horas. (dormir)', '¿A qué hora [vuelves] a casa? (volver)', 'Mi hermano siempre [pide] pizza. (pedir)', 'Nosotros [podemos] estudiar juntos. (poder)', '¿[Jugáis] al tenis los sábados? (jugar)', 'Mi padre [prefiere] cenar tarde. (preferir)'] },
    { k: 'fill', t: '-go 동사 (yo 형태)', it: ['Yo [salgo] de casa a las siete y media. (salir)', 'Yo [hago] los deberes por la tarde. (hacer)', 'Yo [pongo] la mesa para cenar. (poner)', 'Yo [vengo] a clase en autobús. (venir)', 'Yo siempre [digo] la verdad. (decir)'] },
    { k: 'fill', t: '재귀동사', d: '재귀대명사와 동사를 함께 쓰세요.', it: ['Yo [me levanto] a las seis y media. (levantarse)', '¿Tú [te duchas] por la mañana o por la noche? (ducharse)', 'Mi hermana [se viste] muy rápido. (vestirse)', 'Nosotros [nos acostamos] a las once. (acostarse)', 'Mis abuelos [se despiertan] muy temprano. (despertarse)'] },
    { k: 'mc', t: '몇 시일까요? — 시간 듣기', it: [['', '*7:15|7:45|6:15', 'Son las siete y cuarto.'], ['', '1:30|*12:30|2:30', 'Son las doce y media.'], ['', '*8:50|9:10|8:10', 'Son las nueve menos diez.'], ['', '*1:00|11:00|12:00', 'Es la una en punto.'], ['', '4:35|*5:35|5:25', 'Son las seis menos veinticinco.']] },
    { k: 'fill', t: '시간을 글로 쓰기', it: ['3:00 → Son las [tres].', '10:30 → Son las diez y [media].', '6:15 → Son las seis y [cuarto].', '1:20 → [Es] la una y veinte.', '9:45 → Son las diez [menos] cuarto.'] },
    { k: 'sort', t: '빈도 순서', d: '자주 하는 쪽(↑)인지 드문 쪽(↓)인지 분류하세요.', cats: ['↑ 자주', '↓ 드물게'], it: [['siempre', 0], ['nunca', 1], ['todos los días', 0], ['casi nunca', 1], ['a menudo', 0], ['una vez al año', 1]] },
    { k: 'mc', t: 'Yo también / tampoco / sí / no', d: '괄호의 내 상황에 맞게 고르세요.', it: [['Me acuesto muy tarde. (나도 그래)', '*Yo también.|Yo tampoco.|Yo no.'], ['No desayuno nunca. (나는 먹어)', 'Yo tampoco.|*Yo sí.|Yo no.'], ['Hago deporte todos los días. (나는 안 해)', 'Yo también.|Yo sí.|*Yo no.'], ['No trabajo los sábados. (나도 안 해)', 'Yo también.|*Yo tampoco.|Yo sí.']] },
    { k: 'tf', t: '듣기 — 마르타의 하루', d: '마르타의 하루 일과를 듣고 V/F.', listen: 1,
      text: 'Me llamo Marta y soy enfermera. Trabajo de noche, así que mi día es un poco especial. Me levanto a las dos de la tarde, como algo y después voy al gimnasio. Luego, a las seis, me ducho y me visto. Empiezo a trabajar a las nueve de la noche y vuelvo a casa a las siete de la mañana. Desayuno con mis hijos y me acuesto.',
      it: [['Marta trabaja por la noche.', true], ['Se levanta a las doce.', false], ['Va al gimnasio antes de ducharse.', true], ['Empieza a trabajar a las ocho.', false], ['Desayuna con sus hijos.', true]] },
    { k: 'order', t: '하루 순서 문장', it: ['Primero me ducho y después desayuno.', 'Los sábados me levanto muy tarde.', '¿A qué hora empiezan las clases?', 'Normalmente ceno a las nueve.'] },
    { k: 'match', t: '요일 순서', d: '다음 날은?', it: [['lunes', 'martes'], ['miércoles', 'jueves'], ['viernes', 'sábado'], ['domingo', 'lunes'], ['jueves', 'viernes']] },
    { k: 'dict', t: '받아쓰기', it: ['Me levanto a las siete.', 'Los domingos duermo mucho.', 'Nunca desayuno en casa.', 'Son las cuatro y media.'] },
    { k: 'write', t: '나의 평일 하루', d: '몇 시에 일어나고, 무엇을 하고, 언제 자는지 연결어(primero, después, luego)를 써서 쓰세요.', model: 'Los lunes me levanto a las seis y media. Primero me ducho, después desayuno con mi familia y luego voy al instituto en metro. Las clases empiezan a las ocho. Como en el comedor a la una. Por la tarde hago los deberes y a veces juego al baloncesto. Ceno a las siete y media y me acuesto a las once.' }
  ]
});
