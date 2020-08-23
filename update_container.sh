#!/bin/bash
docker rm $(docker stop $(docker ps -a -q --filter ancestor='osayamen/yamen-io'))
docker pull osayamen/yamen-io:latest
docker run -d -p 9000:9000 osayamen/yamen-io
