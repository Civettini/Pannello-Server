import { statoServer } from './calcoli';
import { BadgeStato } from './BadgeStato';

export function SchedaServer({ server }) {
  const stato = statoServer(server);

  const cpuTesto = server.cpu !== undefined && server.cpu !== null ? `${server.cpu}%` : '—';
  const cpuRiga = server.online ? `CPU: ${cpuTesto}` : `CPU: — (offline)`;

  const latenzaTesto = server.latenza !== undefined && server.latenza !== null ? `${server.latenza} ms` : '—';
  const latenzaRiga = server.online ? `Latenza: ${latenzaTesto}` : `Latenza: — (offline)`;

  let serviziRiga = 'Servizi: nessuno';
  if (server.servizi && server.servizi.length > 0) {
    serviziRiga = `Servizi: ${server.servizi.join(', ')}`;
  }

  // Gestione sicura della manutenzione (stringa o oggetto)
  let manutenzioneRiga = 'Manutenzione: nessuna in programma';
  if (server.manutenzione) {
    if (typeof server.manutenzione === 'object') {
      manutenzioneRiga = `Manutenzione: ${server.manutenzione.data}, ${server.manutenzione.descrizione}`;
    } else {
      manutenzioneRiga = `Manutenzione: ${server.manutenzione}`;
    }
  }

  return (
    <div className={`scheda scheda-${stato}`}>
      <h3>
        {server.nome} <BadgeStato stato={stato} />
      </h3>
      <p className="ruolo">
        {[server.ruolo, server.sede, server.ip].filter(Boolean).join(' · ')}
      </p>
      <p>{cpuRiga}</p>
      <p>{latenzaRiga}</p>
      <p>{serviziRiga}</p>
      <p>{manutenzioneRiga}</p>
    </div>
  );
}