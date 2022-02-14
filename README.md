# <center><img src="https://cdn.discordapp.com/attachments/468472388431118346/920264406909198366/pusheen-sushi-unscreen.gif" style="zoom: 33%;" /><img src="https://media.discordapp.net/attachments/917717231801098260/920265411877011546/sushifast-logo-github.png" style="zoom: 67%;" />

### *Présentation*

Développement d'une application Web à l'aide du framework Angular qui utilise une API Node SushiShop.

Ce projet comprend deux parties, la première est à rendre pour le vendredi 10 décembre et la seconde partie  18 février.

Niveau : Deuxième année de BTS SIO SLAM

Projet effectué du lundi 29 novembre 2021, au vendredi 18 février 2022.

### *Groupe*

Brancodeurs 2 : Yannick Midey et Bryan Guillot

Etroite collaboration avec l’équipe Brancodeurs 1 composé de Lucas et Alexandre.

### *Objectif*

L’application Web aura pour résultat essentiel **le calcul d’une commande de plateaux** de Sushi. 

Mais elle comportera aussi : 

- l’affichage de la liste des plateaux de Sushi,


- la possibilité de voir le détail d’un plateau, 


- l’achat d’un ou plusieurs plateaux sous la forme d’un panier, 	


- la visualisation des commandes sauvegardées localement,


- une page spécifique concernant la mise en place du RGPD


Les **attendus techniques** demandés : 

- Interrogation d’une API existante via la saisie d’informations dans un formulaire,

- Définition d’une entité objet pour la représentation des données, 

- Affichage de la liste des objets, accès au détail, calcul de commande, 

- Sauvegarde locale côté client (LocalStorage), 

- Prise en compte d’au moins 2 Evil User Stories, 

- Test unitaire (au moins 3).

### *Liens dépôts*

Présentation du projet : https://slam-vinci-melun.github.io/sio22/phase2/SP2-Angular-2021_22.pdf

Dépôts GitHub : https://github.com/BGuiIlot/SushiFast

<div style="page-break-after: always"></div>

### *Prérequis*

- Environnement de travail opérationnel
- Savoir créer un projet Angular avec des composants.
- Avoir compris les modes d’échanges entre Parent et Enfant d’élément du DOM
  Voir : https://angular.io/guide/inputs-outputs
- Avoir une bonne connaissance de base des langage de programmation (Javascript,Typescript)
- Et comprendre l'utilisation du framework Angular.
- Avoir une bonne connaissance de MongoDB

### *Matériels utilisés :*

- OS : Windows 10
- Version NodeJS : v16.13.0
- Version Angular CLI : 13.0.2
- Version Visual Studio Code : 1.62.2
- Version MongoDB : 5.0.4

<div style="page-break-after: always"></div>

## <center>*Première partie*

### *Diagramme de cas d’utilisation*

<img src="https://media.discordapp.net/attachments/901086910083108927/917448206001008680/unknown.png" alt="img" style="zoom:80%;" />

### *Diagramme séquentiel : passer une commande*

 

<img src="https://media.discordapp.net/attachments/901086910083108927/917701431325257748/image.png" alt="img" style="zoom:80%;" />

### *Requête pour tous les plateaux*

<img src="https://media.discordapp.net/attachments/901086910083108927/917431932462170213/EnormePenisOversize.PNG" alt="img" style="zoom:67%;" />

### *Structure JSON*

![Une image contenant texte  Description générée automatiquement](https://cdn.discordapp.com/attachments/901086910083108927/917729209537945610/unknown.png)

### *RGPD*

<img src="https://cdn.discordapp.com/attachments/468472388431118346/920255888361672724/RGPD.PNG" alt="Une image contenant texte  Description générée automatiquement" style="zoom:150%;" />
<<<<<<< HEAD

<h1>Mise en place/ Commandes</h1>

 

Tout d’abord il faut créer le projet Angular. Pour cela nous exécutons la commande suivante : ng new SushiFast –routing=true

 

A l’emplacement voulu.

 

Après avoir testé que tout s’est bien déroulé, on essaie de lancer le serveur avec la commande : ng serve

 

Ensuite, nous allons créer plusieurs composant via la commande : ng g c « nom du composant »

Il y a donc le composant :boxs, footer, header, home, panier et rgpd.

<h1>Développement</h1>

L'opérateur arrive d'abord sur la page d'accueil du site, le "home.component". Il n'y à pas grand chose sur cette page mis appart le header qui permet d'accéder aux autres pages, le footer qui permet d'accéder au RGPD ainsi qu'une banière avec un slogan.
![img](https://media.discordapp.net/attachments/415449138747146250/940899196419059722/unknown.png)

Si l'opérateur veut prendre commande, alors il peut cliquer sur le bouton "Menu" du header, ce qui le redirigera sur une page présentant les différents plateaux qui sont proposés. L'opérateur peut cliquer sur "read more" afin d'en savoir plus sur chaque plateau. En effet, en cliquant sur "read more" un modal apparait et donne la composition du plateau. Il y a également un bouton fermer ainsi qu'un bouton pour ajouter le plateau au panier. Le panier est a gauche de la page, ce qui permet de voir en temps réel le total de la commande et de facilement supprimer un plateau en trop par exemple.
voici a quoi ressemble le html permettant d'afficher les différents plateaux
![img](https://media.discordapp.net/attachments/415449138747146250/940899416431280148/unknown.png?width=1202&height=596)
Ici, a l'aide d'une boucle ngFor, on affiche les "box" avec une image, un nom, le nombre de pièces ainsi que sont prix. Le boutton "Readmode" fait appel a la fonction "affModal()" ce qui comme son nom l'indique affiche le modal propre au plateau sélectionné. Enfin un autre bouton permet d'ajouter le plateau au panier.

Le modal du plateau "Amateur Mix" par exemple resemble a ceci:
![img](https://media.discordapp.net/attachments/415449138747146250/940904037748981801/unknown.png)

Concernant le code du modal, le voici.

![img](https://media.discordapp.net/attachments/415449138747146250/940904868124721172/unknown.png)

Enfin concernant le panier affiché sur la gauche, a l'aide d'une boucle ngFor, on affiche l'image, le nom et le prix des plateaux ajoutés. Le prix total est par la suite calculé et affiché. Un bouton supprimer apparait pour chaque plateau et le bouton payer tout en bas afin de finaliser la commande. Une fois finalisée, la commande est ajoutée a l'historique des commandes.
![img](https://media.discordapp.net/attachments/415449138747146250/940905260866752572/unknown.png)

Maintenant dans "historique-commande.component". Ce component a pour but de répertorier les commandes effectuées par l'opérateur. En effet, une fois la commande passée, l'opérateur peut consulter l'historique qui affiche l'ID, la date, le prix total ainsi que le status (si oui ou non la commande fût bien payée).

Voici a quoi ressemble le code concernant l'historique.
![img](https://media.discordapp.net/attachments/415449138747146250/940907667998801960/unknown.png)

enfin, voici la page RGPD mais cette fois en ligne comme demandé.
![img](https://media.discordapp.net/attachments/415449138747146250/940899808804212746/unknown.png)
=======
>>>>>>> beae29e8a190b0bc33537512599fd63a96ce203e
