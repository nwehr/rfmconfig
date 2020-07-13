FROM node:current

WORKDIR /app

COPY . .

RUN yarn install \
	&& yarn global add serve \
	&& yarn build

CMD serve -l 80 -s build