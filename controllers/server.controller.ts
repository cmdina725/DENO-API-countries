import { Response, Request, Body } from "https://deno.land/x/oak/mod.ts";

interface Country {
  id: string;
  name: string;
}

interface State {
  id: string;
  name: string;
}

let countries: Country[] = [
  { id: "013", name: "AFGANISTAN" },
  { id: "017", name: "ALBANIA" },
  { id: "023", name: "ALEMANIA" },
  { id: "026", name: "ARMENIA" },
  { id: "027", name: "ARUBA" },
  { id: "029", name: "BOSNIA - HERZEGOVINA" },
  { id: "031", name: "BURKINAFASO" },
  { id: "037", name: "ANDORRA" },
  { id: "040", name: "ANGOLA" },
  { id: "041", name: "ANGUILLA" },
  { id: "043", name: "ANTIGUA Y BARBUDA" },
  { id: "047", name: "ANTILLAS HOLANDESAS" },
  { id: "053", name: "ARABIA SAUDITA" },
  { id: "059", name: "ARGELIA" },
  { id: "063", name: "ARGENTINA" },
  { id: "069", name: "AUSTRALIA" },
  { id: "072", name: "AUSTRIA" },
  { id: "074", name: "AZERBAIJAN" },
  { id: "077", name: "BAHAMAS" },
  { id: "080", name: "BAHREIN" },
  { id: "081", name: "BANGLADESH" },
  { id: "083", name: "BARBADOS" },
  { id: "087", name: "BELGICA" },
  { id: "088", name: "BELICE" },
  { id: "090", name: "BERMUDAS" },
  { id: "091", name: "BELARUS" },
  { id: "093", name: "MYANMAR" },
  { id: "097", name: "BOLIVIA" },
  { id: "101", name: "BOTSWANA" },
  { id: "105", name: "BRASIL" },
  { id: "108", name: "BRUNEIDARUSSALAM" },
  { id: "111", name: "BULGARIA" },
  { id: "115", name: "BURUNDI" },
  { id: "119", name: "BUTAN" },
  { id: "127", name: "CABOVERDE" },
  { id: "137", name: "CAIMAN, ISLAS" },
  { id: "141", name: "CAMBOYA" },
  { id: "145", name: "CAMERUN, REP UNIDA DEL" },
  { id: "149", name: "CANADA" },
  { id: "159", name: "SANTA SEDE" },
  { id: "165", name: "COCOS (KEELING), ISLAS" },
  { id: "169", name: "COLOMBIA" },
  { id: "173", name: "COMORAS" },
  { id: "177", name: "CONGO" },
  { id: "183", name: "COOK, ISLAS" },
  { id: "187", name: "COREA (NORTE), REP POP DEM DE" },
  { id: "190", name: "COREA (SUR), REP DE" },
  { id: "193", name: "COSTA DE MARFIL" },
  { id: "196", name: "COSTA RICA" },
  { id: "198", name: "CROACIA" },
  { id: "199", name: "CUBA" },
  { id: "203", name: "CHAD" },
  { id: "211", name: "CHILE" },
  { id: "215", name: "CHINA" },
  { id: "218", name: "TAIWAN (FORMOSA)" },
  { id: "221", name: "CHIPRE" },
  { id: "229", name: "BENIN" },
  { id: "232", name: "DINAMARCA" },
  { id: "235", name: "DOMINICA" },
  { id: "239", name: "ECUADOR" },
  { id: "240", name: "EGIPTO" },
  { id: "242", name: "EL SALVADOR" },
  { id: "243", name: "ERITREA" },
  { id: "244", name: "EMIRATOS ARABES UNIDOS" },
  { id: "245", name: "ESPAÑA" },
  { id: "246", name: "ESLOVAQUIA" },
  { id: "247", name: "ESLOVENIA" },
  { id: "249", name: "ESTADOS UNIDOS" },
  { id: "251", name: "ESTONIA" },
  { id: "253", name: "ETIOPIA" },
  { id: "259", name: "FEROE, ISLAS" },
  { id: "267", name: "FILIPINAS" },
  { id: "271", name: "FINLANDIA" },
  { id: "275", name: "FRANCIA" },
  { id: "281", name: "GABON" },
  { id: "285", name: "GAMBIA" },
  { id: "286", name: "GAZA Y JERICO" },
  { id: "287", name: "GEORGIA" },
  { id: "289", name: "GHANA" },
  { id: "293", name: "GIBRALTAR" },
  { id: "297", name: "GRANADA" },
  { id: "301", name: "GRECIA" },
  { id: "305", name: "GROENLANDIA" },
  { id: "309", name: "GUADALUPE" },
  { id: "313", name: "GUAM" },
  { id: "317", name: "GUATEMALA" },
  { id: "325", name: "GUAYANA FRANCESA" },
  { id: "329", name: "GUINEA" },
  { id: "331", name: "GUINEA ECUATORIAL" },
  { id: "334", name: "GUINEA BISSAU" },
  { id: "337", name: "GUYANA" },
  { id: "341", name: "HAITI" },
  { id: "345", name: "HONDURAS" },
  { id: "351", name: "HONG KONG" },
  { id: "355", name: "HUNGRIA" },
  { id: "361", name: "INDIA" },
  { id: "365", name: "INDONESIA" },
  { id: "369", name: "IRAK" },
  { id: "372", name: "IRAN, REP ISLAMICA DEL" },
  { id: "375", name: "IRLANDA (EIRE)" },
  { id: "379", name: "ISLANDIA" },
  { id: "383", name: "ISRAEL" },
  { id: "386", name: "ITALIA" },
  { id: "391", name: "JAMAICA" },
  { id: "395", name: "JOHNSTON, ISLA" },
  { id: "399", name: "JAPON" },
  { id: "403", name: "JORDANIA" },
  { id: "406", name: "KAZAJSTAN" },
  { id: "410", name: "KENIA" },
  { id: "411", name: "KIRIBATI" },
  { id: "412", name: "KIRGUIZISTAN" },
  { id: "413", name: "KUWAIT" },
  { id: "420", name: "LAOS, REP POP DEMOCRATICA DE" },
  { id: "426", name: "LESOTHO" },
  { id: "429", name: "LETONIA" },
  { id: "431", name: "LIBANO" },
  { id: "434", name: "LIBERIA" },
  { id: "438", name: "LIBIA" },
  { id: "440", name: "LIECHTENSTEIN" },
  { id: "443", name: "LITUANIA" },
  { id: "445", name: "LUXEMBURGO" },
  { id: "447", name: "MACAO" },
  { id: "448", name: "MACEDONIA" },
  { id: "450", name: "MADAGASCAR" },
  { id: "455", name: "MALAYSIA" },
  { id: "458", name: "MALAWI" },
  { id: "461", name: "MALDIVAS" },
  { id: "464", name: "MALI" },
  { id: "467", name: "MALTA" },
  { id: "469", name: "MARIANAS DE NORTE, ISLAS" },
  { id: "472", name: "MARSHALL, ISLAS" },
  { id: "474", name: "MARRUECOS" },
  { id: "477", name: "MARTINICA" },
  { id: "485", name: "MAURICIO" },
  { id: "488", name: "MAURITANIA" },
  { id: "493", name: "MEXICO" },
  { id: "494", name: "MICRONESIA, ESTADOS FEDERA DE" },
  { id: "495", name: "MIDWAY, ISLAS" },
  { id: "496", name: "MOLDAVIA" },
  { id: "497", name: "MONGOLIA" },
  { id: "498", name: "MONACO" },
  { id: "501", name: "MONTSERRAT, ISLA" },
  { id: "505", name: "MOZAMBIQUE" },
  { id: "507", name: "NAMIBIA" },
  { id: "508", name: "NAURU" },
  { id: "511", name: "NAVIDAD (CHRISTMAS), ISLA" },
  { id: "517", name: "NEPAL" },
  { id: "521", name: "NICARAGUA" },
  { id: "525", name: "NIGER" },
  { id: "528", name: "NIGERIA" },
  { id: "531", name: "NIUE, ISLA" },
  { id: "535", name: "NORFOLK, ISLA" },
  { id: "538", name: "NORUEGA" },
  { id: "542", name: "NUEVA CALEDONIA" },
  { id: "545", name: "PAPUASIA NUEVA GUINEA" },
  { id: "548", name: "NUEVA ZELANDA" },
  { id: "551", name: "VANUATU" },
  { id: "556", name: "OMAN" },
  { id: "573", name: "PAISES BAJOS" },
  { id: "576", name: "PAKISTAN" },
  { id: "578", name: "PALAU, ISLAS" },
  { id: "580", name: "PANAMA" },
  { id: "586", name: "PARAGUAY" },
  { id: "589", name: "PERU" },
  { id: "593", name: "PITCAIRN, ISLA" },
  { id: "599", name: "POLINESIA FRANCESA" },
  { id: "603", name: "POLONIA" },
  { id: "607", name: "PORTUGAL" },
  { id: "611", name: "PUERTO RICO" },
  { id: "618", name: "QATAR" },
  { id: "628", name: "REINO UNIDO" },
  { id: "640", name: "REPUBLICA CENTRO AFRICANA" },
  { id: "644", name: "REPUBLICA CHECA" },
  { id: "647", name: "REPUBLICA DOMINICANA" },
  { id: "660", name: "REUNION" },
  { id: "665", name: "ZIMBABWE" },
  { id: "670", name: "RUMANIA" },
  { id: "675", name: "RUANDA" },
  { id: "676", name: "RUSIA" },
  { id: "677", name: "SALOMON, ISLAS" },
  { id: "685", name: "SAHARA OCCIDENTAL" },
  { id: "687", name: "SAMOA" },
  { id: "690", name: "SAMOA NORTEAMERICANA" },
  { id: "695", name: "SAN CRISTOBAL Y NIEVES" },
  { id: "697", name: "SAN MARINO" },
  { id: "700", name: "SAN PEDRO Y MIQUELON" },
  { id: "705", name: "SAN VICENTE Y LAS GRANADINAS" },
  { id: "710", name: "SANTA ELENA" },
  { id: "715", name: "SANTA LUCIA" },
  { id: "720", name: "SAN TOTOME Y PRINCIPE" },
  { id: "728", name: "SENEGAL" },
  { id: "731", name: "SEYCHELLES" },
  { id: "735", name: "SIERRA LEONA" },
  { id: "741", name: "SINGAPUR" },
  { id: "744", name: "SIRIA, REP ARABE DE" },
  { id: "748", name: "SOMALIA" },
  { id: "750", name: "SRILANKA" },
  { id: "756", name: "SUDAFRICA, REPUBLICA DE" },
  { id: "759", name: "SUDAN" },
  { id: "764", name: "SUECIA" },
  { id: "767", name: "SUIZA" },
  { id: "770", name: "SURINAM" },
  { id: "773", name: "SWASILANDIA" },
  { id: "774", name: "TADJIKISTAN" },
  { id: "776", name: "TAILANDIA" },
  { id: "780", name: "TANZANIA, REP UNIDA DE" },
  { id: "783", name: "DJIBOUTI" },
  { id: "786", name: "TERRITORIO ANTARTICO BRIT" },
  { id: "787", name: "T BRIT OCEANO INDICO" },
  { id: "788", name: "TIMOR DEL ESTE" },
  { id: "800", name: "TOGO" },
  { id: "805", name: "TOKELAU" },
  { id: "810", name: "TONGA" },
  { id: "815", name: "TRINIDAD Y TOBAGO" },
  { id: "820", name: "TUNICIA" },
  { id: "823", name: "TURCAS Y CAICOS, ISLAS" },
  { id: "825", name: "TURKMENISTAN" },
  { id: "827", name: "TURQUIA" },
  { id: "828", name: "TUVALU" },
  { id: "830", name: "UCRANIA" },
  { id: "833", name: "UGANDA" },
  { id: "845", name: "URUGUAY" },
  { id: "847", name: "UZBEKISTAN" },
  { id: "850", name: "VENEZUELA" },
  { id: "855", name: "VIETNAM" },
  { id: "863", name: "VIRGENES, ISLAS (BRITANICAS)" },
  { id: "866", name: "VIRGENES, ISLAS (NORTEAMER)" },
  { id: "870", name: "FIDJI" },
  { id: "873", name: "WAKE, ISLA" },
  { id: "875", name: "WALLIS Y FUTUNA, ISLAS" },
  { id: "880", name: "YEMEN" },
  { id: "885", name: "YUGOSLAVIA" },
  { id: "888", name: "ZAIRE" },
  { id: "890", name: "ZAMBIA" },
];

