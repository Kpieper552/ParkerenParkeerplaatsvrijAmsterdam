import React from 'react';
import '../content/Content.css';
import ContentBox from "../contentbox/ContentBox";

function ContentMyAccount() {
return (
         <>
           <div id="parkingAdam-content-container">
               <ContentBox subtitlecontentbox="PARKEREN AMSTERDAM">
                    <h3>
                       Aanrijdroutes Amsterdam
                       Zuidwestelijke richting: A4/A5 vanuit Den Haag, Schiphol.|
                       Noordwestelijke richting: A9  vanuit Alkmaar Haarlem.|
                       Noordelijke richting: A7/A8 vanuit Hoorn/Zaanstad.|
                       Noordoostelijke richting: A6 vanuit Lelystad/Almere-Stad.|
                       Zuidoostelijke richting: A1 vanuit Amersfoort/Hilversum
                       en A2 vanuit Utrecht
                    </h3>
               </ContentBox>
               <ContentBox subtitlecontentbox="Park & Ride">
                   <h4>
                       Dit zijn goed bereikbare parkeerplaatsen aan de rand van de stad
                       gelang naar de richting waar je vandaan komt. Voordeel P+R is voordelig parkeren<br/><br/>
                       U betaalt 1 euro per 24 uur als u inrijdt op:
                       zaterdag, zondag, feestdag |
                       maandag tot en met vrijdag ná 10.00 uur |
                       U kunt vervolgens tot maximaal 96 uur (4 dagen) parkeren |
                       Bij P+R RAI kunt u maximaal 24 uur parkeren.<br/><br/>
                       U betaalt 8 euro voor de eerste 24 uur als u inrijdt op:
                       maandag tot en met vrijdag vóór 10.00 uur |
                       de volgende 72 uur 1 euro per 24 uur |
                       maandag tot en met vrijdag vóór 10.00 uur |
                       Na 96 uur betaalt u het duurdere standaard parkeertarief.
                       Dit tarief verschilt per P+R-locatie. <br/><br/>
                       De voorwaarde is naar het Centrum te gaan met het OV.
                       Kijk op locatie details informatie voor meer info via
                       website parkeerlocatie.
                   </h4>
               </ContentBox>
                <ContentBox subtitlecontentbox="Parkeren Centrum">
                    <h4>
                        In het centrum sluiten de parkeergarages op elkaar aan door
                        onderverdeling in gebieden.
                        Dit zijn: Museumplein, Burgwallen, Muntplein,
                        Centraal Station, Oostelijk Havengebied, Jordaan.
                        Parkeergebied Overig sluit niet op elkaar aan.
                    </h4>
                </ContentBox>
                <ContentBox subtitlecontentbox="Park & Bike">
                    <h4>
                        Parkeergarage locaties die de mogelijkheid bieden om een fiets te huren
                        om in de centrumring te gebruiken. Door deze combinatie kun je vaak voordeliger of gratis parkeren.
                        In het centrum zijn hiervoor fiets parkeerlocaties aanwezig die gratis zijn.
                        Per Parkeer locatie (indien faciliteit aanwezig) kunnen de voorwaarden verschillen.
                        Kijk op locatie details informatie voor meer info via website parkeerlocatie.
                    </h4>
                </ContentBox>
                <ContentBox subtitlecontentbox="LANG PARKEREN">
                    <h3>
                        Langer dan een dag (24 uur)<br/>
                        Dit is als keuze relevant als u als bezoeker
                        langer in Amsterdam verblijft dan 24 uur.
                        Of als u als inwoner van Amsterdam gebruik wilt maken
                        van de lang parkeren faciliteit in parkeergarages.
                        Dit is een mogelijkheid voor vergunninghouders.
                        Kijk op locatie details informatie voor de mogelijkheden
                        per locatie (website)<br/>
                    </h3>
                </ContentBox>
                <ContentBox subtitlecontentbox="PARKEER LOCATIE GEGEVENS UITGEBREID">
                    <h3>
                        Kijk op locatie details informatie voor informatie
                        per locatie of op website van desbetreffende locatie.<br/>
                    </h3>
                </ContentBox>
                <div id="moreInfo-box">MyAccount</div>
             </div>
        </>
        );
        }
export default ContentMyAccount;



