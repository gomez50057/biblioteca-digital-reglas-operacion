import { useCallback } from "react";

export function useFilter(name, type, subcategory) {
  // Normalize 'name', 'type', and 'subcategory' to lowercase or set them to an empty string if they're null or undefined.
  // This ensures consistent comparison and avoids potential errors with toLowerCase().
  name = (name ?? '').toLowerCase();
  type = (type ?? '').toLowerCase();
  subcategory = (subcategory ?? '').toLowerCase();

  return useCallback(
    function (data) {
      const isNameMatch = !name || data.name.toLowerCase().includes(name);
      const isTypeMatch = type === 'categorías' || data.type.includes(type);
      const isSubcategoryMatch = subcategory === 'subcategorías' || !subcategory || data.subcategory.toLowerCase() === subcategory;


      return isNameMatch && isTypeMatch && isSubcategoryMatch;
    },
    [name, type, subcategory]
  );
}







// Lista de libros
export const datosBibliotecaDigital = {
  cardInfo: ["A-Z", "Año"],
  // subcategory: ["Especial", "Municipal", "Sectorial", "Estatal", "Institucional" ],
  subcategoryPlanes: ["Municipal", "Estatal"],
  subcategoryProgramas: ["Especial", "Municipal", "Sectorial", "Institucional"],
  subcategoryInexistente: ["2025"],

  cardInfo2: ["Especial", "Municipal", "Sectorial", "Estatal", "Institucional"],
  types: [
    "Categorías",
    // "Agencia Estatal de Energía de Hidalgo",
    // "Centro de Justicia para las Mujeres",
    // "Comisión Estatal de Vivienda",
    // "Comisión Estatal para el Desarrollo Sostenible de los Pueblos Indígenas",
    // "Consejo de Ciencia, Tecnología e Innovación de Hidalgo",
    // "Consejo Estatal para la Cultura y las Artes de Hidalgo",
    // "Instituto Hidalguense de Educación",
    // "Instituto Hidalguense de Educación para Adultos",
    // "Instituto Hidalguense de la Competitividad Empresarial",
    // "Instituto Hidalguense de la Juventud",
    // "Instituto Hidalguense de las Mujeres",
    // "Instituto Hidalguense del Deporte",
    // "Instituto para la Atencíon de las y los Adultos Mayores del Estado de Hidalgo",
    // "Instituto Tecnológico Superior de Huichapan",
    // "La ciudad de las Mujeres",
    // "Secretaría de Agricultura y Desarrollo Rural",
    // "Secretaría de Bienestar e Inclusión Social",
    // "Secretaría de Contraloría",
    // "Secretaría de Cultura",
    // "Secretaría de Desarrollo Económico",
    // "Secretaría de Educación Pública",
    // "Secretaría de Gobierno",
    // "Secretaría de Infraestructura Pública y Desarrollo Urbano Sostenible",
    // "Secretaría del Trabajo y Previsión Social",
    // "Sistema para el Desarrollo Integral de la Familia del Estado de Hidalgo",
    // "Universidad Politécnica de Tulancingo",
    // "Universidad Politécnica Metropolitana de Hidalgo",
    // "Universidad Tecnológica de la Huasteca Hidalguense",
    // "Universidad Tecnológica de la Sierra Hidalguense",
    // "Universidad Tecnológica de Tula-Tepeji",
    // "Universidad Tecnológica de Tulancingo",
    // "Universidad Tecnológica del Valle del Mezquital"

    "Secretaría de Educación Pública",
    "Secretaria de Bienestar e Inclusión Social",
    "Secretaría de Cultura",
    "Secretaría de Contraloría"
  ],
  cards: [
    {
      booksIndex: '1',
      name: 'PROGRAMA DE APOYO DE BECAS PARA LA TRANSFORMACIÓN DE ESTUDIANTES DE INSTITUCIONES DE EDUCACIÓN SUPERIOR EN EL ESTADO DE HIDALGO',
      objetivo: 'Otorgar becas en forma de transferencias monetarias a las y los estudiantes de las Instituciones de Educación Superior dependientes de la Secretaría de Educación Pública de Hidalgo y del Tecnológico Nacional de México en Hidalgo durante el ejercicio fiscal 2025.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-7-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '2',
      name: 'PROGRAMA DE APOYO DE LIBROS DE TEXTO GRATUITOS PARA ESTUDIANTES DE INSTITUCIONES PÚBLICAS DE EDUCACIÓN DEL TIPO MEDIO SUPERIOR EN EL ESTADO DE HIDALGO',
      objetivo: 'Fortalecer la economía de las familias hidalguenses para que las y los estudiantes puedan asistir en igualdad de condiciones a la educación media superior, promoviendo la identidad y sentido de pertenencia al Sistema Educativo Estatal.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-7-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '3',
      name: 'PROGRAMAS DE BECAS INSTITUCIONALES DEL INSTITUTO TECNOLÓGICO SUPERIOR DEL ORIENTE DEL ESTADO DE HIDALGO PARA EL EJERCICIO FISCAL 2025',
      objetivo: 'Beneficiar a estudiantes inscritos/as, egresados/as, personal administrativo, directivo o docente del Instituto Tecnológico Superior del Oriente del Estado de Hidalgo con una beca institucional, que les permita fortalecer el desarrollo de competencias en los estudios de nivel licenciatura o de posgrado, además de culminar su proceso de titulación.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-10-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '4',
      name: 'PROGRAMA DE APOYO DE ÚTILES ESCOLARES GRATUITOS PARA ESTUDIANTES DE ESCUELAS PÚBLICAS DE TIPO BÁSICO EN EL ESTADO DE HIDALGO',
      objetivo: 'Dotar a las alumnas y alumnos de educación básica pública y CONAFE de un paquete de útiles escolares que apoye a la economía familiar a fin de disminuir el abandono escolar y rezago educativo.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-7-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '5',
      name: 'PROGRAMA DE BECAS INSTITUCIONALES DEL INSTITUTO TECNOLÓGICO SUPERIOR DE HUICHAPAN PARA EL EJERCICIO FISCAL 2025',
      objetivo: 'Beneficiar a estudiantes inscritos en el Instituto Tecnológico Superior de Huichapan con una beca institucional que les permita fortalecer el desarrollo de sus estudios de nivel superior.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-10-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '6',
      name: 'PROGRAMA DE CULTURA FÍSICA Y DEPORTE PARA EL ESTADO DE HIDALGO 2025',
      objetivo: 'Activar físicamente a la población hidalguense de 6 años y más, a través de los programas de Cultura Física y Sociodeportivo, así como el Desarrollo de Talentos Deportivos, implementados por el Instituto Hidalguense del Deporte sin discriminación y en coordinación con la Comisión Nacional del Deporte, Asociaciones Deportivas Estatales y Presidencias Municipales.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-10-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '7',
      name: 'PROGRAMA DE APOYO DE UNIFORMES ESCOLARES GRATUITOS PARA ESTUDIANTES DE ESCUELAS PÚBLICAS DE TIPO BÁSICO EN EL ESTADO DE HIDALGO',
      objetivo: 'Dotar a las alumnas y alumnos de educación básica pública y secundaria CONAFE de un paquete de uniforme escolar que apoye a la economía familiar a fin de disminuir el abandono escolar y rezago educativo.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-7-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '8',
      name: 'FORTALECIMIENTO A LA EDUCACIÓN BÁSICA Y MEDIA SUPERIOR, PARA ABATIR EL REZAGO EDUCATIVO 2025.',
      objetivo: 'Fortalecer los servicios educativos de alfabetización, primaria y secundaria para personas jóvenes y adultas de 15 años o más y de educación media superior en su modalidad de preparatoria abierta para disminuir el rezago educativo en el Estado de Hidalgo a través del otorgamiento de un apoyo económico a las personas voluntarias que participan en la prestación de dichos servicios.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-10-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '9',
      name: 'PROGRAMA PARA LA TRANSFORMACIÓN EDUCATIVA A TRAVÉS DE DISPOSITIVOS DIGITALES MÓVILES',
      objetivo: 'Las presentes reglas de operación tienen como propósito regular el Programa para la Transformación Educativa a través de la entrega de Dispositivos Digitales Móviles, a estudiantes de nuevo ingreso del Bachillerato del Estado de Hidalgo para la mejora del proceso de enseñanza-aprendizaje y la disminución de las brechas digitales; además de reconocer a las niñas, niños, adolescentes y jóvenes hidalguenses en situación de vulnerabilidad que obtienen el nivel más alto de aprovechamiento académico, que se encuentren inscritos en los organismos descentralizados de educación media superior y escuelas públicas del tipo básico, medio superior y superior, de acuerdo con la suficiencia presupuestal.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-7-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '10',
      name: '"IMPULSANDO A DESCUBRIR"',
      objetivo: 'El Programa “Impulsando a Descubrir” favorece una educación inclusiva, equitativa y de calidad, promoviendo la oportunidad de aprendizaje mediante el acercamiento de la población objetivo al conocimiento de la ciencia, el arte y la tecnología, a través del juego interactivo y la reflexión, en un ambiente de respeto, equidad, confianza y apertura, al fortalecer los conocimientos adquiridos en el salón de clases, mediante la visita al Museo Interactivo para la Niñez y la Juventud Hidalguense “El Rehilete”.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-11-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '11',
      name: 'PROGRAMA DE BECAS DE DESEMPEÑO ACADÉMICO DEL INSTITUTO TECNOLÓGICO SUPERIOR DEL OCCIDENTE DEL ESTADO DE HIDALGO',
      objetivo: 'Beneficiar a aspirantes y a estudiantes del Instituto Tecnológico Superior del Occidente del Estado de Hidalgo con una Beca de Desempeño Institucional que les permita el ingreso y permanencia de sus estudios de nivel superior.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-10-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '12',
      name: 'REGLAS DE OPERACIÓN DE LOS PROGRAMAS DE BECAS INSTITUCIONALES DE EL COLEGIO DEL ESTADO DE HIDALGO - 2025',
      objetivo: 'Fomentar el desarrollo académico y profesional mediante el otorgamiento de becas institucionales a estudiantes activos, tesistas, egresados e integrantes de la planta académica de tiempo completo y exclusivo de El Colegio del Estado de Hidalgo, contribuyendo así a la formación de capital humano especializado y al fortalecimiento de la investigación vinculada a las necesidades del Estado de Hidalgo.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-8-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '13',
      name: 'PROGRAMA DE APOYO DE UNIFORMES ESCOLARES GRATUITOS PARA ESTUDIANTES DE INSTITUCIONES PÚBLICAS DE EDUCACIÓN DEL TIPO MEDIO SUPERIOR EN EL ESTADO DE HIDALGO',
      objetivo: 'Fortalecer a la economía de las familias hidalguenses para que las y los estudiantes puedan acceder, en equidad educativa, al tipo medio superior, promoviendo la identidad y sentido de pertenencia al Sistema Educativo Estatal.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-7-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '14',
      name: 'PROGRAMAS DE BECAS INSTITUCIONALES DE LA UNIVERSIDAD TECNOLÓGICA DE TULANCINGO',
      objetivo: 'Beneficiar a estudiantes inscritos en la Universidad Tecnológica de Tulancingo y estudiantes extranjeros que han sido aceptados para realizar estudios en la Universidad, a través de un Convenio de Colaboración con la Institución de Educación Superior de origen (extranjera), con una Beca Institucional, que les permita continuar y fortalecer el desarrollo de sus estudios de nivel superior, contribuyendo con ello a disminuir el rezago educativo y desarrollar a nuestra población como mejores seres humanos y como personas competitivas.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-12-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '15',
      name: 'PROGRAMAS DE BECAS INSTITUCIONALES DE LA UNIVERSIDAD POLITÉCNICA DE PACHUCA',
      objetivo: 'Beneficiar a estudiantes inscritos en la Universidad Politécnica de Pachuca con una beca institucional que les permita fortalecer el desarrollo de sus estudios de nivel superior. Contribuir a la protección del derecho a la Educación y al desarrollo humano, disminuyendo el nivel de deserción escolar mediante el otorgamiento de Becas educativas a los jóvenes y adultos que se encuentren inscritos en la institución y en una situación de vulnerabilidad.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-12-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '16',
      name: 'PROGRAMA DE BECAS INSTITUCIONALES DE LA UNIVERSIDAD INTERCULTURAL DEL ESTADO DE HIDALGO',
      objetivo: 'Beneficiar a las y los estudiantes inscritos en la Universidad Intercultural del Estado de Hidalgo, con Becas Institucionales que les permitan fortalecer el desarrollo de sus estudios de nivel superior.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-12-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '17',
      name: 'PROGRAMA DE BECAS INSTITUCIONALES DE LA UNIVERSIDAD TECNOLÓGICA DE TULA-TEPEJI',
      objetivo: 'Garantizar la permanencia y el rendimiento académico de estudiantes en situación socioeconómica vulnerable mediante la provisión de un apoyo alimenticio diario. Este programa busca contribuir a la reducción de la deserción escolar, promoviendo la equidad educativa y el desarrollo integral de la comunidad estudiantil.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-12-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '18',
      name: 'PROGRAMA DE BECAS PARA ESTUDIANTES DE ESCUELAS PÚBLICAS DE TIPO BÁSICO EN EL ESTADO DE HIDALGO',
      objetivo: 'Contribuir a la permanencia en la escuela de los estudiantes que cursan la educación básica en escuelas públicas, a través de la entrega de becas, además de reconocer e incentivar un mejor rendimiento académico, atendiendo la disponibilidad presupuestal y financiera.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-7-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '19',
      name: 'PROGRAMAS DE BECAS INSTITUCIONALES DE LA UNIVERSIDAD TECNOLÓGICA DEL VALLE DEL MEZQUITAL',
      objetivo: 'Beneficiar a estudiantes inscritos/as en la Universidad Tecnológica del Valle del Mezquital con la beca académica que les permita fortalecer el desarrollo de sus estudios de nivel superior.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-12-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '20',
      name: 'PROGRAMAS DE BECAS INSTITUCIONALES DE LA UNIVERSIDAD POLITÉCNICA METROPOLITANA DE HIDALGO PARA EL EJERCICIO FISCAL 2025.',
      objetivo: 'La matrícula estudiantil de la Universidad Politécnica Metropolitana de Hidalgo está integrada en un 70% de estudiantes foráneos provenientes de municipios, localidades del Estado de Hidalgo y otras entidades federativas, es por ello que para la asignación de las mismas se realiza en apego a los principios de equidad e igualdad, permitiendo postularse a aquellos que tengan el interés y necesidad de obtener el apoyo, disminuyendo la deserción de los estudiantes, incrementando la permanencia y egreso exitoso de su preparación académica de nivel superior.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-12-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '21',
      name: 'PROGRAMA AYUDAS PARA EL SISTEMA EDUCATIVO DEL ESTADO DE HIDALGO',
      objetivo: 'Brindar a personas físicas que formen parte del Sistema Educativo Estatal, ayuda por única vez y por condiciones excepcionales, con base en techo presupuestal y disponibilidad financiera, a partir de un enfoque de derechos humanos, y para coadyuvar a la vigencia del derecho a una educación con equidad y excelencia.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-5-del-31-de-enero-de-2024'
    },
    {
      booksIndex: '22',
      name: 'PROGRAMA DE APOYO DE CALZADO ESCOLAR GRATUITO PARA ESTUDIANTES DE ESCUELAS PÚBLICAS DE TIPO BÁSICO EN EL ESTADO DE HIDALGO',
      objetivo: 'Dotar a las alumnas y alumnos de educación básica pública de un paquete de calzado escolar que apoye a la economía familiar a fin de disminuir el abandono escolar y rezago educativo.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-7-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '23',
      name: 'PROGRAMAS DE BECAS INSTITUCIONALES DE LA UNIVERSIDAD POLITÉCNICA DE TULANCINGO PARA EL EJERCICIO FISCAL 2025',
      objetivo: 'Beneficiar a estudiantes inscritas/os en la Universidad Politécnica de Tulancingo con una beca institucional que les permita fortalecer el desarrollo de sus estudios de nivel superior con la finalidad de evitar que por problemas económicos abandonen sus estudios y monitoreando el índice de deserción.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-12-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '24',
      name: 'REGLAS DE OPERACIÓN PROGRAMA BECAS ACADÉMICAS DE LA UNIVERSIDAD TECNOLÓGICA DE LA SIERRA HIDALGUENSE',
      objetivo: 'Estudiantes inscritos en la institución mediante la implementación de una beca institucional que contribuya a sufragar los gastos universitarios. Su propósito principal es garantizar que los estudiantes puedan acceder, permanecer y concluir su formación universitaria, asegurando que la falta de recursos económicos no sea una limitante.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-12-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '25',
      name: 'REGLAS DE OPERACIÓN DE LOS PROGRAMAS DE BECAS INSTITUCIONALES DE LA UNIVERSIDAD TECNOLÓGICA DE LA HUASTECA HIDALGUENSE',
      objetivo: 'Beneficiar a estudiantes inscritos en la Universidad Tecnológica de la Huasteca Hidalguense con una beca institucional que les permita fortalecer el desarrollo de sus estudios de nivel superior.',
      año: '2025',
      types: ["Secretaría de Educación Pública"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-12-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '26',
      name: 'PROGRAMA DE ATENCIÓN A PERSONAS MIGRANTES',
      objetivo: 'Coadyuvar a reducir las desigualdades y mejorar las condiciones de vida de la Población Migrante Hidalguense y sus familias, a través de acciones igualitarias y sostenibles que permitan reducir los efectos negativos propios de la migración a fin de fortalecer su desarrollo integral en aspectos económicos,laborales, familiares, sociales, culturales y les permita el goce de sus derechos en sus lugares de origen, tránsito y destino.',
      año: '2025',
      types: ["Secretaria de Bienestar e Inclusión Social"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-6-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '27',
      name: 'PROGRAMA BIENESTAR DE PERSONAS CUIDADORAS CON DISCAPACIDAD PARA EL EJERCICIO FISCAL 2025',
      objetivo: 'Contribuir al bienestar de personas cuidadoras primarias mayores de edad de personas con discapacidad múltiple (auditiva, intelectual, psicosocial, neuromotora, visual), física con movilidad reducida, intelectual profunda y psicosocial profunda; que habiten en cualquiera de los 84 municipios del Estado de Hidalgo, de acuerdo al Plan Estatal de Desarrollo 2022-2028, dando prioridad a las localidades de alta y muy alta marginación, en pobreza o en los 22 municipios de atención prioritaria indígena del Estado de Hidalgo, conforme al catálogo interno de la Secretaría.',
      año: '2025',
      types: ["Secretaria de Bienestar e Inclusión Social"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-5-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '28',
      name: 'PROGRAMA PREMIOS ESTATALES DE LITERATURA, DE CUENTO RICARDO GARIBAY Y POESÍA EFRÉN \nREBOLLEDO \n',
      objetivo: 'Reconocer e impulsar la labor literaria de las autoras y autores hidalguenses, mediante dos estímulos económicos a cuyas a obras sean escritas en la categoría de cuento y de poesía.',
      año: '2025',
      types: ["secretaría de cultura"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-5-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '29',
      name: 'PREMIO BELLAS ARTES DE TRADUCCIÓN LITERARIA MARGARITA MICHELENA 2025',
      objetivo: 'Fomentar la traducción literaria a través de la entrega de un estímulo económico del Premio Bellas Artes de Traducción Literaria Margarita Michelena.',
      año: '2025',
      types: ["secretaría de cultura"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-5-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '30',
      name: 'PROGRAMA PARA LA TRANSFORMACIÓN ARTÍSTICA Y CULTURAL 2025',
      objetivo: 'Incentivar y fortalecer la creación y las expresiones artísticas y culturales que realizan artistas, personas creadoras, colectivos artísticos y culturales, y colectivos que presenten proyectos culturales y artísticos comunitarios, municipales y/o regionales, que favorezcan la diversidad cultural y la reconstrucción del tejido social comunitario a través de ayudas sociales.',
      año: '2025',
      types: ["secretaría de cultura"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-5-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '31',
      name: 'PROGRAMA DE APOYOS PARA EL FORTALECIMIENTO DE ACTIVIDADES ARTÍSTICAS Y\nCULTURALES DEL EJERCICIO FISCAL 2025',
      objetivo: 'Fortalecer la realización de actividades artísticas y culturales que constituyan una herramienta para el desarrollo social, permitiendo que las personas beneficiarias promuevan las manifestaciones artísticas y culturales en sus comunidades a través de apoyos económicos para fortalecer el quehacer artístico y cultural del estado.',
      año: '2025',
      types: ["secretaría de cultura"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-8-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '32',
      name: 'PROGRAMA ATENCIÓN AL PUEBLO DEL EJERCICIO FISCAL 2025',
      objetivo: 'Brindar apoyos monetarios o en especie a personas habitantes del Estado de Hidalgo, grupos de personas habitantes del Estado, en situación de pobreza, rezago social, marginación o vulnerabilidad social, así como grupos sociales que generen un bienestar comunitario con necesidades de alta importancia; de igual forma a aquellas personas habitantes del Estado de Hidalgo, que por una emergencia producida por fenómenos propios de la naturaleza o de actos humanos, se encuentren una situación de vulnerabilidad; sin que estas puedan ser atendidas por otras Dependencias y Entidades del Poder Ejecutivo por oferta, suficiencia presupuestaria o temporalidad.',
      año: '2025',
      types: ["Secretaria de Bienestar e Inclusión Social"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-4-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '33',
      name: 'PROGRAMA XANTOLO PARA EL EJERCICIO FISCAL 2025',
      objetivo: 'Preservar nuestra cultura y tradiciones, a través de la entrega de un kilogramo de cacao y un kilogramo de azúcar, teniendo como objetivo principal atender a las familias hidalguenses de las regiones huasteca, sierra otomí-tepehua y sierra alta del Estado de Hidalgo, apoyando en las festividades correspondientes al Xantolo.',
      año: '2025',
      types: ["Secretaria de Bienestar e Inclusión Social"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-5-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '34',
      name: 'PROGRAMA CONCURSOS PARA FOMENTAR LA PARTICIPACIÓN CIUDADANA EN ACCIONES SOBRE CULTURA DE LA TRANSPARENCIA Y LA RENDICIÓN DE CUENTAS PARA EL EJERCICIO 2025',
      objetivo: 'Incentivar la participación de niñas, niños, adolescentes y juventud del estado de Hidalgo en acciones de transparencia y rendición de cuentas como mecanismos para prevenir actos de corrupción.',
      año: '2025',
      types: ["Secretaría de Contraloría"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-6-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '35',
      name: 'PROGRAMA DE AYUDAS SOCIALES PARA LA REALIZACIÓN DEL PROGRAMA PARA LA ADMINISTRACIÓN DE BIENES, SERVICIOS Y FINANCIAMIENTO A LA CULTURA DEL EJERCICIO FISCAL 2025',
      objetivo: 'Proporcionar apoyo social a personas dedicadas a actividades artísticas y culturales, con el fin de fortalecer y promover el desarrollo de la creatividad, la formación artística y la preservación de las tradiciones culturales. A través de este apoyo, se busca enriquecer la vida cultural del estado, incentivando el crecimiento de las disciplinas artísticas y culturales en sus diversas manifestaciones, como la pintura, escultura, música, danza, literatura, cine, fotografía, teatro, arte popular, artesanías, narración oral y emprendimiento creativo, contribuyendo así a la valorización de la cultura local y la consolidación de un panorama cultural más diverso y accesible para el cobertura en los 84 municipios del Estado de Hidalgo, agrupados en las 12 regiones, que son: la Huasteca Hidalguense, Valle del Mezquital, Tula, Pachuca, Tulancingo, Actopan, Tepeji del Río, Huejutla, Ixmiquilpan, Huichapan, Zimapán y Apan.',
      año: '2025',
      types: ["secretaría de cultura"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-8-del-31-de-enero-de-2025'
    },
    {
      booksIndex: '36',
      name: 'PROGRAMA PREMIO EL PUEBLO CONTRA LA CORRUPCIÓN 2025',
      objetivo: 'Fomentar el interés de la juventud en los problemas sociales y culturales, con el propósito de que busquen una solución para erradicarlos, enfocándose en la problemática de la corrupción en el Estado de Hidalgo.',
      año: '2025',
      types: ["Secretaría de Contraloría"],
      subcategory: '2025',
      pdfSrc: 'https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-6-del-31-de-enero-de-2025'
    }
  ]
};

// ✅ Convertir todos los `types` a minúsculas automáticamente
datosBibliotecaDigital.cards = datosBibliotecaDigital.cards.map(card => ({
  ...card,
  types: card.types ? card.types.map(type => type.toLowerCase().trim()) : [] // Convierte a minúsculas
}));
