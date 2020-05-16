<?php 
include 'headerMemo.php';


?>
<body>
<div class="content">
    <header>
        <nav>
            <ul>
                <li><a href="#"  id="info"> <i class="fa fa-info-circle"></i></a></li>
                <li id="story"><a href="#"><i class="fa fa-user-secret"></i><i class="fa fa-pencil-square-o"></i></a></li>
                <li id="music"><a href="#"><i class="fa fa-music"></i></a></li>
                <li  id="score"><a href="#"><i class="fa fa-user"></i><span id="actualScore"> </span></a></li>
                <li  id="score"><a href="#"><i class="fa fa-trophy"></i><span id="best"> </span></a></li>
                <li id="start"><a href="../../"><i class="fa fa-home"></i></a></li> <!-- back to the main page if it is nested -->
            </ul>
        </nav>
    </header>
    
    <div class="container">
        <div id="cell1" class="cell">1</div>
        <div id="cell2" class="cell">2</div>
        <div id="cell3" class="cell">3</div>
        <div id="cell4" class="cell">4</div>
        <div id="cell5" class="cell">5</div>
        <div id="cell6" class="cell">6</div>
        <div id="cell7" class="cell">7</div>
        <div id="cell8" class="cell">8</div>
        <div id="cell9" class="cell">9</div>
        <div id="cell10" class="cell">10</div>
        <div id="cell11" class="cell">11</div>
        <div id="cell12" class="cell">12</div>
        <div id="cell13" class="cell">13</div>
        <div id="cell14" class="cell">14</div>
        <div id="cell15" class="cell">15</div>            
    </div>
    <div class="bigStart" style="display: block;">
        <div class="startContainer">
            <p id="startGame"><i class="fa fa-play-circle-o" style="cursor:pointer;"></i></p>
        </div>
    </div> 
    <div class="containerB">
        <div class="storyBox"><h2 id="storyTitle">A város rejtélyes története</h2><p id="townStory"></p></div>
        <div class="info">
            <div class="infoContainer">
                <h3>Útmutató</h3>
                
                <p>1. Indítsd a kört a <i class="fa fa-play-circle-o" style="font-size:24px"></i>-ra kattintva.</p>
                <p>2. Figyeld meg a világító ablaktáblák sorrendjét.</p>
                <p>3. Kattintással reporodukáld, amit láttál!</p>
                <p>A <i class="fa fa-user-secret" style="font-size:24px"></i>-ra kattintva megnézheted, hogy a kémed mennyit fejtett már meg a történetből!</p>
                <h3>Kredit</h3>
                <p>Köszönet a város grafikájának elkészítéséért <em><strong>© Szerafin Ágnes Katának</strong></em>!</p>
                <p>A játékot készítette Juli.</p>
                <p>Infó doboz zárása és nyitása a fenti <i class="fa fa-info-circle" style="font-size:24px"></i> ikonra kattintva lehetséges.</p>
                <p>Vissza a főoldalra: <a href="index.html"><i class="fa fa-home" style="font-size:24px"></i></a></p>
            </div>
        </div>

        <div id="cell101" class="cellTop">1</div>
        <div id="cell102" class="cellTop">2</div>
        <div id="cell103" class="cellTop">3</div>
        <div id="cell104" class="cellTop">4</div>
        <div id="cell105" class="cellTop">5</div>
        <div id="cell106" class="cellTop">6</div>
        <div id="cell107" class="cellTop">7</div>
        <div id="cell108" class="cellTop">8</div>
        <div id="cell109" class="cellTop">9</div>
        <div id="cell110" class="cellTop">10</div>
        <div id="cell111" class="cellTop">11</div>
        <div id="cell112" class="cellTop">12</div>
        <div id="cell113" class="cellTop">13</div>
        <div id="cell114" class="cellTop">14</div>
        <div id="cell115" class="cellTop">15</div>            
    </div>    

</div>

<script src="../js/memo2.js"></script>

</body></html>

<?php 

?>