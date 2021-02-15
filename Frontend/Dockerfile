FROM ubuntu:18.04

RUN apt-get update && apt-get install -y curl gnupg apt-transport-https \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh \
    && bash nodesource_setup.sh \
    && apt-get update && apt-get install -y nodejs yarn nginx

WORKDIR /webapps/udi-frontend

COPY ./ /webapps/udi-frontend/

# Add image configuration and scripts
ADD run.sh /run.sh
ADD nginx.conf /etc/nginx/sites-enabled/
RUN chmod +x /run.sh

# Define default command.
CMD ["/run.sh"]
