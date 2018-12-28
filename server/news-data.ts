export interface NewsItem {
  id: number;
  header: string;
  body: string;
}

export const NEWS: Array<NewsItem> = [
  {
    id: 1,
    header: 'Snow in Las-Vegas',
    body: 'For the first time ever - it started snowing in Las Vegas in July !'
  },

  {
    id: 2,
    header: 'Bruno Mars Show',
    body:
      'The great singer will perform this Tuesday @ Microsoft Ready/Inspire events !'
  }
];
