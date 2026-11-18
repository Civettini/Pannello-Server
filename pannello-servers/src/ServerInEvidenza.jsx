import { SchedaServer } from './SchedaServer';

export function ServerInEvidenza({ cercato, server }) {
  return (
    <section className="evidenza">
      <h2>Server cercato: {cercato}</h2>
      {server !== undefined ? (
        <SchedaServer server={server} />
      ) : (
        <p className="non-trovato">Nessun server si chiama {cercato}.</p>
      )}
    </section>
  );
}