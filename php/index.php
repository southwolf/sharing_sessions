<!DOCTYPE html>
<?php
include 'iredis.php';
session_start();
$redis = new iRedis();
$user_id = rand(10000, 99999);
$session_id = session_id();
$cookie_value = $session_id;
setcookie("shared_session_id", $cookie_value, time() + (86400 * 30), "/", "beng.io");
$_SESSION["secret"] = $user_id;
$redis->set("sharing_cookies_". $session_id, $user_id);
?>
<html>
<body>

<?php
if(!isset($_COOKIE["shared_session_id"])) {
    echo "Cookie named '" . "shared_session_id" . "' is not set!";
} else {
    echo "Cookie '" . "shared_session_id" . "' is set!<br>";
    echo "Value is: " . $_COOKIE["shared_session_id"];
}
?>

</body>
</html>