let states169: State[] = [
  { id: "16905", name: "ANTIOQUIA" },
  { id: "16908", name: "ATLANTICO" },
  { id: "16911", name: "BOGOTA, D.C." },
  { id: "16913", name: "BOLIVAR" },
  { id: "16915", name: "BOYACA" },
  { id: "16917", name: "CALDAS" },
  { id: "16918", name: "CAQUETA" },
  { id: "16919", name: "CAUCA" },
  { id: "16920", name: "CESAR" },
  { id: "16923", name: "CORDOBA" },
  { id: "16925", name: "CUNDINAMARCA" },
  { id: "16927", name: "CHOCO" },
  { id: "16941", name: "HUILA" },
  { id: "16944", name: "LA GUAJIRA" },
  { id: "16947", name: "MAGDALENA" },
  { id: "16950", name: "META" },
  { id: "16952", name: "NARINO" },
  { id: "16954", name: "NORTE DE SANTANDER" },
  { id: "16963", name: "QUINDIO" },
  { id: "16966", name: "RISARALDA" },
  { id: "16968", name: "SANTANDER" },
  { id: "16970", name: "SUCRE" },
  { id: "16973", name: "TOLIMA" },
  { id: "16976", name: "VALLE DEL CAUCA" },
  { id: "16981", name: "ARAUCA" },
  { id: "16985", name: "CASANARE" },
  { id: "16986", name: "PUTUMAYO" },
  { id: "16988", name: "ARCHIP DE SAN ANDRES,PROVIDENC" },
  { id: "16991", name: "AMAZONAS" },
  { id: "16994", name: "GUAINIA" },
  { id: "16995", name: "GUAVIARE" },
  { id: "16997", name: "VAUPES" },
  { id: "16999", name: "VICHADA" },
];

