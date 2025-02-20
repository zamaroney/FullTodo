# Use Gradle 8.5 with JDK 21 for building
FROM gradle:8.5-jdk21 AS build
WORKDIR /app

# Copy the Gradle Wrapper files
COPY gradlew .
COPY gradle ./gradle
COPY build.gradle .
COPY settings.gradle .
COPY src ./src

RUN chmod +x ./gradlew

# Copy source code
COPY src ./src

# Clean and build the Spring Boot application using the Gradle Wrapper
RUN ./gradlew clean build --no-daemon

# Use OpenJDK 21 for running the app
FROM openjdk:21-jdk
WORKDIR /app

# Copy built JAR
COPY --from=build /app/build/libs/*.jar app.jar

# Expose the port your app runs on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]