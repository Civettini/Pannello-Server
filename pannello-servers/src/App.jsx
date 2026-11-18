import './App.css';
import { sistema, servers, avvisi } from './dati';
import { 
  contaPerStato, 
  cpuMedia, 
  piuLento, 
  trovaServer 
} from './calcoli';
import { Intestazione } from './Intestazione';
import { Riepilogo } from './Riepilogo';
import { GrigliaServer } from './GrigliaServer';
import { ServerInEvidenza } from './ServerInEvidenza';
import { Avvisi } from './Avvisi';

function App() {
  const onlineCount = contaPerStato(servers, 'ok') + 
                      contaPerStato(servers, 'attenzione') + 
                      contaPerStato(servers, 'critico');
  const totaleServers = servers.length;

  const okCount = contaPerStato(servers, 'ok');
  const attenzioneCount = contaPerStato(servers, 'attenzione');
  const criticiCount = contaPerStato(servers, 'critico');
  const offlineCount = contaPerStato(servers, 'offline');

  const media = cpuMedia(servers);
  const serverPiuLento = piuLento(servers);

  const nomeCercato = "db-01";
  const serverTrovato = trovaServer(servers, nomeCercato);

  return (
    <div className="pannello">
      <Intestazione 
        nome={sistema.nome} 
        aggiornato={sistema.aggiornato} 
        online={onlineCount} 
        totale={totaleServers} 
      />
      <Riepilogo 
        ok={okCount} 
        attenzione={attenzioneCount} 
        critici={criticiCount} 
        offline={offlineCount} 
        mediaCpu={media} 
        lento={serverPiuLento} 
      />
      
      <GrigliaServer servers={servers} />

      <ServerInEvidenza 
        cercato={nomeCercato} 
        server={serverTrovato} 
      />
      
      <Avvisi 
        elenco={avvisi} 
      />
    </div>
  );
}

export default App;


/* 
  RISPOSTE ALLE DOMANDE:
  
  1. Se dati-blackout.js avesse sette server, cosa si vedrebbe nella griglia? E se ne avesse cinque?
    se i server fossero sette la griglia continuerebbe a mostrarne solo sei, mentre se fossero cinque genererebbe un errore perché cercherebbe di leggere una proprietà di undefined (servers[5])

  2. Nella sfida hai cambiato una riga e sono cambiati sei componenti. Quale idea della settimana 7 spiega perché non hai dovuto toccarli?
    Perché i componenti di React non contengono i dati al loro interno, ma aspettano di riceverli dall'esterno (tramite le props). Quando cambi i dati di partenza, i componenti prendono le nuove informazioni e aggiornano la schermata da soli
    */