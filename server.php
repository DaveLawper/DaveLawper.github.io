<html>
    <head>
        <meta charset="utf-8">
        <script src="script.js"></script>
        <title id="titre">Projet LPB SpaceElevator</title>
    </head>
    <body>
        <header>Site Projet Space Elevator</header>
        <button onclick="transfert()">Appuyez ici</button>
        
        <a href="mesures.html">           
            <button>
                Mesures
            </button>
        </a>
        <?php
        function transfert() {
            if (isset($_GET["var1"])) {
                echo $_GET["var1"];
            }
        }
        
        
        ?>
        <p id="data"></p>
    </body>
</html>