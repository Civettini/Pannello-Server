export function Avvisi({ elenco }) {
  const isVuoto = elenco.length === 0;

  return (
    <section className={isVuoto ? 'avvisi avvisi-vuoto' : 'avvisi'}>
      <h2>Avvisi ({elenco.length})</h2>
      <p>
        {isVuoto ? 'Nessun avviso' : elenco.join(' · ')}
      </p>
    </section>
  );
}