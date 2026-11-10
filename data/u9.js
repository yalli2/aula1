AULA.unit({
  n: 9, title: '¿Sabes conducir?', ko: '운전할 줄 알아? — 경험과 능력',
  goal: '과거 경험 말하기(현재완료), 능력·적성과 장단점 말하기 — 일자리에 맞는 후보 고르기',
  can: ['pretérito perfecto', '과거분사 (규칙·불규칙)', 'saber + 원형', 'poder + 원형', '빈도: alguna vez, nunca, varias veces', '성격 장단점'],
  tags: ['pretérito perfecto', 'participios', 'saber', 'poder', 'experiencias', 'cualidades', 'trabajo'],
  vocab: [
    { g: '경험 빈도 · ¿Cuántas veces?', w: [['alguna vez', '한 번이라도 (경험 질문)'], ['una vez', '한 번'], ['dos / tres veces', '두 번 / 세 번'], ['varias veces', '여러 번'], ['muchas veces', '많이'], ['nunca', '한 번도 안'], ['todavía no', '아직 안'], ['ya', '이미']] },
    { g: '능력 · Habilidades', w: [['conducir', '운전하다', '🚗'], ['nadar', '수영하다', '🏊'], ['cocinar', '요리하다'], ['tocar la guitarra', '기타를 치다', '🎸'], ['hablar en público', '대중 앞에서 말하다'], ['dibujar', '그림 그리다', '🎨'], ['programar', '프로그래밍하다', '💻'], ['montar en bici', '자전거 타다', '🚲'], ['cuidar niños', '아이들을 돌보다'], ['trabajar en equipo', '팀으로 일하다']] },
    { g: '장점·단점 · Cualidades y defectos', w: [['responsable', '책임감 있는'], ['puntual', '시간을 잘 지키는'], ['paciente / impaciente', '참을성 있는 / 없는'], ['creativo / creativa', '창의적인'], ['organizado / organizada', '정리 잘하는'], ['sociable', '사교적인'], ['valiente', '용감한'], ['despistado / despistada', '덜렁대는'], ['impuntual', '시간을 안 지키는'], ['tozudo / tozuda', '고집 센']] }
  ],
  gram: [
    { h: '현재완료 (pretérito perfecto)', p: '**haber** 현재형 + **과거분사**. 경험이나 “오늘/이번 주/올해”처럼 아직 끝나지 않은 시간의 일.', t: [['', 'haber', '+ 과거분사'], ['yo', 'he', 'viajado'], ['tú', 'has', 'comido'], ['él/ella/usted', 'ha', 'vivido'], ['nosotros/-as', 'hemos', ''], ['vosotros/-as', 'habéis', ''], ['ellos/ellas/ustedes', 'han', '']], ex: [['¿Has estado alguna vez en México?', '멕시코에 가 본 적 있어?'], ['He comido paella dos veces.', '파에야를 두 번 먹어 봤어.'], ['Esta semana hemos trabajado mucho.', '이번 주에 우리는 일을 많이 했다.']] },
    { h: '과거분사 만들기', t: [['규칙', '과거분사'], ['-ar → -ado', 'hablar → hablado'], ['-er / -ir → -ido', 'comer → comido, vivir → vivido']], tip: '불규칙: hacer → **hecho**, ver → **visto**, escribir → **escrito**, decir → **dicho**, abrir → **abierto**, poner → **puesto**, volver → **vuelto**, romper → **roto**, morir → **muerto**, descubrir → **descubierto**' },
    { h: 'SABER + 동사원형 (~할 줄 안다)', p: '배워서 익힌 능력. 1인칭 **sé**! (sé, sabes, sabe, sabemos, sabéis, saben)', ex: [['Sé nadar, pero no sé conducir.', '수영은 할 줄 아는데 운전은 못 해.']] },
    { h: 'PODER + 동사원형 (~할 수 있다)', p: '상황상 가능함·허락. (puedo, puedes, puede, podemos, podéis, pueden)', ex: [['Hoy no puedo nadar: hace mucho frío.', '오늘은 수영 못 해. 너무 추워.'], ['¿Puedes trabajar los fines de semana?', '주말에 일할 수 있어?']] }
  ],
  ex: [
    { k: 'fill', t: 'haber 변화', it: ['Yo [he] estado en Perú una vez.', '¿Tú [has] comido ceviche alguna vez?', 'Mi madre [ha] viajado mucho.', 'Nosotros [hemos] visto esa película.', '¿Vosotros [habéis] escrito el correo?', 'Mis primos nunca [han] estado en Corea.'] },
    { k: 'fill', t: '과거분사 쓰기', d: '괄호 속 동사의 과거분사를 쓰세요.', it: ['He [trabajado] en una tienda. (trabajar)', '¿Has [leído] el Quijote? (leer)', 'Nunca he [visto] la nieve. (ver)', 'Hoy hemos [hecho] un examen. (hacer)', '¿Quién ha [roto] la ventana? (romper)', 'Ya he [escrito] mi currículum. (escribir)', 'Mis padres han [vuelto] de Chile. (volver)', '¿Has [dicho] la verdad? (decir)'] },
    { k: 'fill', t: '현재완료 문장 완성', d: 'haber + 과거분사를 함께 쓰세요.', it: ['¿[Has estado] alguna vez en Cuba? (estar, tú)', 'Yo nunca [he montado] a caballo. (montar)', 'Esta mañana Ana [ha desayunado] muy poco. (desayunar)', 'Nosotros [hemos aprendido] mucho este año. (aprender)', 'Ellos todavía no [han abierto] la tienda. (abrir)'] },
    { k: 'fill', t: 'saber 또는 poder?', it: ['Mi abuela no {*sabe|puede} usar el móvil.', 'Lo siento, hoy no {sé|*puedo} ir a tu fiesta: tengo examen.', '¿{*Sabes|Puedes} tocar el piano?', 'No {sé|*puedo} entrar: no tengo la llave.', 'Yo {*sé|puedo} hablar tres idiomas.'] },
    { k: 'mc', t: '경험 질문에 답하기', it: [['¿Has estado alguna vez en Argentina? — No, …', '*nunca he estado allí.|he estado tres veces.|ya he estado.'], ['¿Has hecho los deberes? — Sí, …', 'todavía no.|*ya los he hecho.|nunca.'], ['¿Cuántas veces has visto esta película?', '*Muchas veces, ¡me encanta!|Nunca la veo.|Sí, sé verla.'], ['¿Has comido alguna vez gusanos?', 'Sí, sé comer.|*No, nunca. ¡Qué asco!|Puedo comer.']] },
    { k: 'tf', t: '듣기 — 여름 캠프 모니터 면접', d: '면접 대화를 듣고 V/F.', listen: 1,
      lines: [['Entrevistadora', 'Bueno, Héctor, ¿has trabajado alguna vez con niños?'], ['Héctor', 'Sí, he sido monitor en un campamento dos veces.'], ['Entrevistadora', '¿Sabes nadar?'], ['Héctor', 'Sí, muy bien. Y también sé tocar la guitarra.'], ['Entrevistadora', '¿Y sabes conducir?'], ['Héctor', 'No, todavía no tengo el carné.'], ['Entrevistadora', '¿Cómo eres? ¿Cuál es tu mayor defecto?'], ['Héctor', 'Soy muy paciente y responsable, pero a veces soy un poco despistado.']],
      it: [['Héctor ha trabajado en un campamento.', true], ['Héctor no sabe nadar.', false], ['Héctor sabe conducir.', false], ['Héctor dice que es paciente.', true], ['Su defecto es que es impuntual.', false]] },
    { k: 'sort', t: '장점? 단점?', cats: ['💪 장점', '⚠️ 단점'], it: [['responsable', 0], ['despistado', 1], ['puntual', 0], ['impaciente', 1], ['creativo', 0], ['tozudo', 1], ['organizado', 0], ['perezoso', 1]] },
    { k: 'match', t: '이 일에 필요한 능력', it: [['socorrista en una piscina', 'saber nadar muy bien'], ['repartidor de pizzas', 'saber conducir una moto'], ['guía turístico', 'hablar idiomas y en público'], ['diseñador gráfico', 'ser creativo y saber dibujar'], ['canguro (niñera)', 'ser paciente y cuidar niños']] },
    { k: 'order', t: '문장 만들기', it: ['¿Has estado alguna vez en Japón?', 'Nunca he comido comida india.', 'No sé conducir, pero sé nadar.', 'Esta semana he trabajado mucho.'] },
    { k: 'dict', t: '받아쓰기', it: ['He visto esa película tres veces.', '¿Sabes tocar algún instrumento?', 'Todavía no he hecho los deberes.'] },
    { k: 'write', t: '아르바이트 지원서', d: '원하는 일, 해 본 경험(현재완료), 할 줄 아는 것(saber), 나의 장점을 써 보세요.', model: 'Hola, me llamo Minji y quiero trabajar como monitora en un campamento de verano. He cuidado a mis primos pequeños muchas veces y he hecho un curso de primeros auxilios. Sé nadar muy bien y sé tocar el ukelele. Nunca he trabajado en un campamento, pero soy responsable, paciente y muy sociable. Puedo trabajar en julio y agosto.' }
  ]
});
