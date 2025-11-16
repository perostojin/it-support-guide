const troubleshootingData = {
  internet: {
     icon: "🌐",
    name: "Internetproblem",
    symptoms: {
      noConnection: {
        name: "Ingen internetanslutning",
        steps: [
          "Starta om routern och vänta 2 minuter.",
          "Kontrollera att nätverkskabeln sitter i.",
          "Testa att ansluta med mobilen via hotspot.",
          "Kontrollera om fler på kontoret har samma problem.",
          "Om problemet kvarstår: kontakta nätleverantör eller IT-drift."
        ]
      },
      slowInternet: {
        name: "Långsamt internet",
        steps: [
          "Testa hastigheten på bredbandskollen.se eller liknande.",
          "Stäng av VPN om det är aktiverat.",
          "Stäng ner onödiga program som använder mycket bandbredd (t.ex. streaming).",
          "Starta om datorn och routern.",
          "Om problemet kvarstår: felanmäl till IT eller leverantör."
        ]
      }
    }
  },

  computer: {
    icon: "💻",
    name: "Datorproblem",
    symptoms: {
      slowPC: {
        name: "Datorn är långsam",
        steps: [
          "Starta om datorn.",
          "Öppna Aktivitetshanteraren och kontrollera CPU/RAM-användning.",
          "Stäng program som använder mycket resurser.",
          "Kontrollera att Windows är uppdaterat.",
          "Om problemet är återkommande: felanmäl till IT för vidare felsökning."
        ]
      },
      overheating: {
        name: "Datorn blir varm",
        steps: [
          "Kontrollera att ventilationshål inte är blockerade.",
          "Placera datorn på ett hårt, plant underlag.",
          "Rengör fläktar och luftintag från damm om möjligt.",
          "Kontrollera att inga tunga program körs i onödan.",
          "Om datorn stänger ner sig själv: kontakta IT för hårdvarukontroll."
        ]
      }
    }
  },

  email: {
    icon: "📧",
    name: "E-postproblem",
    symptoms: {
      outlookNotOpening: {
        name: "Outlook startar inte",
        steps: [
          "Starta om datorn.",
          "Testa att starta Outlook i felsäkert läge: outlook.exe /safe.",
          "Inaktivera eventuella tillägg.",
          "Kontrollera om problemet gäller flera användare.",
          "Skapa ny Outlook-profil vid behov eller felanmäl till IT."
        ]
      },
      emailNotSyncing: {
        name: "E-post synkas inte",
        steps: [
          "Kontrollera nätverksanslutning.",
          "Klicka på 'Skicka/ta emot' manuellt.",
          "Logga ut och in igen i Outlook eller webmail.",
          "Kontrollera lagringsutrymme / mailbox quota.",
          "Om problemet kvarstår: felanmäl till IT."
        ]
      }
    }
  },

  teams: {
     icon: "📞",
    name: "Teamsproblem",
    symptoms: {
      teamsNotStarting: {
        name: "Teams startar inte",
        steps: [
          "Stäng Teams helt (även i aktivitetsfältet) och starta om.",
          "Starta om datorn.",
          "Logga ut och in i Teams.",
          "Kontrollera om rätt konto är inloggat.",
          "Om problemet kvarstår: återinstallera Teams eller felanmäl."
        ]
      },
      noAudioVideo: {
        name: "Ljud eller video fungerar inte i möte",
        steps: [
          "Kontrollera att rätt mikrofon och kamera är valda i Teams inställningar.",
          "Testa enhetens ljud/kamera i Teams testsamtal.",
          "Kontrollera att inget annat program använder kameran.",
          "Koppla ur och anslut headset/kamera igen.",
          "Starta om Teams och datorn om problemet kvarstår."
        ]
      }
    }
  },

  printer: {
     icon: "🖨️",
    name: "Skrivarproblem",
    symptoms: {
      printerOffline: {
        name: "Skrivaren är offline",
        steps: [
          "Kontrollera att skrivaren är påslagen.",
          "Kontrollera nätverkskabel eller WiFi-anslutning till skrivaren.",
          "Ta bort och lägg till skrivaren igen i datorn.",
          "Testa att skriva ut från en annan dator.",
          "Om ingen kan skriva ut: felanmäl till IT eller leverantör."
        ]
      },
      printQueueStuck: {
        name: "Utskriftskö har fastnat",
        steps: [
          "Avbryt alla jobb i utskriftskön.",
          "Starta om skrivartjänsten eller datorn.",
          "Skicka ett nytt testdokument.",
          "Om problemet kvarstår: installera om skrivaren eller felanmäl."
        ]
      }
    }
  },

  vpn: {
    icon: "🔗",
    name: "VPN / fjärranslutning",
    symptoms: {
      vpnNotConnecting: {
        name: "VPN ansluter inte",
        steps: [
          "Kontrollera internetanslutningen.",
          "Kontrollera att användarnamn och lösenord är korrekt.",
          "Testa att byta nätverk (t.ex. mobil hotspot).",
          "Starta om VPN-klienten och datorn.",
          "Om problemet kvarstår: felanmäl till IT, bifoga felmeddelande."
        ]
      }
    }
  },

  login: {
    icon: "🔐",
    name: "Inloggningsproblem",
    symptoms: {
      wrongPassword: {
        name: "Användaren kan inte logga in",
        steps: [
          "Kontrollera att Caps Lock inte är aktiverat.",
          "Be användaren skriva lösenordet i t.ex. Notepad för att se vad som faktiskt skrivs.",
          "Kontrollera om kontot är låst.",
          "Återställ lösenord enligt rutin.",
          "Om problemet kvarstår: felanmäl till IT-drift."
        ]
      }
    }
  }
};
