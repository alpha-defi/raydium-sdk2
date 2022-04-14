#!/bin/sh
docker run -it --env-file=typesense/typesense.env -e "CONFIG=$(cat typesense/typesense_config.json | jq -r tostring)" typesense/docsearch-scraper