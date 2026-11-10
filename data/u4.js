AULA.unit({
  n: 4, title: '¿Cuál prefieres?', ko: '어느 것이 더 좋아? — 쇼핑하기',
  goal: '물건 가리키기, 필요한 것 말하기, 가게에서 사고 가격 묻기, 선호 표현하기',
  can: ['지시사 este/esta/esto', 'tener que + 원형', 'preferir · ir', '¿qué? vs ¿cuál?', '100 이상 숫자', '색·옷'],
  tags: ['demostrativos', 'tener que', 'preferir', 'ir', 'colores', 'ropa', 'compras', 'números 100+'],
  vocab: [
    { g: '옷 · Ropa', w: [['la camiseta', '티셔츠', '👕'], ['la camisa', '셔츠'], ['los pantalones', '바지', '👖'], ['la falda', '치마'], ['el vestido', '원피스', '👗'], ['la chaqueta', '재킷', '🧥'], ['el jersey', '스웨터'], ['los zapatos', '구두', '👞'], ['las zapatillas', '운동화', '👟'], ['el gorro', '털모자'], ['las gafas de sol', '선글라스', '🕶️'], ['el bañador', '수영복', '🩱']] },
    { g: '색 · Colores', w: [['rojo / roja', '빨강', '🔴'], ['azul', '파랑', '🔵'], ['verde', '초록', '🟢'], ['amarillo / amarilla', '노랑', '🟡'], ['negro / negra', '검정', '⚫'], ['blanco / blanca', '흰색', '⚪'], ['gris', '회색'], ['marrón', '갈색', '🟤'], ['naranja', '주황', '🟠'], ['rosa', '분홍'], ['morado / morada', '보라', '🟣']] },
    { g: '여행 준비물 · Objetos', w: [['la maleta', '여행 가방', '🧳'], ['el pasaporte', '여권'], ['el cargador', '충전기', '🔌'], ['la toalla', '수건'], ['el paraguas', '우산', '☂️'], ['la crema solar', '선크림'], ['el cepillo de dientes', '칫솔', '🪥'], ['la linterna', '손전등', '🔦'], ['el saco de dormir', '침낭']] },
    { g: '숫자 100 이상', w: [['cien', '100'], ['ciento uno', '101'], ['doscientos', '200'], ['trescientos', '300'], ['cuatrocientos', '400'], ['quinientos', '500'], ['seiscientos', '600'], ['setecientos', '700'], ['ochocientos', '800'], ['novecientos', '900'], ['mil', '1.000']] },
    { g: '가게에서 · En la tienda', w: [['¿Cuánto cuesta?', '얼마예요? (단수)'], ['¿Cuánto cuestan?', '얼마예요? (복수)'], ['¿Tienen…?', '…있나요?'], ['¿Puedo probármelo?', '입어 봐도 되나요?'], ['¿Qué talla usa?', '사이즈가 어떻게 되세요?'], ['Me lo llevo', '이걸로 살게요'], ['barato / caro', '싼 / 비싼']] }
  ],
  gram: [
    { h: '지시사 (이것 · 이 ~)', t: [['', '남성', '여성', '중성'], ['단수', 'este', 'esta', 'esto'], ['복수', 'estos', 'estas', '—']], p: '**esto**는 이름을 모르는 물건을 가리킬 때: ¿Qué es **esto**?', ex: [['Esta camiseta es muy bonita.', '이 티셔츠 정말 예쁘다.'], ['¿Cuánto cuestan estos zapatos?', '이 구두 얼마예요?']] },
    { h: 'el / la / los / las + 형용사', p: '앞에 나온 명사를 반복하지 않을 때: ¿Qué camiseta prefieres? — **La roja**.', ex: [['¿Qué zapatos quieres? — Los negros.', '어떤 구두? — 검은 거.']] },
    { h: '¿Qué? vs. ¿Cuál?', p: '**qué + 명사** · **cuál/cuáles** (명사 없이, 정해진 것 중 선택)', ex: [['¿Qué falda prefieres?', '어떤 치마가 좋아?'], ['Tengo dos faldas. ¿Cuál prefieres?', '치마 두 개 있어. 어느 게 좋아?']] },
    { h: 'TENER QUE + 동사원형 (~해야 한다)', ex: [['Tengo que comprar una maleta.', '여행 가방을 사야 해.'], ['Tenemos que llevar crema solar.', '선크림을 챙겨야 해.']] },
    { h: '불규칙: ir · preferir (e→ie)', t: [['', 'ir', 'preferir'], ['yo', 'voy', 'prefiero'], ['tú', 'vas', 'prefieres'], ['él/ella/usted', 'va', 'prefiere'], ['nosotros/-as', 'vamos', 'preferimos'], ['vosotros/-as', 'vais', 'preferís'], ['ellos/ellas/ustedes', 'van', 'prefieren']] },
    { h: '숫자 100 이상', p: '100 = **cien**, 101–199 = **ciento** + … · 200–900은 명사의 성에 일치: dosci**entas** camisetas · 1.000 = **mil**', ex: [['ciento cincuenta euros', '150유로'], ['trescientas libras', '300파운드'], ['mil doscientos pesos', '1,200페소']] }
  ],
  ex: [
    { k: 'fill', t: '지시사 넣기', d: 'este · esta · estos · estas · esto', it: ['¿Cuánto cuesta [esta] chaqueta?', '[Estos] pantalones son muy caros.', 'Me gustan [estas] zapatillas.', '¿Qué es [esto]? — Es un cargador.', '[Este] vestido es precioso.', '¿Te gustan [estas] gafas?'] },
    { k: 'fill', t: '색의 성·수 일치', d: '괄호의 색을 명사에 맞게 바꾸세요.', it: ['una falda [roja] (rojo)', 'unos zapatos [negros] (negro)', 'unas camisas [blancas] (blanco)', 'un jersey [amarillo] (amarillo)', 'unas chaquetas [verdes] (verde)', 'una gorra [azul] (azul)'] },
    { k: 'fill', t: '¿Qué? 또는 ¿Cuál / Cuáles?', it: ['¿{*Qué|Cuál} camiseta te gusta más?', 'Tengo dos mochilas. ¿{Qué|*Cuál} prefieres?', '¿{*Qué|Cuáles} zapatos llevas a la fiesta?', 'Estos son mis vestidos. ¿{Qué|*Cuál} te gusta?', 'Hay tres colores. ¿{Qué|*Cuáles} prefieres, los claros o los oscuros?'] },
    { k: 'fill', t: 'tener que + 원형', d: 'tener을 알맞게 바꾸세요.', it: ['Yo [tengo] que hacer la maleta.', '¿Tú [tienes] que trabajar el sábado?', 'Para ir a la montaña, [tenemos] que llevar botas.', 'Mis padres [tienen] que comprar los billetes.', 'Laura [tiene] que buscar su pasaporte.'] },
    { k: 'fill', t: 'IR · PREFERIR', it: ['Yo [prefiero] la camiseta azul.', 'Nosotros [vamos] a la playa el domingo.', '¿Tú qué [prefieres], té o café?', 'Ellos [van] de compras al centro.', 'Nosotras [preferimos] las zapatillas blancas.', 'Mi madre [va] al mercado los sábados.'] },
    { k: 'mc', t: '가격 듣기', d: '▶를 누르고 가격을 고르세요.', it: [['', '*125 €|152 €|215 €', 'Cuesta ciento veinticinco euros.'], ['', '350 €|*530 €|513 €', 'Son quinientos treinta euros.'], ['', '79 €|*97 €|907 €', 'Cuestan noventa y siete euros.'], ['', '*1.400 €|400 €|1.040 €', 'Cuesta mil cuatrocientos euros.'], ['', '660 €|*760 €|716 €', 'Son setecientos sesenta euros.']] },
    { k: 'fill', t: '숫자를 글자로', d: '명사의 성에 주의!', it: ['200 camisetas → [doscientas] camisetas', '300 libros → [trescientos] libros', '500 personas → [quinientas] personas', '100 euros → [cien] euros', '900 kilómetros → [novecientos] kilómetros'] },
    { k: 'dlg', t: '가게에서 — 대화 듣기', d: '대화를 듣고 답하세요.', listen: 1,
      lines: [['Dependienta', 'Hola, buenas tardes. ¿Qué desea?'], ['Cliente', 'Hola. Busco una chaqueta para la montaña.'], ['Dependienta', 'Tenemos estas. ¿Qué color prefiere?'], ['Cliente', 'La verde. ¿Cuánto cuesta?'], ['Dependienta', 'Ochenta y cinco euros. La gris cuesta setenta.'], ['Cliente', 'Mmm… Me llevo la gris. ¿Puedo pagar con tarjeta?'], ['Dependienta', 'Sí, claro.']],
      it: [['손님이 찾는 것은?', '구두|*재킷|원피스'], ['초록색 재킷 가격은?', '70 €|*85 €|95 €'], ['손님이 결국 산 것은?', '초록색|*회색|검은색'], ['어떻게 계산하나요?', '현금|*카드|안 삼']] },
    { k: 'sort', t: '해변 vs. 산 — 무엇을 챙길까?', d: '주말 여행지에 맞게 분류하세요.', cats: ['🏖️ la playa', '🏔️ la montaña'], it: [['el bañador', 0], ['las botas', 1], ['la toalla de playa', 0], ['el saco de dormir', 1], ['las chanclas', 0], ['el gorro de lana', 1], ['la crema solar', 0], ['la linterna', 1]] },
    { k: 'match', t: '옷 단어 연결', it: [['los pantalones', '바지'], ['la falda', '치마'], ['el jersey', '스웨터'], ['las zapatillas', '운동화'], ['la camisa', '셔츠'], ['el bañador', '수영복']] },
    { k: 'order', t: '가게 문장 만들기', it: ['¿Cuánto cuestan estos pantalones?', 'Prefiero la camiseta negra.', 'Tengo que comprar un paraguas.', '¿Tienen esta falda en azul?'] },
    { k: 'dict', t: '받아쓰기', it: ['¿Cuánto cuesta esta mochila?', 'Prefiero los zapatos marrones.', 'Tenemos que llevar el pasaporte.'] },
    { k: 'write', t: '주말 여행 준비물 목록', d: '어디로 가는지, 무엇을 가져가야 하는지(tener que), 무엇을 사야 하는지 써 보세요.', model: 'Este fin de semana vamos a la montaña. Tengo que llevar unas botas, un jersey y un gorro porque hace frío. También tenemos que llevar una linterna. No tengo saco de dormir, así que tengo que comprar uno. Prefiero uno azul.' }
  ]
});
