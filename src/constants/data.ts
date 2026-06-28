export type TGame = {
  date: string
  time: string
  place: string
  home: string
  away: string
  result: [string | number | null, string | number | null]
}

export type TDataKey = 'Dezesseis avos de final'

export type TData = Partial<Record<TDataKey, TGame[]>>

export const data: TData = {
  'Dezesseis avos de final': [
    {
      date: '28/jun',
      time: '16:00',
      place: 'Boston',
      home: 'Africa do Sul',
      away: 'Canadá',
      result: [null, null]
    },
    {
      date: '29/jun',
      time: '14:00',
      place: 'Nova Jersey',
      home: 'Brasil',
      away: 'Japão',
      result: [null, null]
    },
    {
      date: '29/jun',
      time: '17:30',
      place: 'Los Angeles',
      home: 'Alemanha',
      away: 'Paraguai',
      result: [null, null]
    },
    {
      date: '29/jun',
      time: '22:00',
      place: 'El Gigante de Acero',
      home: 'Holanda',
      away: 'Marrocos',
      result: [null, null]
    },
    {
      date: '30/jun',
      time: '14:00',
      place: 'Toronto Field',
      home: 'Costa do Marfim',
      away: 'Noruega',
      result: [null, null]
    },
    {
      date: '30/jun',
      time: '18:00',
      place: 'Los Angeles',
      home: 'França',
      away: 'Suécia',
      result: [null, null]
    },
    {
      date: '30/jun',
      time: '22:00',
      place: 'Santa Clara',
      home: 'México',
      away: 'Equador',
      result: [null, null]
    },
    {
      date: '01/jul',
      time: '17:00',
      place: 'Seattle Field',
      home: 'Bélgica',
      away: 'Senegal',
      result: [null, null]
    },
    {
      date: '01/jul',
      time: '19:00',
      place: 'Houston',
      home: 'Inglaterra',
      away: 'RD Congo',
      result: [null, null]
    },
    {
      date: '01/jul',
      time: '21:00',
      place: 'Dallas',
      home: 'Estados Unidos',
      away: 'Bósnia',
      result: [null, null]
    },
    {
      date: '02/jul',
      time: '16:00',
      place: 'Azteca',
      home: 'Espanha',
      away: 'Áustria',
      result: [null, null]
    },
    {
      date: '02/jul',
      time: '20:00',
      place: 'Atlanta',
      home: 'Portugal',
      away: 'Croácia',
      result: [null, null]
    },
    {
      date: '03/jul',
      time: '00:00',
      place: 'Miami',
      home: 'Suíça',
      away: 'Argélia',
      result: [null, null]
    },
    {
      date: '03/jul',
      time: '15:00',
      place: 'Dallas',
      home: 'Austrália',
      away: 'Egito',
      result: [null, null]
    },
    {
      date: '03/jul',
      time: '19:00',
      place: 'Vancouver Place',
      home: 'Argentina',
      away: 'Cabo Verde',
      result: [null, null]
    },
    {
      date: '03/jul',
      time: '22:30',
      place: 'Kansas City',
      home: 'Colômbia',
      away: 'Gana',
      result: [null, null]
    }
  ]
}
