export type TGame = {
  date: string
  time: string
  place: string
  home: string
  away: string
  result: [string | number | null, string | number | null]
}

export type TDataKey = 'Oitavas de final'

export type TData = Partial<Record<TDataKey, TGame[]>>

export const data: TData = {
  'Oitavas de final': [
    {
      date: '04/jul',
      time: '14:00',
      place: 'Filadélfia',
      home: 'Canadá',
      away: 'Marrocos',
      result: [null, null]
    },
    {
      date: '04/jul',
      time: '18:00',
      place: 'Houston',
      home: 'Paraguai',
      away: 'França',
      result: [null, null]
    },
    {
      date: '05/jul',
      time: '17:00',
      place: 'Dallas',
      home: 'Brasil',
      away: 'Noruega',
      result: [null, null]
    },
    {
      date: '05/jul',
      time: '21:00',
      place: 'Seattle Field',
      home: 'México',
      away: 'Inglaterra',
      result: [null, null]
    },
    {
      date: '06/jul',
      time: '16:00',
      place: 'Nova Jersey',
      home: 'Portugal',
      away: 'Espanha',
      result: [null, null]
    },
    {
      date: '06/jul',
      time: '21:00',
      place: 'Azteca',
      home: 'Estados Unidos',
      away: 'Bélgica',
      result: [null, null]
    },
    {
      date: '07/jul',
      time: '13:00',
      place: 'Atlanta',
      home: 'Argentina',
      away: 'Egito',
      result: [null, null]
    },
    {
      date: '07/jul',
      time: '17:00',
      place: 'Vancouver Place',
      home: 'Suíça',
      away: 'Colômbia',
      result: [null, null]
    }
  ]
}