let states249: State[] = [
  { id: "24901", name: "WASHINGTON" },
  { id: "24902", name: "ALABAMA" },
  { id: "24903", name: "ALASKA" },
  { id: "24904", name: "ARIZONA" },
  { id: "24905", name: "ARKANSAS" },
  { id: "24906", name: "CALIFORNIA" },
  { id: "24907", name: "NORTH CAROLINA" },
  { id: "24908", name: "SOUTH CAROLINA" },
  { id: "24909", name: "COLORADO" },
  { id: "24910", name: "CONNECTICUT" },
  { id: "24911", name: "NORTH DAKOTA" },
  { id: "24912", name: "SOUTH DAKOTA" },
  { id: "24913", name: "DELAWARE" },
  { id: "24914", name: "FLORIDA" },
  { id: "24915", name: "GEORGIA" },
  { id: "24916", name: "HAWAII" },
  { id: "24917", name: "IDAHO" },
  { id: "24918", name: "ILLINOIS" },
  { id: "24919", name: "INDIANA" },
  { id: "24920", name: "IOWA" },
  { id: "24921", name: "KANSAS" },
  { id: "24922", name: "KENTUCKY" },
  { id: "24923", name: "LOUISIANA" },
  { id: "24924", name: "MAINE" },
  { id: "24925", name: "MARYLAND" },
  { id: "24926", name: "MASSACHUSETTS" },
  { id: "24927", name: "MICHIGAN" },
  { id: "24928", name: "MINNESOTA" },
  { id: "24929", name: "MISSISSIPPI" },
  { id: "24930", name: "MISSOURI" },
  { id: "24931", name: "MONTANA" },
  { id: "24932", name: "NEBRASKA" },
  { id: "24933", name: "NEVADA" },
  { id: "24934", name: "NEW JERSEY" },
  { id: "24935", name: "NEW YORK" },
  { id: "24936", name: "NEW HAMPSHIRE" },
  { id: "24937", name: "NEW MEXICO" },
  { id: "24938", name: "OHIO" },
  { id: "24939", name: "OKLAHOMA" },
  { id: "24940", name: "OREGON" },
  { id: "24941", name: "PENNSYLVANIA" },
  { id: "24942", name: "RHODE ISLAND AND PROVIDENCE PL" },
  { id: "24943", name: "TENNESSEE" },
  { id: "24944", name: "TEXAS" },
  { id: "24945", name: "UTAH" },
  { id: "24946", name: "VERMONT" },
  { id: "24947", name: "VIRGINIA" },
  { id: "24948", name: "WEST VIRGINIA" },
  { id: "24949", name: "WISCONSIN" },
  { id: "24950", name: "WYOMING" },
];

