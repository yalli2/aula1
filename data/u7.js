AULA.unit({
  n: 7, title: '¡A comer!', ko: '먹자! — 음식과 식당',
  goal: '식당·바에서 주문하기, 음식에 대해 묻고 답하기, 식습관 말하기',
  can: ['식당에서 주문', '비인칭 se', 'poner · traer', '직접목적대명사 lo/la/los/las', '음식·조리법'],
  tags: ['restaurante', 'alimentos', 'se impersonal', 'lo / la / los / las', 'poner', 'traer', 'menú del día'],
  vocab: [
    { g: '식사 · Comidas del día', w: [['el desayuno', '아침 식사'], ['la comida / el almuerzo', '점심 식사'], ['la merienda', '간식'], ['la cena', '저녁 식사'], ['el primer plato', '첫 번째 요리(전채)'], ['el segundo plato', '두 번째 요리(메인)'], ['el postre', '디저트'], ['la bebida', '음료']] },
    { g: '음식 · Alimentos', w: [['el pan', '빵', '🍞'], ['el arroz', '쌀·밥', '🍚'], ['la carne', '고기', '🥩'], ['el pollo', '닭고기', '🍗'], ['el pescado', '생선', '🐟'], ['el marisco', '해산물', '🦐'], ['las verduras', '채소', '🥦'], ['la fruta', '과일', '🍎'], ['el huevo', '달걀', '🥚'], ['el queso', '치즈', '🧀'], ['la leche', '우유', '🥛'], ['el aceite de oliva', '올리브유'], ['las patatas', '감자', '🥔'], ['el tomate', '토마토', '🍅'], ['la cebolla', '양파', '🧅'], ['el ajo', '마늘', '🧄']] },
    { g: '조리법 · Maneras de cocinar', w: [['frito / frita', '튀긴'], ['a la plancha', '철판에 구운'], ['asado / asada', '오븐·불에 구운'], ['hervido / hervida', '삶은'], ['al horno', '오븐에'], ['crudo / cruda', '날것의'], ['picante', '매운', '🌶️'], ['salado / dulce', '짠 / 단']] },
    { g: '스페인·중남미 요리', w: [['la tortilla de patatas', '감자 오믈렛'], ['el gazpacho', '가스파초(차가운 토마토 수프)'], ['la paella', '파에야'], ['los churros', '추로스'], ['las arepas', '아레파(베네수엘라·콜롬비아)'], ['el ceviche', '세비체(페루)'], ['las empanadas', '엠파나다'], ['los tacos', '타코(멕시코)']] },
    { g: '식당 표현 · En el restaurante', w: [['¿Qué van a tomar?', '무엇을 드시겠어요?'], ['De primero, …', '첫 요리로는 …'], ['Para mí, …', '저는 …'], ['¿Me trae un poco más de pan?', '빵 좀 더 주시겠어요?'], ['¿Qué lleva…?', '…에는 뭐가 들어가요?'], ['La cuenta, por favor.', '계산서 주세요.'], ['¿Está incluida la bebida?', '음료 포함인가요?']] }
  ],
  gram: [
    { h: '비인칭 SE (일반적으로 ~한다)', p: '누가 하는지 중요하지 않을 때: **se** + 3인칭 동사 (명사가 복수면 복수형).', ex: [['En España se cena muy tarde.', '스페인에서는 저녁을 아주 늦게 먹는다.'], ['El gazpacho se toma frío.', '가스파초는 차갑게 먹는다.'], ['¿Cómo se hacen las arepas?', '아레파는 어떻게 만들어요?']] },
    { h: '직접목적대명사 lo · la · los · las', p: '이미 말한 명사를 다시 받을 때. 동사 **앞**에 놓아요.', t: [['', '남성', '여성'], ['단수', 'lo', 'la'], ['복수', 'los', 'las']], ex: [['— ¿Y el pescado? — Lo quiero a la plancha.', '생선은 철판구이로 주세요.'], ['— ¿Tomas las patatas con ketchup? — No, las tomo sin nada.', '감자는 아무것도 없이 먹어.']] },
    { h: '불규칙: poner · traer', t: [['', 'poner', 'traer'], ['yo', 'pongo', 'traigo'], ['tú', 'pones', 'traes'], ['él/ella/usted', 'pone', 'trae'], ['nosotros/-as', 'ponemos', 'traemos'], ['vosotros/-as', 'ponéis', 'traéis'], ['ellos/ellas/ustedes', 'ponen', 'traen']], ex: [['¿Me pone un café con leche?', '카페 콘 레체 하나 주시겠어요?'], ['¿Nos trae la cuenta, por favor?', '계산서 좀 주시겠어요?']] },
    { h: '“메뉴 델 디아” (Menú del día)', p: '스페인 평일 점심: **primer plato + segundo plato + postre (또는 café) + bebida + pan**을 정해진 가격에! 학생과 직장인이 많이 먹어요.' }
  ],
  ex: [
    { k: 'fill', t: '목적대명사 lo · la · los · las', d: '밑줄 친 명사를 받는 대명사를 쓰세요.', it: ['— ¿Quién prepara la cena? — [La] prepara mi padre.', '— ¿Comes pescado? — Sí, [lo] como dos veces a la semana.', '— ¿Dónde compras las frutas? — [Las] compro en el mercado.', '— ¿Tomas los huevos fritos? — No, [los] tomo hervidos.', '— ¿Y el pan? — [Lo] compramos en la panadería.', '— ¿Te gusta la paella? Yo [la] hago los domingos.'] },
    { k: 'fill', t: '비인칭 se', d: '동사 형태(단수/복수)에 주의하세요.', it: ['En México se {*come|comen} mucho maíz.', 'En Japón se {come|*comen} muchos platos con arroz.', 'Aquí se {*habla|hablan} español y catalán.', 'Las tapas se {toma|*toman} con una bebida.', 'En Corea se {*usa|usan} palillos de metal.'] },
    { k: 'fill', t: 'poner · traer', it: ['¿Me [pone] un zumo de naranja, por favor? (poner, usted)', 'Camarero, ¿nos [trae] más agua? (traer, usted)', 'Yo siempre [pongo] aceite en el pan. (poner)', 'Mañana [traigo] una tortilla para la fiesta. (traer, yo)', '¿Qué [traéis] vosotros? (traer)'] },
    { k: 'sort', t: '음식 분류', cats: ['🥩 고기', '🐟 생선·해산물', '🥦 채소·과일'], it: [['el pollo', 0], ['el atún', 1], ['la lechuga', 2], ['el cordero', 0], ['las gambas', 1], ['la manzana', 2], ['el jamón', 0], ['el salmón', 1], ['el pimiento', 2]] },
    { k: 'dlg', t: '식당에서 — 주문 듣기', d: '대화를 듣고 답하세요.', listen: 1,
      lines: [['Camarero', 'Buenas tardes. ¿Qué van a tomar?'], ['Lola', 'De primero, para mí, gazpacho.'], ['Diego', 'Yo, ensalada mixta.'], ['Camarero', '¿Y de segundo?'], ['Lola', 'Yo quiero el pescado del día. ¿Cómo lo preparan?'], ['Camarero', 'A la plancha, con patatas.'], ['Lola', 'Perfecto.'], ['Diego', 'Para mí, pollo asado.'], ['Camarero', '¿Y para beber?'], ['Diego', 'Agua sin gas, por favor.']],
      it: [['Lola의 첫 번째 요리는?', '샐러드|*가스파초|수프'], ['생선은 어떻게 요리하나요?', '튀김|*철판구이|오븐'], ['Diego의 메인 요리는?', '생선|*구운 닭고기|소고기'], ['음료는?', '탄산수|*탄산 없는 물|와인']] },
    { k: 'mc', t: '식당 표현 고르기', it: [['계산서를 달라고 할 때', '¿Qué lleva?|*La cuenta, por favor.|De primero…'], ['요리에 뭐가 들어가는지 물을 때', '*¿Qué lleva este plato?|¿Me pone un café?|¿Está incluida la bebida?'], ['빵을 더 달라고 할 때', '¿Qué van a tomar?|*¿Me trae un poco más de pan?|Para mí, pan.'], ['웨이터가 손님에게 묻는 말', '*¿Qué van a tomar?|La cuenta, por favor.|¿Qué lleva?']] },
    { k: 'match', t: '요리와 나라', it: [['el ceviche', 'Perú'], ['las arepas', 'Venezuela y Colombia'], ['los tacos', 'México'], ['el gazpacho', 'España'], ['el asado', 'Argentina'], ['el kimchi', 'Corea']] },
    { k: 'tf', t: '읽기 — 메뉴 델 디아', d: '메뉴를 읽고 V/F.',
      text: '**CASA PEPA — MENÚ DEL DÍA 13,50 €**\n**Primeros:** sopa de verduras · ensalada de la casa · macarrones con tomate\n**Segundos:** merluza a la plancha · pollo al horno con patatas · albóndigas en salsa\n**Postres:** flan casero · fruta del tiempo · café\nPan y bebida incluidos (agua, refresco o vino)',
      it: [['El menú cuesta menos de 15 euros.', true], ['Hay pescado de segundo plato.', true], ['La bebida no está incluida.', false], ['Se puede tomar café en vez de postre.', true], ['Hay paella de primero.', false]] },
    { k: 'order', t: '주문 문장 만들기', it: ['De primero quiero una sopa de pescado.', '¿Me trae la cuenta, por favor?', 'En España se cena muy tarde.', 'Las patatas las quiero fritas.'] },
    { k: 'dict', t: '받아쓰기', it: ['Para mí, el pollo asado.', '¿Qué lleva la tortilla?', 'Normalmente desayuno pan con tomate.'] },
    { k: 'write', t: '우리 반 메뉴 델 디아 만들기', d: '첫 요리 3개, 메인 3개, 디저트 2개를 정하고 가격을 쓰세요. 그리고 내가 고를 메뉴를 써 보세요.', model: 'MENÚ DEL DÍA – 12 €. Primeros: kimbap, gazpacho, ensalada de tomate. Segundos: bulgogi con arroz, pescado a la plancha, tortilla de patatas. Postres: fruta o helado. Bebida y pan incluidos. Yo, de primero, gazpacho; de segundo, bulgogi, y de postre, helado.' }
  ]
});
