
## Applicatie
ParkerenParkeerplaatsvrijAmsterdam

## De applicatie starten
1.`npm install`
2.`npm install router dom`
3.`npm install react hook form`
4 `npm install `
5 `firebase base backend`
6. `Login firebase`
   https://console.firebase.google.com/   
7. `Aanmaak tijdelijk emailadres + inbox voor reset password`
   https://temp-mail.org/en/
8. `API Opendata overheid 2 datasets` 
   Toegang DATA aanmelding via CORS - set Toggle ON
   https://mybrowseraddon.com/access-control-allow-origin.html
   Van een API key is bij Opendata overheid geen sprake in de documentatie.
   



Errormelding tijdens laatste fase van project
Error while trying to use the following icon from the Manifest: http://localhost:3000/logo192.png
   Deze melding schijnt vaker voor te komen wanneer een icon verwijderd wordt.
   Stackoverflow adviseerde onderstaande link uit Index.html te verwijderen. 
   <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
   https://stackoverflow.com/questions/61138082/error-while-trying-to-use-the-following-icon-from-the-manifest
   Dit heeft het probleem opgelost.
