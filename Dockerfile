FROM maven:3.8.1-openjdk-17 AS build
RUN mkdir -p workspace
WORKDIR workspace
COPY backend/pom.xml /workspace
COPY backend/src /workspace/src
COPY frontend /workspace/frontend   
RUN mvn -e -f pom.xml clean install -DskipTests=true

FROM openjdk:18-alpine
COPY --from=build /workspace/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]