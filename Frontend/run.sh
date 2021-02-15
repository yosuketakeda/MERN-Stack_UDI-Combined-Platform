#!/bin/bash

rm /etc/nginx/sites-enabled/default
/usr/sbin/nginx -g "daemon off;"
