# Sharing Cookies

a demo showing how to share sessions between NodeJS and PHP
PHP: [Click here](https://a.beng.io)
NodeJS: [Click here](https://b.beng.io)

1. PHP starts a session, generates a PHPSESSID
2. write PHPSESSID into cookies["shared_session_id"] and write session <-> user into Redis
3. NodeJS reads cookies["shared_session_id"]
4. Recover user_id from Redis
