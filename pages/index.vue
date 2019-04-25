<template>
  <v-container fluid grid-list-lg>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <v-card class="vcard">
          <v-img src="/background1.jpg" aspect-ratio="2.75"></v-img>
          <v-card-title class="headline">FULL STACK DEVELOPER.</v-card-title>
          <v-card-actions class="justify-center">
            <v-btn color="info" to="/resume">Resume</v-btn>
            <v-btn color="info" to="/contact">Contact</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-timeline>
        <v-timeline-item color="teal" fill-dot right>
          <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text vcard">
              <v-card-title class="headline">Interests</v-card-title>
              <v-card-text>Front end (Angular, React & Vue), node.js, cloud based infrastructure and automation.</v-card-text>
              <v-card-text>Kubernetes, GCP, Azure, AWS</v-card-text>
            </v-card>
          </v-flex>
        </v-timeline-item>
        <v-timeline-item color="purple lighten-2" fill-dot left>
          <v-flex xs12>
            <v-card color="purple" class="white--text vcard">
              <v-card-title class="headline">Working knowledge</v-card-title>
              <v-card-text>Frontend - Angular, Karma, Jasmine, Jest, Webpack, JWT</v-card-text>
              <v-card-text>Backend - Node.js, Spring Boot, OAuth 2.0, TLS, MASSL, SAML, Junit, Mocha, Chai</v-card-text>
              <v-card-text>Tooling/Others - Docker, Kubernetes, Splunk, New Relic, Pager Duty, Bamboo, Jenkins, Apigee Edge, Shell scripting</v-card-text>
              <v-card-text>Cloud - PCF, AWS</v-card-text>
            </v-card>
          </v-flex>
        </v-timeline-item>
      </v-timeline>
    </v-layout>
  </v-container>
</template>
