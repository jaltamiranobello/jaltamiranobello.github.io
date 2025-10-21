<?php
    //TEMPLATE
    $NRWEEKS = 6;
    $WEEKSTR = "<h1>Week NR</h1>";
    $DATESTR ="<h2>DATEX</h2>";
    $TOPICSTR = "<h3>TOPICX</h3>";
    $TEXTSTR = "<p>TEXTX</p>";
    
    //INFORMATION
    $DATES = array("Sep 1-7", "Sep 8-14", "Sep 15-20", "Sep 21-27", "Oct 1-7", "Oct 8-14");
    $TOPICS = array("Installation", "HTML", "CSS", "JavaScript1", "", "");
    $TEXTS = array("We install software", "We make our first Html", "We style pages with Css", "Get started on Javascript", "", "");
?>
<html>
    <head>
    </head>
    <body>
        <a href="../lab10.html">Return To Lab 10</a>
        <?php
        for ($i = 0; $i < $NRWEEKS; $i ++){
            echo str_replace('NR', $i, $WEEKSTR);
            echo str_replace('DATEX', $DATES[$i], $DATESTR);
            echo str_replace('TOPICX', $TOPICS[$i], $TOPICSTR);
            echo str_replace('TEXTX', $TEXTS[$i], $TEXTSTR);
        }
        ?>
    </body>
<html>