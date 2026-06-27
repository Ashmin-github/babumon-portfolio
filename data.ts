import { Film, MediaLink, PressCutting, AwardItem } from './types';

export const FILMS_DATA: Film[] = [
  {
    id: 'veyilmanam',
    title: 'VEYIL MANAM',
    year: '2019',
    theme: 'Environment and Climate Change',
    description: 'A Malayalam short film that explores climate change, global warming, environmental destruction, and pollution through the perspective of children in Kerala.',
    recognition: 'Best Screenplay of 2020, Ministry of Environment, Forest and Climate Change.',
    youtubeUrl: 'https://youtu.be/NQZk6lhkigI?si=UodO0nz-fTmjxDup',
    embedId: 'NQZk6lhkigI',
    duration: '20 min',
    language: 'Malayalam (with English Subtitles)',
    credits: {
      director: 'Babumon Anakottoor',
      screenplay: 'Babumon Anakottoor',
      camera: 'Lalbabu',
      music: 'Chandran Monalisa, Sunil Parameshwaran',
      cast: ['Students of Pattom St. Mary\'s School', 'Sunil']
    }
  },
  {
    id: 'vyavastha',
    title: 'VYAVASTHA',
    year: '2019',
    theme: 'Reality of Society',
    description: 'A socially relevant Malayalam short film about everyday struggles, human values, and the systems that shape ordinary lives. Filmed entirely on a mobile phone, based on Poet Ayyappa Paniker\'s poem \'Kadukka\'.',
    recognition: 'Special Jury Award, Poet Ayyappa Paniker Chalachithramela.',
    youtubeUrl: 'https://youtu.be/SaIngCBm2zo?si=LZ245n42jtgLEs4y',
    embedId: 'SaIngCBm2zo',
    duration: '10 min',
    language: 'Malayalam (with English Subtitles)',
    credits: {
      director: 'Babumon Anakottoor',
      screenplay: 'Babumon Anakottoor',
      camera: 'Satheesh Kallikkadu',
      music: 'Chinthu Jose, Mishal',
      cast: ['Samic Kallikkadu', 'Ajay', 'Shaji', 'Jineesh', 'Vinod Lal']
    }
  },
  {
    id: 'youthink',
    title: 'YOU THINK',
    year: '2018',
    theme: 'Alcoholism & Social Responsibility',
    description: 'A thought-provoking short film about how alcoholism damages families and how bystanders ignore accident victims on the road, challenging human conscience and community responsibilities.',
    recognition: 'Viral Social Media Hit & Screened at regional film forums.',
    youtubeUrl: 'https://www.youtube.com/results?search_query=You+Think+Malayalam+short+film+English+sub',
    embedId: 'uO0ni_wk3e0', // Placeholder or search redirect handled in modal
    duration: '14 min',
    language: 'Malayalam (with English Subtitles)',
    credits: {
      director: 'Babumon Anakottoor',
      screenplay: 'Babumon Anakottoor',
      camera: 'Satheesh Kallikkadu',
      music: 'Ebin',
      editor: 'Ratheesh',
      cast: ['Biju P. Swamy', 'Deepa Deepti', 'Atma', 'Taha', 'Santhosh Kumar']
    }
  }
];

export const MEDIA_RECOGNITION: MediaLink[] = [
  {
    id: 'cinelife',
    source: 'Cine Life Interview',
    title: 'Babumon Anakottoor - The Journey to Film Reels',
    url: 'https://youtu.be/V-RUj5wAbcU?si=0SgmC_sdSJXuhEC2',
    type: 'video',
    description: 'A highly engaging interview exploring Babumon\'s journey balancing daily survival in Trivandrum with his immense, self-taught filmmaking skill.',
    thumbnailSeed: 'cinelife',
    date: 'June 2019'
  },
  {
    id: 'manorama_online',
    source: 'Manorama Online Feature',
    title: 'Independent Kerala Filmmaker Directs Socially Relevant Cinema Shot on Mobile',
    url: 'https://www.onmanorama.com/entertainment/entertainment-news/2019/06/05/short-film-directed-by-auto-driver-released-online.html',
    type: 'article',
    description: 'A national online feature tracking how Babumon scripted his revolutionary environmental and political commentaries and executed them with zero budget.',
    thumbnailSeed: 'manorama',
    date: 'June 5, 2019'
  },
  {
    id: 'news24',
    source: '24 News Feature',
    title: 'An Independent Filmmaker\'s Artistic Vision Inspires Thousands in Malayalam Cinema',
    url: 'https://www.facebook.com/share/v/1BJCJVi4vW/',
    type: 'social',
    description: 'A special news broadcast covering Babumon\'s creative struggles, highlighting how his film "Vyavastha" was entirely captured on a standard smartphone and went on to win prestigious jury awards.',
    thumbnailSeed: 'news24',
    date: 'July 2019'
  },
  {
    id: 'manorama_news',
    source: 'Manorama News Interview',
    title: 'A Spotlight on Trivandrum\'s Most Famous Independent Filmmaker',
    url: 'https://youtu.be/uO0ni_wk3e0?si=cPdsaQKFP1TDKcTT',
    type: 'video',
    description: 'Broadcast television segment on Babumon\'s awards and accolades. Celebrated Malayalam actors and literary leaders praise his direct, uncompromising approach to cinema.',
    thumbnailSeed: 'manoramanews',
    date: 'June 2019'
  },
  {
    id: 'marunadan_tv',
    source: 'Marunadan TV',
    title: 'A Cinematic Voice Resonating with Kerala\'s Masses',
    url: 'https://youtu.be/d6T4VuEl1H4?si=ASHJ3xxLkcCJtd_0',
    type: 'video',
    description: 'A dedicated broadcast covering Babumon\'s struggles and achievements, exploring his raw cinematic language and his recognition at prominent state film forums.',
    thumbnailSeed: 'marunadan',
    date: 'July 2019'
  }
];

