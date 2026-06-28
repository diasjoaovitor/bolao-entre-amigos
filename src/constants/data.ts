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
      result: [1, 2] // Canadá 2x1 Africa do Sul — país-sede com forte apoio; vitória canadense por 2x1 maximiza pontos esperados
    },
    {
      date: '29/jun',
      time: '14:00',
      place: 'Nova Jersey',
      home: 'Brasil',
      away: 'Japão',
      result: [2, 1] // Brasil 2x1 Japão — Brasil superior mas Japão é perigoso (derrubou Alemanha e Espanha em 2022); 2x1 captura vitória + placar comum
    },
    {
      date: '29/jun',
      time: '17:30',
      place: 'Los Angeles',
      home: 'Alemanha',
      away: 'Paraguai',
      result: [2, 1] // Alemanha 2x1 Paraguai — Alemanha domina tecnicamente; Paraguai defensivo pode marcar no contra-ataque
    },
    {
      date: '29/jun',
      time: '22:00',
      place: 'El Gigante de Acero',
      home: 'Holanda',
      away: 'Marrocos',
      result: [2, 1] // Holanda 2x1 Marrocos — Marrocos tem defesa sólida (semifinalista 2022) mas Holanda tem mais qualidade ofensiva
    },
    {
      date: '30/jun',
      time: '14:00',
      place: 'Toronto Field',
      home: 'Costa do Marfim',
      away: 'Noruega',
      result: [1, 2] // Noruega 2x1 Costa do Marfim — Haaland decisivo; Costa do Marfim física mas Noruega favorita
    },
    {
      date: '30/jun',
      time: '18:00',
      place: 'Los Angeles',
      home: 'França',
      away: 'Suécia',
      result: [2, 1] // França 2x1 Suécia — França claramente superior; Suécia pode marcar mas não segurar
    },
    {
      date: '30/jun',
      time: '22:00',
      place: 'Santa Clara',
      home: 'México',
      away: 'Equador',
      result: [2, 1] // México 2x1 Equador — México com enorme apoio da torcida como país-sede; Equador pode complicar
    },
    {
      date: '01/jul',
      time: '17:00',
      place: 'Seattle Field',
      home: 'Bélgica',
      away: 'Senegal',
      result: [2, 1] // Bélgica 2x1 Senegal — Bélgica levemente favorita; Senegal é bem organizado mas tem desvantagem técnica
    },
    {
      date: '01/jul',
      time: '19:00',
      place: 'Houston',
      home: 'Inglaterra',
      away: 'RD Congo',
      result: [2, 0] // Inglaterra 2x0 RD Congo — grande diferença de nível; RD Congo improvável de marcar
    },
    {
      date: '01/jul',
      time: '21:00',
      place: 'Dallas',
      home: 'Estados Unidos',
      away: 'Bósnia',
      result: [2, 1] // EUA 2x1 Bósnia — EUA em casa com apoio massivo; Bósnia física pode diminuir
    },
    {
      date: '02/jul',
      time: '16:00',
      place: 'Azteca',
      home: 'Espanha',
      away: 'Áustria',
      result: [2, 1] // Espanha 2x1 Áustria — Espanha técnica e dominante; Áustria cresceu muito mas ainda inferior
    },
    {
      date: '02/jul',
      time: '20:00',
      place: 'Atlanta',
      home: 'Portugal',
      away: 'Croácia',
      result: [2, 1] // Portugal 2x1 Croácia — Portugal favorito; Croácia experiente (finalista 2018) e capaz de marcar
    },
    {
      date: '03/jul',
      time: '00:00',
      place: 'Miami',
      home: 'Suíça',
      away: 'Argélia',
      result: [2, 1] // Suíça 2x1 Argélia — Suíça mais consistente na Europa; Argélia perigosa mas inferior no ranking
    },
    {
      date: '03/jul',
      time: '15:00',
      place: 'Dallas',
      home: 'Austrália',
      away: 'Egito',
      result: [1, 2] // Egito 2x1 Austrália — Salah ainda decisivo; Austrália melhorou mas Egito tem mais talento individual
    },
    {
      date: '03/jul',
      time: '19:00',
      place: 'Vancouver Place',
      home: 'Argentina',
      away: 'Cabo Verde',
      result: [3, 0] // Argentina 3x0 Cabo Verde — campeã mundial contra um estreante; diferença abissal de nível
    },
    {
      date: '03/jul',
      time: '22:30',
      place: 'Kansas City',
      home: 'Colômbia',
      away: 'Gana',
      result: [2, 1] // Colômbia 2x1 Gana — Colômbia superior com ataque dinâmico; Gana pode pontuar mas não segurar
    }
  ]
}
