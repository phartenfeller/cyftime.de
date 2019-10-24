import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Datenschutz = () => (
  <Layout>
    <SEO title="Datenschutzerklärung" noIndex />
    <div>
      <h1 className="text-4xl text-green-300 font-bold text-center">
        Datenschutz
      </h1>
      <div className="mx-4 md:mx-12 lg:mx-48 text-gray-400 h-auto">
        <Text />
      </div>
    </div>
  </Layout>
)

const Text = () => (
  <>
    <h2 className="font-bold text-2xl text-gray-200 mt-8" id="m14">
      Einleitung
    </h2>
    <p>
      Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären,
      welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als
      &quot;Daten&quot; bezeichnet) wir zu welchen Zwecken und in welchem Umfang
      verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten
      Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung
      unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen
      Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.B. unserer
      Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als
      &quot;Onlineangebot&quot;).
    </p>
    <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
    <ul className="m-elements" />
    <p>
      Stand: 13. Oktober 2019
      <h2 className="font-bold text-2xl text-gray-200 mt-8">
        Inhaltsübersicht
      </h2>
      <ul className="index">
        <li>
          <a className="index-link" href="#m14">
            Einleitung
          </a>
        </li>
        <li>
          <a className="index-link" href="#m3">
            Verantwortlicher
          </a>
        </li>
        <li>
          <a className="index-link" href="#mOverview">
            Übersicht der Verarbeitungen
          </a>
        </li>
        <li>
          <a className="index-link" href="#m13">
            Maßgebliche Rechtsgrundlagen
          </a>
        </li>
        <li>
          <a className="index-link" href="#m27">
            Sicherheitsmaßnahmen
          </a>
        </li>
        <li>
          <a className="index-link" href="#m25">
            Übermittlung und Offenbarung von personenbezogenen Daten
          </a>
        </li>
        <li>
          <a className="index-link" href="#m24">
            Datenverarbeitung in Drittländern
          </a>
        </li>
        <li>
          <a className="index-link" href="#m134">
            Einsatz von Cookies
          </a>
        </li>
        <li>
          <a className="index-link" href="#m182">
            Kontaktaufnahme
          </a>
        </li>
        <li>
          <a className="index-link" href="#m225">
            Bereitstellung des Onlineangebotes und Webhosting
          </a>
        </li>
        <li>
          <a className="index-link" href="#m296">
            Musik und Podcasts
          </a>
        </li>
        <li>
          <a className="index-link" href="#m12">
            Löschung von Daten
          </a>
        </li>
        <li>
          <a className="index-link" href="#m15">
            Änderung und Aktualisierung der Datenschutzerklärung
          </a>
        </li>
        <li>
          <a className="index-link" href="#m10">
            Rechte der betroffenen Personen
          </a>
        </li>
        <li>
          <a className="index-link" href="#m42">
            Begriffsdefinitionen
          </a>
        </li>
      </ul>
      <h2 className="font-bold text-2xl text-gray-200 mt-8" id="m3">
        Verantwortlicher
      </h2>
      <p>
        Leon Wienbeck
        <br />
        Johanna-Kirchner Str., 7
        <br />
        53123 Bonn
      </p>
      <p>
        <strong className="mt-4 text-gray-300">E-Mail-Adresse</strong>
        <span>:</span>
        <a href="mailto:contact@cyftime.de">contact@cyftime.de</a>
      </p>
      <p>
        <strong className="mt-4 text-gray-300">Impressum</strong>
        <span>:</span>
        <a
          href="https://cyftime.de/impressum"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://cyftime.de/impressum
        </a>
      </p>
      <ul className="m-elements" />
      <h2 className="font-bold text-2xl text-gray-200 mt-8" id="mOverview">
        Übersicht der Verarbeitungen
      </h2>
      <p>
        Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und
        die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen
        Personen.
      </p>
      <h3>Arten der verarbeiteten Daten</h3>
      <ul>
        <li>
          <p>Bestandsdaten (z.B. Namen, Adressen).</p>
        </li>
        <li>
          <p>Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos).</p>
        </li>
        <li>
          <p>Kontaktdaten (z.B. E-Mail, Telefonnummern).</p>
        </li>
        <li>
          <p>
            Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
          </p>
        </li>
        <li>
          <p>
            Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
            Zugriffszeiten).
          </p>
        </li>
      </ul>
      <h3>Kategorien betroffener Personen</h3>
      <ul>
        <li>
          <p>Kommunikationspartner.</p>
        </li>
        <li>
          <p>Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</p>
        </li>
      </ul>
      <h3>Zwecke der Verarbeitung</h3>
      <ul>
        <li>
          <p>Besuchsaktionsauswertung.</p>
        </li>
        <li>
          <p>Kontaktanfragen und Kommunikation.</p>
        </li>
        <li>
          <p>Profiling (Erstellen von Nutzerprofilen).</p>
        </li>
        <li>
          <p>
            Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung
            wiederkehrender Besucher).
          </p>
        </li>
      </ul>
      <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3>
      <p>
        Im Folgenden teilen wir die Rechtsgrundlagen der
        Datenschutzgrundverordnung (DSGVO), auf deren Basis wir die
        personenbezogenen Daten verarbeiten, mit. Bitte beachten Sie, dass
        zusätzlich zu den Regelungen der DSGVO die nationalen
        Datenschutzvorgaben in Ihrem bzw. unserem Wohn- und Sitzland gelten
        können.
      </p>
      <ul>
        <li>
          <p>
            <strong className="mt-4 text-gray-300">
              Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)
            </strong>
            <span>
              - Die betroffene Person hat ihre Einwilligung in die Verarbeitung
              der sie betreffenden personenbezogenen Daten für einen
              spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
            </span>
          </p>
        </li>
        <li>
          <p>
            <strong className="mt-4 text-gray-300">
              Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1
              lit. b. DSGVO)
            </strong>
            - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
            Vertragspartei die betroffene Person ist, oder zur Durchführung
            vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
            betroffenen Person erfolgen.
          </p>
        </li>
        <li>
          <p>
            <strong className="mt-4 text-gray-300">
              Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)
            </strong>
            - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des
            Verantwortlichen oder eines Dritten erforderlich, sofern nicht die
            Interessen oder Grundrechte und Grundfreiheiten der betroffenen
            Person, die den Schutz personenbezogener Daten erfordern,
            überwiegen.
          </p>
        </li>
      </ul>
      <p>
        <strong className="mt-4 text-gray-300">
          Nationale Datenschutzregelungen in Deutschland
        </strong>
        <span>
          : Zusätzlich zu den Datenschutzregelungen der
          Datenschutz-Grundverordnung gelten nationale Regelungen zum
          Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum
          Schutz vor Missbrauch personenbezogener Daten bei der
          Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält
          insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf
          Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer
          Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke
          und zur Übermittlung sowie automatisierten Entscheidungsfindung im
          Einzelfall einschließlich Profiling. Des Weiteren regelt es die
          Datenverarbeitung für Zwecke des Beschäftigungsverhältnisses (§ 26
          BDSG), insbesondere im Hinblick auf die Begründung, Durchführung oder
          Beendigung von Beschäftigungsverhältnissen sowie die Einwilligung von
          Beschäftigten. Ferner können Landesdatenschutzgesetze der einzelnen
          Bundesländer zur Anwendung gelangen.
        </span>
      </p>
      <ul className="m-elements" />
      <h2 className="font-bold text-2xl text-gray-200 mt-8" id="m27">
        Sicherheitsmaßnahmen
      </h2>
      <p>
        Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
        Berücksichtigung des Stands der Technik, der Implementierungskosten und
        der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie
        der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der
        Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete
        technische und organisatorische Maßnahmen, um ein dem Risiko
        angemessenes Schutzniveau zu gewährleisten.
      </p>
      <p>
        Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit,
        Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen
        und elektronischen Zugangs zu den Daten als auch des sie betreffenden
        Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit
        und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die
        eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und
        Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner
        berücksichtigen wir den Schutz personenbezogener Daten bereits bei der
        Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren
        entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und
        durch datenschutzfreundliche Voreinstellungen.
      </p>
      <h2 className="font-bold text-2xl text-gray-200 mt-8" id="m25">
        Übermittlung und Offenbarung von personenbezogenen Daten
      </h2>
      <p>
        Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor,
        dass die Daten an andere Stellen, Unternehmen, rechtlich selbstständige
        Organisationseinheiten oder Personen übermittelt oder sie ihnen
        gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z.B.
        Zahlungsinstitute im Rahmen von Zahlungsvorgängen, mit IT-Aufgaben
        beauftragte Dienstleister oder Anbieter von Diensten und Inhalten, die
        in eine Webseite eingebunden werden, gehören. In solchen Fall beachten
        wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende
        Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den
        Empfängern Ihrer Daten ab.
      </p>
      <h2 className="font-bold text-2xl text-gray-200 mt-8" id="m24">
        Datenverarbeitung in Drittländern
      </h2>
      <p>
        Sofern wir Daten in einem Drittland (d.h., außerhalb der Europäischen
        Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder
        die Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder
        der Offenlegung bzw. Übermittlung von Daten an andere Personen, Stellen
        oder Unternehmen stattfindet, erfolgt dies nur im Einklang mit den
        gesetzlichen Vorgaben.
      </p>
      <p>
        Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich oder
        gesetzlich erforderlicher Übermittlung verarbeiten oder lassen wir die
        Daten nur in Drittländern mit einem anerkannten Datenschutzniveau, zu
        denen die unter dem &quot;Privacy-Shield&quot; zertifizierten
        US-Verarbeiter gehören, oder auf Grundlage besonderer Garantien, wie
        z.B. vertraglicher Verpflichtung durch sogenannte Standardschutzklauseln
        der EU-Kommission, des Vorliegens von Zertifizierungen oder
        verbindlicher interner Datenschutzvorschriften, verarbeiten (Art. 44 bis
        49 DSGVO, Informationsseite der EU-Kommission:
        <a
          href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de
        </a>
        ).
      </p>
      <h2 className="font-bold text-2xl text-gray-200 mt-8" id="m134">
        Einsatz von Cookies
      </h2>
      <p>
        Cookies sind Textdateien, die Daten von besuchten Websites oder Domains
        enthalten und von einem Browser auf dem Computer des Benutzers
        gespeichert werden. Ein Cookie dient in erster Linie dazu, die
        Informationen über einen Benutzer während oder nach seinem Besuch
        innerhalb eines Onlineangebotes zu speichern. Zu den gespeicherten
        Angaben können z.B. die Spracheinstellungen auf einer Webseite, der
        Loginstatus, ein Warenkorb oder die Stelle, an der ein Video geschaut
        wurde, gehören. Zu dem Begriff der Cookies zählen wir ferner andere
        Technologien, die die gleichen Funktionen wie Cookies erfüllen (z.B.,
        wenn Angaben der Nutzer anhand pseudonymer Onlinekennzeichnungen
        gespeichert werden, auch als &quot;Nutzer-IDs&quot; bezeichnet)
      </p>
      <p>
        <strong className="mt-4 text-gray-300">
          Die folgenden Cookie-Typen und Funktionen werden unterschieden:
        </strong>
      </p>
      <ul>
        <li>
          <strong className="mt-4 text-gray-300">
            Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):
          </strong>
          Temporäre Cookies werden spätestens gelöscht, nachdem ein Nutzer ein
          Online-Angebot verlassen und seinen Browser geschlossen hat.
        </li>
        <li>
          <strong className="mt-4 text-gray-300">Permanente Cookies:</strong>
          Permanente Cookies bleiben auch nach dem Schließen des Browsers
          gespeichert. So kann beispielsweise der Login-Status gespeichert oder
          bevorzugte Inhalte direkt angezeigt werden, wenn der Nutzer eine
          Website erneut besucht. Ebenso können die Interessen von Nutzern, die
          zur Reichweitenmessung oder zu Marketingzwecken verwendet werden, in
          einem solchen Cookie gespeichert werden.
        </li>
        <li>
          <strong className="mt-4 text-gray-300">First-Party-Cookies:</strong>
          <span>First-Party-Cookies werden von uns selbst gesetzt.</span>
        </li>
        <li>
          <strong className="mt-4 text-gray-300">
            Third-Party-Cookies (auch: Drittanbieter-Cookies)
          </strong>
          <span>
            : Drittanbieter-Cookies werden hauptsächlich von Werbetreibenden
            (sog. Dritten) verwendet, um Benutzerinformationen zu verarbeiten.
          </span>
        </li>
        <li>
          <strong className="mt-4 text-gray-300">
            Notwendige (auch: essentielle oder unbedingt erforderliche) Cookies:
          </strong>
          Cookies können zum einen für den Betrieb einer Webseite unbedingt
          erforderlich sein (z.B. um Logins oder andere Nutzereingaben zu
          speichern oder aus Gründen der Sicherheit).
        </li>
        <li>
          <strong className="mt-4 text-gray-300">
            Statistik-, Marketing- und Personalisierungs-Cookies
          </strong>
          <span>
            : Ferner werden Cookies im Regelfall auch im Rahmen der
            Reichweitenmessung eingesetzt sowie dann, wenn die Interessen eines
            Nutzers oder sein Verhalten (z.B. Betrachten bestimmter Inhalte,
            Nutzen von Funktionen etc.) auf einzelnen Webseiten in einem
            Nutzerprofil gespeichert werden. Solche Profile dienen dazu, den
            Nutzern z.B. Inhalte anzuzeigen, die ihren potentiellen Interessen
            entsprechen. Dieses Verfahren wird auch als &quot;Tracking&quot;,
            d.h., Nachverfolgung der potentiellen Interessen der Nutzer
            bezeichnet. . Soweit wir Cookies oder
            &quot;Tracking&quot;-Technologien einsetzen, informieren wir Sie
            gesondert in unserer Datenschutzerklärung oder im Rahmen der
            Einholung einer Einwilligung.
          </span>
        </li>
      </ul>
      <p>
        <strong className="mt-4 text-gray-300">
          Hinweise zu Rechtsgrundlagen:
        </strong>
        Auf welcher Rechtsgrundlage wir Ihre personenbezogenen Daten mit Hilfe
        von Cookies verarbeiten, hängt davon ab, ob wir Sie um eine Einwilligung
        bitten. Falls dies zutrifft und Sie in die Nutzung von Cookies
        einwilligen, ist die Rechtsgrundlage der Verarbeitung Ihrer Daten die
        erklärte Einwilligung. Andernfalls werden die mithilfe von Cookies
        verarbeiteten Daten auf Grundlage unserer berechtigten Interessen (z.B.
        an einem betriebswirtschaftlichen Betrieb unseres Onlineangebotes und
        dessen Verbesserung) verarbeitet oder, wenn der Einsatz von Cookies
        erforderlich ist, um unsere vertraglichen Verpflichtungen zu erfüllen.
      </p>
      <p>
        <strong className="mt-4 text-gray-300">
          Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out):
        </strong>
        Abhängig davon, ob die Verarbeitung auf Grundlage einer Einwilligung
        oder gesetzlichen Erlaubnis erfolgt, haben Sie jederzeit die
        Möglichkeit, eine erteilte Einwilligung zu widerrufen oder der
        Verarbeitung Ihrer Daten durch Cookie-Technologien zu widersprechen
        (zusammenfassend als &quot;Opt-Out&quot; bezeichnet). Sie können Ihren
        Widerspruch zunächst mittels der Einstellungen Ihres Browsers erklären,
        z.B., indem Sie die Nutzung von Cookies deaktivieren (wobei hierdurch
        auch die Funktionsfähigkeit unseres Onlineangebotes eingeschränkt werden
        kann). Ein Widerspruch gegen den Einsatz von Cookies zu Zwecken des
        Onlinemarketings kann auch mittels einer Vielzahl von Diensten, vor
        allem im Fall des Trackings, über die US-amerikanische Seite
        <a
          href="http://www.aboutads.info/choices/"
          rel="noopener noreferrer"
          target="_blank"
        >
          http://www.aboutads.info/choices/
        </a>
        oder die EU-Seite
        <a
          href="http://www.youronlinechoices.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          http://www.youronlinechoices.com/
        </a>
        oder generell auf
        <a
          href="http://optout.aboutads.info"
          rel="noopener noreferrer"
          target="_blank"
        >
          http://optout.aboutads.info
        </a>
        erklärt werden.
      </p>
      <ul className="m-elements">
        <li>
          <p>
            <strong className="mt-4 text-gray-300">
              Verarbeitete Datenarten:
            </strong>
            Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
            Zugriffszeiten), Meta-/Kommunikationsdaten (z.B.
            Geräte-Informationen, IP-Adressen).
          </p>
        </li>
        <li>
          <p>
            <strong className="mt-4 text-gray-300">Betroffene Personen:</strong>
            Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
          </p>
        </li>
        <li>
          <p>
            <strong className="mt-4 text-gray-300">Rechtsgrundlagen:</strong>
            Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO), Berechtigte
            Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
          </p>
        </li>
      </ul>
      <h2 className="font-bold text-2xl text-gray-200 mt-8" id="m182">
        Kontaktaufnahme
      </h2>
      <p>
        Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail,
        Telefon oder via soziale Medien) werden die Angaben der anfragenden
        Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen
        und etwaiger angefragter Maßnahmen erforderlich ist.
      </p>
      <p>
        Die Beantwortung der Kontaktanfragen im Rahmen von vertraglichen oder
        vorvertraglichen Beziehungen erfolgt zur Erfüllung unserer vertraglichen
        Pflichten oder zur Beantwortung von (vor)vertraglichen Anfragen und im
        Übrigen auf Grundlage der berechtigten Interessen an der Beantwortung
        der Anfragen.
      </p>
      <ul className="m-elements">
        <li>
          <p>
            <strong className="mt-4 text-gray-300">
              Verarbeitete Datenarten:
            </strong>
            Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail,
            Telefonnummern), Inhaltsdaten (z.B. Texteingaben, Fotografien,
            Videos).
          </p>
        </li>
        <li>
          <p>
            <strong className="mt-4 text-gray-300">Betroffene Personen:</strong>
            Kommunikationspartner.
          </p>
        </li>
        <li>
          <p>
            <strong className="mt-4 text-gray-300">
              Zwecke der Verarbeitung:
            </strong>
            Kontaktanfragen und Kommunikation.
          </p>
        </li>
        <li>
          <p>
            <strong className="mt-4 text-gray-300">Rechtsgrundlagen:</strong>
            Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1
            lit. b. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f.
            DSGVO).
          </p>
        </li>
      </ul>
      <h2 className="font-bold text-2xl text-gray-200 mt-8" id="m225">
        Bereitstellung des Onlineangebotes und Webhosting
      </h2>
      <p>
        Um unser Onlineangebot sicher und effizient bereitstellen zu können,
        nehmen wir die Leistungen von einem oder mehreren Webhosting-Anbietern
        in Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern) das
        Onlineangebot abgerufen werden kann. Zu diesen Zwecken können wir
        Infrastruktur- und Plattformdienstleistungen, Rechenkapazität,
        Speicherplatz und Datenbankdienste sowie Sicherheitsleistungen und
        technische Wartungsleistungen in Anspruch nehmen.
      </p>
      <p>
        Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten
        Daten können alle die Nutzer unseres Onlineangebotes betreffenden
        Angaben gehören, die im Rahmen der Nutzung und der Kommunikation
        anfallen. Hierzu gehören regelmäßig die IP-Adresse, die notwendig ist,
        um die Inhalte von Onlineangeboten an Browser ausliefern zu können, und
        alle innerhalb unseres Onlineangebotes oder von Webseiten getätigten
        Eingaben.
      </p>
      <p>
        <strong className="mt-4 text-gray-300">
          E-Mail-Versand und -Hosting
        </strong>
        <span>
          : Die von uns in Anspruch genommenen Webhosting-Leistungen umfassen
          ebenfalls den Versand, den Empfang sowie die Speicherung von E-Mails.
          Zu diesen Zwecken werden die Adressen der Empfänger sowie Absender als
          auch weitere Informationen betreffend den E-Mailversand (z.B. die
          beteiligten Provider) sowie die Inhalte der jeweiligen E-Mails
          verarbeitet. Die vorgenannten Daten können ferner zu Zwecken der
          Erkennung von SPAM verarbeitet werden. Wir bitten darum, zu beachten,
          dass E-Mails im Internet grundsätzlich nicht verschlüsselt versendet
          werden. Im Regelfall werden E-Mails zwar auf dem Transportweg
          verschlüsselt, aber (sofern kein sogenanntes
          Ende-zu-Ende-Verschlüsselungsverfahren eingesetzt wird) nicht auf den
          Servern, von denen sie abgesendet und empfangen werden. Wir können
          daher für den Übertragungsweg der E-Mails zwischen dem Absender und
          dem Empfang auf unserem Server keine Verantwortung übernehmen.
        </span>
      </p>
      <p>
        <strong className="mt-4 text-gray-300">
          Erhebung von Zugriffsdaten und Logfiles
        </strong>
        <span>
          : Wir selbst (bzw. unser Webhostinganbieter) erheben Daten zu jedem
          Zugriff auf den Server (sogenannte Serverlogfiles). Zu den
          Serverlogfiles können die Adresse und Name der abgerufenen Webseiten
          und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen,
          Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das
          Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite)
          und im Regelfall IP-Adressen und der anfragende Provider gehören.
        </span>
      </p>
      <p>
        Die Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt
        werden, z.B., um eine Überlastung der Server zu vermeiden (insbesondere
        im Fall von missbräuchlichen Angriffen, sogenannten DDoS-Attacken) und
        zum anderen, um die Auslastung der Server und ihre Stabilität
        sicherzustellen.
      </p>
      <ul className="m-elements">
        <li>
          <p>
            <strong className="mt-4 text-gray-300">
              Verarbeitete Datenarten:
            </strong>
            Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos), Nutzungsdaten
            (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten),
            Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
          </p>
        </li>
        <li>
          <p>
            <strong className="mt-4 text-gray-300">Betroffene Personen:</strong>
            Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
          </p>
        </li>
        <li>
          <p>
            <strong className="mt-4 text-gray-300">Rechtsgrundlagen:</strong>
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
          </p>
        </li>
      </ul>
      <h2 className="font-bold text-2xl text-gray-200 mt-8" id="m296">
        Musik und Podcasts
      </h2>
      <p>
        Wir nutzen die Hosting- und Analyse-Angebote der nachfolgend genannten
        Dienstanbieter, um unsere Audio-Inhalte zum Anhören bzw. zum Download
        anzubieten und statistische Informationen zum Abruf der Audio-Inhalte zu
        erhalten.
      </p>
      <ul className="m-elements">
        <li>
          <p>
            <strong className="mt-4 text-gray-300">
              Verarbeitete Datenarten:
            </strong>
            Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
            Zugriffszeiten), Meta-/Kommunikationsdaten (z.B.
            Geräte-Informationen, IP-Adressen).
          </p>
        </li>
        <li>
          <p>
            <strong className="mt-4 text-gray-300">Betroffene Personen:</strong>
            Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
          </p>
        </li>
        <li>
          <p>
            <strong className="mt-4 text-gray-300">
              Zwecke der Verarbeitung:
            </strong>
            Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung
            wiederkehrender Besucher), Besuchsaktionsauswertung, Profiling
            (Erstellen von Nutzerprofilen).
          </p>
        </li>
      </ul>
      <p>
        <strong className="mt-4 text-gray-300">
          Eingesetzte Dienste und Diensteanbieter:
        </strong>
      </p>
      <ul className="m-elements">
        <li>
          <p>
            <strong className="mt-4 text-gray-300">Soundcloud:</strong>
            Soundcloud - Musikhosting; Dienstanbieter: SoundCloud Limited,
            Rheinsberger Str. 76/77, 10115 Berlin, Deutschland; Website:
            <a
              href="https://soundcloud.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://soundcloud.com
            </a>
            ; Datenschutzerklärung:
            <a
              href="https://soundcloud.com/pages/privacy"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://soundcloud.com/pages/privacy
            </a>
            .
          </p>
        </li>
        <li>
          <p>
            <strong className="mt-4 text-gray-300">Spotify:</strong>
            Spotify - Musikhosting und Widget; Dienstanbieter: Spotify AB,
            Regeringsgatan 19, SE-111 53 Stockholm, Schweden; Website:
            <a
              href="https://www.spotify.com/de"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://www.spotify.com/de
            </a>
            ; Datenschutzerklärung:
            <a
              href="https://www.spotify.com/de/legal/privacy-policy/"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://www.spotify.com/de/legal/privacy-policy/
            </a>
            .
          </p>
        </li>
      </ul>
      <h2 className="font-bold text-2xl text-gray-200 mt-8" id="m12">
        Löschung von Daten
      </h2>
      <p>
        Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen
        Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten
        Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen
        (z.B., wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder
        sie für den Zweck nicht erforderlich sind).
      </p>
      <p>
        Sofern die Daten nicht gelöscht werden, weil sie für andere und
        gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung
        auf diese Zwecke beschränkt. D.h., die Daten werden gesperrt und nicht
        für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels-
        oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren
        Speicherung zur Geltendmachung, Ausübung oder Verteidigung von
        Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen
        oder juristischen Person erforderlich ist.
      </p>
      <p>
        Weitere Hinweise zu der Löschung von personenbezogenen Daten können
        ferner im Rahmen der einzelnen Datenschutzhinweise dieser
        Datenschutzerklärung erfolgen.
      </p>
      <ul className="m-elements" />
      <h2 className="font-bold text-2xl text-gray-200 mt-8" id="m15">
        Änderung und Aktualisierung der Datenschutzerklärung
      </h2>
      <p>
        Wir bitten Sie, sich regelmäßig über den Inhalt unserer
        Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung
        an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen
        dies erforderlich machen. Wir informieren Sie, sobald durch die
        Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder
        eine sonstige individuelle Benachrichtigung erforderlich wird.
      </p>
      <h2 className="font-bold text-2xl text-gray-200 mt-8" id="m10">
        Rechte der betroffenen Personen
      </h2>
      <p>
        Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die
        sich insbesondere aus Art. 15 bis 18 und 21 DS-GVO ergeben:
      </p>
      <ul>
        <li>
          <strong className="mt-4 text-gray-300">
            Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus
            Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung
            der Sie betreffenden personenbezogenen Daten, die aufgrund von Art.
            6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies
            gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
            Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um
            Direktwerbung zu betreiben, haben Sie das Recht, jederzeit
            Widerspruch gegen die Verarbeitung der Sie betreffenden
            personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen;
            dies gilt auch für das Profiling, soweit es mit solcher
            Direktwerbung in Verbindung steht.
          </strong>
        </li>
        <li>
          <strong className="mt-4 text-gray-300">
            Widerrufsrecht bei Einwilligungen:
          </strong>
          Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
        </li>
        <li>
          <strong className="mt-4 text-gray-300">Auskunftsrecht:</strong>
          Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob
          betreffende Daten verarbeitet werden und auf Auskunft über diese Daten
          sowie auf weitere Informationen und Kopie der Daten entsprechend den
          gesetzlichen Vorgaben.
        </li>
        <li>
          <strong className="mt-4 text-gray-300">
            Recht auf Berichtigung:
          </strong>
          Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die
          Vervollständigung der Sie betreffenden Daten oder die Berichtigung der
          Sie betreffenden unrichtigen Daten zu verlangen.
        </li>
        <li>
          <strong className="mt-4 text-gray-300">
            Recht auf Löschung und Einschränkung der Verarbeitung:
          </strong>
          Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
          verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden,
          bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine
          Einschränkung der Verarbeitung der Daten zu verlangen.
        </li>
        <li>
          <strong className="mt-4 text-gray-300">
            Recht auf Datenübertragbarkeit:
          </strong>
          Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt
          haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten,
          gängigen und maschinenlesbaren Format zu erhalten oder deren
          Übermittlung an einen anderen Verantwortlichen zu fordern.
        </li>
        <li>
          <strong className="mt-4 text-gray-300">
            Beschwerde bei Aufsichtsbehörde:
          </strong>
          Sie haben ferner nach Maßgabe der gesetzlichen Vorgaben das Recht, bei
          einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres
          gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des
          mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die
          Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die
          DSGVO verstößt.
        </li>
      </ul>
      <h2 className="font-bold text-2xl text-gray-200 mt-8" id="m42">
        Begriffsdefinitionen
      </h2>
      <p>
        In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser
        Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der Begriffe
        sind dem Gesetz entnommen und vor allem im Art. 4 DSGVO definiert. Die
        gesetzlichen Definitionen sind verbindlich. Die nachfolgenden
        Erläuterungen sollen dagegen vor allem dem Verständnis dienen. Die
        Begriffe sind alphabetisch sortiert.
      </p>
      <ul className="glossary">
        <li>
          <strong className="mt-4 text-gray-300">
            Besuchsaktionsauswertung:
          </strong>
          &quot;Besuchsaktionsauswertung&quot; (englisch &quot;Conversion
          Tracking&quot;) bezeichnet ein Verfahren, mit dem die Wirksamkeit von
          Marketingmaßnahmen festgestellt werden kann. Dazu wird im Regelfall
          ein Cookie auf den Geräten der Nutzer innerhalb der Webseiten, auf
          denen die Marketingmaßnahmen erfolgen, gespeichert und dann erneut auf
          der Zielwebseite abgerufen. Beispielsweise können wir so
          nachvollziehen, ob die von uns auf anderen Webseiten geschalteten
          Anzeigen erfolgreich waren).
        </li>
        <li>
          <strong className="mt-4 text-gray-300">
            Personenbezogene Daten:
          </strong>
          &quot;Personenbezogene Daten“ sind alle Informationen, die sich auf
          eine identifizierte oder identifizierbare natürliche Person (im
          Folgenden &quot;betroffene Person“) beziehen; als identifizierbar wird
          eine natürliche Person angesehen, die direkt oder indirekt,
          insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu
          einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B.
          Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert
          werden kann, die Ausdruck der physischen, physiologischen,
          genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen
          Identität dieser natürlichen Person sind.
        </li>
        <li>
          <strong className="mt-4 text-gray-300">Profiling:</strong>
          Als &quot;Profiling&quot; wird jede Art der automatisierten
          Verarbeitung personenbezogener Daten bezeichnet, die darin besteht,
          dass diese personenbezogenen Daten verwendet werden, um bestimmte
          persönliche Aspekte, die sich auf eine natürliche Person beziehen (je
          nach Art des Profilings gehören dazu Informationen betreffend das
          Alter, das Geschlecht, Standortdaten und Bewegungsdaten, Interaktion
          mit Webseiten und deren Inhalten, Einkaufsverhalten, soziale
          Interaktionen mit anderen Menschen) zu analysieren, zu bewerten oder,
          um sie vorherzusagen (z.B. die Interessen an bestimmten Inhalten oder
          Produkten, das Klickverhalten auf einer Webseite oder den
          Aufenthaltsort). Zu Zwecken des Profilings werden häufig Cookies und
          Web-Beacons eingesetzt.
        </li>
        <li>
          <strong className="mt-4 text-gray-300">Reichweitenmessung:</strong>
          Die Reichweitenmessung (auch als Web Analytics bezeichnet) dient der
          Auswertung der Besucherströme eines Onlineangebotes und kann das
          Verhalten oder Interessen der Besucher an bestimmten Informationen,
          wie z.B. Inhalten von Webseiten, umfassen. Mit Hilfe der
          Reichweitenanalyse können Webseiteninhaber z.B. erkennen, zu welcher
          Zeit Besucher ihre Webseite besuchen und für welche Inhalte sie sich
          interessieren. Dadurch können sie z.B. die Inhalte der Webseite besser
          an die Bedürfnisse ihrer Besucher anpassen. Zu Zwecken der
          Reichweitenanalyse werden häufig pseudonyme Cookies und Web-Beacons
          eingesetzt, um wiederkehrende Besucher zu erkennen und so genauere
          Analysen zur Nutzung eines Onlineangebotes zu erhalten.
        </li>
        <li>
          <strong className="mt-4 text-gray-300">Verantwortlicher:</strong>
          Als &quot;Verantwortlicher&quot; wird die natürliche oder juristische
          Person, Behörde, Einrichtung oder andere Stelle, die allein oder
          gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
          personenbezogenen Daten entscheidet, bezeichnet.
        </li>
        <li>
          <strong className="mt-4 text-gray-300">Verarbeitung:</strong>
          &quot;Verarbeitung&quot; ist jeder mit oder ohne Hilfe automatisierter
          Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im
          Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und
          umfasst praktisch jeden Umgang mit Daten, sei es das Erheben, das
          Auswerten, das Speichern, das Übermitteln oder das Löschen.
        </li>
      </ul>
    </p>
    <p className="seal mt-8">
      <a
        href="https://datenschutz-generator.de/?l=de"
        title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
        rel="noopener noreferrer"
        target="_blank"
      >
        Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
        Schwenke
      </a>
    </p>
  </>
)

export default Datenschutz
