# README - How to use

This file provides you information on how to use the light module 'training-backend-js-magic' on any Magnolia DX Core 6.2 stand alone web-application and how to use it in a Maven based project.

## Stand alone sever/webapp

If you are running a stand alone server, for example using Magnolia's CLI jumpstart, follow these instructions.

### Needed JAR's

This module uses JAR/Java libraries that are not a part of the default Magnolia DX Core bundle.

You find the needed JAR files within this module in:
/training-backend-js-magic/_dev/**jars-to-use-manually**

Copy them into your webapp's library folder manually, example locations:

**Author** instance:
/magnolia-jumpstart/apache-tomcat/webapps/**magnoliaAuthor/WEB-INF/lib**

**Public** instance:
/magnolia-jumpstart/apache-tomcat/webapps/**magnoliaPublic/WEB-INF/lib**

After you added the libraries you need to restart the tomcat server.

### Sample content

You can import sample content manually into the 'Pages' App. Its recommended it to import the sample content onto the top level.

The location of the sample content to import is:
/training-backend-js-magic/_dev/**sample-content-to-import**

## Maven project

### Dependencies into POM file

In a Maven project you would add these **dependencies** into your **pom files**:

```xml
<dependency>
  <groupId>info.magnolia.javascript-models</groupId>
  <artifactId>magnolia-module-javascript-models</artifactId>
  <version>2.0</version>
</dependency>
<dependency>
  <groupId>info.magnolia.backendlive</groupId>
  <artifactId>backend-live-ui</artifactId>
  <version>1.0</version>
</dependency>
<dependency>
  <groupId>info.magnolia.backendlive</groupId>
  <artifactId>backend-live-actions</artifactId>
  <version>1.0</version>
</dependency>
<dependency>
  <groupId>info.magnolia.backendlive</groupId>
  <artifactId>backend-live-availability</artifactId>
  <version>1.0.1</version>
</dependency>
<dependency>
  <groupId>info.magnolia.ui</groupId>
  <artifactId>magnolia-ui-framework-javascript</artifactId>
  <version>2.0.2</version>
</dependency>
```

### Sample content

Add the sample content files into a JAR module's '**mgnl-bootstrap-samples**' folder for auto importing the sample content.

The location of the sample content to copy is:
/training-backend-js-magic/_dev/**sample-content-to-import**