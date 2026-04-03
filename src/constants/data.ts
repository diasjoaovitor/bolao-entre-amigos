export type TGame = {
  date: string
  time: string
  place: string
  home: string
  away: string
  result: [string | number | null, string | number | null]
}

export type TDataKey =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'

export type TData = Partial<Record<TDataKey, TGame[]>>

export const data: TData = {
  A: [
    {
      date: '11/jun',
      time: '16:00',
      place: 'Azteca',
      home: 'Africa do Sul',
      away: 'México',
      result: [null, null]
    },
    {
      date: '11/jun',
      time: '23:00',
      place: 'Akron',
      home: 'República Tcheca',
      away: 'Coreia do Sul',
      result: [null, null]
    },
    {
      date: '18/jun',
      time: '13:00',
      place: 'Atlanta',
      home: 'República Tcheca',
      away: 'Africa do Sul',
      result: [null, null]
    },
    {
      date: '18/jun',
      time: '22:00',
      place: 'Akron',
      home: 'Coreia do Sul',
      away: 'México',
      result: [null, null]
    },
    {
      date: '24/jun',
      time: '22:00',
      place: 'Azteca',
      home: 'México',
      away: 'República Tcheca',
      result: [null, null]
    },
    {
      date: '24/jun',
      time: '22:00',
      place: 'El Gigante de Acero',
      home: 'Africa do Sul',
      away: 'Coreia do Sul',
      result: [null, null]
    }
  ],
  B: [
    {
      date: '12/jun',
      time: '16:00',
      place: 'Toronto Field',
      home: 'Canadá',
      away: 'Bósnia',
      result: [null, null]
    },
    {
      date: '13/jun',
      time: '16:00',
      place: 'Santa Clara',
      home: 'Catar',
      away: 'Suíça',
      result: [null, null]
    },
    {
      date: '18/jun',
      time: '16:00',
      place: 'Los Angeles',
      home: 'Bósnia',
      away: 'Suíça',
      result: [null, null]
    },
    {
      date: '18/jun',
      time: '19:00',
      place: 'Vancouver Place',
      home: 'Catar',
      away: 'Canadá',
      result: [null, null]
    },
    {
      date: '24/jun',
      time: '16:00',
      place: 'Vancouver Place',
      home: 'Suíça',
      away: 'Canadá',
      result: [null, null]
    },
    {
      date: '24/jun',
      time: '16:00',
      place: 'Seattle Field',
      home: 'Bósnia',
      away: 'Catar',
      result: [null, null]
    }
  ],
  C: [
    {
      date: '13/jun',
      time: '19:00',
      place: 'Nova Jersey',
      home: 'Marrocos',
      away: 'Brasil',
      result: [null, null]
    },
    {
      date: '13/jun',
      time: '22:00',
      place: 'Boston',
      home: 'Haiti',
      away: 'Escócia',
      result: [null, null]
    },
    {
      date: '19/jun',
      time: '19:00',
      place: 'Boston',
      home: 'Escócia',
      away: 'Marrocos',
      result: [null, null]
    },
    {
      date: '19/jun',
      time: '22:00',
      place: 'Filadélfia',
      home: 'Brasil',
      away: 'Haiti',
      result: [null, null]
    },
    {
      date: '24/jun',
      time: '19:00',
      place: 'Miami',
      home: 'Escócia',
      away: 'Brasil',
      result: [null, null]
    },
    {
      date: '24/jun',
      time: '19:00',
      place: 'Atlanta',
      home: 'Haiti',
      away: 'Marrocos',
      result: [null, null]
    }
  ],
  D: [
    {
      date: '12/jun',
      time: '22:00',
      place: 'Los Angeles',
      home: 'Paraguai',
      away: 'Estados Unidos',
      result: [null, null]
    },
    {
      date: '13/jun',
      time: '01:00',
      place: 'Vancouver Place',
      home: 'Turquia',
      away: 'Austrália',
      result: [null, null]
    },
    {
      date: '19/jun',
      time: '01:00',
      place: 'Santa Clara',
      home: 'Turquia',
      away: 'Paraguai',
      result: [null, null]
    },
    {
      date: '19/jun',
      time: '16:00',
      place: 'Seattle Field',
      home: 'Austrália',
      away: 'Estados Unidos',
      result: [null, null]
    },
    {
      date: '25/jun',
      time: '23:00',
      place: 'Los Angeles',
      home: 'Estados Unidos',
      away: 'Turquia',
      result: [null, null]
    },
    {
      date: '25/jun',
      time: '23:00',
      place: 'Santa Clara',
      home: 'Paraguai',
      away: 'Austrália',
      result: [null, null]
    }
  ],
  E: [
    {
      date: '14/jun',
      time: '14:00',
      place: 'Houston',
      home: 'Alemanha',
      away: 'Curação',
      result: [null, null]
    },
    {
      date: '14/jun',
      time: '20:00',
      place: 'Filadélfia',
      home: 'Costa do Marfim',
      away: 'Equador',
      result: [null, null]
    },
    {
      date: '20/jun',
      time: '17:00',
      place: 'Toronto Field',
      home: 'Costa do Marfim',
      away: 'Alemanha',
      result: [null, null]
    },
    {
      date: '20/jun',
      time: '21:00',
      place: 'Kansas City',
      home: 'Curação',
      away: 'Equador',
      result: [null, null]
    },
    {
      date: '25/jun',
      time: '17:00',
      place: 'Nova Jersey',
      home: 'Equador',
      away: 'Alemanha',
      result: [null, null]
    },
    {
      date: '25/jun',
      time: '17:00',
      place: 'Filadélfia',
      home: 'Curação',
      away: 'Costa do Marfim',
      result: [null, null]
    }
  ],
  F: [
    {
      date: '14/jun',
      time: '17:00',
      place: 'Dallas',
      home: 'Japão',
      away: 'Holanda',
      result: [null, null]
    },
    {
      date: '14/jun',
      time: '23:00',
      place: 'El Gigante de Acero',
      home: 'Suécia',
      away: 'Tunísia',
      result: [null, null]
    },
    {
      date: '20/jun',
      time: '14:00',
      place: 'Houston',
      home: 'Holanda',
      away: 'Suécia',
      result: [null, null]
    },
    {
      date: '21/jun',
      time: '01:00',
      place: 'El Gigante de Acero',
      home: 'Tunísia',
      away: 'Japão',
      result: [null, null]
    },
    {
      date: '25/jun',
      time: '20:00',
      place: 'Kansas City',
      home: 'Tunísia',
      away: 'Holanda',
      result: [null, null]
    },
    {
      date: '25/jun',
      time: '20:00',
      place: 'Dallas',
      home: 'Suécia',
      away: 'Japão',
      result: [null, null]
    }
  ],
  G: [
    {
      date: '15/jun',
      time: '16:00',
      place: 'Seattle Field',
      home: 'Egito',
      away: 'Bélgica',
      result: [null, null]
    },
    {
      date: '15/jun',
      time: '22:00',
      place: 'Los Angeles',
      home: 'Nova Zelândia',
      away: 'Ira',
      result: [null, null]
    },
    {
      date: '21/jun',
      time: '16:00',
      place: 'Los Angeles',
      home: 'Ira',
      away: 'Bélgica',
      result: [null, null]
    },
    {
      date: '21/jun',
      time: '22:00',
      place: 'Vancouver Place',
      home: 'Nova Zelândia',
      away: 'Egito',
      result: [null, null]
    },
    {
      date: '27/jun',
      time: '00:00',
      place: 'Vancouver Place',
      home: 'Bélgica',
      away: 'Nova Zelândia',
      result: [null, null]
    },
    {
      date: '27/jun',
      time: '00:00',
      place: 'Seattle Field',
      home: 'Egito',
      away: 'Ira',
      result: [null, null]
    }
  ],
  H: [
    {
      date: '15/jun',
      time: '13:00',
      place: 'Atlanta',
      home: 'Espanha',
      away: 'Cabo Verde',
      result: [null, null]
    },
    {
      date: '15/jun',
      time: '19:00',
      place: 'Miami',
      home: 'Arábia Saldita',
      away: 'Uruguai',
      result: [null, null]
    },
    {
      date: '21/jun',
      time: '13:00',
      place: 'Atlanta',
      home: 'Arábia Saldita',
      away: 'Espanha',
      result: [null, null]
    },
    {
      date: '21/jun',
      time: '19:00',
      place: 'Miami',
      home: 'Cabo Verde',
      away: 'Uruguai',
      result: [null, null]
    },
    {
      date: '26/jun',
      time: '21:00',
      place: 'Akron',
      home: 'Uruguai',
      away: 'Espanha',
      result: [null, null]
    },
    {
      date: '26/jun',
      time: '21:00',
      place: 'Houston',
      home: 'Cabo Verde',
      away: 'Arábia Saldita',
      result: [null, null]
    }
  ],
  I: [
    {
      date: '16/jun',
      time: '16:00',
      place: 'Nova Jersey',
      home: 'Senegal',
      away: 'França',
      result: [null, null]
    },
    {
      date: '16/jun',
      time: '19:00',
      place: 'Boston',
      home: 'Iraque',
      away: 'Noruega',
      result: [null, null]
    },
    {
      date: '22/jun',
      time: '18:00',
      place: 'Filadélfia',
      home: 'França',
      away: 'Iraque',
      result: [null, null]
    },
    {
      date: '22/jun',
      time: '21:00',
      place: 'Nova Jersey',
      home: 'Noruega',
      away: 'Senegal',
      result: [null, null]
    },
    {
      date: '26/jun',
      time: '16:00',
      place: 'Boston',
      home: 'Noruega',
      away: 'França',
      result: [null, null]
    },
    {
      date: '26/jun',
      time: '16:00',
      place: 'Toronto Field',
      home: 'Iraque',
      away: 'Senegal',
      result: [null, null]
    }
  ],
  J: [
    {
      date: '16/jun',
      time: '22:00',
      place: 'Kansas City',
      home: 'Argélia',
      away: 'Argentina',
      result: [null, null]
    },
    {
      date: '17/jun',
      time: '01:00',
      place: 'Santa Clara',
      home: 'Jordânia',
      away: 'Áustria',
      result: [null, null]
    },
    {
      date: '22/jun',
      time: '14:00',
      place: 'Dallas',
      home: 'Áustria',
      away: 'Argentina',
      result: [null, null]
    },
    {
      date: '23/jun',
      time: '00:00',
      place: 'Santa Clara',
      home: 'Jordânia',
      away: 'Argélia',
      result: [null, null]
    },
    {
      date: '27/jun',
      time: '23:00',
      place: 'Dallas',
      home: 'Argentina',
      away: 'Jordânia',
      result: [null, null]
    },
    {
      date: '27/jun',
      time: '23:00',
      place: 'Kansas City',
      home: 'Argélia',
      away: 'Áustria',
      result: [null, null]
    }
  ],
  K: [
    {
      date: '17/jun',
      time: '14:00',
      place: 'Houston',
      home: 'Portugal',
      away: 'RD Congo',
      result: [null, null]
    },
    {
      date: '17/jun',
      time: '23:00',
      place: 'Azteca',
      home: 'Uzbequistão',
      away: 'Colômbia',
      result: [null, null]
    },
    {
      date: '23/jun',
      time: '14:00',
      place: 'Houston',
      home: 'Uzbequistão',
      away: 'Portugal',
      result: [null, null]
    },
    {
      date: '23/jun',
      time: '23:00',
      place: 'Akron',
      home: 'RD Congo',
      away: 'Colômbia',
      result: [null, null]
    },
    {
      date: '27/jun',
      time: '20:30',
      place: 'Miami',
      home: 'Colômbia',
      away: 'Portugal',
      result: [null, null]
    },
    {
      date: '27/jun',
      time: '20:30',
      place: 'Atlanta',
      home: 'RD Congo',
      away: 'Uzbequistão',
      result: [null, null]
    }
  ],
  L: [
    {
      date: '17/jun',
      time: '17:00',
      place: 'Dallas',
      home: 'Croácia',
      away: 'Inglaterra',
      result: [null, null]
    },
    {
      date: '17/jun',
      time: '20:00',
      place: 'Toronto Field',
      home: 'Gana',
      away: 'Panamá',
      result: [null, null]
    },
    {
      date: '23/jun',
      time: '17:00',
      place: 'Boston',
      home: 'Inglaterra',
      away: 'Gana',
      result: [null, null]
    },
    {
      date: '23/jun',
      time: '20:00',
      place: 'Toronto Field',
      home: 'Panamá',
      away: 'Croácia',
      result: [null, null]
    },
    {
      date: '27/jun',
      time: '18:00',
      place: 'Nova Jersey',
      home: 'Panamá',
      away: 'Inglaterra',
      result: [null, null]
    },
    {
      date: '27/jun',
      time: '18:00',
      place: 'Filadélfia',
      home: 'Gana',
      away: 'Croácia',
      result: [null, null]
    }
  ]
}
