FROM ruby:2.3.7
RUN set -ex \
	&& apt-get update \
	&& apt-get install -y nodejs
RUN gem install bundler -v "~>2.0"
ENV BUNDLER_VERSION=2.0.1 

WORKDIR /usr/src/app

# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .
EXPOSE 3000
RUN rake db:setup
CMD rails server --port 3000 --binding 0.0.0.0
