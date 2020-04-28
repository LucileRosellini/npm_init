
==================================================================================
Initier un projet avec NPM:
==================================================================================

1) Creer un dossier 
2)'npm init -f' dedans
3) npm install imagemin. ( On remarquera que cela ajoute des dépendances à l'arborescence npm)

4) Ouverture du fichier package.json - package.json est le fichier de configuration pour npm. Il permet de spécifier les packages de dépendance, pour fournir une commande start. 

----> 4.1) Ajout de la declaration d'un script dans le code du fichier package.json. (Ici il s'appelle "convertimg": "node index.js")  "node" est spécifié car c'est grace à lui que npm pourra aller chercher l'index.

5) Creation du script qui a été déclaré dans le package.json  afin de mettre le code qui traitera la conversion des images à l'interieur. (Ici il s'agit d'index.js.)-> Code de convertion trouvé sur : https://github.com/imagemin/imagemin

-----> 5.1) Comme demandé dans l'exercice: modification de la fonction imageminPngquant() qui devient : imageminPngquant({ quality: [0, 0.05] })

-----> 5.2) Comme nous traitons une conversion, il faut prévoir que le code puisse accueillir "une entrée" et restituer "une sortie" post conversion. Modifier les champs du script index:

imagemin 'images/input/*.png' Pour qu'il permette l'entrée d'une image et prevoir une destination pour recupérer la sortie en renseignant le champ destination de la sorte: 
destination: 'images/output' 

-----> 5.3 Dans le cadre d'un vrai projet il est préconisé d'avoir un dossier input et output (entrée et sortie. ) ---> Prevoir la place avec un placeholder si on veut tester.


6) Lancer le script ====> 'npm run-script convertimg'

lu@lu-ThinkPad-X230:~/NPM_exo$ npm run-script convertimg

> NPM_exo@1.0.0 convertimg /home/lu/NPM_exo
> node index.js

Images optimized

==================================================================================
Tester avec des images: 
==================================================================================

Savoir l'etat de de mes emplacements de stockage: 

lu@lu-ThinkPad-X230:~/NPM_exo$ ls -l images/input/ images/output/
images/input/:
total 0
-rw-r--r-- 1 lu lu 0 avril 27 15:49 placeholder

images/output/:
total 0
-rw-r--r-- 1 lu lu 0 avril 27 15:49 placeholder
____________________________________________________________

Ajouter une image au dossier input:
cp chemin_cible_depart chemin_cible_arrivée

lu@lu-ThinkPad-X230:~/NPM_exo$ cp /home/lu/Images/githublog.png images/input/
_____________________________________________________________

Appliquer la conversion aux images de input:

'npm run-script convertimg'

______________________________________________________________
Visualiser les images des dossiers ciblés du projet:

'eog images/output/githublog.png'












