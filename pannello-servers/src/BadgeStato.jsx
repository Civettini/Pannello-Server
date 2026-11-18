export function BadgeStato({ stato }) {
  const testo = {
    ok: 'OK',
    attenzione: 'Attenzione',
    critico: 'Critico',
    offline: 'Offline',
  };

  return (
    <span className={`badge badge-${stato}`}>
      {testo[stato]}
    </span>
  );
}