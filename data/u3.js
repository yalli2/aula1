AULA.unit({
  n: 3, title: '¿Dónde está Santiago?', ko: '산티아고는 어디에 있나요? — 스페인어권 세계',
  goal: '장소 묘사하기, 존재·위치 표현하기, 날씨 말하기 — 스페인어권 상식 퀴즈 만들기',
  can: ['hay vs. está', '최상급', 'un/una/unos/unas', 'muy / mucho', '의문사', '날씨'],
  tags: ['hay', 'estar', 'superlativo', 'muy / mucho', 'clima', 'geografía', 'interrogativos'],
  vocab: [
    { g: '지리 · Geografía', w: [['el país', '나라'], ['la capital', '수도'], ['la ciudad', '도시'], ['el pueblo', '마을'], ['la montaña', '산', '⛰️'], ['el río', '강'], ['el lago', '호수'], ['la isla', '섬', '🏝️'], ['la playa', '해변', '🏖️'], ['el volcán', '화산', '🌋'], ['el desierto', '사막', '🏜️'], ['la selva', '정글', '🌴'], ['el norte / el sur', '북 / 남'], ['el este / el oeste', '동 / 서']] },
    { g: '날씨 · El tiempo', w: [['Hace calor', '덥다', '🥵'], ['Hace frío', '춥다', '🥶'], ['Hace sol', '해가 난다', '☀️'], ['Hace buen tiempo', '날씨가 좋다'], ['Hace mal tiempo', '날씨가 나쁘다'], ['Llueve', '비가 온다', '🌧️'], ['Nieva', '눈이 온다', '❄️'], ['Hay niebla', '안개가 끼었다', '🌫️'], ['Está nublado', '흐리다', '☁️'], ['la temperatura', '기온'], ['grados', '도(℃)']] },
    { g: '관광 명소 · Lugares de interés', w: [['la catedral', '대성당'], ['el museo', '박물관'], ['la plaza', '광장'], ['el parque nacional', '국립공원'], ['las ruinas', '유적'], ['el mercado', '시장'], ['el monumento', '기념물'], ['la playa', '해변']] }
  ],
  gram: [
    { h: 'HAY — ~이 있다 (존재)', p: '어떤 것이 **있는지 없는지** 말할 때. 형태는 항상 **hay** (단·복수 동일). 뒤에 관사 un/una, 숫자, 수량어 또는 무관사 명사.', ex: [['En Chile hay muchos volcanes.', '칠레에는 화산이 많다.'], ['En mi ciudad hay una catedral gótica.', '우리 도시엔 고딕 대성당이 하나 있다.']] },
    { h: 'ESTAR — ~에 있다 (위치)', p: '특정한(이미 아는) 것이 **어디에** 있는지. 뒤에 el/la + 명사, 고유명사.', t: [['인칭', 'estar'], ['yo', 'estoy'], ['tú', 'estás'], ['él/ella/usted', 'está'], ['nosotros/-as', 'estamos'], ['vosotros/-as', 'estáis'], ['ellos/ellas/ustedes', 'están']], ex: [['Machu Picchu está en Perú.', '마추픽추는 페루에 있다.'], ['Las islas Galápagos están en el océano Pacífico.', '갈라파고스 제도는 태평양에 있다.']], tip: '**Hay** un museo en el centro. / **El** museo **está** en el centro.' },
    { h: '부정관사 un · una · unos · unas', t: [['', '단수', '복수'], ['남성', 'un río', 'unos ríos'], ['여성', 'una isla', 'unas islas']] },
    { h: 'MUY vs. MUCHO', p: '**muy** + 형용사/부사 (변하지 않음) · **mucho/-a/-os/-as** + 명사 (성·수 일치) · 동사 + **mucho**', ex: [['Bogotá es muy grande.', '보고타는 아주 크다.'], ['Hay muchas montañas y mucho turismo.', '산도 많고 관광도 많다.'], ['En Galicia llueve mucho.', '갈리시아에는 비가 많이 온다.']] },
    { h: '최상급', p: '**el/la/los/las + (명사) + más + 형용사 + de**', ex: [['El Aconcagua es la montaña más alta de América.', '아콩카과는 아메리카에서 가장 높은 산이다.'], ['Es el lago más grande de Bolivia.', '볼리비아에서 가장 큰 호수다.']] },
    { h: '의문사', t: [['의문사', '뜻'], ['¿Qué?', '무엇'], ['¿Cuál? / ¿Cuáles?', '어느 것'], ['¿Cuántos? / ¿Cuántas?', '몇 개'], ['¿Dónde?', '어디'], ['¿Cómo?', '어떻게'], ['¿Cuándo?', '언제']], tip: '의문사는 항상 악센트를 찍어요!' }
  ],
  ex: [
    { k: 'fill', t: 'HAY 또는 ESTÁ / ESTÁN', d: '알맞은 것을 고르세요.', it: ['En Perú {*hay|está} ruinas incas muy famosas.', 'La Alhambra {hay|*está} en Granada.', 'En Madrid {*hay|está} muchos museos.', 'Las cataratas del Iguazú {hay|*están} entre Argentina y Brasil.', '¿Dónde {hay|*está} la catedral?', 'En mi pueblo no {*hay|está} playa.'] },
    { k: 'fill', t: 'ESTAR 변화', it: ['Yo [estoy] en clase.', '¿Dónde [estás] ahora?', 'Cuzco [está] en los Andes.', 'Nosotros [estamos] en Barcelona.', '¿Vosotros [estáis] en el museo?', 'Mis padres [están] en casa.'] },
    { k: 'fill', t: 'MUY / MUCHO / MUCHA / MUCHOS / MUCHAS', it: ['Sevilla es una ciudad [muy] bonita.', 'En verano hay [mucha] gente en la playa.', 'En Ecuador hay [muchos] volcanes.', 'En Londres llueve [mucho].', 'La paella está [muy] buena.', 'En el sur hay [muchas] playas.'] },
    { k: 'fill', t: '부정관사 un · una · unos · unas', it: ['En el centro hay {*un|una|unos} mercado.', 'Cerca hay {un|*una|unas} playa preciosa.', 'Tenemos {un|unos|*unas} islas muy bonitas.', 'Es {*un|una} país muy grande.', 'Hay {un|*unos|unas} parques nacionales.'] },
    { k: 'match', t: '의문사 고르기 — 질문과 답', d: '질문에 맞는 대답을 연결하세요.', it: [['¿Dónde está Montevideo?', 'En Uruguay.'], ['¿Cuántos habitantes tiene Panamá?', 'Unos cuatro millones.'], ['¿Cuál es la capital de Bolivia?', 'Sucre (y La Paz es la sede del gobierno).'], ['¿Qué lenguas se hablan en Paraguay?', 'Español y guaraní.'], ['¿Cómo es el clima en Cuba?', 'Tropical, hace calor.']] },
    { k: 'fill', t: '의문사 넣기', it: ['¿[Dónde] está el lago Titicaca?', '¿[Cuántos] países hay en Centroamérica?', '¿[Cuál] es la moneda de México?', '¿[Qué] hay en el centro de la ciudad?', '¿[Cómo] es el clima en Madrid?', '¿[Cuántas] islas hay en Canarias?'] },
    { k: 'mc', t: '스페인어권 상식 퀴즈', d: '정답을 고르세요.', it: [['La capital de Colombia es…', 'Medellín|*Bogotá|Cali'], ['El río más largo de Sudamérica es…', 'el Orinoco|*el Amazonas|el Paraná'], ['El desierto de Atacama está en…', '*Chile|México|Perú'], ['La Sagrada Familia está en…', 'Madrid|Sevilla|*Barcelona'], ['¿Qué país NO está en Centroamérica?', 'Honduras|*Venezuela|Costa Rica'], ['El idioma oficial de Brasil es…', 'el español|*el portugués|el francés']] },
    { k: 'mc', t: '날씨 듣기', d: '일기예보를 듣고 날씨를 고르세요.', it: [['', '*☀️ 해가 남|🌧️ 비|❄️ 눈', 'Hoy en Málaga hace sol y mucho calor.'], ['', '☀️ 맑음|*❄️ 눈|🌫️ 안개', 'En los Pirineos nieva y hace mucho frío.'], ['', '🥵 더움|*🌧️ 비|☀️ 맑음', 'En Santiago de Compostela llueve todo el día.'], ['', '❄️ 눈|☀️ 맑음|*☁️ 흐림', 'En Madrid está nublado, pero no llueve.']] },
    { k: 'fill', t: '최상급 만들기', d: '빈칸을 채워 최상급 문장을 완성하세요.', it: ['El Pacífico es el océano [más] grande del mundo.', 'Ciudad de México es la ciudad más poblada [de] México.', 'Este es [el] río más largo de España: el Tajo.', 'Las playas [más] bonitas están en el sur.'] },
    { k: 'tf', t: '읽기 — 엽서 한 장', d: '엽서를 읽고 V/F.',
      text: '¡Hola, Carla! Estoy en **Cartagena de Indias**, en el norte de Colombia. Es una ciudad muy bonita, con casas de colores y muchas plazas. Hace mucho calor: ¡treinta y dos grados! Hay unas islas muy cerca y mañana vamos en barco. La comida es buenísima. ¡Un beso! Andrés',
      it: [['Cartagena está en el sur de Colombia.', false], ['En Cartagena hace frío.', false], ['Hay islas cerca de la ciudad.', true], ['La ciudad tiene muchas plazas.', true], ['Andrés va a las islas en avión.', false]] },
    { k: 'order', t: '문장 만들기', it: ['En Argentina hay muchas montañas.', 'Lima está en la costa del Pacífico.', '¿Qué tiempo hace en Bogotá?', 'Es la ciudad más antigua del país.'] },
    { k: 'dict', t: '받아쓰기', it: ['Hoy hace mucho frío.', 'Cuba es una isla muy bonita.', '¿Dónde está la plaza mayor?', 'En el norte llueve mucho.'] },
    { k: 'write', t: '나의 도시 소개', d: '우리 도시(나라)가 어디에 있는지, 무엇이 있는지, 날씨가 어떤지 써 보세요.', model: 'Vivo en Busan. Está en el sureste de Corea. Es la segunda ciudad más grande del país. Hay muchas playas, montañas y un mercado de pescado muy famoso. En verano hace mucho calor y en invierno no hace mucho frío.' }
  ]
});
