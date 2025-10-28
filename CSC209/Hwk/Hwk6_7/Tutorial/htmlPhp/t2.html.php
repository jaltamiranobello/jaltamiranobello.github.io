<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <a href="../tutorial.html">Return To Tutorials</a>
        <h1>Constants</h1>
        <h2>Define</h2>
        <p>Can use define to make global arrays and create global variables within functions</p>
        <?php
            define("NAMES", ["Fernanda", "Karen", "Elssie", "Judith"]);
            var_dump(NAMES);
        ?>
        <h2>Const</h2>
        <p>Cannot use const within block scope to define a global variable</p>
        <?php
            const NAME = "Fernanda";
            echo (NAME);
        ?>
        <h2>Magic Constants</h2>
        <?php
            echo __FILE__;
        ?>
        <h1>Conditionals</h1>
        <h2>Logical Operators with if...elseif...else</h2>
        <?php
            $firstName = "Fernanda";
            $lastName = "Altamirano";
            if ($firstName == "Fernanda" && $lastName == 'Smith') {
                echo ("Innacurate full name: Fernanda Smith");
            } elseif ($firstName.$lastName == "Fernanda Altamirano" || ($firstName == "Fernanda" && $lastName == "Altamirano")){
                echo ("Accuarte name is: Fernanda Altamirano");
            } else {
                echo("Innacurate full name either first or last name or both are incorrect");
            }
        ?>      
    </body>
</html>