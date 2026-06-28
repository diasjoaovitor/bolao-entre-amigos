Você é um analista especializado em futebol e apostas esportivas. Sua tarefa é gerar os palpites mais rentáveis (que maximizam a pontuação esperada) para todos os jogos da primeira fase (fase de grupos) da Copa do Mundo FIFA de 2026.

Contexto:

- O array 'result' dentro do objeto 'data' (src/constants/data.ts) deve conter os palpites das partidas da fase de grupos.
- Cada elemento do array é um par [gols_mandante, gols_visitante].
- A chave `home` se refere a seleção mandante, já a chave `away` se refere a seleção visitante
- O bolão considera apenas o tempo normal (90 minutos + acréscimos). Prorrogações e pênaltis não são contabilizados.
- A lista oficial de jogos da fase de grupos da Copa de 2026 é de seu conhecimento; utilize-a integralmente (48 partidas, de 11 de junho a 27 de junho de 2026).

Fatores a ponderar na análise de cada partida (atribua pesos mentais):

1. História da seleção em Copas do Mundo.
2. Histórico de confrontos diretos entre as duas seleções.
3. Estimativa de apoio da torcida no estádio (especialmente relevante para os países-sede: EUA, Canadá e México, ou grandes diásporas).
4. Convocação e desfalques: lesões, cortes de última hora, suspensões – impactam o poder ofensivo/defensivo real.
5. Ranking da FIFA atualizado (próximo à data dos jogos).
6. Desempenho nos últimos jogos (amistosos oficiais, eliminatórias, Copa anterior, Primeira fase da Copa atual).
7. Estilo de jogo: seleção ofensiva vs. defensiva, capacidade de pressionar, eficiência na finalização e solidez defensiva.
8. Outros fatores relevantes: condições climáticas previstas, altitude (México), desgaste de viagem, importância da partida no contexto do grupo (p. ex., jogo de vida ou morte vs. jogo já decidido).

Regras de pontuação do bolão:

- Acertar o placar exato: 25 pontos. Ex.: palpite 2x1, resultado real 2x1.
- Acertar o vencedor e o número de gols do time vencedor: 18 pontos. Ex.: palpite 3x1, real 3x0 ou 3x2.
- Acertar o vencedor e a diferença de gols OU acertar o empate (sem necessariamente o placar exato): 15 pontos. Ex.: palpite 2x1, real 3x2 (diferença +1) ou palpite 1x1, real 0x0.
- Acertar o vencedor e o número de gols do time perdedor: 12 pontos. Ex.: palpite 2x1, real 3x1 ou 5x1.
- Acertar apenas o vencedor: 10 pontos. Ex.: palpite 2x1, real 3x0.
- Errar o vencedor, mas acertar o número de gols de um dos times: 3 pontos. Ex.: palpite 2x1, real 0x1, 2x3, 2x2 ou 1x1.
- Errar tudo, mas ter apostado em empate: 2 pontos. Ex.: palpite 2x1, real 0x0.
- Errar tudo: 0 pontos. Ex.: palpite 2x1, real 0x3.

Objetivo:
Para cada partida, não basta escolher o placar mais provável. Você deve selecionar o palpite que maximiza a expectativa de pontos, considerando a distribuição de probabilidades dos resultados (estimada com base nos fatores acima). Por exemplo, um palpite 1x0 pode ter menos chance de acerto exato que um 2x0, mas pode render mais pontos esperados porque captura melhor a diferença de gols e os gols do perdedor.

Inclua comentários ao lado de cada entrada indicando o jogo (ex.: "Brasil 3 x 2 Japão") e, se desejar, um curtíssimo resumo da lógica (ex.: "Esperado Brasil ofensivo, defesa japonesa frágil; 3x2 maximiza pontos esperados").
