const vocabData = [
  {
    "es": "SER",
    "zh": "是",
    "pinyin": "shì",
    "category": "Verbos",
    "isImportant": true
  },
  {
    "es": "Estar",
    "zh": "是",
    "pinyin": "shì",
    "category": "Verbos"
  },
  {
    "es": "Tener",
    "zh": "有",
    "pinyin": "yǒu",
    "category": "Verbos"
  },
  {
    "es": "Haber",
    "zh": "有",
    "pinyin": "yǒu",
    "category": "Verbos"
  },
  {
    "es": "Hay",
    "zh": "有",
    "pinyin": "yǒu",
    "category": "Verbos"
  },
  {
    "es": "QUERER",
    "zh": "想要",
    "pinyin": "xiǎng yào",
    "category": "Verbos",
    "isImportant": true
  },
  {
    "es": "Desear",
    "zh": "愿望",
    "pinyin": "yuàn wàng",
    "category": "Verbos"
  },
  {
    "es": "Amar",
    "zh": "爱",
    "pinyin": "ài",
    "category": "Verbos"
  },
  {
    "es": "Intentar",
    "zh": "尝试",
    "pinyin": "cháng shì",
    "category": "Verbos"
  },
  {
    "es": "Pedir",
    "zh": "问",
    "pinyin": "wèn",
    "category": "Verbos"
  },
  {
    "es": "VIVIR",
    "zh": "直播",
    "pinyin": "zhí bō",
    "category": "Verbos",
    "isImportant": true
  },
  {
    "es": "Nacer",
    "zh": "出生",
    "pinyin": "chū shēng",
    "category": "Verbos"
  },
  {
    "es": "Crecer",
    "zh": "成长",
    "pinyin": "chéng zhǎng",
    "category": "Verbos"
  },
  {
    "es": "Morir",
    "zh": "死",
    "pinyin": "sǐ",
    "category": "Verbos"
  },
  {
    "es": "Sentir",
    "zh": "感觉",
    "pinyin": "gǎn jué",
    "category": "Verbos"
  },
  {
    "es": "Doler",
    "zh": "受伤",
    "pinyin": "shòu shāng",
    "category": "Verbos"
  },
  {
    "es": "Curar",
    "zh": "治愈",
    "pinyin": "zhì yù",
    "category": "Verbos"
  },
  {
    "es": "VER",
    "zh": "参见",
    "pinyin": "cān jiàn",
    "category": "Verbos",
    "isImportant": true
  },
  {
    "es": "Mirar",
    "zh": "看看",
    "pinyin": "kàn kàn",
    "category": "Verbos"
  },
  {
    "es": "Oír",
    "zh": "听到",
    "pinyin": "tīng dào",
    "category": "Verbos"
  },
  {
    "es": "Escuchar",
    "zh": "听",
    "pinyin": "tīng",
    "category": "Verbos"
  },
  {
    "es": "Gustar",
    "zh": "喜欢",
    "pinyin": "xǐ huān",
    "category": "Verbos"
  },
  {
    "es": "Tocar",
    "zh": "触摸",
    "pinyin": "chù mō",
    "category": "Verbos"
  },
  {
    "es": "Oler",
    "zh": "气味",
    "pinyin": "qì wèi",
    "category": "Verbos"
  },
  {
    "es": "HABLAR",
    "zh": "说话",
    "pinyin": "shuō huà",
    "category": "Verbos",
    "isImportant": true
  },
  {
    "es": "Decir",
    "zh": "说",
    "pinyin": "shuō",
    "category": "Verbos"
  },
  {
    "es": "Leer",
    "zh": "阅读",
    "pinyin": "yuè dú",
    "category": "Verbos"
  },
  {
    "es": "Escribir",
    "zh": "写",
    "pinyin": "xiě",
    "category": "Verbos"
  },
  {
    "es": "Borrar",
    "zh": "删除",
    "pinyin": "shān chú",
    "category": "Verbos"
  },
  {
    "es": "Firmar",
    "zh": "标志",
    "pinyin": "biāo zhì",
    "category": "Verbos"
  },
  {
    "es": "Derribar",
    "zh": "击倒",
    "pinyin": "jī dào",
    "category": "Verbos"
  },
  {
    "es": "Eliminar",
    "zh": "删除",
    "pinyin": "shān chú",
    "category": "Verbos"
  },
  {
    "es": "Llenar",
    "zh": "填充",
    "pinyin": "tián chōng",
    "category": "Verbos"
  },
  {
    "es": "Vaciar",
    "zh": "空",
    "pinyin": "kōng",
    "category": "Verbos"
  },
  {
    "es": "PENSAR",
    "zh": "认为",
    "pinyin": "rèn wéi",
    "category": "Verbos",
    "isImportant": true
  },
  {
    "es": "Imaginar",
    "zh": "想象",
    "pinyin": "xiǎng xiàng",
    "category": "Verbos"
  },
  {
    "es": "Creer",
    "zh": "相信",
    "pinyin": "xiāng xìn",
    "category": "Verbos"
  },
  {
    "es": "Saber",
    "zh": "知道",
    "pinyin": "zhī dào",
    "category": "Verbos"
  },
  {
    "es": "Conocer",
    "zh": "知道",
    "pinyin": "zhī dào",
    "category": "Verbos"
  },
  {
    "es": "Recordar",
    "zh": "记住",
    "pinyin": "jì zhù",
    "category": "Verbos"
  },
  {
    "es": "Olvidar",
    "zh": "忘记",
    "pinyin": "wàng jì",
    "category": "Verbos"
  },
  {
    "es": "ESTUDIAR",
    "zh": "学习",
    "pinyin": "xué xí",
    "category": "Verbos",
    "isImportant": true
  },
  {
    "es": "Atender",
    "zh": "参加",
    "pinyin": "cān jiā",
    "category": "Verbos"
  },
  {
    "es": "Comprender",
    "zh": "了解",
    "pinyin": "liǎo jiě",
    "category": "Verbos"
  },
  {
    "es": "Aprender",
    "zh": "学习",
    "pinyin": "xué xí",
    "category": "Verbos"
  },
  {
    "es": "Memorizar",
    "zh": "记住",
    "pinyin": "jì zhù",
    "category": "Verbos"
  },
  {
    "es": "Enseñar",
    "zh": "教",
    "pinyin": "jiào",
    "category": "Verbos"
  },
  {
    "es": "Explicar",
    "zh": "解释一下",
    "pinyin": "jiě shì yī xià",
    "category": "Verbos"
  },
  {
    "es": "Acertar",
    "zh": "命中",
    "pinyin": "mìng zhòng",
    "category": "Verbos"
  },
  {
    "es": "Equivocar",
    "zh": "错误",
    "pinyin": "cuò wù",
    "category": "Verbos"
  },
  {
    "es": "Llegar",
    "zh": "到达",
    "pinyin": "dào dá",
    "category": "Verbos"
  },
  {
    "es": "Volver",
    "zh": "返回",
    "pinyin": "fǎn huí",
    "category": "Verbos"
  },
  {
    "es": "Venir",
    "zh": "来吧",
    "pinyin": "lái ba",
    "category": "Verbos"
  },
  {
    "es": "Entrar",
    "zh": "输入",
    "pinyin": "shū rù",
    "category": "Verbos"
  },
  {
    "es": "Salir",
    "zh": "退出",
    "pinyin": "tuì chū",
    "category": "Verbos"
  },
  {
    "es": "Sacar",
    "zh": "拿出来",
    "pinyin": "ná chū lái",
    "category": "Verbos"
  },
  {
    "es": "ANDAR",
    "zh": "步行",
    "pinyin": "bù xíng",
    "category": "Verbos",
    "isImportant": true
  },
  {
    "es": "Correr",
    "zh": "跑",
    "pinyin": "pǎo",
    "category": "Verbos"
  },
  {
    "es": "Saltar",
    "zh": "跳跃",
    "pinyin": "tiào yuè",
    "category": "Verbos"
  },
  {
    "es": "Bailar",
    "zh": "跳舞",
    "pinyin": "tiào wǔ",
    "category": "Verbos"
  },
  {
    "es": "Parar",
    "zh": "停止",
    "pinyin": "tíng zhǐ",
    "category": "Verbos"
  },
  {
    "es": "Esperar",
    "zh": "等待",
    "pinyin": "děng dài",
    "category": "Verbos"
  },
  {
    "es": "Cruzar",
    "zh": "十字",
    "pinyin": "shí zì",
    "category": "Verbos"
  },
  {
    "es": "Continuar",
    "zh": "继续",
    "pinyin": "jì xù",
    "category": "Verbos"
  },
  {
    "es": "VIAJAR",
    "zh": "旅行",
    "pinyin": "lǚ xíng",
    "category": "Verbos",
    "isImportant": true
  },
  {
    "es": "Subir",
    "zh": "上传",
    "pinyin": "shàng chuán",
    "category": "Verbos"
  },
  {
    "es": "Bajar",
    "zh": "下载",
    "pinyin": "xià zài",
    "category": "Verbos"
  },
  {
    "es": "Conducir",
    "zh": "驱动器",
    "pinyin": "qū dòng qì",
    "category": "Verbos"
  },
  {
    "es": "Durar",
    "zh": "最后",
    "pinyin": "zuì hòu",
    "category": "Verbos"
  },
  {
    "es": "Tardar",
    "zh": "停留",
    "pinyin": "tíng liú",
    "category": "Verbos"
  },
  {
    "es": "CANSAR",
    "zh": "累了",
    "pinyin": "lèi le",
    "category": "Verbos",
    "isImportant": true
  },
  {
    "es": "Descansar",
    "zh": "休息",
    "pinyin": "xiū xī",
    "category": "Verbos"
  },
  {
    "es": "Acostar",
    "zh": "躺下",
    "pinyin": "tǎng xià",
    "category": "Verbos"
  },
  {
    "es": "Dormir",
    "zh": "睡眠",
    "pinyin": "shuì mián",
    "category": "Verbos"
  },
  {
    "es": "Despertar",
    "zh": "醒来",
    "pinyin": "xǐng lái",
    "category": "Verbos"
  },
  {
    "es": "Levantar",
    "zh": "电梯",
    "pinyin": "diàn tī",
    "category": "Verbos"
  },
  {
    "es": "Vestir",
    "zh": "装扮",
    "pinyin": "zhuāng bàn",
    "category": "Verbos"
  },
  {
    "es": "Asear",
    "zh": "清理",
    "pinyin": "qīng lǐ",
    "category": "Verbos"
  },
  {
    "es": "Limpiar",
    "zh": "干净",
    "pinyin": "gān jìng",
    "category": "Verbos"
  },
  {
    "es": "Manchar",
    "zh": "污点",
    "pinyin": "wū diǎn",
    "category": "Verbos"
  },
  {
    "es": "COMER",
    "zh": "吃",
    "pinyin": "chī",
    "category": "Verbos",
    "isImportant": true
  },
  {
    "es": "Tomar",
    "zh": "采取",
    "pinyin": "cǎi qǔ",
    "category": "Verbos"
  },
  {
    "es": "Desayunar",
    "zh": "吃早餐",
    "pinyin": "chī zǎo cān",
    "category": "Verbos"
  },
  {
    "es": "Almorzar",
    "zh": "吃午饭",
    "pinyin": "chī wǔ fàn",
    "category": "Verbos"
  },
  {
    "es": "Cenar",
    "zh": "晚餐",
    "pinyin": "wǎn cān",
    "category": "Verbos"
  },
  {
    "es": "Beber",
    "zh": "喝",
    "pinyin": "hē",
    "category": "Verbos"
  },
  {
    "es": "COMPRAR",
    "zh": "购买",
    "pinyin": "gòu mǎi",
    "category": "Verbos",
    "isImportant": true
  },
  {
    "es": "Alquilar",
    "zh": "租金",
    "pinyin": "zū jīn",
    "category": "Verbos"
  },
  {
    "es": "Costar",
    "zh": "成本",
    "pinyin": "chéng běn",
    "category": "Verbos"
  },
  {
    "es": "Pagar",
    "zh": "支付",
    "pinyin": "zhī fù",
    "category": "Verbos"
  },
  {
    "es": "Deber",
    "zh": "职责",
    "pinyin": "zhí zé",
    "category": "Verbos"
  },
  {
    "es": "Cobrar",
    "zh": "获得报酬",
    "pinyin": "huò dé bào chóu",
    "category": "Verbos"
  },
  {
    "es": "Gastar",
    "zh": "花费",
    "pinyin": "huā fèi",
    "category": "Verbos"
  },
  {
    "es": "DAR",
    "zh": "给予",
    "pinyin": "jǐ yǔ",
    "category": "Verbos",
    "isImportant": true
  },
  {
    "es": "Quitar",
    "zh": "删除",
    "pinyin": "shān chú",
    "category": "Verbos"
  },
  {
    "es": "Recibir",
    "zh": "接收",
    "pinyin": "jiē shōu",
    "category": "Verbos"
  },
  {
    "es": "Perder",
    "zh": "失去",
    "pinyin": "shī qù",
    "category": "Verbos"
  },
  {
    "es": "Buscar",
    "zh": "搜索",
    "pinyin": "sōu suǒ",
    "category": "Verbos"
  },
  {
    "es": "Encontrar",
    "zh": "查找",
    "pinyin": "chá zhǎo",
    "category": "Verbos"
  },
  {
    "es": "Mostrar",
    "zh": "显示",
    "pinyin": "xiǎn shì",
    "category": "Verbos"
  },
  {
    "es": "Cambiar",
    "zh": "改变",
    "pinyin": "gǎi biàn",
    "category": "Verbos"
  },
  {
    "es": "Devolver",
    "zh": "返回",
    "pinyin": "fǎn huí",
    "category": "Verbos"
  },
  {
    "es": "COGER",
    "zh": "抓住",
    "pinyin": "zhuā zhù",
    "category": "Verbos",
    "isImportant": true
  },
  {
    "es": "Dejar",
    "zh": "离开",
    "pinyin": "lí kāi",
    "category": "Verbos"
  },
  {
    "es": "Utilizar",
    "zh": "使用",
    "pinyin": "shǐ yòng",
    "category": "Verbos"
  },
  {
    "es": "Tirar",
    "zh": "扔",
    "pinyin": "rēng",
    "category": "Verbos"
  },
  {
    "es": "Caer",
    "zh": "秋天",
    "pinyin": "qiū tiān",
    "category": "Verbos"
  },
  {
    "es": "Recoger",
    "zh": "接机",
    "pinyin": "jiē jī",
    "category": "Verbos"
  },
  {
    "es": "Llevar",
    "zh": "携带",
    "pinyin": "xié dài",
    "category": "Verbos"
  },
  {
    "es": "Traer",
    "zh": "带",
    "pinyin": "dài",
    "category": "Verbos"
  },
  {
    "es": "Enviar",
    "zh": "发送",
    "pinyin": "fā sòng",
    "category": "Verbos"
  },
  {
    "es": "PONER",
    "zh": "把",
    "pinyin": "bǎ",
    "category": "Verbos",
    "isImportant": true
  },
  {
    "es": "Colocar",
    "zh": "地方",
    "pinyin": "dì fāng",
    "category": "Verbos"
  },
  {
    "es": "Añadir",
    "zh": "添加",
    "pinyin": "tiān jiā",
    "category": "Verbos"
  },
  {
    "es": "Juntar",
    "zh": "聚集",
    "pinyin": "jù jí",
    "category": "Verbos"
  },
  {
    "es": "Separar",
    "zh": "分开",
    "pinyin": "fēn kāi",
    "category": "Verbos"
  },
  {
    "es": "Faltar",
    "zh": "失踪",
    "pinyin": "shī zōng",
    "category": "Verbos"
  },
  {
    "es": "Sobrar",
    "zh": "剩菜",
    "pinyin": "shèng cài",
    "category": "Verbos"
  },
  {
    "es": "CONTAR",
    "zh": "计数",
    "pinyin": "jì shù",
    "category": "Verbos",
    "isImportant": true
  },
  {
    "es": "Medir",
    "zh": "测量",
    "pinyin": "cè liáng",
    "category": "Verbos"
  },
  {
    "es": "Pesar",
    "zh": "称重",
    "pinyin": "chēng zhòng",
    "category": "Verbos"
  },
  {
    "es": "Calcular",
    "zh": "计算",
    "pinyin": "jì suàn",
    "category": "Verbos"
  },
  {
    "es": "Sumar",
    "zh": "添加",
    "pinyin": "tiān jiā",
    "category": "Verbos"
  },
  {
    "es": "Restar",
    "zh": "减去",
    "pinyin": "jiǎn qù",
    "category": "Verbos"
  },
  {
    "es": "Multiplicar",
    "zh": "乘法",
    "pinyin": "chéng fǎ",
    "category": "Verbos"
  },
  {
    "es": "Dividir",
    "zh": "斯普利特",
    "pinyin": "sī pǔ lì tè",
    "category": "Verbos"
  },
  {
    "es": "PERMITIR",
    "zh": "允许",
    "pinyin": "yǔn xǔ",
    "category": "Verbos",
    "isImportant": true
  },
  {
    "es": "Aguantar",
    "zh": "坚持住",
    "pinyin": "jiān chí zhù",
    "category": "Verbos"
  },
  {
    "es": "Molestar",
    "zh": "打扰",
    "pinyin": "dǎ rǎo",
    "category": "Verbos"
  },
  {
    "es": "ABRIR",
    "zh": "打开",
    "pinyin": "dǎ kāi",
    "category": "Verbos",
    "isImportant": true
  },
  {
    "es": "Cerrar",
    "zh": "关闭",
    "pinyin": "guān bì",
    "category": "Verbos"
  },
  {
    "es": "Llamar",
    "zh": "致电",
    "pinyin": "zhì diàn",
    "category": "Verbos"
  },
  {
    "es": "Solucion",
    "zh": "解决方案",
    "pinyin": "jiě jué fāng àn",
    "category": "Verbos"
  },
  {
    "es": "Arreglar",
    "zh": "修复",
    "pinyin": "xiū fù",
    "category": "Verbos"
  },
  {
    "es": "Funcionar",
    "zh": "功能",
    "pinyin": "gōng néng",
    "category": "Verbos"
  },
  {
    "es": "Estropear",
    "zh": "破坏",
    "pinyin": "pò huài",
    "category": "Verbos"
  },
  {
    "es": "Romper",
    "zh": "休息",
    "pinyin": "xiū xī",
    "category": "Verbos"
  },
  {
    "es": "Cortar",
    "zh": "切",
    "pinyin": "qiè",
    "category": "Verbos"
  },
  {
    "es": "Pegar",
    "zh": "粘贴",
    "pinyin": "zhān tiē",
    "category": "Verbos"
  },
  {
    "es": "Pasaporte",
    "zh": "护照",
    "pinyin": "hù zhào",
    "category": "Sustantivos"
  },
  {
    "es": "Policía",
    "zh": "警察",
    "pinyin": "jǐng chá",
    "category": "Sustantivos"
  },
  {
    "es": "Aduana",
    "zh": "海关",
    "pinyin": "hǎi guān",
    "category": "Sustantivos"
  },
  {
    "es": "Equipaje",
    "zh": "行李",
    "pinyin": "xíng lǐ",
    "category": "Sustantivos"
  },
  {
    "es": "Maleta",
    "zh": "手提箱",
    "pinyin": "shǒu tí xiāng",
    "category": "Sustantivos"
  },
  {
    "es": "Maletín",
    "zh": "公文包",
    "pinyin": "gōng wén bāo",
    "category": "Sustantivos"
  },
  {
    "es": "Paquete",
    "zh": "套餐",
    "pinyin": "tào cān",
    "category": "Sustantivos"
  },
  {
    "es": "Bolso",
    "zh": "包袋",
    "pinyin": "bāo dài",
    "category": "Sustantivos"
  },
  {
    "es": "Control",
    "zh": "控制",
    "pinyin": "kòng zhì",
    "category": "Sustantivos"
  },
  {
    "es": "Ayuda",
    "zh": "帮助",
    "pinyin": "bāng zhù",
    "category": "Sustantivos"
  },
  {
    "es": "Entrada",
    "zh": "入口处",
    "pinyin": "rù kǒu chù",
    "category": "Sustantivos"
  },
  {
    "es": "Salida",
    "zh": "退出",
    "pinyin": "tuì chū",
    "category": "Sustantivos"
  },
  {
    "es": "Derecha",
    "zh": "右",
    "pinyin": "yòu",
    "category": "Sustantivos"
  },
  {
    "es": "Izquierda",
    "zh": "左",
    "pinyin": "zuǒ",
    "category": "Sustantivos"
  },
  {
    "es": "AEROPUERTO",
    "zh": "机场",
    "pinyin": "jī chǎng",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Puerto",
    "zh": "港口",
    "pinyin": "gǎng kǒu",
    "category": "Sustantivos"
  },
  {
    "es": "Estación de",
    "zh": "车站",
    "pinyin": "chē zhàn",
    "category": "Sustantivos"
  },
  {
    "es": "AVION",
    "zh": "飞机",
    "pinyin": "fēi jī",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Vuelo",
    "zh": "航班",
    "pinyin": "háng bān",
    "category": "Sustantivos"
  },
  {
    "es": "Barco",
    "zh": "船",
    "pinyin": "chuán",
    "category": "Sustantivos"
  },
  {
    "es": "Tren",
    "zh": "火车",
    "pinyin": "huǒ chē",
    "category": "Sustantivos"
  },
  {
    "es": "METRO",
    "zh": "地铁",
    "pinyin": "dì tiě",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Tranvía",
    "zh": "电车",
    "pinyin": "diàn chē",
    "category": "Sustantivos"
  },
  {
    "es": "Vagón",
    "zh": "马车",
    "pinyin": "mǎ chē",
    "category": "Sustantivos"
  },
  {
    "es": "Autobús",
    "zh": "巴士",
    "pinyin": "bā shì",
    "category": "Sustantivos"
  },
  {
    "es": "Taxi",
    "zh": "出租车",
    "pinyin": "chū zū chē",
    "category": "Sustantivos"
  },
  {
    "es": "COCHE",
    "zh": "汽车",
    "pinyin": "qì chē",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Garaje",
    "zh": "车库",
    "pinyin": "chē kù",
    "category": "Sustantivos"
  },
  {
    "es": "Moto",
    "zh": "摩托车",
    "pinyin": "mó tuō chē",
    "category": "Sustantivos"
  },
  {
    "es": "Bicicleta",
    "zh": "自行车",
    "pinyin": "zì xíng chē",
    "category": "Sustantivos"
  },
  {
    "es": "Autopista",
    "zh": "高速公路",
    "pinyin": "gāo sù gōng lù",
    "category": "Sustantivos"
  },
  {
    "es": "Carretera",
    "zh": "高速公路",
    "pinyin": "gāo sù gōng lù",
    "category": "Sustantivos"
  },
  {
    "es": "Camino",
    "zh": "路径",
    "pinyin": "lù jìng",
    "category": "Sustantivos"
  },
  {
    "es": "Gasolinera",
    "zh": "加油站",
    "pinyin": "jiā yóu zhàn",
    "category": "Sustantivos"
  },
  {
    "es": "PARADA",
    "zh": "停止",
    "pinyin": "tíng zhǐ",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Andén",
    "zh": "平台",
    "pinyin": "píng tái",
    "category": "Sustantivos"
  },
  {
    "es": "Vía",
    "zh": "维亚",
    "pinyin": "wéi yà",
    "category": "Sustantivos"
  },
  {
    "es": "Horario",
    "zh": "时间表",
    "pinyin": "shí jiān biǎo",
    "category": "Sustantivos"
  },
  {
    "es": "Billete",
    "zh": "门票",
    "pinyin": "mén piào",
    "category": "Sustantivos"
  },
  {
    "es": "ASIENTO",
    "zh": "座位",
    "pinyin": "zuò wèi",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Fila",
    "zh": "行",
    "pinyin": "xíng",
    "category": "Sustantivos"
  },
  {
    "es": "Clase",
    "zh": "班级",
    "pinyin": "bān jí",
    "category": "Sustantivos"
  },
  {
    "es": "Preferente",
    "zh": "首选",
    "pinyin": "shǒu xuǎn",
    "category": "Sustantivos"
  },
  {
    "es": "Turista",
    "zh": "游客",
    "pinyin": "yóu kè",
    "category": "Sustantivos"
  },
  {
    "es": "Camarote",
    "zh": "客舱",
    "pinyin": "kè cāng",
    "category": "Sustantivos"
  },
  {
    "es": "HOTEL",
    "zh": "酒店",
    "pinyin": "jiǔ diàn",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Habitación",
    "zh": "房间",
    "pinyin": "fáng jiān",
    "category": "Sustantivos"
  },
  {
    "es": "Llave",
    "zh": "钥匙",
    "pinyin": "yào shi",
    "category": "Sustantivos"
  },
  {
    "es": "Ascensor",
    "zh": "电梯",
    "pinyin": "diàn tī",
    "category": "Sustantivos"
  },
  {
    "es": "Escaleras",
    "zh": "楼梯",
    "pinyin": "lóu tī",
    "category": "Sustantivos"
  },
  {
    "es": "Planta",
    "zh": "植物",
    "pinyin": "zhí wù",
    "category": "Sustantivos"
  },
  {
    "es": "Pasillo",
    "zh": "走廊",
    "pinyin": "zǒu láng",
    "category": "Sustantivos"
  },
  {
    "es": "SALÓN",
    "zh": "客厅",
    "pinyin": "kè tīng",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Mueble",
    "zh": "家具",
    "pinyin": "jiā jù",
    "category": "Sustantivos"
  },
  {
    "es": "Sofá",
    "zh": "沙发",
    "pinyin": "shā fā",
    "category": "Sustantivos"
  },
  {
    "es": "Sillón",
    "zh": "扶手椅",
    "pinyin": "fú shǒu yǐ",
    "category": "Sustantivos"
  },
  {
    "es": "Silla",
    "zh": "椅子",
    "pinyin": "yǐ zi",
    "category": "Sustantivos"
  },
  {
    "es": "Mesa",
    "zh": "表",
    "pinyin": "biǎo",
    "category": "Sustantivos"
  },
  {
    "es": "Alfombra",
    "zh": "地毯",
    "pinyin": "dì tǎn",
    "category": "Sustantivos"
  },
  {
    "es": "Teléfono",
    "zh": "电话",
    "pinyin": "diàn huà",
    "category": "Sustantivos"
  },
  {
    "es": "Televisión",
    "zh": "电视",
    "pinyin": "diàn shì",
    "category": "Sustantivos"
  },
  {
    "es": "Radio",
    "zh": "收音机",
    "pinyin": "shōu yīn jī",
    "category": "Sustantivos"
  },
  {
    "es": "Mando",
    "zh": "命令",
    "pinyin": "mìng lìng",
    "category": "Sustantivos"
  },
  {
    "es": "Pilar",
    "zh": "支柱",
    "pinyin": "zhī zhù",
    "category": "Sustantivos"
  },
  {
    "es": "Electricidad",
    "zh": "电力",
    "pinyin": "diàn lì",
    "category": "Sustantivos"
  },
  {
    "es": "Lámpara",
    "zh": "灯",
    "pinyin": "dēng",
    "category": "Sustantivos"
  },
  {
    "es": "Balcón",
    "zh": "阳台",
    "pinyin": "yáng tái",
    "category": "Sustantivos"
  },
  {
    "es": "Luz",
    "zh": "光",
    "pinyin": "guāng",
    "category": "Sustantivos"
  },
  {
    "es": "DORMITORIO",
    "zh": "卧室",
    "pinyin": "wò shì",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Cortina",
    "zh": "窗帘",
    "pinyin": "chuāng lián",
    "category": "Sustantivos"
  },
  {
    "es": "Armario",
    "zh": "衣柜",
    "pinyin": "yī guì",
    "category": "Sustantivos"
  },
  {
    "es": "Cama",
    "zh": "床",
    "pinyin": "chuáng",
    "category": "Sustantivos"
  },
  {
    "es": "Sábana",
    "zh": "片材",
    "pinyin": "piàn cái",
    "category": "Sustantivos"
  },
  {
    "es": "Manta",
    "zh": "毯子",
    "pinyin": "tǎn zi",
    "category": "Sustantivos"
  },
  {
    "es": "Edredón",
    "zh": "羽绒被",
    "pinyin": "yǔ róng bèi",
    "category": "Sustantivos"
  },
  {
    "es": "BAÑO",
    "zh": "浴室",
    "pinyin": "yù shì",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Lavabo",
    "zh": "水槽",
    "pinyin": "shuǐ cáo",
    "category": "Sustantivos"
  },
  {
    "es": "Ducha",
    "zh": "淋浴",
    "pinyin": "lín yù",
    "category": "Sustantivos"
  },
  {
    "es": "Jabón",
    "zh": "肥皂",
    "pinyin": "féi zào",
    "category": "Sustantivos"
  },
  {
    "es": "Toalla",
    "zh": "毛巾",
    "pinyin": "máo jīn",
    "category": "Sustantivos"
  },
  {
    "es": "PAPEL",
    "zh": "纸",
    "pinyin": "zhǐ",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Cepillo",
    "zh": "刷子",
    "pinyin": "shuā zi",
    "category": "Sustantivos"
  },
  {
    "es": "Pasta",
    "zh": "面食",
    "pinyin": "miàn shí",
    "category": "Sustantivos"
  },
  {
    "es": "COCINA",
    "zh": "厨房",
    "pinyin": "chú fáng",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Frigorífico",
    "zh": "冰箱",
    "pinyin": "bīng xiāng",
    "category": "Sustantivos"
  },
  {
    "es": "Lavadora",
    "zh": "洗衣机",
    "pinyin": "xǐ yī jī",
    "category": "Sustantivos"
  },
  {
    "es": "Microondas",
    "zh": "微波炉",
    "pinyin": "wēi bō lú",
    "category": "Sustantivos"
  },
  {
    "es": "Lavavajillas",
    "zh": "洗碗机",
    "pinyin": "xǐ wǎn jī",
    "category": "Sustantivos"
  },
  {
    "es": "PLATO",
    "zh": "板材",
    "pinyin": "bǎn cái",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Fuente",
    "zh": "来源",
    "pinyin": "lái yuán",
    "category": "Sustantivos"
  },
  {
    "es": "Bandeja",
    "zh": "托盘",
    "pinyin": "tuō pán",
    "category": "Sustantivos"
  },
  {
    "es": "Vaso",
    "zh": "玻璃",
    "pinyin": "bō lí",
    "category": "Sustantivos"
  },
  {
    "es": "Taza",
    "zh": "马克杯",
    "pinyin": "mǎ kè bēi",
    "category": "Sustantivos"
  },
  {
    "es": "Botella",
    "zh": "瓶子",
    "pinyin": "píng zi",
    "category": "Sustantivos"
  },
  {
    "es": "Bote",
    "zh": "船",
    "pinyin": "chuán",
    "category": "Sustantivos"
  },
  {
    "es": "Sartén",
    "zh": "煎锅",
    "pinyin": "jiān guō",
    "category": "Sustantivos"
  },
  {
    "es": "Olla",
    "zh": "锅",
    "pinyin": "guō",
    "category": "Sustantivos"
  },
  {
    "es": "Cazo",
    "zh": "北斗星",
    "pinyin": "běi dǒu xīng",
    "category": "Sustantivos"
  },
  {
    "es": "CUBIERTO",
    "zh": "覆盖",
    "pinyin": "fù gài",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Cuchara",
    "zh": "勺子",
    "pinyin": "sháo zi",
    "category": "Sustantivos"
  },
  {
    "es": "Tenedor",
    "zh": "叉子",
    "pinyin": "chā zi",
    "category": "Sustantivos"
  },
  {
    "es": "Servilleta",
    "zh": "餐巾纸",
    "pinyin": "cān jīn zhǐ",
    "category": "Sustantivos"
  },
  {
    "es": "Palillo",
    "zh": "牙签",
    "pinyin": "yá qiān",
    "category": "Sustantivos"
  },
  {
    "es": "COSA",
    "zh": "东西",
    "pinyin": "dōng xī",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Objeto",
    "zh": "对象",
    "pinyin": "duì xiàng",
    "category": "Sustantivos"
  },
  {
    "es": "Máquina",
    "zh": "机器",
    "pinyin": "jī qì",
    "category": "Sustantivos"
  },
  {
    "es": "Ejemplo",
    "zh": "示例",
    "pinyin": "shì lì",
    "category": "Sustantivos"
  },
  {
    "es": "PAÍS",
    "zh": "国家",
    "pinyin": "guó jiā",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Gentilicio",
    "zh": "真蒂利西奥",
    "pinyin": "zhēn dì lì xī ào",
    "category": "Sustantivos"
  },
  {
    "es": "Idioma",
    "zh": "语言",
    "pinyin": "yǔ yán",
    "category": "Sustantivos"
  },
  {
    "es": "Frontera",
    "zh": "边框",
    "pinyin": "biān kuāng",
    "category": "Sustantivos"
  },
  {
    "es": "Región",
    "zh": "地区",
    "pinyin": "dì qū",
    "category": "Sustantivos"
  },
  {
    "es": "Ciudad",
    "zh": "城市",
    "pinyin": "chéng shì",
    "category": "Sustantivos"
  },
  {
    "es": "Pueblo",
    "zh": "村庄",
    "pinyin": "cūn zhuāng",
    "category": "Sustantivos"
  },
  {
    "es": "Barrio",
    "zh": "邻里",
    "pinyin": "lín lǐ",
    "category": "Sustantivos"
  },
  {
    "es": "Urbanización",
    "zh": "城市化",
    "pinyin": "chéng shì huà",
    "category": "Sustantivos"
  },
  {
    "es": "Casa",
    "zh": "房子",
    "pinyin": "fáng zi",
    "category": "Sustantivos"
  },
  {
    "es": "Chalé",
    "zh": "小木屋",
    "pinyin": "xiǎo mù wū",
    "category": "Sustantivos"
  },
  {
    "es": "Edificio",
    "zh": "建筑",
    "pinyin": "jiàn zhù",
    "category": "Sustantivos"
  },
  {
    "es": "Piso",
    "zh": "楼层",
    "pinyin": "lóu céng",
    "category": "Sustantivos"
  },
  {
    "es": "Apartamento",
    "zh": "公寓",
    "pinyin": "gōng yù",
    "category": "Sustantivos"
  },
  {
    "es": "CALLE",
    "zh": "街道",
    "pinyin": "jiē dào",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Avenida",
    "zh": "大道",
    "pinyin": "dà dào",
    "category": "Sustantivos"
  },
  {
    "es": "Plaza",
    "zh": "广场",
    "pinyin": "guǎng chǎng",
    "category": "Sustantivos"
  },
  {
    "es": "Cruce",
    "zh": "交叉",
    "pinyin": "jiāo chā",
    "category": "Sustantivos"
  },
  {
    "es": "Esquina",
    "zh": "角落",
    "pinyin": "jiǎo luò",
    "category": "Sustantivos"
  },
  {
    "es": "Centro",
    "zh": "中心",
    "pinyin": "zhōng xīn",
    "category": "Sustantivos"
  },
  {
    "es": "Principio",
    "zh": "原理",
    "pinyin": "yuán lǐ",
    "category": "Sustantivos"
  },
  {
    "es": "Mitad",
    "zh": "一半",
    "pinyin": "yí bàn",
    "category": "Sustantivos"
  },
  {
    "es": "Fin",
    "zh": "结束",
    "pinyin": "jié shù",
    "category": "Sustantivos"
  },
  {
    "es": "Parque",
    "zh": "公园",
    "pinyin": "gōng yuán",
    "category": "Sustantivos"
  },
  {
    "es": "Jardín",
    "zh": "花园",
    "pinyin": "huā yuán",
    "category": "Sustantivos"
  },
  {
    "es": "HOSPITAL",
    "zh": "医院",
    "pinyin": "yī yuàn",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Ambulancia",
    "zh": "救护车",
    "pinyin": "jiù hù chē",
    "category": "Sustantivos"
  },
  {
    "es": "Farmacia",
    "zh": "药房",
    "pinyin": "yào fáng",
    "category": "Sustantivos"
  },
  {
    "es": "Pastilla",
    "zh": "丸",
    "pinyin": "wán",
    "category": "Sustantivos"
  },
  {
    "es": "Calmante",
    "zh": "舒缓",
    "pinyin": "shū huǎn",
    "category": "Sustantivos"
  },
  {
    "es": "Antibiótico",
    "zh": "抗生素",
    "pinyin": "kàng shēng sù",
    "category": "Sustantivos"
  },
  {
    "es": "Herida",
    "zh": "伤口",
    "pinyin": "shāng kǒu",
    "category": "Sustantivos"
  },
  {
    "es": "Tirita",
    "zh": "创可贴",
    "pinyin": "chuàng kě tiē",
    "category": "Sustantivos"
  },
  {
    "es": "Esparadrapo",
    "zh": "胶带",
    "pinyin": "jiāo dài",
    "category": "Sustantivos"
  },
  {
    "es": "Algodón",
    "zh": "棉",
    "pinyin": "mián",
    "category": "Sustantivos"
  },
  {
    "es": "Gasa",
    "zh": "雪纺",
    "pinyin": "xuě fǎng",
    "category": "Sustantivos"
  },
  {
    "es": "Inyección",
    "zh": "注射",
    "pinyin": "zhù shè",
    "category": "Sustantivos"
  },
  {
    "es": "Constipado",
    "zh": "便秘",
    "pinyin": "biàn mì",
    "category": "Sustantivos"
  },
  {
    "es": "Gripe",
    "zh": "流感",
    "pinyin": "liú gǎn",
    "category": "Sustantivos"
  },
  {
    "es": "Dolor",
    "zh": "疼痛",
    "pinyin": "téng tòng",
    "category": "Sustantivos"
  },
  {
    "es": "Fiebre",
    "zh": "发烧",
    "pinyin": "fā shāo",
    "category": "Sustantivos"
  },
  {
    "es": "Alergia",
    "zh": "过敏",
    "pinyin": "guò mǐn",
    "category": "Sustantivos"
  },
  {
    "es": "TIENDA",
    "zh": "商店",
    "pinyin": "shāng diàn",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Empresa",
    "zh": "公司简介",
    "pinyin": "gōng sī jiǎn jiè",
    "category": "Sustantivos"
  },
  {
    "es": "Hipermercad",
    "zh": "大型超市",
    "pinyin": "dà xíng chāo shì",
    "category": "Sustantivos"
  },
  {
    "es": "Supermercad",
    "zh": "超市",
    "pinyin": "chāo shì",
    "category": "Sustantivos"
  },
  {
    "es": "Restaurante",
    "zh": "餐厅",
    "pinyin": "cān tīng",
    "category": "Sustantivos"
  },
  {
    "es": "Cafetería",
    "zh": "自助餐厅",
    "pinyin": "zì zhù cān tīng",
    "category": "Sustantivos"
  },
  {
    "es": "Panadería",
    "zh": "面包店",
    "pinyin": "miàn bāo diàn",
    "category": "Sustantivos"
  },
  {
    "es": "Relojería",
    "zh": "制表",
    "pinyin": "zhì biǎo",
    "category": "Sustantivos"
  },
  {
    "es": "Joyería",
    "zh": "珠宝首饰",
    "pinyin": "zhū bǎo shǒu shì",
    "category": "Sustantivos"
  },
  {
    "es": "Zapatería",
    "zh": "鞋店",
    "pinyin": "xié diàn",
    "category": "Sustantivos"
  },
  {
    "es": "Juguetería",
    "zh": "玩具店",
    "pinyin": "wán jù diàn",
    "category": "Sustantivos"
  },
  {
    "es": "Boutique",
    "zh": "精品店",
    "pinyin": "jīng pǐn diàn",
    "category": "Sustantivos"
  },
  {
    "es": "Peluquería",
    "zh": "美发师",
    "pinyin": "měi fā shī",
    "category": "Sustantivos"
  },
  {
    "es": "Ferretería",
    "zh": "五金店",
    "pinyin": "wǔ jīn diàn",
    "category": "Sustantivos"
  },
  {
    "es": "Taller",
    "zh": "车间",
    "pinyin": "chē jiān",
    "category": "Sustantivos"
  },
  {
    "es": "Papelería",
    "zh": "文具",
    "pinyin": "wén jù",
    "category": "Sustantivos"
  },
  {
    "es": "Correos",
    "zh": "邮局",
    "pinyin": "yóu jú",
    "category": "Sustantivos"
  },
  {
    "es": "Agencia",
    "zh": "代理",
    "pinyin": "dài lǐ",
    "category": "Sustantivos"
  },
  {
    "es": "Embajada",
    "zh": "大使馆",
    "pinyin": "dà shǐ guǎn",
    "category": "Sustantivos"
  },
  {
    "es": "Precio",
    "zh": "价格",
    "pinyin": "jià gé",
    "category": "Sustantivos"
  },
  {
    "es": "Regalo",
    "zh": "礼物",
    "pinyin": "lǐ wù",
    "category": "Sustantivos"
  },
  {
    "es": "Gratis",
    "zh": "免费",
    "pinyin": "miǎn fèi",
    "category": "Sustantivos"
  },
  {
    "es": "Impuestos",
    "zh": "税收",
    "pinyin": "shuì shōu",
    "category": "Sustantivos"
  },
  {
    "es": "BANCO",
    "zh": "银行",
    "pinyin": "yín háng",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Dinero",
    "zh": "钱",
    "pinyin": "qián",
    "category": "Sustantivos"
  },
  {
    "es": "Euro",
    "zh": "欧元",
    "pinyin": "ōu yuán",
    "category": "Sustantivos"
  },
  {
    "es": "Dólar",
    "zh": "美元",
    "pinyin": "měi yuán",
    "category": "Sustantivos"
  },
  {
    "es": "Moneda",
    "zh": "货币",
    "pinyin": "huò bì",
    "category": "Sustantivos"
  },
  {
    "es": "Tarjeta de",
    "zh": "卡",
    "pinyin": "kǎ",
    "category": "Sustantivos"
  },
  {
    "es": "Cajero",
    "zh": "收银员",
    "pinyin": "shōu yín yuán",
    "category": "Sustantivos"
  },
  {
    "es": "ESCUELA",
    "zh": "学校",
    "pinyin": "xué xiào",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Academia",
    "zh": "学院",
    "pinyin": "xué yuàn",
    "category": "Sustantivos"
  },
  {
    "es": "Instituto",
    "zh": "研究所",
    "pinyin": "yán jiū suǒ",
    "category": "Sustantivos"
  },
  {
    "es": "Universidad",
    "zh": "大学",
    "pinyin": "dà xué",
    "category": "Sustantivos"
  },
  {
    "es": "PAN",
    "zh": "面包",
    "pinyin": "miàn bāo",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Sopa",
    "zh": "汤",
    "pinyin": "tāng",
    "category": "Sustantivos"
  },
  {
    "es": "Patatas",
    "zh": "土豆",
    "pinyin": "tǔ dòu",
    "category": "Sustantivos"
  },
  {
    "es": "Arroz",
    "zh": "米饭",
    "pinyin": "mǐ fàn",
    "category": "Sustantivos"
  },
  {
    "es": "Verdura",
    "zh": "蔬菜",
    "pinyin": "shū cài",
    "category": "Sustantivos"
  },
  {
    "es": "Ensalada",
    "zh": "沙拉",
    "pinyin": "shā lā",
    "category": "Sustantivos"
  },
  {
    "es": "Salsa",
    "zh": "酱汁",
    "pinyin": "jiàng zhī",
    "category": "Sustantivos"
  },
  {
    "es": "Huevo",
    "zh": "鸡蛋",
    "pinyin": "jī dàn",
    "category": "Sustantivos"
  },
  {
    "es": "Entrantes",
    "zh": "初学者",
    "pinyin": "chū xué zhě",
    "category": "Sustantivos"
  },
  {
    "es": "Harina de",
    "zh": "面粉",
    "pinyin": "miàn fěn",
    "category": "Sustantivos"
  },
  {
    "es": "Sal",
    "zh": "盐",
    "pinyin": "yán",
    "category": "Sustantivos"
  },
  {
    "es": "Menú",
    "zh": "菜单",
    "pinyin": "cài dān",
    "category": "Sustantivos"
  },
  {
    "es": "CARNE",
    "zh": "肉",
    "pinyin": "ròu",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Pollo",
    "zh": "鸡",
    "pinyin": "jī",
    "category": "Sustantivos"
  },
  {
    "es": "Ternera",
    "zh": "小牛肉",
    "pinyin": "xiǎo niú ròu",
    "category": "Sustantivos"
  },
  {
    "es": "Cerdo",
    "zh": "猪",
    "pinyin": "zhū",
    "category": "Sustantivos"
  },
  {
    "es": "Solomillo",
    "zh": "沙朗牛排",
    "pinyin": "shā lǎng niú pái",
    "category": "Sustantivos"
  },
  {
    "es": "PESCADO",
    "zh": "鱼",
    "pinyin": "yú",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Frito",
    "zh": "油炸",
    "pinyin": "yóu zhá",
    "category": "Sustantivos"
  },
  {
    "es": "Asado",
    "zh": "烤",
    "pinyin": "kǎo",
    "category": "Sustantivos"
  },
  {
    "es": "Rebozado",
    "zh": "面糊",
    "pinyin": "miàn hù",
    "category": "Sustantivos"
  },
  {
    "es": "POSTRE",
    "zh": "甜点",
    "pinyin": "tián diǎn",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Fruta",
    "zh": "水果",
    "pinyin": "shuǐ guǒ",
    "category": "Sustantivos"
  },
  {
    "es": "Naranja",
    "zh": "橙色",
    "pinyin": "chéng sè",
    "category": "Sustantivos"
  },
  {
    "es": "Plátano",
    "zh": "香蕉",
    "pinyin": "xiāng jiāo",
    "category": "Sustantivos"
  },
  {
    "es": "Melón",
    "zh": "甜瓜",
    "pinyin": "tián guā",
    "category": "Sustantivos"
  },
  {
    "es": "Pera",
    "zh": "梨",
    "pinyin": "lí",
    "category": "Sustantivos"
  },
  {
    "es": "Manzana",
    "zh": "苹果",
    "pinyin": "píng guǒ",
    "category": "Sustantivos"
  },
  {
    "es": "Fresa",
    "zh": "草莓",
    "pinyin": "cǎo méi",
    "category": "Sustantivos"
  },
  {
    "es": "Yogur",
    "zh": "酸奶",
    "pinyin": "suān nǎi",
    "category": "Sustantivos"
  },
  {
    "es": "Tarta",
    "zh": "蛋糕",
    "pinyin": "dàn gāo",
    "category": "Sustantivos"
  },
  {
    "es": "Pastel",
    "zh": "蛋糕",
    "pinyin": "dàn gāo",
    "category": "Sustantivos"
  },
  {
    "es": "Chocolate",
    "zh": "巧克力",
    "pinyin": "qiǎo kè lì",
    "category": "Sustantivos"
  },
  {
    "es": "Limón",
    "zh": "柠檬",
    "pinyin": "níng méng",
    "category": "Sustantivos"
  },
  {
    "es": "Helado",
    "zh": "冰淇淋",
    "pinyin": "bīng qí lín",
    "category": "Sustantivos"
  },
  {
    "es": "CAFÉ",
    "zh": "咖啡",
    "pinyin": "kā fēi",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Leche",
    "zh": "牛奶",
    "pinyin": "niú nǎi",
    "category": "Sustantivos"
  },
  {
    "es": "Azúcar",
    "zh": "糖",
    "pinyin": "táng",
    "category": "Sustantivos"
  },
  {
    "es": "Sacarina",
    "zh": "糖精",
    "pinyin": "táng jīng",
    "category": "Sustantivos"
  },
  {
    "es": "Agua",
    "zh": "水",
    "pinyin": "shuǐ",
    "category": "Sustantivos"
  },
  {
    "es": "Vino",
    "zh": "酒",
    "pinyin": "jiǔ",
    "category": "Sustantivos"
  },
  {
    "es": "Cerveza",
    "zh": "啤酒",
    "pinyin": "pí jiǔ",
    "category": "Sustantivos"
  },
  {
    "es": "Alcohol",
    "zh": "酒精",
    "pinyin": "jiǔ jīng",
    "category": "Sustantivos"
  },
  {
    "es": "Naturale",
    "zh": "自然的",
    "pinyin": "zì rán de",
    "category": "Sustantivos"
  },
  {
    "es": "Mar",
    "zh": "海",
    "pinyin": "hǎi",
    "category": "Sustantivos"
  },
  {
    "es": "Playa río",
    "zh": "河滩",
    "pinyin": "hé tān",
    "category": "Sustantivos"
  },
  {
    "es": "Orilla",
    "zh": "岸边",
    "pinyin": "àn biān",
    "category": "Sustantivos"
  },
  {
    "es": "Lago",
    "zh": "湖",
    "pinyin": "hú",
    "category": "Sustantivos"
  },
  {
    "es": "Montaña",
    "zh": "山",
    "pinyin": "shān",
    "category": "Sustantivos"
  },
  {
    "es": "Bosque",
    "zh": "森林",
    "pinyin": "sēn lín",
    "category": "Sustantivos"
  },
  {
    "es": "Árbol",
    "zh": "树",
    "pinyin": "shù",
    "category": "Sustantivos"
  },
  {
    "es": "Campo",
    "zh": "领域",
    "pinyin": "lǐng yù",
    "category": "Sustantivos"
  },
  {
    "es": "Ejercicio",
    "zh": "锻炼",
    "pinyin": "duàn liàn",
    "category": "Sustantivos"
  },
  {
    "es": "Deporte",
    "zh": "运动",
    "pinyin": "yùn dòng",
    "category": "Sustantivos"
  },
  {
    "es": "Carta",
    "zh": "信",
    "pinyin": "xìn",
    "category": "Sustantivos"
  },
  {
    "es": "Folio",
    "zh": "对开本",
    "pinyin": "duì kāi běn",
    "category": "Sustantivos"
  },
  {
    "es": "Sobre",
    "zh": "关于",
    "pinyin": "guān yú",
    "category": "Sustantivos"
  },
  {
    "es": "Sello",
    "zh": "邮票",
    "pinyin": "yóu piào",
    "category": "Sustantivos"
  },
  {
    "es": "Libro",
    "zh": "预订",
    "pinyin": "yù dìng",
    "category": "Sustantivos"
  },
  {
    "es": "Libreta",
    "zh": "笔记本",
    "pinyin": "bǐ jì běn",
    "category": "Sustantivos"
  },
  {
    "es": "Periódico",
    "zh": "报纸",
    "pinyin": "bào zhǐ",
    "category": "Sustantivos"
  },
  {
    "es": "Noticia",
    "zh": "新闻动态",
    "pinyin": "xīn wén dòng tài",
    "category": "Sustantivos"
  },
  {
    "es": "Aviso",
    "zh": "通知",
    "pinyin": "tōng zhī",
    "category": "Sustantivos"
  },
  {
    "es": "Revista",
    "zh": "杂志",
    "pinyin": "zá zhì",
    "category": "Sustantivos"
  },
  {
    "es": "Bolígrafo",
    "zh": "笔",
    "pinyin": "bǐ",
    "category": "Sustantivos"
  },
  {
    "es": "Lápiz",
    "zh": "铅笔",
    "pinyin": "qiān bǐ",
    "category": "Sustantivos"
  },
  {
    "es": "HOMBRE",
    "zh": "男人",
    "pinyin": "nán rén",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Mujer",
    "zh": "女人",
    "pinyin": "nǚ rén",
    "category": "Sustantivos"
  },
  {
    "es": "Chico",
    "zh": "男孩",
    "pinyin": "nán hái",
    "category": "Sustantivos"
  },
  {
    "es": "Chica",
    "zh": "女孩",
    "pinyin": "nǚ hái",
    "category": "Sustantivos"
  },
  {
    "es": "Niño",
    "zh": "儿童",
    "pinyin": "ér tóng",
    "category": "Sustantivos"
  },
  {
    "es": "Niña",
    "zh": "女孩",
    "pinyin": "nǚ hái",
    "category": "Sustantivos"
  },
  {
    "es": "Anciano",
    "zh": "长老",
    "pinyin": "zhǎng lǎo",
    "category": "Sustantivos"
  },
  {
    "es": "Anciana",
    "zh": "老妇人",
    "pinyin": "lǎo fù rén",
    "category": "Sustantivos"
  },
  {
    "es": "Bebé",
    "zh": "宝贝",
    "pinyin": "bǎo bèi",
    "category": "Sustantivos"
  },
  {
    "es": "Esposo",
    "zh": "丈夫",
    "pinyin": "zhàng fū",
    "category": "Sustantivos"
  },
  {
    "es": "Esposa",
    "zh": "妻子",
    "pinyin": "qī zǐ",
    "category": "Sustantivos"
  },
  {
    "es": "AMIGO",
    "zh": "朋友",
    "pinyin": "péng yǒu",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Padre",
    "zh": "父亲",
    "pinyin": "fù qīn",
    "category": "Sustantivos"
  },
  {
    "es": "Madre",
    "zh": "妈妈",
    "pinyin": "mā mā",
    "category": "Sustantivos"
  },
  {
    "es": "Hijo",
    "zh": "儿子",
    "pinyin": "ér zi",
    "category": "Sustantivos"
  },
  {
    "es": "Hija",
    "zh": "女儿",
    "pinyin": "nǚ ér",
    "category": "Sustantivos"
  },
  {
    "es": "Hermano",
    "zh": "兄弟",
    "pinyin": "xiōng dì",
    "category": "Sustantivos"
  },
  {
    "es": "Hermana",
    "zh": "姐姐",
    "pinyin": "jiě jiě",
    "category": "Sustantivos"
  },
  {
    "es": "TRABAJO",
    "zh": "工作",
    "pinyin": "gōng zuò",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Profesión",
    "zh": "职业",
    "pinyin": "zhí yè",
    "category": "Sustantivos"
  },
  {
    "es": "Estudiante",
    "zh": "学生",
    "pinyin": "xué shēng",
    "category": "Sustantivos"
  },
  {
    "es": "Profesor",
    "zh": "教授",
    "pinyin": "jiào shòu",
    "category": "Sustantivos"
  },
  {
    "es": "Maestro",
    "zh": "大师",
    "pinyin": "dà shī",
    "category": "Sustantivos"
  },
  {
    "es": "Médico",
    "zh": "医生",
    "pinyin": "yī shēng",
    "category": "Sustantivos"
  },
  {
    "es": "Enfermera",
    "zh": "护士",
    "pinyin": "hù shì",
    "category": "Sustantivos"
  },
  {
    "es": "Presidente",
    "zh": "总裁",
    "pinyin": "zǒng cái",
    "category": "Sustantivos"
  },
  {
    "es": "Director",
    "zh": "导演",
    "pinyin": "dǎo yǎn",
    "category": "Sustantivos"
  },
  {
    "es": "Encargado",
    "zh": "经理",
    "pinyin": "jīng lǐ",
    "category": "Sustantivos"
  },
  {
    "es": "Empleado",
    "zh": "员工",
    "pinyin": "yuán gōng",
    "category": "Sustantivos"
  },
  {
    "es": "Camarero",
    "zh": "服务员",
    "pinyin": "fú wù yuán",
    "category": "Sustantivos"
  },
  {
    "es": "Secretario",
    "zh": "秘书",
    "pinyin": "mì shū",
    "category": "Sustantivos"
  },
  {
    "es": "Autónomo",
    "zh": "自营职业者",
    "pinyin": "zì yíng zhí yè zhě",
    "category": "Sustantivos"
  },
  {
    "es": "Ministro",
    "zh": "部长",
    "pinyin": "bù zhǎng",
    "category": "Sustantivos"
  },
  {
    "es": "Juez",
    "zh": "法官",
    "pinyin": "fǎ guān",
    "category": "Sustantivos"
  },
  {
    "es": "IDEA",
    "zh": "想法",
    "pinyin": "xiǎng fǎ",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Verdad",
    "zh": "真相",
    "pinyin": "zhēn xiàng",
    "category": "Sustantivos"
  },
  {
    "es": "Partido",
    "zh": "派对",
    "pinyin": "pài duì",
    "category": "Sustantivos"
  },
  {
    "es": "Política",
    "zh": "政治",
    "pinyin": "zhèng zhì",
    "category": "Sustantivos"
  },
  {
    "es": "Costumbre",
    "zh": "定制",
    "pinyin": "dìng zhì",
    "category": "Sustantivos"
  },
  {
    "es": "Religión",
    "zh": "宗教",
    "pinyin": "zōng jiào",
    "category": "Sustantivos"
  },
  {
    "es": "NOMBRE",
    "zh": "名称",
    "pinyin": "míng chēng",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Apellido",
    "zh": "姓氏",
    "pinyin": "xìng shì",
    "category": "Sustantivos"
  },
  {
    "es": "Persona",
    "zh": "人",
    "pinyin": "rén",
    "category": "Sustantivos"
  },
  {
    "es": "Gente",
    "zh": "人",
    "pinyin": "rén",
    "category": "Sustantivos"
  },
  {
    "es": "Sociedad",
    "zh": "社会",
    "pinyin": "shè huì",
    "category": "Sustantivos"
  },
  {
    "es": "ROPA",
    "zh": "服装",
    "pinyin": "fú zhuāng",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Talla",
    "zh": "尺寸",
    "pinyin": "chǐ cùn",
    "category": "Sustantivos"
  },
  {
    "es": "Abrigo",
    "zh": "外套",
    "pinyin": "wài tào",
    "category": "Sustantivos"
  },
  {
    "es": "Traje",
    "zh": "西装",
    "pinyin": "xī zhuāng",
    "category": "Sustantivos"
  },
  {
    "es": "Chaqueta",
    "zh": "夹克",
    "pinyin": "jiá kè",
    "category": "Sustantivos"
  },
  {
    "es": "Jersey",
    "zh": "泽西岛",
    "pinyin": "zé xī dǎo",
    "category": "Sustantivos"
  },
  {
    "es": "Camisa",
    "zh": "衬衫",
    "pinyin": "chèn shān",
    "category": "Sustantivos"
  },
  {
    "es": "Camiseta",
    "zh": "T恤",
    "pinyin": "T xù",
    "category": "Sustantivos"
  },
  {
    "es": "Corbata",
    "zh": "领带",
    "pinyin": "lǐng dài",
    "category": "Sustantivos"
  },
  {
    "es": "Blusa",
    "zh": "衬衫",
    "pinyin": "chèn shān",
    "category": "Sustantivos"
  },
  {
    "es": "Sujetador",
    "zh": "胸罩",
    "pinyin": "xiōng zhào",
    "category": "Sustantivos"
  },
  {
    "es": "Pantalones",
    "zh": "裤子",
    "pinyin": "kù zi",
    "category": "Sustantivos"
  },
  {
    "es": "Falda",
    "zh": "裙子",
    "pinyin": "qún zi",
    "category": "Sustantivos"
  },
  {
    "es": "Cinturón",
    "zh": "腰带",
    "pinyin": "yāo dài",
    "category": "Sustantivos"
  },
  {
    "es": "Slips",
    "zh": "衬裙",
    "pinyin": "chèn qún",
    "category": "Sustantivos"
  },
  {
    "es": "Bragas",
    "zh": "内裤",
    "pinyin": "nèi kù",
    "category": "Sustantivos"
  },
  {
    "es": "Medias",
    "zh": "丝袜",
    "pinyin": "sī wà",
    "category": "Sustantivos"
  },
  {
    "es": "Calcetines",
    "zh": "袜子",
    "pinyin": "wà zi",
    "category": "Sustantivos"
  },
  {
    "es": "Zapatos",
    "zh": "鞋子",
    "pinyin": "xié zi",
    "category": "Sustantivos"
  },
  {
    "es": "Botas",
    "zh": "靴子",
    "pinyin": "xuē zi",
    "category": "Sustantivos"
  },
  {
    "es": "Bufanda",
    "zh": "围巾",
    "pinyin": "wéi jīn",
    "category": "Sustantivos"
  },
  {
    "es": "Gorro",
    "zh": "帽子",
    "pinyin": "mào zi",
    "category": "Sustantivos"
  },
  {
    "es": "Guantes",
    "zh": "手套",
    "pinyin": "shǒu tào",
    "category": "Sustantivos"
  },
  {
    "es": "Bañador",
    "zh": "泳装",
    "pinyin": "yǒng zhuāng",
    "category": "Sustantivos"
  },
  {
    "es": "Bikini",
    "zh": "比基尼",
    "pinyin": "bǐ jī ní",
    "category": "Sustantivos"
  },
  {
    "es": "Paraguas",
    "zh": "雨伞",
    "pinyin": "yǔ sǎn",
    "category": "Sustantivos"
  },
  {
    "es": "Gafas",
    "zh": "眼镜",
    "pinyin": "yǎn jìng",
    "category": "Sustantivos"
  },
  {
    "es": "TELA",
    "zh": "面料",
    "pinyin": "miàn liào",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Seda",
    "zh": "丝绸",
    "pinyin": "sī chóu",
    "category": "Sustantivos"
  },
  {
    "es": "Lana",
    "zh": "羊毛",
    "pinyin": "yáng máo",
    "category": "Sustantivos"
  },
  {
    "es": "Trapo",
    "zh": "抹布",
    "pinyin": "mā bù",
    "category": "Sustantivos"
  },
  {
    "es": "MATERIAL",
    "zh": "材料",
    "pinyin": "cái liào",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Plástico",
    "zh": "塑料",
    "pinyin": "sù liào",
    "category": "Sustantivos"
  },
  {
    "es": "Cartón",
    "zh": "纸板",
    "pinyin": "zhǐ bǎn",
    "category": "Sustantivos"
  },
  {
    "es": "Metal",
    "zh": "金属",
    "pinyin": "jīn shǔ",
    "category": "Sustantivos"
  },
  {
    "es": "Madera",
    "zh": "木头",
    "pinyin": "mù tou",
    "category": "Sustantivos"
  },
  {
    "es": "Natural",
    "zh": "自然的",
    "pinyin": "zì rán de",
    "category": "Sustantivos"
  },
  {
    "es": "TIEMPO",
    "zh": "时间",
    "pinyin": "shí jiān",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Historia",
    "zh": "历史",
    "pinyin": "lì shǐ",
    "category": "Sustantivos"
  },
  {
    "es": "Fecha",
    "zh": "日期",
    "pinyin": "rì qī",
    "category": "Sustantivos"
  },
  {
    "es": "Edad",
    "zh": "年龄",
    "pinyin": "nián líng",
    "category": "Sustantivos"
  },
  {
    "es": "Año",
    "zh": "年份",
    "pinyin": "nián fèn",
    "category": "Sustantivos"
  },
  {
    "es": "Día",
    "zh": "日",
    "pinyin": "rì",
    "category": "Sustantivos"
  },
  {
    "es": "Hora",
    "zh": "时间",
    "pinyin": "shí jiān",
    "category": "Sustantivos"
  },
  {
    "es": "Minuto",
    "zh": "分钟",
    "pinyin": "fēn zhōng",
    "category": "Sustantivos"
  },
  {
    "es": "Segundo",
    "zh": "第二",
    "pinyin": "dì èr",
    "category": "Sustantivos"
  },
  {
    "es": "Reloj",
    "zh": "时钟",
    "pinyin": "shí zhōng",
    "category": "Sustantivos"
  },
  {
    "es": "HOY",
    "zh": "今天",
    "pinyin": "jīn tiān",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Ayer",
    "zh": "昨天",
    "pinyin": "zuó tiān",
    "category": "Sustantivos"
  },
  {
    "es": "Mañana",
    "zh": "明天",
    "pinyin": "míng tiān",
    "category": "Sustantivos"
  },
  {
    "es": "Pasado",
    "zh": "过去",
    "pinyin": "guò qù",
    "category": "Sustantivos"
  },
  {
    "es": "Tarde",
    "zh": "下午",
    "pinyin": "xià wǔ",
    "category": "Sustantivos"
  },
  {
    "es": "Noche",
    "zh": "晚上",
    "pinyin": "wǎn shàng",
    "category": "Sustantivos"
  },
  {
    "es": "SEMANA",
    "zh": "周",
    "pinyin": "zhōu",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Fin semana",
    "zh": "周末",
    "pinyin": "zhōu mò",
    "category": "Sustantivos"
  },
  {
    "es": "Día festivo",
    "zh": "假期",
    "pinyin": "jià qī",
    "category": "Sustantivos"
  },
  {
    "es": "Lunes",
    "zh": "星期一",
    "pinyin": "xīng qī yī",
    "category": "Sustantivos"
  },
  {
    "es": "Martes",
    "zh": "星期二",
    "pinyin": "xīng qī èr",
    "category": "Sustantivos"
  },
  {
    "es": "Miércoles",
    "zh": "星期三",
    "pinyin": "xīng qī sān",
    "category": "Sustantivos"
  },
  {
    "es": "Jueves",
    "zh": "星期四",
    "pinyin": "xīng qī sì",
    "category": "Sustantivos"
  },
  {
    "es": "Viernes",
    "zh": "周五",
    "pinyin": "zhōu wǔ",
    "category": "Sustantivos"
  },
  {
    "es": "Sábado",
    "zh": "星期六",
    "pinyin": "xīng qī liù",
    "category": "Sustantivos"
  },
  {
    "es": "Domingo",
    "zh": "周日",
    "pinyin": "zhōu rì",
    "category": "Sustantivos"
  },
  {
    "es": "MES",
    "zh": "月份",
    "pinyin": "yuè fèn",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Enero",
    "zh": "一月",
    "pinyin": "yí yuè",
    "category": "Sustantivos"
  },
  {
    "es": "Febrero",
    "zh": "二月",
    "pinyin": "èr yuè",
    "category": "Sustantivos"
  },
  {
    "es": "Marzo",
    "zh": "三月",
    "pinyin": "sān yuè",
    "category": "Sustantivos"
  },
  {
    "es": "Abril",
    "zh": "四月",
    "pinyin": "sì yuè",
    "category": "Sustantivos"
  },
  {
    "es": "Mayo",
    "zh": "五月",
    "pinyin": "wǔ yuè",
    "category": "Sustantivos"
  },
  {
    "es": "Junio",
    "zh": "六月",
    "pinyin": "liù yuè",
    "category": "Sustantivos"
  },
  {
    "es": "Julio",
    "zh": "七月",
    "pinyin": "qī yuè",
    "category": "Sustantivos"
  },
  {
    "es": "Agosto",
    "zh": "八月",
    "pinyin": "bā yuè",
    "category": "Sustantivos"
  },
  {
    "es": "Septiembre",
    "zh": "九月",
    "pinyin": "jiǔ yuè",
    "category": "Sustantivos"
  },
  {
    "es": "Octubre",
    "zh": "十月",
    "pinyin": "shí yuè",
    "category": "Sustantivos"
  },
  {
    "es": "Noviembre",
    "zh": "十一月",
    "pinyin": "shí yī yuè",
    "category": "Sustantivos"
  },
  {
    "es": "Diciembre",
    "zh": "十二月",
    "pinyin": "shí èr yuè",
    "category": "Sustantivos"
  },
  {
    "es": "Kilómetro",
    "zh": "公里",
    "pinyin": "gōng lǐ",
    "category": "Sustantivos"
  },
  {
    "es": "Kilo",
    "zh": "基洛",
    "pinyin": "jī luò",
    "category": "Sustantivos"
  },
  {
    "es": "Tonelada",
    "zh": "吨",
    "pinyin": "dūn",
    "category": "Sustantivos"
  },
  {
    "es": "Verano",
    "zh": "夏天",
    "pinyin": "xià tiān",
    "category": "Sustantivos"
  },
  {
    "es": "Sol",
    "zh": "太阳",
    "pinyin": "tài yáng",
    "category": "Sustantivos"
  },
  {
    "es": "Calor",
    "zh": "热",
    "pinyin": "rè",
    "category": "Sustantivos"
  },
  {
    "es": "Invierno",
    "zh": "冬天",
    "pinyin": "dōng tiān",
    "category": "Sustantivos"
  },
  {
    "es": "Frío",
    "zh": "冷",
    "pinyin": "lěng",
    "category": "Sustantivos"
  },
  {
    "es": "Navidad",
    "zh": "圣诞节",
    "pinyin": "shèng dàn jié",
    "category": "Sustantivos"
  },
  {
    "es": "Nieve",
    "zh": "雪",
    "pinyin": "xuě",
    "category": "Sustantivos"
  },
  {
    "es": "Llover",
    "zh": "雨",
    "pinyin": "yǔ",
    "category": "Sustantivos"
  },
  {
    "es": "Primavera",
    "zh": "春天",
    "pinyin": "chūn tiān",
    "category": "Sustantivos"
  },
  {
    "es": "Otoño",
    "zh": "秋天",
    "pinyin": "qiū tiān",
    "category": "Sustantivos"
  },
  {
    "es": "Aire",
    "zh": "空气",
    "pinyin": "kōng qì",
    "category": "Sustantivos"
  },
  {
    "es": "FIESTA",
    "zh": "派对",
    "pinyin": "pài duì",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Vacaciones",
    "zh": "假期",
    "pinyin": "jià qī",
    "category": "Sustantivos"
  },
  {
    "es": "Viaje",
    "zh": "行程",
    "pinyin": "xíng chéng",
    "category": "Sustantivos"
  },
  {
    "es": "Excursión",
    "zh": "游览",
    "pinyin": "yóu lǎn",
    "category": "Sustantivos"
  },
  {
    "es": "Música",
    "zh": "音乐",
    "pinyin": "yīn yuè",
    "category": "Sustantivos"
  },
  {
    "es": "Ruido",
    "zh": "噪音",
    "pinyin": "zào yīn",
    "category": "Sustantivos"
  },
  {
    "es": "CUERPO",
    "zh": "身体",
    "pinyin": "shēn tǐ",
    "category": "Sustantivos",
    "isImportant": true
  },
  {
    "es": "Cabeza",
    "zh": "头",
    "pinyin": "tóu",
    "category": "Sustantivos"
  },
  {
    "es": "Cara",
    "zh": "脸",
    "pinyin": "liǎn",
    "category": "Sustantivos"
  },
  {
    "es": "Ojo",
    "zh": "眼睛",
    "pinyin": "yǎn jīng",
    "category": "Sustantivos"
  },
  {
    "es": "Oído",
    "zh": "耳朵",
    "pinyin": "ěr duǒ",
    "category": "Sustantivos"
  },
  {
    "es": "Nariz",
    "zh": "鼻子",
    "pinyin": "bí zi",
    "category": "Sustantivos"
  },
  {
    "es": "Boca",
    "zh": "嘴",
    "pinyin": "zuǐ",
    "category": "Sustantivos"
  },
  {
    "es": "Diente",
    "zh": "牙齿",
    "pinyin": "yá chǐ",
    "category": "Sustantivos"
  },
  {
    "es": "Muela",
    "zh": "砂轮",
    "pinyin": "shā lún",
    "category": "Sustantivos"
  },
  {
    "es": "Garganta",
    "zh": "喉咙",
    "pinyin": "hóu lóng",
    "category": "Sustantivos"
  },
  {
    "es": "Pecho",
    "zh": "胸部",
    "pinyin": "xiōng bù",
    "category": "Sustantivos"
  },
  {
    "es": "Espalda",
    "zh": "返回",
    "pinyin": "fǎn huí",
    "category": "Sustantivos"
  },
  {
    "es": "Corazón",
    "zh": "心",
    "pinyin": "xīn",
    "category": "Sustantivos"
  },
  {
    "es": "Hígado",
    "zh": "肝脏",
    "pinyin": "gān zàng",
    "category": "Sustantivos"
  },
  {
    "es": "Riñón",
    "zh": "肾",
    "pinyin": "shèn",
    "category": "Sustantivos"
  },
  {
    "es": "Sangre",
    "zh": "血",
    "pinyin": "xuè",
    "category": "Sustantivos"
  },
  {
    "es": "Estómago",
    "zh": "胃",
    "pinyin": "wèi",
    "category": "Sustantivos"
  },
  {
    "es": "Brazo",
    "zh": "手臂",
    "pinyin": "shǒu bì",
    "category": "Sustantivos"
  },
  {
    "es": "Codo",
    "zh": "弯头",
    "pinyin": "wān tóu",
    "category": "Sustantivos"
  },
  {
    "es": "Muñeca",
    "zh": "娃娃",
    "pinyin": "wá wá",
    "category": "Sustantivos"
  },
  {
    "es": "Mano",
    "zh": "手",
    "pinyin": "shǒu",
    "category": "Sustantivos"
  },
  {
    "es": "Dedo",
    "zh": "手指",
    "pinyin": "shǒu zhǐ",
    "category": "Sustantivos"
  },
  {
    "es": "Pierna",
    "zh": "腿",
    "pinyin": "tuǐ",
    "category": "Sustantivos"
  },
  {
    "es": "Rodilla",
    "zh": "膝盖",
    "pinyin": "xī gài",
    "category": "Sustantivos"
  },
  {
    "es": "Tobillo",
    "zh": "脚踝",
    "pinyin": "jiǎo huái",
    "category": "Sustantivos"
  },
  {
    "es": "Pie",
    "zh": "脚",
    "pinyin": "jiǎo",
    "category": "Sustantivos"
  },
  {
    "es": "Peso",
    "zh": "重量",
    "pinyin": "zhòng liàng",
    "category": "Sustantivos"
  },
  {
    "es": "Estatura",
    "zh": "身高",
    "pinyin": "shēn gāo",
    "category": "Sustantivos"
  },
  {
    "es": "Perro",
    "zh": "狗",
    "pinyin": "gǒu",
    "category": "Sustantivos"
  },
  {
    "es": "Gato",
    "zh": "猫",
    "pinyin": "māo",
    "category": "Sustantivos"
  },
  {
    "es": "Caballo",
    "zh": "马",
    "pinyin": "mǎ",
    "category": "Sustantivos"
  },
  {
    "es": "Asno",
    "zh": "驴子",
    "pinyin": "lǘ zi",
    "category": "Sustantivos"
  },
  {
    "es": "Vaca",
    "zh": "牛",
    "pinyin": "niú",
    "category": "Sustantivos"
  },
  {
    "es": "Buey",
    "zh": "牛",
    "pinyin": "niú",
    "category": "Sustantivos"
  },
  {
    "es": "Oveja",
    "zh": "羊",
    "pinyin": "yáng",
    "category": "Sustantivos"
  },
  {
    "es": "Gallina",
    "zh": "鸡",
    "pinyin": "jī",
    "category": "Sustantivos"
  },
  {
    "es": "Adjetivos",
    "zh": "形容词",
    "pinyin": "xíng róng cí",
    "category": "Adjetivos"
  },
  {
    "es": "BUENO",
    "zh": "好",
    "pinyin": "hǎo",
    "category": "Adjetivos",
    "isImportant": true
  },
  {
    "es": "Malo",
    "zh": "坏",
    "pinyin": "huài",
    "category": "Adjetivos"
  },
  {
    "es": "Regular",
    "zh": "常规",
    "pinyin": "cháng guī",
    "category": "Adjetivos"
  },
  {
    "es": "Mejor",
    "zh": "更好",
    "pinyin": "gèng hǎo",
    "category": "Adjetivos"
  },
  {
    "es": "Peor",
    "zh": "更糟",
    "pinyin": "gèng zāo",
    "category": "Adjetivos"
  },
  {
    "es": "MAYOR",
    "zh": "专业",
    "pinyin": "zhuān yè",
    "category": "Adjetivos",
    "isImportant": true
  },
  {
    "es": "Menor",
    "zh": "未成年人",
    "pinyin": "wèi chéng nián rén",
    "category": "Adjetivos"
  },
  {
    "es": "Grande",
    "zh": "大",
    "pinyin": "dà",
    "category": "Adjetivos"
  },
  {
    "es": "Pequeño",
    "zh": "小号",
    "pinyin": "xiǎo hào",
    "category": "Adjetivos"
  },
  {
    "es": "Superior",
    "zh": "顶部",
    "pinyin": "dǐng bù",
    "category": "Adjetivos"
  },
  {
    "es": "Inferior",
    "zh": "较低",
    "pinyin": "jiào dī",
    "category": "Adjetivos"
  },
  {
    "es": "BONITO",
    "zh": "尼斯",
    "pinyin": "ní sī",
    "category": "Adjetivos",
    "isImportant": true
  },
  {
    "es": "Bello",
    "zh": "美丽",
    "pinyin": "měi lì",
    "category": "Adjetivos"
  },
  {
    "es": "Guapo",
    "zh": "帅气",
    "pinyin": "shuài qì",
    "category": "Adjetivos"
  },
  {
    "es": "Feo",
    "zh": "丑陋",
    "pinyin": "chǒu lòu",
    "category": "Adjetivos"
  },
  {
    "es": "LIMPIO",
    "zh": "干净",
    "pinyin": "gān jìng",
    "category": "Adjetivos",
    "isImportant": true
  },
  {
    "es": "Sucio",
    "zh": "肮脏的",
    "pinyin": "āng zāng de",
    "category": "Adjetivos"
  },
  {
    "es": "Caliente",
    "zh": "热",
    "pinyin": "rè",
    "category": "Adjetivos"
  },
  {
    "es": "Barato",
    "zh": "便宜",
    "pinyin": "pián yi",
    "category": "Adjetivos"
  },
  {
    "es": "Caro",
    "zh": "贵",
    "pinyin": "guì",
    "category": "Adjetivos"
  },
  {
    "es": "Lleno",
    "zh": "满",
    "pinyin": "mǎn",
    "category": "Adjetivos"
  },
  {
    "es": "Vacío",
    "zh": "空的",
    "pinyin": "kōng de",
    "category": "Adjetivos"
  },
  {
    "es": "LISTO",
    "zh": "准备好",
    "pinyin": "zhǔn bèi hǎo",
    "category": "Adjetivos",
    "isImportant": true
  },
  {
    "es": "Tonto",
    "zh": "傻瓜",
    "pinyin": "shǎ guā",
    "category": "Adjetivos"
  },
  {
    "es": "Inteligente",
    "zh": "智能",
    "pinyin": "zhì néng",
    "category": "Adjetivos"
  },
  {
    "es": "Estúpido",
    "zh": "愚蠢的",
    "pinyin": "yú chǔn de",
    "category": "Adjetivos"
  },
  {
    "es": "Capaz",
    "zh": "有能力的",
    "pinyin": "yǒu néng lì de",
    "category": "Adjetivos"
  },
  {
    "es": "Seguro",
    "zh": "保险",
    "pinyin": "bǎo xiǎn",
    "category": "Adjetivos"
  },
  {
    "es": "Interesante",
    "zh": "有趣",
    "pinyin": "yǒu qù",
    "category": "Adjetivos"
  },
  {
    "es": "Fácil",
    "zh": "简单",
    "pinyin": "jiǎn dān",
    "category": "Adjetivos"
  },
  {
    "es": "Difícil",
    "zh": "困难",
    "pinyin": "kùn nán",
    "category": "Adjetivos"
  },
  {
    "es": "LIBRE",
    "zh": "免费",
    "pinyin": "miǎn fèi",
    "category": "Adjetivos",
    "isImportant": true
  },
  {
    "es": "Ocupado",
    "zh": "忙",
    "pinyin": "máng",
    "category": "Adjetivos"
  },
  {
    "es": "Solo",
    "zh": "独自一人",
    "pinyin": "dú zì yī rén",
    "category": "Adjetivos"
  },
  {
    "es": "Acompañado",
    "zh": "陪伴",
    "pinyin": "péi bàn",
    "category": "Adjetivos"
  },
  {
    "es": "Sujeto",
    "zh": "主题",
    "pinyin": "zhǔ tí",
    "category": "Adjetivos"
  },
  {
    "es": "JOVEN",
    "zh": "年轻的",
    "pinyin": "nián qīng de",
    "category": "Adjetivos",
    "isImportant": true
  },
  {
    "es": "Viejo",
    "zh": "老",
    "pinyin": "lǎo",
    "category": "Adjetivos"
  },
  {
    "es": "Alto",
    "zh": "高",
    "pinyin": "gāo",
    "category": "Adjetivos"
  },
  {
    "es": "Bajo",
    "zh": "低",
    "pinyin": "dī",
    "category": "Adjetivos"
  },
  {
    "es": "Fuerte",
    "zh": "强",
    "pinyin": "qiáng",
    "category": "Adjetivos"
  },
  {
    "es": "Flojo",
    "zh": "懒惰",
    "pinyin": "lǎn duò",
    "category": "Adjetivos"
  },
  {
    "es": "Enfermo",
    "zh": "生病了",
    "pinyin": "shēng bìng le",
    "category": "Adjetivos"
  },
  {
    "es": "Sano",
    "zh": "健康",
    "pinyin": "jiàn kāng",
    "category": "Adjetivos"
  },
  {
    "es": "FINO",
    "zh": "很好",
    "pinyin": "hěn hǎo",
    "category": "Adjetivos",
    "isImportant": true
  },
  {
    "es": "Delgado",
    "zh": "薄",
    "pinyin": "báo",
    "category": "Adjetivos"
  },
  {
    "es": "Gordo",
    "zh": "脂肪",
    "pinyin": "zhī fáng",
    "category": "Adjetivos"
  },
  {
    "es": "Grueso",
    "zh": "厚",
    "pinyin": "hòu",
    "category": "Adjetivos"
  },
  {
    "es": "Duro",
    "zh": "硬",
    "pinyin": "yìng",
    "category": "Adjetivos"
  },
  {
    "es": "Blando",
    "zh": "软的",
    "pinyin": "ruǎn de",
    "category": "Adjetivos"
  },
  {
    "es": "Resistente",
    "zh": "抗性",
    "pinyin": "kàng xìng",
    "category": "Adjetivos"
  },
  {
    "es": "AGRADABLE",
    "zh": "尼斯",
    "pinyin": "ní sī",
    "category": "Adjetivos",
    "isImportant": true
  },
  {
    "es": "Simpático",
    "zh": "尼斯",
    "pinyin": "ní sī",
    "category": "Adjetivos"
  },
  {
    "es": "Gracioso",
    "zh": "有趣的",
    "pinyin": "yǒu qù de",
    "category": "Adjetivos"
  },
  {
    "es": "Educado",
    "zh": "有礼貌",
    "pinyin": "yǒu lǐ mào",
    "category": "Adjetivos"
  },
  {
    "es": "ALEGRE",
    "zh": "开朗的",
    "pinyin": "kāi lǎng de",
    "category": "Adjetivos",
    "isImportant": true
  },
  {
    "es": "Triste",
    "zh": "悲伤",
    "pinyin": "bēi shāng",
    "category": "Adjetivos"
  },
  {
    "es": "Contento",
    "zh": "快乐",
    "pinyin": "kuài lè",
    "category": "Adjetivos"
  },
  {
    "es": "Cansado",
    "zh": "累了",
    "pinyin": "lèi le",
    "category": "Adjetivos"
  },
  {
    "es": "COLOR",
    "zh": "颜色",
    "pinyin": "yán sè",
    "category": "Adjetivos",
    "isImportant": true
  },
  {
    "es": "Blanco",
    "zh": "白色",
    "pinyin": "bái sè",
    "category": "Adjetivos"
  },
  {
    "es": "Negro",
    "zh": "黑色",
    "pinyin": "hēi sè",
    "category": "Adjetivos"
  },
  {
    "es": "Azul",
    "zh": "蓝色",
    "pinyin": "lán sè",
    "category": "Adjetivos"
  },
  {
    "es": "Rojo",
    "zh": "红色",
    "pinyin": "hóng sè",
    "category": "Adjetivos"
  },
  {
    "es": "Verde",
    "zh": "绿色",
    "pinyin": "lǜ sè",
    "category": "Adjetivos"
  },
  {
    "es": "Amarillo",
    "zh": "黄色",
    "pinyin": "huáng sè",
    "category": "Adjetivos"
  },
  {
    "es": "Marrón",
    "zh": "棕色",
    "pinyin": "zōng sè",
    "category": "Adjetivos"
  },
  {
    "es": "Siempre",
    "zh": "总是",
    "pinyin": "zǒng shì",
    "category": "Adverbios"
  },
  {
    "es": "También",
    "zh": "还有",
    "pinyin": "hái yǒu",
    "category": "Adverbios"
  },
  {
    "es": "Claro",
    "zh": "当然可以",
    "pinyin": "dāng rán kě yǐ",
    "category": "Adverbios"
  },
  {
    "es": "Exacto",
    "zh": "正是如此",
    "pinyin": "zhèng shì rú cǐ",
    "category": "Adverbios"
  },
  {
    "es": "Cierto",
    "zh": "真实",
    "pinyin": "zhēn shí",
    "category": "Adverbios"
  },
  {
    "es": "Justo",
    "zh": "公平",
    "pinyin": "gōng píng",
    "category": "Adverbios"
  },
  {
    "es": "Igual",
    "zh": "一样",
    "pinyin": "yī yàng",
    "category": "Adverbios"
  },
  {
    "es": "Nunca",
    "zh": "从来没有",
    "pinyin": "cóng lái méi yǒu",
    "category": "Adverbios"
  },
  {
    "es": "Tampoco",
    "zh": "两者都没有",
    "pinyin": "liǎng zhě dōu méi yǒu",
    "category": "Adverbios"
  },
  {
    "es": "Falso",
    "zh": "错误",
    "pinyin": "cuò wù",
    "category": "Adverbios"
  },
  {
    "es": "Injusto",
    "zh": "不公平",
    "pinyin": "bù gōng píng",
    "category": "Adverbios"
  },
  {
    "es": "Distinto",
    "zh": "不同",
    "pinyin": "bù tóng",
    "category": "Adverbios"
  },
  {
    "es": "BIEN",
    "zh": "好",
    "pinyin": "hǎo",
    "category": "Adverbios",
    "isImportant": true
  },
  {
    "es": "Mal",
    "zh": "坏",
    "pinyin": "huài",
    "category": "Adverbios"
  },
  {
    "es": "Así",
    "zh": "所以",
    "pinyin": "suǒ yǐ",
    "category": "Adverbios"
  },
  {
    "es": "Como",
    "zh": "如何",
    "pinyin": "rú hé",
    "category": "Adverbios"
  },
  {
    "es": "QUIZÁ",
    "zh": "也许",
    "pinyin": "yě xǔ",
    "category": "Adverbios",
    "isImportant": true
  },
  {
    "es": "Depende",
    "zh": "这取决于",
    "pinyin": "zhè qǔ jué yú",
    "category": "Adverbios"
  },
  {
    "es": "A veces",
    "zh": "有时",
    "pinyin": "yǒu shí",
    "category": "Adverbios"
  },
  {
    "es": "MUY",
    "zh": "非常",
    "pinyin": "fēi cháng",
    "category": "Adverbios",
    "isImportant": true
  },
  {
    "es": "Mucho",
    "zh": "很多",
    "pinyin": "hěn duō",
    "category": "Adverbios"
  },
  {
    "es": "Poco",
    "zh": "很少",
    "pinyin": "hěn shǎo",
    "category": "Adverbios"
  },
  {
    "es": "Bastante",
    "zh": "相当多",
    "pinyin": "xiāng dāng duō",
    "category": "Adverbios"
  },
  {
    "es": "Todo",
    "zh": "一切",
    "pinyin": "yī qiè",
    "category": "Adverbios"
  },
  {
    "es": "Todos",
    "zh": "全部",
    "pinyin": "quán bù",
    "category": "Adverbios"
  },
  {
    "es": "Nada",
    "zh": "什么都没有",
    "pinyin": "shén me dōu méi yǒu",
    "category": "Adverbios"
  },
  {
    "es": "Demasiado",
    "zh": "太多了",
    "pinyin": "tài duō le",
    "category": "Adverbios"
  },
  {
    "es": "Casi",
    "zh": "几乎",
    "pinyin": "jī hū",
    "category": "Adverbios"
  },
  {
    "es": "Más",
    "zh": "更多",
    "pinyin": "gèng duō",
    "category": "Adverbios"
  },
  {
    "es": "Menos",
    "zh": "少",
    "pinyin": "shǎo",
    "category": "Adverbios"
  },
  {
    "es": "Alguno",
    "zh": "一些",
    "pinyin": "yī xiē",
    "category": "Adverbios"
  },
  {
    "es": "Ninguno",
    "zh": "无",
    "pinyin": "wú",
    "category": "Adverbios"
  },
  {
    "es": "AHORA",
    "zh": "现在",
    "pinyin": "xiàn zài",
    "category": "Adverbios",
    "isImportant": true
  },
  {
    "es": "Antes",
    "zh": "之前",
    "pinyin": "zhī qián",
    "category": "Adverbios"
  },
  {
    "es": "Después",
    "zh": "之后",
    "pinyin": "zhī hòu",
    "category": "Adverbios"
  },
  {
    "es": "Siguiente",
    "zh": "下一步",
    "pinyin": "xià yī bù",
    "category": "Adverbios"
  },
  {
    "es": "Mientras",
    "zh": "同时",
    "pinyin": "tóng shí",
    "category": "Adverbios"
  },
  {
    "es": "Aún",
    "zh": "仍然",
    "pinyin": "réng rán",
    "category": "Adverbios"
  },
  {
    "es": "Pronto",
    "zh": "很快",
    "pinyin": "hěn kuài",
    "category": "Adverbios"
  },
  {
    "es": "Temprano",
    "zh": "早",
    "pinyin": "zǎo",
    "category": "Adverbios"
  },
  {
    "es": "Luego",
    "zh": "然后",
    "pinyin": "rán hòu",
    "category": "Adverbios"
  },
  {
    "es": "AQUÍ",
    "zh": "这里",
    "pinyin": "zhè lǐ",
    "category": "Adverbios",
    "isImportant": true
  },
  {
    "es": "Ahí",
    "zh": "那里",
    "pinyin": "nà lǐ",
    "category": "Adverbios"
  },
  {
    "es": "Allí",
    "zh": "那里",
    "pinyin": "nà lǐ",
    "category": "Adverbios"
  },
  {
    "es": "Enfrente",
    "zh": "对面",
    "pinyin": "duì miàn",
    "category": "Adverbios"
  },
  {
    "es": "Junto a",
    "zh": "旁边",
    "pinyin": "páng biān",
    "category": "Adverbios"
  },
  {
    "es": "Delante",
    "zh": "正面",
    "pinyin": "zhèng miàn",
    "category": "Adverbios"
  },
  {
    "es": "Detrás",
    "zh": "后面",
    "pinyin": "hòu miàn",
    "category": "Adverbios"
  },
  {
    "es": "Cerca",
    "zh": "关闭",
    "pinyin": "guān bì",
    "category": "Adverbios"
  },
  {
    "es": "Lejos",
    "zh": "离开",
    "pinyin": "lí kāi",
    "category": "Adverbios"
  },
  {
    "es": "DENTRO",
    "zh": "里面",
    "pinyin": "lǐ miàn",
    "category": "Adverbios",
    "isImportant": true
  },
  {
    "es": "Fuera",
    "zh": "出",
    "pinyin": "chū",
    "category": "Adverbios"
  },
  {
    "es": "Encima",
    "zh": "以上",
    "pinyin": "yǐ shàng",
    "category": "Adverbios"
  },
  {
    "es": "Debajo",
    "zh": "下",
    "pinyin": "xià",
    "category": "Adverbios"
  },
  {
    "es": "RÁPIDO",
    "zh": "快",
    "pinyin": "kuài",
    "category": "Adverbios",
    "isImportant": true
  },
  {
    "es": "Lento",
    "zh": "慢",
    "pinyin": "màn",
    "category": "Adverbios"
  },
  {
    "es": "Deprisa",
    "zh": "快点",
    "pinyin": "kuài diǎn",
    "category": "Adverbios"
  },
  {
    "es": "Despacio",
    "zh": "慢慢地",
    "pinyin": "màn màn dì",
    "category": "Adverbios"
  },
  {
    "es": "Adelante",
    "zh": "继续吧",
    "pinyin": "jì xù ba",
    "category": "Adverbios"
  },
  {
    "es": "Atrás",
    "zh": "回来",
    "pinyin": "huí lái",
    "category": "Adverbios"
  },
  {
    "es": "SALUDAR",
    "zh": "问候",
    "pinyin": "wèn hòu",
    "category": "Saludos y Extras",
    "isImportant": true
  },
  {
    "es": "Hola",
    "zh": "你好",
    "pinyin": "nǐ hǎo",
    "category": "Saludos y Extras"
  },
  {
    "es": "Buenos días",
    "zh": "早上好",
    "pinyin": "zǎo shàng hǎo",
    "category": "Saludos y Extras"
  },
  {
    "es": "Buenas",
    "zh": "好",
    "pinyin": "hǎo",
    "category": "Saludos y Extras"
  },
  {
    "es": "Hasta",
    "zh": "直到",
    "pinyin": "zhí dào",
    "category": "Saludos y Extras"
  },
  {
    "es": "Adiós",
    "zh": "再见",
    "pinyin": "zài jiàn",
    "category": "Saludos y Extras"
  },
  {
    "es": "Por favor",
    "zh": "请",
    "pinyin": "qǐng",
    "category": "Saludos y Extras"
  },
  {
    "es": "Gracias",
    "zh": "谢谢你",
    "pinyin": "xiè xiè nǐ",
    "category": "Saludos y Extras"
  },
  {
    "es": "De nada",
    "zh": "不客气",
    "pinyin": "bú kè qì",
    "category": "Saludos y Extras"
  },
  {
    "es": "Ella",
    "zh": "她",
    "pinyin": "tā",
    "category": "Pronombres"
  },
  {
    "es": "Usted",
    "zh": "你",
    "pinyin": "nǐ",
    "category": "Pronombres"
  },
  {
    "es": "Nosotros",
    "zh": "我们",
    "pinyin": "wǒ men",
    "category": "Pronombres"
  },
  {
    "es": "Nosotras",
    "zh": "我们",
    "pinyin": "wǒ men",
    "category": "Pronombres"
  },
  {
    "es": "Vosotros",
    "zh": "你",
    "pinyin": "nǐ",
    "category": "Pronombres"
  },
  {
    "es": "Vosotras",
    "zh": "你",
    "pinyin": "nǐ",
    "category": "Pronombres"
  },
  {
    "es": "Ellos",
    "zh": "他们",
    "pinyin": "tā men",
    "category": "Pronombres"
  },
  {
    "es": "Ellas",
    "zh": "他们",
    "pinyin": "tā men",
    "category": "Pronombres"
  },
  {
    "es": "Ustedes",
    "zh": "你",
    "pinyin": "nǐ",
    "category": "Pronombres"
  },
  {
    "es": "Su de él",
    "zh": "是他的",
    "pinyin": "shì tā de",
    "category": "Pronombres"
  },
  {
    "es": "Nuestro",
    "zh": "我们的",
    "pinyin": "wǒ men de",
    "category": "Pronombres"
  },
  {
    "es": "Vuestro",
    "zh": "你的",
    "pinyin": "nǐ de",
    "category": "Pronombres"
  },
  {
    "es": "Su de",
    "zh": "他的",
    "pinyin": "tā de",
    "category": "Pronombres"
  },
  {
    "es": "ESTE",
    "zh": "这个",
    "pinyin": "zhè ge",
    "category": "Pronombres",
    "isImportant": true
  },
  {
    "es": "Esta",
    "zh": "这个",
    "pinyin": "zhè ge",
    "category": "Pronombres"
  },
  {
    "es": "Esto",
    "zh": "这个",
    "pinyin": "zhè ge",
    "category": "Pronombres"
  },
  {
    "es": "Ese",
    "zh": "那个",
    "pinyin": "nà ge",
    "category": "Pronombres"
  },
  {
    "es": "Esa",
    "zh": "那",
    "pinyin": "nà",
    "category": "Pronombres"
  },
  {
    "es": "Eso",
    "zh": "那",
    "pinyin": "nà",
    "category": "Pronombres"
  },
  {
    "es": "Aquel",
    "zh": "那个",
    "pinyin": "nà ge",
    "category": "Pronombres"
  },
  {
    "es": "Aquella",
    "zh": "那个",
    "pinyin": "nà ge",
    "category": "Pronombres"
  },
  {
    "es": "Aquello",
    "zh": "那个",
    "pinyin": "nà ge",
    "category": "Pronombres"
  },
  {
    "es": "Los",
    "zh": "的",
    "pinyin": "de",
    "category": "Pronombres"
  },
  {
    "es": "Las",
    "zh": "的",
    "pinyin": "de",
    "category": "Pronombres"
  },
  {
    "es": "Una",
    "zh": "一",
    "pinyin": "yī",
    "category": "Pronombres"
  },
  {
    "es": "Unos",
    "zh": "一些",
    "pinyin": "yī xiē",
    "category": "Pronombres"
  },
  {
    "es": "Unas",
    "zh": "一些",
    "pinyin": "yī xiē",
    "category": "Pronombres"
  },
  {
    "es": "Hacia",
    "zh": "走向",
    "pinyin": "zǒu xiàng",
    "category": "Pronombres"
  },
  {
    "es": "Para",
    "zh": "对于",
    "pinyin": "duì yú",
    "category": "Pronombres"
  },
  {
    "es": "Por",
    "zh": "由",
    "pinyin": "yóu",
    "category": "Pronombres"
  },
  {
    "es": "Desde",
    "zh": "自从",
    "pinyin": "zì cóng",
    "category": "Pronombres"
  },
  {
    "es": "Sin",
    "zh": "没有",
    "pinyin": "méi yǒu",
    "category": "Pronombres"
  },
  {
    "es": "QUE",
    "zh": "什么",
    "pinyin": "shén me",
    "category": "Pronombres",
    "isImportant": true
  },
  {
    "es": "Porque",
    "zh": "因为",
    "pinyin": "yīn wèi",
    "category": "Pronombres"
  },
  {
    "es": "NÚMERO",
    "zh": "数量",
    "pinyin": "shù liàng",
    "category": "Números",
    "isImportant": true
  },
  {
    "es": "Uno",
    "zh": "一",
    "pinyin": "yī",
    "category": "Números"
  },
  {
    "es": "Dos",
    "zh": "两个",
    "pinyin": "liǎng gè",
    "category": "Números"
  },
  {
    "es": "Tres",
    "zh": "三",
    "pinyin": "sān",
    "category": "Números"
  },
  {
    "es": "Cuatro",
    "zh": "四",
    "pinyin": "sì",
    "category": "Números"
  },
  {
    "es": "Cinco",
    "zh": "五",
    "pinyin": "wǔ",
    "category": "Números"
  },
  {
    "es": "Seis",
    "zh": "六",
    "pinyin": "liù",
    "category": "Números"
  },
  {
    "es": "Siete",
    "zh": "七",
    "pinyin": "qī",
    "category": "Números"
  },
  {
    "es": "Ocho",
    "zh": "八",
    "pinyin": "bā",
    "category": "Números"
  },
  {
    "es": "Nueve",
    "zh": "九",
    "pinyin": "jiǔ",
    "category": "Números"
  },
  {
    "es": "Cero",
    "zh": "零",
    "pinyin": "líng",
    "category": "Números"
  },
  {
    "es": "Disculpe",
    "zh": "对不起",
    "pinyin": "duì bù qǐ",
    "category": "Números"
  },
  {
    "es": "Con",
    "zh": "与",
    "pinyin": "yǔ",
    "category": "Números"
  },
  {
    "es": "DIEZ",
    "zh": "十",
    "pinyin": "shí",
    "category": "Números",
    "isImportant": true
  },
  {
    "es": "Veinte",
    "zh": "二十",
    "pinyin": "èr shí",
    "category": "Números"
  },
  {
    "es": "Treinta",
    "zh": "三十",
    "pinyin": "sān shí",
    "category": "Números"
  },
  {
    "es": "Cuarenta",
    "zh": "四十",
    "pinyin": "sì shí",
    "category": "Números"
  },
  {
    "es": "Cincuenta",
    "zh": "五十",
    "pinyin": "wǔ shí",
    "category": "Números"
  },
  {
    "es": "Sesenta",
    "zh": "六十",
    "pinyin": "liù shí",
    "category": "Números"
  },
  {
    "es": "Setenta",
    "zh": "七十",
    "pinyin": "qī shí",
    "category": "Números"
  },
  {
    "es": "Ochenta",
    "zh": "八十",
    "pinyin": "bā shí",
    "category": "Números"
  },
  {
    "es": "Noventa",
    "zh": "九十",
    "pinyin": "jiǔ shí",
    "category": "Números"
  },
  {
    "es": "Cien",
    "zh": "一百",
    "pinyin": "yì bǎi",
    "category": "Números"
  },
  {
    "es": "Mil",
    "zh": "千",
    "pinyin": "qiān",
    "category": "Números"
  },
  {
    "es": "Millón",
    "zh": "百万",
    "pinyin": "bǎi wàn",
    "category": "Números"
  },
  {
    "es": "PRIMERO",
    "zh": "首先",
    "pinyin": "shǒu xiān",
    "category": "Números",
    "isImportant": true
  },
  {
    "es": "Tercero",
    "zh": "第三",
    "pinyin": "dì sān",
    "category": "Números"
  },
  {
    "es": "Cuarto",
    "zh": "第四",
    "pinyin": "dì sì",
    "category": "Números"
  },
  {
    "es": "Quinto",
    "zh": "第五",
    "pinyin": "dì wǔ",
    "category": "Números"
  },
  {
    "es": "Sexto",
    "zh": "第六",
    "pinyin": "dì liù",
    "category": "Números"
  },
  {
    "es": "Séptimo",
    "zh": "第七",
    "pinyin": "dì qī",
    "category": "Números"
  },
  {
    "es": "Octavo",
    "zh": "第八",
    "pinyin": "dì bā",
    "category": "Números"
  },
  {
    "es": "Noveno",
    "zh": "第九",
    "pinyin": "dì jiǔ",
    "category": "Números"
  },
  {
    "es": "Décimo",
    "zh": "第十",
    "pinyin": "dì shí",
    "category": "Números"
  },
  {
    "es": "Yo soy",
    "zh": "我是",
    "pinyin": "wǒ shì",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Tú eres",
    "zh": "你是",
    "pinyin": "nǐ shì",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Usted es",
    "zh": "你是",
    "pinyin": "nǐ shì",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Él es",
    "zh": "他是",
    "pinyin": "tā shì",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Yo estoy",
    "zh": "我是",
    "pinyin": "wǒ shì",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Tú estás",
    "zh": "你是",
    "pinyin": "nǐ shì",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Usted está",
    "zh": "你是",
    "pinyin": "nǐ shì",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Él está",
    "zh": "他是",
    "pinyin": "tā shì",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Yo he",
    "zh": "我有",
    "pinyin": "wǒ yǒu",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Tú has",
    "zh": "你有",
    "pinyin": "nǐ yǒu",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Usted ha",
    "zh": "你有",
    "pinyin": "nǐ yǒu",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Él ha",
    "zh": "他有",
    "pinyin": "tā yǒu",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Yo tengo",
    "zh": "我有",
    "pinyin": "wǒ yǒu",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Tú tienes",
    "zh": "你有",
    "pinyin": "nǐ yǒu",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Usted tiene",
    "zh": "你有",
    "pinyin": "nǐ yǒu",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Él tiene",
    "zh": "他有",
    "pinyin": "tā yǒu",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Yo quiero",
    "zh": "我想要",
    "pinyin": "wǒ xiǎng yào",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Tú quieres",
    "zh": "你想要",
    "pinyin": "nǐ xiǎng yào",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Usted quiere",
    "zh": "你想要",
    "pinyin": "nǐ xiǎng yào",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Él quiere",
    "zh": "他想要",
    "pinyin": "tā xiǎng yào",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Yo deseo",
    "zh": "我希望",
    "pinyin": "wǒ xī wàng",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Tú deseas",
    "zh": "你希望",
    "pinyin": "nǐ xī wàng",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Usted desea",
    "zh": "你想要",
    "pinyin": "nǐ xiǎng yào",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Él desea",
    "zh": "他希望",
    "pinyin": "tā xī wàng",
    "category": "Tiempos Verbales"
  },
  {
    "es": "PODER",
    "zh": "电源",
    "pinyin": "diàn yuán",
    "category": "Tiempos Verbales",
    "isImportant": true
  },
  {
    "es": "Yo puedo",
    "zh": "我可以",
    "pinyin": "wǒ kě yǐ",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Tú puedes",
    "zh": "你可以",
    "pinyin": "nǐ kě yǐ",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Usted puede",
    "zh": "你可以",
    "pinyin": "nǐ kě yǐ",
    "category": "Tiempos Verbales"
  },
  {
    "es": "El puede",
    "zh": "他可以",
    "pinyin": "tā kě yǐ",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Yo voy",
    "zh": "我去",
    "pinyin": "wǒ qù",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Tú vas",
    "zh": "你走吧",
    "pinyin": "nǐ zǒu ba",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Usted va",
    "zh": "你走吧",
    "pinyin": "nǐ zǒu ba",
    "category": "Tiempos Verbales"
  },
  {
    "es": "Él va",
    "zh": "他走了",
    "pinyin": "tā zǒu le",
    "category": "Tiempos Verbales"
  }
];
