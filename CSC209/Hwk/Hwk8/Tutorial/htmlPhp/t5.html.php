<!DOCTYPE html>
<html>
<body>

<h1>Hidden Input</h1>
<form action="../php/subscribe.php" method="post">
    First Name: <input type="text" name="firstName"><br><br>
    Last Name: <input type="text" name="lastName"><br><br>
    Email: <input type="text" name="email"><br><br>
    Password: <input type="text" name="pass"><br><br>
    <input type="hidden" name="mailingList" value="YES">
    <input type="submit">
</form>
</body>
</html>