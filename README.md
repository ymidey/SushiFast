![img](https://cdn.discordapp.com/attachments/751070178472624208/917757760018452530/01_relax_dribble.gif) ![img](https://cdn.discordapp.com/attachments/917717231801098260/920265411877011546/sushifast-logo-github.png)
<h1 style={ text-align: center;}>SushiFast</h1>

 

SushiFast est une application web qui permet à l'utilisateur de passer commande. Ce projet comprend deux parties, la première est à rendre pour le 10 décembre et la seconde partie le 18 février.

 

C’est un projet de deuxième année de BTS SIO SLAM donné par Monsieur Chamillard et Monsieur Capuozzo.

 
![img](https://user-images.githubusercontent.com/77196492/146001011-f60909c0-0725-4270-a285-be744bb1bc07.png)

<h1>Groupe</h1>  

Brancodeurs 1 : Alexandre Alleaume et Lucas Pisano

Etroite collaboration avec l’équipe Brancodeurs 2 composé de Yannick Midey et Bryan Guillot.

 
![img](https://media.discordapp.net/attachments/917717231801098260/920295278328815646/1-removebg-preview.png)
<h1>Outils</h1>

Angular 13.0.1
 
Système d’exploitation : Windows 10

Angular 13.0.1

Visual studio 1.62.2

NodeJS v16.13.0

MongoDB v5.0.4
 

<h1>Lien GitHub</h1> 

 

https://github.com/VrNephy/SushiFast

 

<h1>Lien Projet</h1>

https://slam-vinci-melun.github.io/sio22/phase2/SP2-Angular-2021_22.pdf

 

<h1>Diagramme de cas d’utilisation</h1>

 

![img](https://media.discordapp.net/attachments/901086910083108927/917448206001008680/unknown.png)

<h1>Diagramme séquentiel : passer une commande</h1>

 

![img](https://media.discordapp.net/attachments/901086910083108927/917701431325257748/image.png)

 

 

<h1>Requête pour tous les plateaux</h1>

![img](https://media.discordapp.net/attachments/901086910083108927/917431932462170213/EnormePenisOversize.PNG)

<h1>Structure JSON</h1>

![Une image contenant texte  Description générée automatiquement](https://media.discordapp.net/attachments/415449138747146250/917713640684134431/unknown.png)

 

 

<h1>RGPD</h1>

 

![Une image contenant texte  Description générée automatiquement](https://cdn.discordapp.com/attachments/751070178472624208/920245300575219772/unknown.png)

 

 

 

 

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
