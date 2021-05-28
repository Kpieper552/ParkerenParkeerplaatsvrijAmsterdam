import React from 'react';
import '../../App.css';
import ParkingLocationItemNameD from "../tab/parkinglocationplacesfree/ParkingLocationItemNameD";
import ParkingLocationDetailsSingleC from "../tab/parkinglocationdetails/ParkingLocationDetailsSingleC";
import ParkingLocationItemNameE from "../tab/parkinglocationplacesfree/ParkingLocationItemNameE";
import ParkingLocationDetailsSingleA from "../tab/parkinglocationdetails/ParkingLocationDetailsSingleA";
import ParkingLocationDetailsSingleB from "../tab/parkinglocationdetails/ParkingLocationDetailsSingleB";
import ParkingLocationItemNameF from "../tab/parkinglocationplacesfree/ParkingLocationItemNameF";


function ContentMyAccount() {

return (
         <>
           <div id="parkingAdam-form-deel">
             <div id="parkingAdam-content-deel">
                <h3>PARKEREN AMSTERDAM<br/><br/>
                    Aanrijdroutes Amsterdam<br/>
                    Zuidwestelijke richting: A4/A5 vanuit Den Haag, Schiphol.
                    Noordwestelijke richting: A9  vanuit Alkmaar Haarlem.
                    Noordelijke richting: A7/A8 vanuit Hoorn/Zaanstad.
                    Noordoostelijke richting: A6 vanuit Lelystad/Almere-Stad.
                    Zuidoostelijke richting: A1 vanuit Amersfoort/Hilversum
                    en A2 vanuit Utrecht<br/>
                </h3>
             </div>
             <div id="parkingAdam-content-deel">
                 <h3>| Park & Ride |<br/></h3>
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
                        en de volgende 72 uur 1 euro per 24 uur |
                        maandag tot en met vrijdag vóór 10.00 uur |
                        Na 96 uur betaalt u het duurdere standaard parkeertarief.
                        Dit tarief verschilt per P+R-locatie. <br/><br/>
                        De voorwaarde is naar het Centrum te gaan met het OV.<br/>
                        Kijk op locatie details uitgebreid voor meer info via
                        website parkeerlocatie.
                    </h4>
             </div>
             <div id="parkingAdam-content-deel">
                    <h3>| Parkeren Centrum en Noord |<br/></h3>
                    <h4>
                        Locatie uitgelicht Museumplein<br/>
                        Ideaal voor een bezoek aan de musea die Amsterdam rijk is.
                        <ParkingLocationItemNameD/><br/>
                        <ParkingLocationDetailsSingleC/><br/>
                    </h4>
              </div>
              <div id="parkingAdam-content-deel">
                    <h3>| Parkeren Zuidoost en Oost |<br/></h3>
                    <h4>
                        Locatie uitgelicht Arena<br/>
                        Ideaal voor een bezoek aan een voetbalwedstrijd of concert.
                        <ParkingLocationItemNameE/><br/>
                        <ParkingLocationDetailsSingleB/><br/>
                    </h4>
               </div>
               <div id="parkingAdam-content-deel">
                    <h3>| Parkeren Zuid en West |<br/></h3>
                    <h4>
                        Locatie uitgelicht VU UMC<br/>
                        <ParkingLocationItemNameF/><br/>
                        <ParkingLocationDetailsSingleA/><br/>
                    </h4>
               </div>
               <div id="parkingAdam-content-deel">
                   <h3>| Park & Bike |<br/></h3>
                   <h4>
                         Parkeergarage locaties die de mogelijkheid bieden om een fiets te huren
                         om in de centrumring te gebruiken. Door deze combinatie kun je vaak voordeliger of gratis parkeren.
                         In het centrum zijn hiervoor fiets parkeerlocaties aanwezig die gratis zijn.
                         Per Parkeer locatie (indien faciliteit aanwezig) kunnen de voorwaarden verschillen.
                         Kijk op locatie details uitgebreid voor meer info via website parkeerlocatie.
                     </h4>
                    </div>
                    <div id="parkingAdam-content-deel">
                     <h3>
                         LANG PARKEREN<br/><br/>
                         (langer dan een dag (24 uur)<br/>
                         Dit is als keuze relevant als u als bezoeker
                         langer in Amsterdam verblijft dan 24 uur.
                         Of als u als inwoner van Amsterdam gebruik wilt maken
                         van de lang parkeren faciliteit in parkeergarages.
                         Dit is een mogelijkheid voor vergunninghouders.<br/>
                         Kijk op locatie details uitgebreid voor de mogelijkheden
                         per locatie (website)<br/>
                    </h3>
                 </div>
                <div id="MoreInfo">MyAccount</div>
             </div>
        </>
        );
        }
export default ContentMyAccount;



