<?php
    //COLUMNS 
    const NRWEEKS = 6;
    const DATES = ["Sep 1-7", "Sep 8-14", "Sep 15-20", "Sep 21-27", "Oct 1-7", "Oct 8-14"];
    const TOPICS = ["Installation", "HTML", "CSS", "JavaScript", "N/A", "N/A"];
    const DESC = ["We install software", "We make our first Html", "We style pages with Css", "Get started on Javascript", "N/A", "N/A"];
?>
<html>
    <head>
        <style>
            table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            }
            th, td {
                padding-top: 10px;
                padding-bottom: 10px;
                padding-left: 10px;
                padding-right: 10px;
                text-align:center
            }
        </style>
    </head>
    <body>
        <a href="../lab10.html">Return To Lab 10</a><br><br>
        <?php
        echo ("<table>");
        echo ("<tr><th>Week</th><th>Date</th><th>Topic</th><th>Description</th></tr>");
        for ($i = 0; $i < NRWEEKS; $i ++){
            echo("<tr><td>Week $i</td><td>".DATES[$i]."</td><td>".TOPICS[$i]."</td><td>".DESC[$i]."</td></tr>");
        }
        echo ("</table>");
        ?>
    </body>
<html>