// GET /countries | Get countries list
export const getCountries = ({ response }: { response: Response }) => {
  response.body = countries;
};

// GET /country/:id | Get country by ID from countries list
export const getCountry = ({
  params,
  response,
}: {
  params: { id: string };
  response: Response;
}) => {
  const country = countries.find(
    (countryFound) => countryFound.id === params.id
  );
  if (country) {
    response.status = 200;
    response.body = {
      id: country.id,
      name: country.name,
    };
  } else if (params.id === "418") {
    response.status = 418;
    response.body = {
      message: "I'm a teapot",
    };
  } else {
    response.status = 404;
    response.body = {
      message: "Country not found",
    };
  }
};

// GET /states/:id | Get states of one country
export const getStates = ({
  params,
  response,
}: {
  params: { id: string };
  response: Response;
}) => {
  if (params.id === "169") {
    response.status = 200;
    response.body = states169;
  } else if (params.id === "249") {
    response.status = 200;
    response.body = states249;
  } else {
    response.status = 501;
    response.body = {
      message: "States not implemented",
    };
  }
};

// GET /state/:id | Get state by ID from state country list
export const getState = ({
  params,
  response,
}: {
  params: { id: string };
  response: Response;
}) => {
  let countryID = params.id.substring(0, 3);
  if (countryID === "169") {
    const state = states169.find((satetFound) => satetFound.id === params.id);
    if (state) {
      response.status = 200;
      response.body = {
        id: state.id,
        name: state.name,
      };
    } else {
      response.status = 404;
      response.body = {
        message: "State not found",
      };
    }
  } else {
    const state = states249.find((satetFound) => satetFound.id === params.id);
    if (state) {
      response.status = 200;
      response.body = {
        id: state.id,
        name: state.name,
      };
    } else {
      response.status = 404;
      response.body = {
        message: "State not found",
      };
    }
  }
};
