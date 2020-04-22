# Taiko Book

This books takes a very practical, code-first approach to 
solving common problems using Taiko, a browser-automation 
DSL.


## Building the book

This book was written in Asciidoctor. This project assumes 
that you have ruby and [bundler](https://bundler.io) installed.

To install all the dependencies please run

```
bundle install --path vendor/bundle
```

This installs all the required dependencies.

To generate pdf output in the `dist` folder run

```
bundle exec rake pdf
```

To generate html output in the `dist` folder run


```
bundle exec rake html
```
