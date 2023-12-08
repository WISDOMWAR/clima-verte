## Nom du Projet
Climavert 

## Aperçu
Ce projet est une application  web qui propose des solutions pour le changement climatique. Il utilise une API dédiée pour récupérer des données liées au changement climatique et offre diverses fonctionnalités pour sensibiliser et encourager les utilisateurs à prendre des mesures positives. 

## Fonctionnalités
    • Inscription et création de compte : Créez un compte en fournissant vos informations (telles que votre nom, votre adresse e-mail et votre mot de passe). Confirmez votre adresse e-mail avec un lien envoyé dans votre boîte de réception. 
    • Soumettre une plainte: Utilisez la fonction de réclamation pour signaler des problèmes environnementaux. Fournissez des détails tels que le type de contamination, l’emplacement et la description. 
    • Vérification de la réclamation en ligne : Suivez l'état de votre réclamation en ligne. Recevez des notifications lorsque des mises à jour, des commentaires ou des plaintes sont résolues.
    • Découvrez les marchandises Écologique : Explorez la section magasin et découvrez une gamme de produits Écologique disponibles. Consultez les détails du produit, y compris son impact environnemental, les avis des utilisateurs et les prix en points. 
    • Suivez le solde des points avec les profils : Accédez à votre profil pour consulter votre solde de points actuel. Consultez l'historique des transactions pour voir comment vous avez gagné ou dépensé des points. 
    • Ces fonctionnalités sont conçues pour créer une expérience utilisateur complète, de l'inscription à l'interaction avec les fonctionnalités importantes de l'environnement jusqu'à la gestion du profil utilisateur.



      
## Technologies Utilisées
    • Nextjs 
    • css 
    • html
    • Design  (Figma,AdobeXD,Photoshop,Illustrator)
    • Redux Toolkit
    • React Navigation
    • Axios (pour les requêtes API)
    • AsyncStorage (pour le stockage local)

## Installation
    1. Installation de node js
    2. Clonez le dépôt : git clone <URL-copiee de git hub>
    3. Installez les dépendances  bash: npm install
    4. Lancez le serveur de développement : npm run dev ou yarn dev 
    5. open http:local//localhost:3000
    6. Suivez les instructions pour exécuter l'application sur un émulateur ou un appareil

## Utilisation
    1. Lancez l'application sur votre émulateur web.
    2. Créez un compte en appuyant sur le bouton "sign up " et suivez les instructions depuis votre appareil mobile.
    3. Connectez-vous en appuyant sur le bouton "log in " avec vos identifiants mobiles.
    4. Soumettez une réclamation en utilisant le champ dédié, spécifiant tous les détails nécessaires directement depuis  la page d acueil .
    5. Utilisez la section Profil pour effectuer des modifications sur vos informations personnelles et pour suivre votre solde de points depuis votre appareil mobile.
    6. Explorez la section Boutique depuis votre appareil, découvrez les produits disponibles, et échangez-les contre vos points accumulés.
       






