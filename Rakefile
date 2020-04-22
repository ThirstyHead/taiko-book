task :html do
  sh 'asciidoctor -a stylesheet=styles.css -D dist src/book/book.adoc'
end

task :pdf do
  sh 'asciidoctor-pdf --source-dir=./src/book --destination-dir=./dist -a pdf-themesdir=./src/book/__theme -a pdf-theme=book ./src/book/book.adoc'
end
