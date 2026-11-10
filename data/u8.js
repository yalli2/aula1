AULA.unit({
  n: 8, title: 'El barrio ideal', ko: '이상적인 동네',
  goal: '마을·동네·도시 묘사하기, 길 묻고 안내하기, 동네에서 좋아하는 점 말하기',
  can: ['algún / ningún / mucho', '위치 전치사·부사', '길 안내', 'lo que más me gusta', '도시 시설'],
  tags: ['barrio', 'ciudad', 'algún / ningún', 'preposiciones de lugar', 'direcciones', 'cerca / lejos'],
  vocab: [
    { g: '도시 시설 · Servicios y lugares', w: [['el supermercado', '슈퍼마켓', '🛒'], ['la farmacia', '약국', '💊'], ['el banco', '은행', '🏦'], ['la biblioteca', '도서관', '📚'], ['el hospital', '병원', '🏥'], ['la estación de metro', '지하철역', '🚇'], ['la parada de autobús', '버스 정류장', '🚌'], ['el polideportivo', '체육관'], ['el parque', '공원', '🌳'], ['el ayuntamiento', '시청'], ['la panadería', '빵집', '🥖'], ['la escuela / el colegio', '학교'], ['el centro comercial', '쇼핑몰'], ['la comisaría', '경찰서'], ['el cine', '영화관', '🎬']] },
    { g: '동네 묘사 · Adjetivos', w: [['tranquilo / tranquila', '조용한'], ['ruidoso / ruidosa', '시끄러운'], ['animado / animada', '활기찬'], ['moderno / moderna', '현대적인'], ['antiguo / antigua', '오래된'], ['bonito / feo', '예쁜 / 못생긴'], ['limpio / sucio', '깨끗한 / 더러운'], ['seguro / peligroso', '안전한 / 위험한'], ['bien comunicado', '교통이 좋은'], ['caro / barato', '비싼 / 싼']] },
    { g: '위치 · Ubicación', w: [['cerca (de)', '가까이'], ['lejos (de)', '멀리'], ['al lado (de)', '옆에'], ['enfrente (de)', '맞은편에'], ['entre … y …', '…와 … 사이에'], ['a la derecha (de)', '오른쪽에'], ['a la izquierda (de)', '왼쪽에'], ['al final de la calle', '길 끝에'], ['en la esquina', '모퉁이에']] },
    { g: '길 안내 · Direcciones', w: [['Perdone, ¿sabe si hay … por aquí?', '실례합니다, 이 근처에 …있나요?'], ['Sigue todo recto', '쭉 직진해'], ['Gira a la derecha', '오른쪽으로 돌아'], ['Toma la segunda calle', '두 번째 길로 가'], ['Cruza la plaza', '광장을 건너'], ['Está a cinco minutos a pie', '걸어서 5분이야']] }
  ],
  gram: [
    { h: '수량어: algún · ningún · mucho', t: [['', '남성', '여성'], ['어떤 (긍정)', 'algún / algunos', 'alguna / algunas'], ['하나도 (부정)', 'ningún', 'ninguna'], ['많은', 'muchos', 'muchas']], ex: [['¿Hay alguna farmacia por aquí?', '이 근처에 약국 있나요?'], ['No hay ningún cine en mi barrio.', '우리 동네엔 영화관이 하나도 없어.'], ['Hay muchos bares y algunas tiendas.', '바가 많고 가게가 몇 개 있어.']], tip: '**ningún / ninguna**는 거의 항상 단수로 써요.' },
    { h: '위치 표현과 전치사 a, en', p: '**en** = 안에/에 (위치) · **a** = 방향·거리. **a + el = al**, **de + el = del**', ex: [['La farmacia está al lado del banco.', '약국은 은행 옆에 있다.'], ['El metro está a doscientos metros.', '지하철은 200미터 거리에 있다.'], ['Vivo en el centro, cerca de la plaza.', '나는 광장 근처 시내에 산다.']] },
    { h: '가장 좋아하는 점 강조', p: '**Lo que más me gusta de mi barrio es…** / **Lo que menos me gusta es…**', ex: [['Lo que más me gusta de mi barrio es el parque.', '우리 동네에서 가장 좋은 건 공원이야.']] },
    { h: '길 안내 — 명령형(tú) 맛보기', p: 'seguir → **sigue**, girar → **gira**, tomar → **toma**, cruzar → **cruza**. (명령형은 Aula 2·3에서 자세히!)' }
  ],
  ex: [
    { k: 'fill', t: 'algún · alguna · ningún · ninguna · muchos · muchas', it: ['¿Hay [algún] supermercado cerca? (남·단)', 'En mi calle no hay [ninguna] farmacia.', 'En el centro hay [muchas] tiendas de ropa.', '¿Conoces [alguna] biblioteca buena?', 'No hay [ningún] hospital en este pueblo.', 'Hay [muchos] parques en Madrid.'] },
    { k: 'fill', t: 'al / del / a la / de la', d: '전치사 + 관사를 결합하세요.', it: ['El banco está al lado [del] cine.', 'La parada está enfrente [de la] escuela.', 'Vamos [al] parque esta tarde.', 'La panadería está al final [de la] calle.', 'Mi casa está cerca [del] metro.'] },
    { k: 'mc', t: '지도 보고 답하기', d: '설명: 「Calle Mayor에 왼쪽부터 은행 – 약국 – 빵집이 나란히 있고, 약국 맞은편에 공원이 있다.」', audio: false, it: [['¿Dónde está la farmacia?', '*entre el banco y la panadería|al lado del parque|lejos del banco'], ['¿Qué hay enfrente de la farmacia?', 'el banco|*el parque|la panadería'], ['La panadería está…', 'a la izquierda del banco|*a la derecha de la farmacia|enfrente del banco'], ['El banco está…', '*a la izquierda de la farmacia|entre el parque y la farmacia|al final de la calle']] },
    { k: 'dlg', t: '길 묻기 — 듣기', d: '대화를 듣고 답하세요.', listen: 1,
      lines: [['Turista', 'Perdone, ¿sabe si hay alguna farmacia por aquí?'], ['Vecina', 'Sí, hay una en la calle Luna. Sigue todo recto y toma la segunda calle a la izquierda.'], ['Turista', '¿Está lejos?'], ['Vecina', 'No, está a cinco minutos a pie. Está al lado de un supermercado, enfrente de la biblioteca.'], ['Turista', '¡Muchas gracias!']],
      it: [['관광객이 찾는 곳은?', '은행|*약국|도서관'], ['어떻게 가나요?', '첫 번째 길 오른쪽|*직진 후 두 번째 길 왼쪽|광장을 건너서'], ['걸어서 얼마나?', '2분|*5분|15분'], ['약국 맞은편에 있는 것은?', '슈퍼마켓|*도서관|공원']] },
    { k: 'sort', t: '동네의 장점? 단점?', cats: ['👍 장점', '👎 단점'], it: [['Está bien comunicado.', 0], ['Es muy ruidoso por la noche.', 1], ['Hay muchas zonas verdes.', 0], ['No hay ningún centro de salud.', 1], ['Los pisos son muy caros.', 1], ['Es tranquilo y seguro.', 0], ['Las calles están sucias.', 1], ['Tiene un mercado muy bonito.', 0]] },
    { k: 'match', t: '어디에서 할까?', d: '하고 싶은 일과 장소를 연결하세요.', it: [['comprar medicinas', 'la farmacia'], ['sacar dinero', 'el banco'], ['leer y estudiar en silencio', 'la biblioteca'], ['nadar o jugar al baloncesto', 'el polideportivo'], ['comprar pan', 'la panadería'], ['ver una película', 'el cine']] },
    { k: 'tf', t: '읽기 — 우리 동네 Lavapiés', d: '글을 읽고 V/F.',
      text: 'Vivo en **Lavapiés**, un barrio antiguo del centro de Madrid. Es muy animado: hay gente de muchos países, restaurantes de todo el mundo, teatros y mercados. Está muy bien comunicado, tiene dos estaciones de metro. Lo que más me gusta es la diversidad. Lo que menos me gusta es que por la noche es un poco ruidoso y no hay muchos parques.',
      it: [['Lavapiés es un barrio moderno.', false], ['Hay restaurantes de muchos países.', true], ['No hay metro en el barrio.', false], ['Lo que más le gusta es la diversidad.', true], ['Hay muchos parques.', false]] },
    { k: 'order', t: '문장 만들기', it: ['¿Hay algún banco por aquí?', 'Sigue todo recto y gira a la derecha.', 'Lo que más me gusta es el parque.', 'En mi barrio no hay ningún cine.'] },
    { k: 'dict', t: '받아쓰기', it: ['La biblioteca está enfrente del parque.', 'Mi barrio es tranquilo y bonito.', 'Está a diez minutos a pie.'] },
    { k: 'write', t: '나의 이상적인 동네', d: '이상적인 동네에 무엇이 있고(hay), 어디에 있고(está), 어떤지 써 보세요.', model: 'Mi barrio ideal es tranquilo pero animado. Hay un parque muy grande con un lago y muchos árboles. Al lado del parque hay una biblioteca moderna. Hay algunas cafeterías y una panadería en la esquina. La estación de metro está a cinco minutos a pie. No hay ningún coche en el centro, solo bicicletas. Lo que más me gusta es la playa, ¡está muy cerca!' }
  ]
});
