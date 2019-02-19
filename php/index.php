<?php
include 'iredis.php';
session_start();
?>
<!DOCTYPE html>
<?php
$redis = new iRedis();
$user_id = rand(10000, 99999);
$session_id = rand(100000, 999999);
$cookie_value = $session_id;
setcookie("session_id", $cookie_value, time() + (86400 * 30), "/", "beng.io");
$_SESSION["secret"] = $user_id;
$redis->set("sharing_cookies_". $session_id, $user_id);
?>
<html>
<body>

<?php
if(!isset($_COOKIE["session_id"])) {
    echo "Cookie named '" . "session_id" . "' is not set!";
} else {
    echo "Cookie '" . "session_id" . "' is set!<br>";
    echo "Value is: " . $_COOKIE["session_id"];
}
?>

</body>
</html>