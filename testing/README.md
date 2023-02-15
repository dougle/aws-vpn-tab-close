You can spin up a fake AWS auth page by running the following command from within this directory:

```commandline
docker run --rm -p 35001:80 $(docker build -q .)
```

You can then load [http://127.0.0.1:35001](http://127.0.0.1:35001) and check that the extension detects and closes it.