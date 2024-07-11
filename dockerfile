FROM node:20

WORKDIR /usr/src/app
  
COPY *.json /usr/src/app

RUN npm ic
RUN npm ic @angular/cli

COPY . /usr/src/app

EXPOSE 4200

CMD ['ng','serve']
