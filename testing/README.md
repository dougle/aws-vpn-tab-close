You can spin up a fake AWS auth page by running the following command from within this directory:

```commandline
docker run --rm -p 35001:80 $(docker build -q .)
```

You can then load [http://127.0.0.1:35001](http://127.0.0.1:35001) and check that the extension detects and closes it.

That page is the one AWS VPN Client served up to 5.4.x. Version 6.x serves a styled
success page instead, which is available at
[http://127.0.0.1:35001/v6.html](http://127.0.0.1:35001/v6.html) — both should be
detected and closed.
