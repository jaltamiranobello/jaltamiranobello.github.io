<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <a href="../../lab10.html">Return To Lab 10</a>
        <h1>Date and Time</h1>
        <h2>Get Date</h2>
        <?php
            date_default_timezone_set("America/New_York");
            echo "Today is " . date("m/d/Y") . "<br>";
            echo "Today is " . date("m.d.Y") . "<br>";
            echo "Today is " . date("m-d-Y") . "<br>";
            $today = date('l');
            $tomorrow = strtotime("October 20, 2025");
            echo "Today is " . $today. ", which means tomorrow is ".date("l", $tomorrow);
        ?>
        <h2>Get Time</h2>
        <?php
            echo "The time is " . date("h:i:sa")."<br>";
            echo "The time is " . date("h:ia")."<br>";
            echo "The time is " . date("H:i");
        ?>
        <h2>Set TimeZone</h2>
        <?php
            date_default_timezone_set("Europe/Madrid");
            echo "The time is " . date("h:ia"). " in Madrid, Spain";
        ?>      
    </body>
</html>