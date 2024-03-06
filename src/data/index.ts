export interface IEvent {
  id: string;
  date: string;
  description: string;
}

export interface IDiscipline {
  id: string;
  title: string;
  dateStart: number;
  dateEnd: number;
  events: IEvent[];
}

export const disciplines: IDiscipline[] = [
  {
    id: 'tech',
    title: 'Technology',
    dateStart: 1980,
    dateEnd: 1986,
    events: [
      {
        id: 'tech_1980',
        date: '1980',
        description:
          'Development and release of the first IBM PC, a significant milestone in the history of computerization.',
      },
      {
        id: 'tech_1981',
        date: '1981',
        description:
          'Introduction of the first portable computer, Osborne 1, which became the first commercially successful portable computer.',
      },
      {
        id: 'tech_1983',
        date: '1983',
        description:
          'Launch of the ARPANET project, the precursor to the modern internet, a crucial development in network technology.',
      },
      {
        id: 'tech_1984',
        date: '1984',
        description:
          'Introduction of the Macintosh computer by Apple with a graphical user interface and a mouse, significantly changing the computer industry.',
      },
      {
        id: 'tech_1985',
        date: '1985',
        description:
          'Release of Microsoft Windows 1.0, laying the foundation for the subsequent success of Windows operating systems.',
      },
      {
        id: 'tech_1986',
        date: '1986',
        description:
          'Start of the "Space Man" program, aimed at creating the first communication module for satellite phone networks.',
      },
    ],
  },
  {
    id: 'movies',
    title: 'Movies',
    dateStart: 1987,
    dateEnd: 1991,
    events: [
      {
        id: 'movies_1987',
        date: '1987',
        description:
          'Premiere of the film "Braveheart" starring Mel Gibson, which received numerous awards, including the Oscar for Best Picture and Best Director.',
      },
      {
        id: 'movies_1988',
        date: '1988',
        description:
          'Release of the animated film "The Lion King" by Disney, becoming a cult classic and one of the most successful animated films.',
      },
      {
        id: 'movies_1989',
        date: '1989',
        description:
          'Premiere of the film "Back to the Future Part II," a sci-fi classic that gained audience recognition.',
      },
      {
        id: 'movies_1990',
        date: '1990',
        description:
          'Release of the film "Dances with Wolves" starring Kevin Costner, winning 7 Oscars, including Best Picture and Best Director.',
      },
      {
        id: 'movies_1991',
        date: '1991',
        description:
          'Premiere of the film "The Silence of the Lambs" with Jodie Foster and Anthony Hopkins, becoming a cult thriller and winning 5 Oscars.',
      },
    ],
  },
  {
    id: 'literature',
    title: 'Literature',
    dateStart: 1992,
    dateEnd: 1997,
    events: [
      {
        id: 'literature_1992',
        date: '1992',
        description:
          'Publication of the novel "Gone Girl" by Gillian Flynn, becoming a bestseller and receiving numerous awards.',
      },
      {
        id: 'literature_1993',
        date: '1993',
        description:
          'Awarding of the Nobel Prize in Literature to Toni Morrison for her contribution to American literature, especially in narrating the experiences of the African American population.',
      },
      {
        id: 'literature_1994',
        date: '1994',
        description:
          'Release of the novel "Forrest Gump" by Winston Groom, later adapted into the popular film of the same name.',
      },
      {
        id: 'literature_1995',
        date: '1995',
        description:
          'Publication of "Eternal Sunshine of the Spotless Mind" by Michel Gondry, the screenplay for the film that won an Oscar.',
      },
      {
        id: 'literature_1996',
        date: '1996',
        description:
          'Release of the first Harry Potter novel, "Harry Potter and the Philosopher\'s Stone" by J.K. Rowling, becoming a global bestseller.',
      },
      {
        id: 'literature_1997',
        date: '1997',
        description:
          'Premiere of the novel "About a Boy" by David Nicholls, also successfully adapted into a film.',
      },
    ],
  },
  {
    id: 'music',
    title: 'Music',
    dateStart: 1998,
    dateEnd: 2005,
    events: [
      {
        id: 'music_1998',
        date: '1998',
        description:
          'Release of the debut album "Hot!" by the band "Splean," immediately gaining popularity in the Russian music scene.',
      },
      {
        id: 'music_1999',
        date: '1999',
        description:
          'Release of the album "Millennium" by the boy band Backstreet Boys, becoming one of the best-selling albums of the decade.',
      },
      {
        id: 'music_2001',
        date: '2001',
        description:
          'Release of the album "Hybrid Theory" by Linkin Park, bringing them global fame and achieving platinum status.',
      },
      {
        id: 'music_2002',
        date: '2002',
        description:
          'Premiere of the symphonic album "A Night at the Opera" by Queen, including the epic composition "Bohemian Rhapsody."',
      },
      {
        id: 'music_2004',
        date: '2004',
        description:
          'Release of the album "Confessions" by Usher, becoming one of the most successful R&B albums and earning several Grammys.',
      },
      {
        id: 'music_2005',
        date: '2005',
        description:
          'Release of the album "X&Y" by Coldplay, achieving commercial success and receiving positive reviews from critics.',
      },
    ],
  },
  {
    id: 'sports',
    title: 'Sports',
    dateStart: 2006,
    dateEnd: 2014,
    events: [
      {
        id: 'sports_2006',
        date: '2006',
        description:
          'FIFA World Cup in Germany, where the Italian national team emerged as the winner, defeating the French national team in the final.',
      },
      {
        id: 'sports_2008',
        date: '2008',
        description:
          'Summer Olympic Games in Beijing, where China topped the overall medal standings, and Usain Bolt set world records in the 100m and 200m sprints.',
      },
      {
        id: 'sports_2010',
        date: '2010',
        description:
          'FIFA World Cup in South Africa, where the Spanish national team won the tournament, defeating the Dutch national team in the final.',
      },
      {
        id: 'sports_2012',
        date: '2012',
        description:
          'Summer Olympic Games in London, where the USA topped the overall medal standings, and Michael Phelps set a record, becoming the most successful Olympic swimmer.',
      },
      {
        id: 'sports_2014',
        date: '2014',
        description:
          'Winter Olympic Games in Sochi, where Russia topped the overall medal standings, and several records were set during the tournament.',
      },
    ],
  },

  {
    id: 'science',
    title: 'Science',
    dateStart: 2015,
    dateEnd: 2022,
    events: [
      {
        id: 'science_20151',
        date: '2015',
        description:
          'Announcement of the detection of gravitational waves, predicted by Albert Einstein over 100 years ago.',
      },
      {
        id: 'science_2015',
        date: '2015',
        description:
          'Successful landing of the Philae robot on Comet 67P/Churyumov-Gerasimenko after a long journey aboard the Rosetta spacecraft.',
      },
      {
        id: 'science_2016',
        date: '2016',
        description:
          'Discovery of an exoplanet in the habitable zone around Proxima Centauri, the closest star to us.',
      },
      {
        id: 'science_2018',
        date: '2018',
        description:
          "Conclusion of the mission of the Chinese space lab Tiangong-1, re-entering the Earth's atmosphere and burning up.",
      },
      {
        id: 'science_2020',
        date: '2020',
        description:
          'Development and successful trials of COVID-19 vaccines, including vaccines from Pfizer-BioNTech, Moderna, and AstraZeneca.',
      },
      {
        id: 'science_2021',
        date: '2021',
        description:
          'First-ever human-made spacecraft landing on the surface of Mars - the Perseverance rover.',
      },
    ],
  },
];
