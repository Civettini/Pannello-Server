export const SOGLIE = {
  attenzione: 70,
  critico: 90,
};

export function statoServer(server) {
  // 1. Se non è online, è sicuramente offline
  if (!server.online) {
    return "offline";
  }

  // 2. Troviamo il valore massimo tra cpu, ram e disco (gestendo eventuali valori mancanti)
  const cpu = server.cpu ?? 0;
  const ram = server.ram ?? 0;
  const disco = server.disco ?? 0;
  const maxMetrica = Math.max(cpu, ram, disco);

  // 3. Verifichiamo prima la soglia critica, poi quella di attenzione
  if (maxMetrica >= SOGLIE.critico) {
    return "critico";
  }

  if (maxMetrica >= SOGLIE.attenzione) {
    return "attenzione";
  }

  return "ok";
}

export function contaPerStato(servers, stato) {
  return servers.filter((server) => statoServer(server) === stato).length;
}

export function cpuMedia(servers) {
  const onlineServers = servers.filter((s) => s.online);
  
  if (onlineServers.length === 0) {
    return null;
  }

  const sommaCpu = onlineServers.reduce((acc, s) => acc + (s.cpu || 0), 0);
  return sommaCpu / onlineServers.length;
}

export function piuLento(servers) {
  const onlineServers = servers.filter((s) => s.online);

  if (onlineServers.length === 0) {
    return null;
  }

  return onlineServers.reduce((prev, current) => {
    return (current.latenza || 0) > (prev.latenza || 0) ? current : prev;
  });
}

export function trovaServer(servers, nome) {
  return servers.find((s) => s.nome === nome);
}