## Structure des Dossiers
Le projet suit la structure de dossier suivante :
    • src : Contient les fichiers du code source.
        ◦ app : Contient des ressources statiques telles que des images et des polices.
               - home
                                       page.js
                                       style.js
                             - test :
                                       page.js
                                       style.css
                                    
                                                            
        ◦ component : Contient des composants réutilisables utilisés dans toute l'application.
                                 Reclamation.jsx
                                  store.jsx
                              
        ◦ try.html
        ◦ body{.css

## Composants
Le projet inclut les principaux interfaces suivants :
l'interface de la page d'accueil. 

## Contexte
L'application utilise également le Contexte pour gérer des aspects spécifiques de l'état. Il inclut les valeurs de contexte suivantes :
    • userPreferences : Gère les préférences utilisateur liées aux de site web climat vert , comme les unités de mesure (Celsius ou Fahrenheit), les lieux préférés, etc.
    • notifications : Gère les notifications liées aux mises à jour météorologiques, alertes climatiques, etc.
    • searchHistory : Gère l'historique des recherches météorologiques précédentes effectuées par l'utilisateur.
En utilisant cette combinaison de Redux Toolkit et Contexte, l'application peut gérer de manière efficace et modulaire différents aspects de l'état, offrant ainsi une expérience utilisateur cohérente et personnalisable en fonction des préférences de chaque utilisateur.

## Intégration de l'API
L'application climatique intègre une API dédiée pour récupérer des données  sur les reclamations  réel sur le climat ,boutique,reservation et update des informations .
Problème 
problème d'affichage ou de mise en page
Solutions possibles :
    1. Ajustez la largeur de la fenêtre du navigateur :
        ◦ Dans certains cas, des problèmes d'affichage peuvent être résolus en modifiant la largeur de la fenêtre du navigateur. Essayez de redimensionner la fenêtre et observez si cela corrige le problème.
    2. Vérifiez la compatibilité du navigateur :
        ◦ Assurez-vous que le navigateur que vous utilisez est conforme aux normes du site Web. Considérez l'utilisation d'un autre navigateur pour déterminer si le problème persiste, ce qui pourrait indiquer des incompatibilités spécifiques.




## Autres problèmes en cours
Si le problème persiste après avoir suivi les étapes de dépannage ci-dessus, effectuez les étapes supplémentaires suivantes :
    1. Informations requises lors de la soumission d'une question :
        ◦ Lors de l'ouverture d'un problème sur la plateforme de suivi (par exemple, GitHub), assurez-vous de fournir les informations suivantes :
            ▪ Version du navigateur que vous utilisez.
            ▪ Messages d'erreur spécifiques rencontrés, le cas échéant.
            ▪ Étapes pour reproduire le problème.
            ▪ Capture d'écran du problème, si possible.
## Équipe de Contribution pour le Projet "Climavert"
    1. Raed rdhaounia  (leader ) :
        ◦ Dirige le développement de l'application, prend des décisions architecturales et s'assure de la cohérence du code.
    2. Ben hmida Montasser (web design ) :
        ◦ Concevoir l'interface utilisateur, créer des maquettes et des prototypes pour garantir une expérience utilisateur optimale.
    3. Seif ben amar (Designer) :
        ◦ Concevoir l'interface utilisateur, créer des maquettes et des prototypes pour garantir une expérience utilisateur optimale.
    4. Maha  ellouzi (Designer )  :
        ◦ Implémente l'interface utilisateur, travaille sur les composants frontend et assure la convivialité de l'application.
       
    5. Mouna  akka ( Backend Developer:
        ◦ Gère le développement du backend, construit des API robustes pour prendre en charge les fonctionnalités de l'application.
    6. Mohamed hammouda (Frontend Developer):
        ◦ Implémente l'interface utilisateur, travaille sur les composants frontend et assure la convivialité de l'application. 
        ◦ 
    7. Lami auoub (Frontend Developer) :
        ◦ Implémente l'interface utilisateur, travaille sur les composants frontend et assure la convivialité de l'application.
    8. Boutauna wejdi  (Frontend Developer):
        ◦ Implémente l'interface utilisateur, travaille sur les composants frontend et assure la convivialité de l'application.

    9. Mohamed  khelifi (Frontend Developer) :
        ◦ Implémente l'interface utilisateur, travaille sur les composants frontend et assure la convivialité de l'application.
    10. Saber ghileni (Frontend Developer):
        ◦ Implémente l'interface utilisateur, travaille sur les composants frontend et assure la convivialité de l'application.
        ◦ 
    11. Takwa Metiar (Documentation Specialist) :
        ◦ Rédige et maintient la documentation du projet, garantit que les utilisateurs et les contributeurs ont des informations à jour.
    12. Sofien Mohamed (Community Manager) :
        ◦ Gère la communauté autour du projet, sollicite des retours, et assure une communication transparente entre les contributeurs.
    13. Oumaiama soussi (Community Manager):
        ◦ Gère la communauté autour du projet, sollicite des retours, et assure une communication transparente entre les contributeurs.
       
Chaque membre de l'équipe apporte une expertise unique, contribuant ainsi au succès global du projet "GreenSolutions". Les contributeurs sont encouragés à collaborer, partager des idées et résoudre des problèmes ensemble.