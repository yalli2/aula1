AULA.unit({
  n: 1, title: 'Nosotros', ko: '우리 — 반 친구들 알아가기',
  goal: '개인 정보(이름·국적·나이·직업·연락처) 묻고 답하기',
  can: ['국적·직업 말하기', '숫자 0–100', '알파벳 철자 말하기', 'ser · tener · llamarse'],
  tags: ['ser', 'tener', 'nacionalidades', 'profesiones', 'números', 'abecedario'],
  vocab: [
    { g: '국적 · Nacionalidades', w: [['coreano / coreana', '한국인', '🇰🇷'], ['español / española', '스페인인', '🇪🇸'], ['mexicano / mexicana', '멕시코인', '🇲🇽'], ['argentino / argentina', '아르헨티나인', '🇦🇷'], ['japonés / japonesa', '일본인', '🇯🇵'], ['chino / china', '중국인', '🇨🇳'], ['francés / francesa', '프랑스인', '🇫🇷'], ['alemán / alemana', '독일인', '🇩🇪'], ['inglés / inglesa', '영국인', '🇬🇧'], ['estadounidense', '미국인', '🇺🇸'], ['canadiense', '캐나다인', '🇨🇦'], ['brasileño / brasileña', '브라질인', '🇧🇷']] },
    { g: '직업 · Profesiones', w: [['estudiante', '학생'], ['profesor / profesora', '선생님'], ['médico / médica', '의사'], ['enfermero / enfermera', '간호사'], ['cocinero / cocinera', '요리사'], ['camarero / camarera', '웨이터'], ['periodista', '기자'], ['ingeniero / ingeniera', '엔지니어'], ['abogado / abogada', '변호사'], ['futbolista', '축구 선수'], ['informático / informática', '컴퓨터 전문가'], ['dependiente / dependienta', '점원']] },
    { g: '숫자 · Números 0–20', w: [['cero', '0'], ['uno', '1'], ['dos', '2'], ['tres', '3'], ['cuatro', '4'], ['cinco', '5'], ['seis', '6'], ['siete', '7'], ['ocho', '8'], ['nueve', '9'], ['diez', '10'], ['once', '11'], ['doce', '12'], ['trece', '13'], ['catorce', '14'], ['quince', '15'], ['dieciséis', '16'], ['diecisiete', '17'], ['dieciocho', '18'], ['diecinueve', '19'], ['veinte', '20']] },
    { g: '숫자 · 21–100', w: [['veintiuno', '21'], ['veintidós', '22'], ['treinta', '30'], ['treinta y uno', '31'], ['cuarenta', '40'], ['cincuenta', '50'], ['sesenta', '60'], ['setenta', '70'], ['ochenta', '80'], ['noventa', '90'], ['cien', '100']] },
    { g: '개인 정보 질문', w: [['¿Cómo te llamas?', '이름이 뭐야?'], ['¿De dónde eres?', '어디 출신이야?'], ['¿Cuántos años tienes?', '몇 살이야?'], ['¿A qué te dedicas?', '무슨 일 해?'], ['¿Tienes correo electrónico?', '이메일 있어?'], ['¿Cuál es tu número de teléfono?', '전화번호가 뭐야?']] }
  ],
  gram: [
    { h: '동사 SER (~이다)', p: '이름·국적·직업을 말할 때 써요. 불규칙 동사!', t: [['인칭', 'ser'], ['yo', 'soy'], ['tú', 'eres'], ['él / ella / usted', 'es'], ['nosotros/-as', 'somos'], ['vosotros/-as', 'sois'], ['ellos / ellas / ustedes', 'son']], ex: [['Soy coreana, de Busan.', '나는 부산 출신 한국인이야.'], ['¿Eres estudiante?', '너 학생이야?']] },
    { h: '동사 TENER (가지다) — 나이', p: '나이는 **tener + 숫자 + años**. “나는 15살이다” = Tengo 15 años.', t: [['인칭', 'tener'], ['yo', 'tengo'], ['tú', 'tienes'], ['él / ella / usted', 'tiene'], ['nosotros/-as', 'tenemos'], ['vosotros/-as', 'tenéis'], ['ellos / ellas / ustedes', 'tienen']], ex: [['Tengo dieciséis años.', '나는 16살이야.'], ['Mi profesor tiene cuarenta años.', '우리 선생님은 40살이야.']] },
    { h: '국적·직업의 성(性)', t: [['규칙', '남성', '여성'], ['-o → -a', 'mexicano', 'mexicana'], ['자음 → +a', 'español', 'española'], ['-és → -esa', 'japonés', 'japonesa'], ['-e / -ista (동일)', 'estudiante', 'estudiante']], tip: '**-ista, -e**로 끝나는 말은 남녀 형태가 같아요: el/la periodista, el/la estudiante.' },
    { h: '세 가지 동사 변화형 (-ar / -er / -ir)', p: '스페인어 동사는 원형 어미에 따라 세 그룹: **hablar**, **comer**, **vivir**. 다음 단원에서 자세히!' },
    { h: '숫자 21–29는 한 단어', p: '21–29는 붙여 써요: **veintiuno, veintidós, veintitrés…** 31부터는 **y**로 연결: treinta **y** uno.' }
  ],
  ex: [
    { k: 'fill', t: 'SER 동사 변화', d: '알맞은 ser의 형태를 쓰세요.', it: ['Yo [soy] de Seúl.', '¿Tú [eres] mexicano?', 'Ella [es] periodista.', 'Nosotros [somos] estudiantes.', 'Vosotras [sois] argentinas, ¿no?', 'Ellos [son] de Canadá.'] },
    { k: 'fill', t: 'TENER로 나이 말하기', d: '알맞은 tener의 형태를 쓰세요.', it: ['Yo [tengo] quince años.', '¿Cuántos años [tienes]?', 'Mi abuela [tiene] ochenta años.', 'Nosotros [tenemos] la misma edad.', 'Ellas [tienen] veinte años.'] },
    { k: 'fill', t: '국적 — 여성형 만들기', d: '여성형으로 바꿔 쓰세요.', it: ['Pedro es español. → Marta es [española].', 'Ken es japonés. → Aiko es [japonesa].', 'Luc es francés. → Chloé es [francesa].', 'Minho es coreano. → Seoyeon es [coreana].', 'Hans es alemán. → Greta es [alemana].', 'Tom es canadiense. → Anne es [canadiense].'] },
    { k: 'match', t: '그 음식은 어느 나라 것?', d: '음식과 국적 형용사를 연결하세요. (성에 주의!)', it: [['el kimchi', 'coreano'], ['la pizza', 'italiana'], ['el sushi', 'japonés'], ['la paella', 'española'], ['los tacos', 'mexicanos'], ['la baguette', 'francesa']] },
    { k: 'sort', t: '국적일까, 직업일까?', d: '단어를 분류하세요.', cats: ['국적', '직업'], it: [['peruana', 0], ['abogado', 1], ['sueco', 0], ['cocinera', 1], ['belga', 0], ['periodista', 1], ['venezolano', 0], ['enfermero', 1], ['portuguesa', 0], ['dependienta', 1]] },
    { k: 'mc', t: '숫자 듣기', d: '▶를 누르고 들은 숫자를 고르세요.', it: [['', '13|*30|3', 'treinta'], ['', '*15|50|5', 'quince'], ['', '67|*76|66', 'setenta y seis'], ['', '12|2|*22', 'veintidós'], ['', '*44|14|40', 'cuarenta y cuatro'], ['', '19|*99|90', 'noventa y nueve']] },
    { k: 'fill', t: '숫자 패턴 이어가기', d: '규칙을 찾아 다음 숫자를 글자로 쓰세요.', it: ['dos, cuatro, seis, [ocho]', 'diez, veinte, treinta, [cuarenta]', 'cinco, diez, quince, [veinte]', 'noventa, ochenta, setenta, [sesenta]', 'once, trece, quince, [diecisiete]'] },
    { k: 'fill', t: '질문 완성하기', d: '질문의 빈칸을 채우세요.', it: ['¿Cómo te [llamas]? — Me llamo Valeria.', '¿De [dónde] eres? — Soy de Chile.', '¿[Cuántos] años tienes? — Tengo diecisiete.', '¿A qué te [dedicas]? — Soy enfermera.', '¿Cómo se [escribe] tu apellido? — K-I-M.', '¿[Cuál] es tu número de teléfono? — Es el 654 21 30 87.'] },
    { k: 'dlg', t: '호텔 체크인 대화 듣기', d: '대화를 듣고 질문에 답하세요.', listen: 1,
      lines: [['Recepcionista', 'Buenas tardes. ¿Su nombre, por favor?'], ['Cliente', 'Rafael Ortega.'], ['Recepcionista', '¿Cómo se escribe su apellido?'], ['Cliente', 'O-R-T-E-G-A.'], ['Recepcionista', '¿Nacionalidad?'], ['Cliente', 'Soy colombiano, de Medellín.'], ['Recepcionista', '¿Y su teléfono?'], ['Cliente', 'Es el seis, cuatro, siete, treinta y dos, quince, ochenta.'], ['Recepcionista', 'Muchas gracias.']],
      it: [['손님의 성(apellido)은?', 'Ortiz|*Ortega|Rafael'], ['손님의 국적은?', 'mexicano|*colombiano|español'], ['손님의 도시는?', 'Bogotá|*Medellín|Madrid'], ['대화 시간대는?', '오전|*오후|밤']] },
    { k: 'tf', t: '읽기 — 국제 교환학생 프로필', d: '글을 읽고 맞으면 Verdadero, 틀리면 Falso.',
      text: '¡Hola! Me llamo **Inés Duarte** y tengo diecinueve años. Soy portuguesa, de Oporto, pero vivo en Valencia. Soy estudiante de Medicina. Mi compañera de piso se llama **Hyejin**; es coreana y estudia Periodismo. Tiene veintiún años y habla español muy bien.',
      it: [['Inés tiene diecinueve años.', true], ['Inés es española.', false], ['Inés estudia Medicina.', true], ['Hyejin es japonesa.', false], ['Hyejin tiene veinte años.', false]] },
    { k: 'mc', t: '알파벳 철자 듣기', d: '철자를 듣고 어떤 단어인지 고르세요.', it: [['', '*LUNA|LIMA|LANA', 'ele, u, ene, a'], ['', 'GATO|*JOTA|GOTA', 'jota, o, te, a'], ['', '*BECA|VACA|BOCA', 'be, e, ce, a'], ['', 'PERO|*PERRO|PELO', 'pe, e, erre, erre, o']] },
    { k: 'order', t: '문장 만들기', d: '단어를 바른 순서로 배열하세요.', it: ['Me llamo Javier y soy de Quito.', '¿A qué te dedicas?', 'Mi hermana tiene veintidós años.', 'Somos estudiantes de español.', '¿Cuál es tu correo electrónico?'] },
    { k: 'dict', t: '받아쓰기 — 개인 정보', d: '듣고 쓰세요.', it: ['Soy profesora de inglés.', 'Tengo treinta y cinco años.', 'Somos de Corea del Sur.', '¿De dónde eres?'] },
    { k: 'write', t: '내 프로필 카드', d: '이름, 국적, 나이, 직업(학생), 사는 곳을 넣어 자기소개를 써 보세요.', model: 'Hola, me llamo Daniel Park. Soy coreano, de Incheon. Tengo dieciséis años y soy estudiante. Vivo en Seúl. Mi correo es dpark@correo.com.' }
  ]
});
