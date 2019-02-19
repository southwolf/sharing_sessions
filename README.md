# Sharing Cookies

a demo showing how to share sessions between NodeJS and PHP

1. PHP starts a session, generates a PHPSESSID
2. write PHPSESSID into cookies and write session <-> user into Redis
3. NodeJS gets cookies
4. Recover user_id from Redis