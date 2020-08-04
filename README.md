# Let's Encrypt responder

This project will launch an HTTP server, which will respond to the
URL:

    /.well-known/acme-challenge/TOKEN

with the value from CONTENT.

Where TOKEN and CONTENT are ENV variables.

Port can be specified with the PORT environment variable, and
defaults 8080.

## Docker

Publicly available as the `jkirsteins/le-responder:latest` image.

    # curl http://localhost:8080/.well-known/acme-challenge/foo
    docker run \
        --rm \
        -e CONTENT=bar \
        -e TOKEN=foo \
        -p 8080:8080 \
        jkirsteins/le-responder:latest
