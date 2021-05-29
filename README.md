## Eindopdracht Novi Hogeschool FrontEnd Development
Deze applicatie is tot stand gekomen als eindopracht voor de FrontEnd Development
opleiding van Novi Hogeschool. De probleemstelling voor het bouwen van deze applicatie is: 
Grote steden en parkeerplaats zoeken. Je weet van te voren niet of er plaats beschikbaar is.
Als je nu eens realtime deze actueel beschikbare plaatsen van te voren online kunt checken!
Dit vormt minder stress, minder zoekverkeer in de grote steden en het is ook nog eens goed voor het millieu.
Het betreft hier de stad Amsterdam en de actueel beschikbare parkeerplaatsen in de parkeergarages.
De API datasets die voor deze applicatie gebruikt zijn, zijn afkomstig van OPENDATA OVERHEID.

## Applicatie
ParkerenParkeerplaatsvrijAmsterdam
## Wat tref ik aan in deze applicatie
|> Parkeerplaats VRIJ Kort en Lang Parkeren 
|> Actueel beschikbaar in de parkeergarages van Amsterdam 
|> Parkeergarage locatie informatie 
|> Parkeergarage locatie detail informatie 
|> P&R + OV naar CENTRUM | PARK + BIKE |
|> LOGIN/REGISTREER MOGELIJKHEID VOOR EEN ACCOUNT.

## De applicatie starten
1.`npm install`
2.`npm install router dom`
3.`npm install react hook form`
4.`npm install axios`
5 `npm install `
6 `firebase base backend`
7. `Login firebase`
   https://console.firebase.google.com/ 
   API KEY staat vermeld in de installatiehandleiding
8. `Aanmaak tijdelijk emailadres + inbox voor reset password`
   https://temp-mail.org/en/
9. `API Opendata overheid 2 datasets` 
   Toegang DATA aanmelding via CORS - set Toggle ON
   https://mybrowseraddon.com/access-control-allow-origin.html
   Van een API key is bij Opendata overheid geen sprake in de documentatie.


NB!   
Errormelding tijdens uitvoering van project
Error while trying to use the following icon from the Manifest: http://localhost:3000/logo192.png
   Deze melding schijnt vaker voor te komen wanneer een icon verwijderd wordt.
   Stackoverflow adviseerde onderstaande link uit Index.html te verwijderen. 
   <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
   https://stackoverflow.com/questions/61138082/error-while-trying-to-use-the-following-icon-from-the-manifest
   Dit heeft het probleem opgelost.