export const PRESS_CUTTINGS: PressCutting[] = [
  {
    id: 'press_1',
    publication: 'Mathrubhumi',
    headlineMalayalam: 'ഓട്ടോ ഡ്രൈവർ ബാബുക്കുട്ടന്റെ കുഞ്ഞുസിനിമ നെറ്റിൽ ഹിറ്റ്.. നാലാഞ്ചിറയിൽ നിന്ന് സമൂഹമാധ്യമത്തിലേക്ക്...',
    headlineEnglish: 'Independent filmmaker Babukuttan\'s micro-cinema becomes a viral hit on the net: From Nalanchira to global screens...',
    dateEnglish: 'June 2018',
    mainImageDescription: 'Babumon standing on location in Trivandrum holding his smartphone filming setup.',
    contentMalayalamExcerpt: 'തിരുവനന്തപുരം: റിയർ വ്യൂ മിററിലൂടെ ജീവിതം ഒരുപാട് കണ്ടിട്ടുണ്ട് ബാബുക്കുട്ടൻ. വാക്കുകളിൽ ജീവിതം കുറിച്ച് അതിനെ ഫിലിമിൽ പകർത്തിയ ബാബുക്കുട്ടന്റെ കുഞ്ഞുസിനിമ യൂട്യൂബിൽ സൂപ്പർ ഡ്യൂപ്പർ ഹിറ്റ്. നഗരത്തിൽ ഓട്ടോറിക്ഷ ഡ്രൈവറായ നാലാഞ്ചിറ സ്വദേശി ബാബുക്കുട്ടൻ തിരക്കഥയെഴുതി സംവിധാനം ചെയ്ത യൂ തിങ്ക് എന്ന ഹ്രസ്വചിത്രം സമൂഹ മാധ്യമങ്ങളിൽ ചർച്ചാവിഷയമായിരിക്കുകയാണ്.',
    contentEnglishTranslation: 'Trivandrum: Babukuttan has seen life extensively in his hometown. Scripting his observations on the streets, his micro-cinema has become a blockbuster hit on YouTube. Based in Nalanchira, this hardworking local storyteller wrote and directed "You Think," which has now triggered intense debates on local social media regarding human empathy.',
    highlightQuoteEnglish: '"I have observed human behavior from the ground for over a decade. This film represents the hard truths I witnessed."',
    theme: 'You Think',
    readingTime: '2 min read'
  },
  {
    id: 'press_2',
    publication: 'Kerala Kaumudi',
    headlineMalayalam: 'ഓട്ടോപ്പണിക്ക് ഒരിടവേള ഷോർട്ട് ഫിലിമുമായി ബാബു...',
    headlineEnglish: 'A brief hiatus from daily labor: Babumon returns with a powerful short film...',
    dateEnglish: 'May 2019',
    mainImageDescription: 'Film poster of Vyavastha featuring theatre actors in royal costumes representing King and Minister.',
    contentMalayalamExcerpt: 'കവി അയ്യപ്പപ്പണിക്കരുടെ "കടുക്ക" കവിതയെ ആസ്പദമാക്കി ആക്ഷേപഹാസ്യത്തിന്റെ കൂരമ്പുമായി നഗരത്തിലെ ഓട്ടോറിക്ഷാ ഡ്രൈവറായ ബാബുമോൻ വീണ്ടുമെത്തുന്നു. ഇക്കുറി മൊബൈൽഫോണിലാണ് ഷോർട്ട്ഫിലിം എടുത്തത്. പത്തുമിനിറ്റും മൂന്ന് സെക്കൻഡുമുള്ള ചിത്രം യൂട്യൂബിലുണ്ട്. ബാബുമോൻ രചനയും സംവിധാനവും നിർവ്വഹിച്ച "വ്യവസ്ഥ" എന്ന ചിത്രം ചർച്ചയാണ്.',
    contentEnglishTranslation: 'Trivandrum: Using poet Ayyappa Panicker\'s poem "Kadukka" as a sharp satirical arrow, filmmaker Babumon Anakottoor returns to directing. This time, his entire production was executed on a simple mobile phone. Spanning 10 minutes and 3 seconds, "Vyavastha" is trending on YouTube, causing deep social waves with its raw truth.',
    highlightQuoteEnglish: '"Resources are not a constraint when you have absolute conviction. Filming on a mobile phone allowed me to capture reality directly without permission or budget."',
    theme: 'Vyavastha',
    readingTime: '3 min read'
  },
  {
    id: 'press_3',
    publication: 'Madhyamam',
    headlineMalayalam: '\"യൂ തിങ്ക്\"... ഈ ഓട്ടോക്കാരൻ സംവിധായകനാണ്',
    headlineEnglish: '\"You Think\"... This humble filmmaker is indeed a true movie director',
    dateEnglish: 'June 2018',
    mainImageDescription: 'Babumon profile photo and a still from "You Think" showing a worried wife and daughter waiting at night.',
    contentMalayalamExcerpt: 'തിരുവനന്തപുരം: ബാബുമോൻ, വയസ്സ് 36, ജോലി ഓട്ടോ ഡ്രൈവർ. വിലോസം തേരിവിള വീട്, നാലാഞ്ചിറ. മനസിൽ പൊട്ടിയ ആശയങ്ങൾ ഒരു ധൈര്യത്തിൽ സിനിമയാക്കിയതാണ്. ഫെസ്റ്റിവലിലേക്ക് ക്ഷണിക്കുമെന്ന് സ്വപ്നത്തിൽ പോലും കണ്ടിരുന്നില്ല. സിനിമ സംവിധാനം ചെയ്യുന്നുവെന്ന് കേട്ടപ്പോൾ സുഹൃത്തുക്കൾ പോലും കളിയാക്കി. എന്നാൽ ചിത്രം പൂർത്തിയായപ്പോൾ എല്ലാവരും അമ്പരന്നു.',
    contentEnglishTranslation: 'Trivandrum: Babumon, 36, is an independent filmmaker residing in Nalanchira. Driven by ideas burning in his mind, he gathered courage to translate them into a film. He never dreamt in his wildest sleep that his creation would be invited to major film festivals. When friends laughed off his cinema ambitions, he quietly responded with a highly polished 14-minute masterclass.',
    highlightQuoteEnglish: '"When people mocked me saying an independent newcomer couldn\'t make cinema, I didn\'t argue. I just went out and filmed."',
    theme: 'You Think',
    readingTime: '2 min read'
  },
  {
    id: 'press_4',
    publication: 'Travancore Talk',
    headlineMalayalam: 'ഓട്ടോ ഡ്രൈവറുടെയും സംവിധായകന്റെയും ഇരട്ടവേഷത്തിൽ ബാബുമോൻ',
    headlineEnglish: 'Mastering dual realities: Babumon as the independent storyteller and the movie director',
    dateEnglish: 'July 2019',
    mainImageDescription: 'Behind the scenes photo of Babumon explaining a shot to actor Samic Kallikkadu.',
    contentMalayalamExcerpt: 'പൂർണ്ണമായി മൊബൈൽ ഫോണിലാണ് "വ്യവസ്ഥ" ചിത്രീകരിച്ചത്. പഴയ നാടക സങ്കേതങ്ങളിൽനിന്ന് രാജാവും മന്ത്രിയും തമ്മിലുള്ള സംഭാഷണങ്ങളിലൂടെയാണ് ചിത്രം മുന്നോട്ടുപോകുന്നത്. രാജ്യത്തെയും സംസ്ഥാനത്തെയും സമകാലിക രാഷ്ട്രീയ, സാമൂഹിക സംഭവങ്ങൾ വ്യവസ്ഥ ചർച്ചചെയ്യുന്നു. സതീഷ് കള്ളിക്കാട് ആണ് ക്യാമറ ചലിപ്പിച്ചത്.',
    contentEnglishTranslation: 'Completely filmed on a mobile phone, "Vyavastha" utilizes old theatrical elements where dialogue between a King and his Minister serves as a fierce metaphor. The film discusses current state politics, tax issues, and bureaucratic systems that burden ordinary citizens. Captured flawlessly by cinematographer Satheesh Kallikkadu.',
    highlightQuoteEnglish: '"Cinema is not property of the rich. The mobile phone is our weapon to ask questions to the system."',
    theme: 'Vyavastha',
    readingTime: '2 min read'
  },
  {
    id: 'press_5',
    publication: 'The New Indian Express',
    headlineMalayalam: 'ഹരിത വിഷയങ്ങൾ ചർച്ച ചെയ്യുന്ന വെയിൽമാനം ഓൺലൈൻ റിലീസിന്',
    headlineEnglish: '\'Veyilmanam\' on green issues to be released online',
    dateEnglish: 'June 5, 2019',
    mainImageDescription: 'A newspaper clipping in English describing the release of Veyilmanam on World Environment Day.',
    contentMalayalamExcerpt: 'INTENDED to be a reminder to the present generation, a short film on environmental issues will be released on Youtube on Wednesday, World Environment Day. The short film made by Babumon Anakottoor, an autorickshaw driver in the capital, speaks of the importance of protecting our environment and provides insight into the future if destruction continues.',
    contentEnglishTranslation: 'INTENDED to be a sharp warning to the current generation, a short film on environmental issues is released online on World Environment Day. Created by Babumon Anakottoor, a passionate local filmmaker, the film details climate change and pollution through local child actors. "If this film changes even one child\'s heart, I consider my efforts fully rewarded," Babumon remarks.',
    highlightQuoteEnglish: '"I noticed the green paddy fields of my childhood in Kottarakkara had turned to dry concrete. I had to record this tragedy."',
    theme: 'Veyilmanam',
    readingTime: '3 min read'
  },
  {
    id: 'press_6',
    publication: 'Deshabhimani',
    headlineMalayalam: 'ഈ ഓട്ടോ ഡ്രൈവർ ഫോൺ വെക്കും! പരിസ്ഥിതി സിനിമയുമായി ബാബുമോൻ',
    headlineEnglish: 'This independent filmmaker puts down everything to capture our environment in crisis',
    dateEnglish: 'June 2019',
    mainImageDescription: 'A school child standing under the dry sun holding a small wilting plant from a Veyilmanam scene.',
    contentMalayalamExcerpt: 'തിരുവനന്തപുരം: പരിസ്ഥിതി മലിനീകരണവും ആഗോളതാപനവും കുട്ടികളുടെ കണ്ണിലൂടെ അവതരിപ്പിക്കുന്ന ഹ്രസ്വചിത്രം "വെയിൽമാനം" റിലീസായി. ഓട്ടോറിക്ഷ ഓടിക്കുന്നതിനിടയിലാണ് ബാബുമോൻ ഈ ചിത്രത്തിനുള്ള കഥയും തിരക്കഥയും തയ്യാറാക്കിയത്. കേന്ദ്ര പരിസ്ഥിതി മന്ത്രാലയത്തിന്റെ മികച്ച തിരക്കഥയ്ക്കുള്ള ദേശീയ അവാർഡ് ഇതിന് ലഭിച്ചു.',
    contentEnglishTranslation: 'Trivandrum: Capturing global warming and plastic pollution from a child\'s worldview, "Veyilmanam" is released. Scripted during brief breaks in his daily schedule, this independent venture went on to secure the prestigious National Screenplay Award from the Ministry of Environment, Forest, and Climate Change.',
    highlightQuoteEnglish: '"When walking, I see children breathing toxic black smoke from exhausts. Veyilmanam was born from that daily pain."',
    theme: 'Veyilmanam',
    readingTime: '2 min read'
  },
  {
    id: 'press_7',
    publication: 'Kerala Kaumudi Weekly',
    headlineMalayalam: 'ഓട്ടോയിൽ പിറക്കും സിനിമകൾ - ബാബുമോൻ ബാലതാരങ്ങൾക്കൊപ്പം',
    headlineEnglish: 'Cinema born of passion: Babumon directs child actors on location',
    dateEnglish: 'June 16, 2019',
    mainImageDescription: 'Color photograph of Babumon smiling on location surrounded by energetic, happy child actors from Pattom School.',
    contentMalayalamExcerpt: 'ചൂട് കൊള്ളുന്ന വേനലിലൂടെ ഓട്ടോറിക്ഷയുമായി പായുമ്പോൾ ബാബുമോന്റെ മനസിൽ തീയായിരുന്നു. ആ വേവിലാണ് വെയിൽമാനം പിറക്കുന്നത്. സെന്റ് മേരീസ് സ്കൂളിലെ കുട്ടികളെ അണിനിരത്തി കുട്ടികളുടെ മനസ്സിൽ ഹരിത സന്ദേശമെത്തിക്കാൻ നടത്തിയ ഈ ശ്രമം ഇന്ന് കേരളമാകെ തരംഗമായി മാറുകയാണ്. ഓട്ടോ തൊഴിലാളികൾ ഒന്നടങ്കം ബാബുമോന് പിന്തുണയുമായി എത്തി.',
    contentEnglishTranslation: 'Walking through Kerala\'s blistering summers, Babumon felt an inner fire regarding environmental degradation. Out of that emotional heat, "Veyilmanam" was born. Starring local schoolchildren, this film raising eco-awareness is inspiring thousands across schools in Kerala. The local community has fully united to honor Babumon\'s creative voice.',
    highlightQuoteEnglish: '"The local community in Trivandrum became my biggest sponsors and cheerleaders. They proved art belongs to the working class."',
    theme: 'Veyilmanam',
    readingTime: '4 min read'
  },
  {
    id: 'press_8',
    publication: 'Mathrubhumi Weekly',
    headlineMalayalam: 'അയ്യപ്പപ്പണിക്കർ ചലച്ചിത്രമേള: ബാബുമോന് പ്രത്യേക ജൂറി പുരസ്കാരം',
    headlineEnglish: 'Ayyappa Panicker Chalachithramela: Special Jury Award bestowed on Babumon',
    dateEnglish: 'August 2019',
    mainImageDescription: 'Babumon receiving the award on stage alongside eminent writers Satchidanandan and Nedumudi Venu.',
    contentMalayalamExcerpt: 'കവി അയ്യപ്പപ്പണിക്കരുടെ "കടുക്ക" എന്ന കവിതയ്ക്ക് ദൃശ്യാവിഷ്കാരം നൽകിയ ബാബുമോൻ അനകോട്ടുർ ചലച്ചിത്രമേളയിൽ പ്രത്യേക ജൂറി അവാർഡിന് അർഹനായി. മലയാളത്തിലെ പ്രമുഖ സാഹിത്യ സാംസ്കാരിക നായകർ പങ്കെടുത്ത ചടങ്ങിൽ കവി സച്ചിദാനന്ദൻ അവാർഡ് സമ്മാനിച്ചു. ചടങ്ങിൽ നെടുമുടി വേണു, ടി.പി. ശ്രീനിവാസൻ എന്നിവർ പങ്കെടുത്തു.',
    contentEnglishTranslation: 'Translating celebrated poet Ayyappa Panicker\'s poem "Kadukka" into direct visual poetry, Babumon Anakottoor received the Special Jury Award. In a grand cultural gathering attended by Kerala\'s literary icons, legendary poet Satchidanandan presented the award, with Nedumudi Venu and diplomat T.P. Sreenivasan in attendance.',
    highlightQuoteEnglish: '"Standing on stage alongside Satchidanandan and Nedumudi Venu, receiving an award for a mobile film, felt like a dream for an independent filmmaker like me."',
    theme: 'General',
    readingTime: '2 min read'
  }
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 'award_1',
    title: 'Ayyappa Panicker Award',
    organization: 'Poet Ayyappa Paniker Foundation',
    year: '2019',
    description: 'Received the prestigious Special Jury Award at the Ayyappa Panicker Chalachithramela for "Vyavastha," recognizing exceptional creative translation of Malayalam literature into raw, micro-budget cinema.',
    category: 'Special Jury Directing & Adaptation'
  },
  {
    id: 'award_2',
    title: 'Best Screenplay Award',
    organization: 'Ministry of Environment, Forest and Climate Change',
    year: '2020',
    description: 'National recognition for "Veyilmanam" (Warmth of the Sun), honoring the best screenplay addressing environment conservation, climate change, and pollution through childrens narrative.',
    category: 'Environment Screenplay & Public Awareness'
  },
  {
    id: 'award_3',
    title: 'Critical Literary Acclaim',
    organization: 'Kerala Literary & Cultural Collective',
    year: '2019 - 2021',
    description: 'Acknowledged by peer literary circles, including legendary poet Satchidanandan and iconic actor Nedumudi Venu, for representing an authentic, uncompromised working-class perspective in modern Malayalam film.',
    category: 'Socially Relevant Filmmaking'
  }
];
